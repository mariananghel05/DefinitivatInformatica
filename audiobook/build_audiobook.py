#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Pipeline audiobook — Definitivat Informatică & TIC
==================================================

Transformă scenarii text (scrise pentru ureche) în MP3-uri narate cu vocea
neural românească Emil (edge-tts), apoi le lipește cu ffmpeg în:
  - capitole individuale (output/capitole/)
  - secțiuni (output/sectiuni/)
  - audiobook complet (output/Definitivat-Informatica-AUDIOBOOK.mp3)

Format scenariu (.txt, UTF-8):
  ;;  comentariu (ignorat)
  @rate=-6%       directivă: setează ritmul de bază al fișierului
  @mode=emph      directivă: schimbă modul de livrare (normal|slow|emph|fast)
  @pause=900      directivă: inserează liniște de 900 ms aici
  text...         bloc de text (blocurile se separă prin linie goală)

Moduri de livrare (peste ritmul de bază):
  normal -> rate +0,  volume +0%
  slow   -> rate -12, volume +0%    (definiții, logica codului)
  emph   -> rate -5,  volume +18%   (idei-cheie, accent / intensitate)
  fast   -> rate +8,  volume +0%

Utilizare:
  python build_audiobook.py list                 # structura + durate estimate
  python build_audiobook.py synth                # generează tot
  python build_audiobook.py synth --section 1-programa
  python build_audiobook.py synth --only 2-stiintific/01-algoritmi
"""

import argparse
import asyncio
import hashlib
import re
import subprocess
import sys
from pathlib import Path

import edge_tts

# Consola Windows e adesea cp1252 — forțăm UTF-8 ca să putem afișa diacritice.
for _stream in (sys.stdout, sys.stderr):
    try:
        _stream.reconfigure(encoding="utf-8")
    except (AttributeError, ValueError):
        pass

# --------------------------------------------------------------------------- #
# Configurare
# --------------------------------------------------------------------------- #
ROOT = Path(__file__).resolve().parent
SCRIPTS_DIR = ROOT / "scripts"
CACHE_DIR = ROOT / "cache"
OUT_DIR = ROOT / "output"
OUT_CHAPTERS = OUT_DIR / "capitole"
OUT_SECTIONS = OUT_DIR / "sectiuni"
FULL_OUT = OUT_DIR / "Definitivat-Informatica-AUDIOBOOK.mp3"

VOICE = "ro-RO-EmilNeural"
DEFAULT_RATE = 0            # procent
DEFAULT_BLOCK_PAUSE = 300   # ms după fiecare bloc de text
SAMPLE_RATE = 24000         # edge-tts -> 24 kHz mono
BITRATE = "80k"
CONCURRENCY = 3             # cereri edge-tts simultane (endpoint gratuit -> mic)
MAX_RETRY = 4

MODES = {
    "normal": (0, 0, 280),
    "slow":   (-12, 0, 350),
    "emph":   (-5, 18, 420),
    "fast":   (8, 0, 240),
}

# --------------------------------------------------------------------------- #
# Parsare scenariu -> listă de „segmente”
#   segment text:    {"kind":"tts","text":..,"rate":"-6%","volume":"+18%","pause":300}
#   segment liniște: {"kind":"silence","ms":900}
# --------------------------------------------------------------------------- #
def normalize(text: str) -> str:
    text = text.replace("C++", "C plus plus")
    text = re.sub(r"[ \t]+", " ", text)
    return text.strip()


def parse_script(path: Path):
    base_rate = DEFAULT_RATE
    mode = "normal"
    segments = []
    buf = []

    def flush():
        if not buf:
            return
        raw = " ".join(line.strip() for line in buf).strip()
        buf.clear()
        if not raw:
            return
        rate_delta, vol, pause = MODES[mode]
        rate = base_rate + rate_delta
        segments.append({
            "kind": "tts",
            "text": normalize(raw),
            "rate": f"{rate:+d}%",
            "volume": f"{vol:+d}%",
            "pause": pause,
        })

    for line in path.read_text(encoding="utf-8").splitlines():
        s = line.strip()
        if s.startswith(";;"):
            continue
        if s.startswith("@"):
            flush()
            m = re.match(r"@(\w+)\s*=?\s*(.*)", s)
            if not m:
                continue
            key, val = m.group(1), m.group(2).strip()
            if key == "rate":
                base_rate = int(val.replace("%", "").replace("+", ""))
            elif key == "mode":
                if val in MODES:
                    mode = val
            elif key == "pause":
                segments.append({"kind": "silence", "ms": int(val)})
            continue
        if s == "":
            flush()
        else:
            buf.append(line)
    flush()
    return segments


def discover():
    """Returnează [(section_name, [(chapter_stem, path), ...]), ...] în ordine."""
    sections = []
    for sec in sorted(p for p in SCRIPTS_DIR.iterdir() if p.is_dir()):
        chapters = sorted(sec.glob("*.txt"))
        if chapters:
            sections.append((sec.name, [(c.stem, c) for c in chapters]))
    return sections


# --------------------------------------------------------------------------- #
# Sinteză cu edge-tts (cu cache pe hash)
# --------------------------------------------------------------------------- #
def seg_hash(seg):
    h = hashlib.sha1()
    h.update(f"{VOICE}|{seg['rate']}|{seg['volume']}|{seg['text']}".encode("utf-8"))
    return h.hexdigest()[:16]


async def synth_one(seg, sem):
    out = CACHE_DIR / f"tts_{seg_hash(seg)}.mp3"
    if out.exists() and out.stat().st_size > 0:
        return out
    async with sem:
        for attempt in range(1, MAX_RETRY + 1):
            try:
                comm = edge_tts.Communicate(
                    seg["text"], VOICE, rate=seg["rate"], volume=seg["volume"]
                )
                await comm.save(str(out))
                if out.exists() and out.stat().st_size > 0:
                    return out
                raise RuntimeError("fișier gol")
            except Exception as e:  # noqa: BLE001
                if out.exists():
                    out.unlink(missing_ok=True)
                if attempt == MAX_RETRY:
                    raise
                await asyncio.sleep(1.5 * attempt)
    return out


def silence_file(ms: int) -> Path:
    out = CACHE_DIR / f"sil_{ms}.mp3"
    if out.exists() and out.stat().st_size > 0:
        return out
    subprocess.run(
        ["ffmpeg", "-y", "-f", "lavfi", "-i",
         f"anullsrc=r={SAMPLE_RATE}:cl=mono", "-t", f"{ms/1000:.3f}",
         "-c:a", "libmp3lame", "-b:a", BITRATE, str(out)],
        check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
    )
    return out


async def render_chapter(stem, path, sem):
    segments = parse_script(path)
    # pre-sintetizează toate blocurile tts (concurent), păstrând ordinea
    tts_tasks = {}
    for i, seg in enumerate(segments):
        if seg["kind"] == "tts":
            tts_tasks[i] = asyncio.create_task(synth_one(seg, sem))
    parts = []  # listă de (Path)
    for i, seg in enumerate(segments):
        if seg["kind"] == "silence":
            parts.append(silence_file(seg["ms"]))
        else:
            parts.append(await tts_tasks[i])
            if seg["pause"] > 0:
                parts.append(silence_file(seg["pause"]))
    return concat(parts, OUT_CHAPTERS / f"{path.parent.name}__{stem}.mp3")


def concat(parts, out: Path) -> Path:
    out.parent.mkdir(parents=True, exist_ok=True)
    listfile = out.with_suffix(".txt")
    listfile.write_text(
        "".join(f"file '{p.as_posix()}'\n" for p in parts), encoding="utf-8"
    )
    subprocess.run(
        ["ffmpeg", "-y", "-f", "concat", "-safe", "0", "-i", str(listfile),
         "-c:a", "libmp3lame", "-b:a", BITRATE, str(out)],
        check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
    )
    listfile.unlink(missing_ok=True)
    return out


def duration(path: Path) -> float:
    r = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration",
         "-of", "default=nw=1:nk=1", str(path)],
        capture_output=True, text=True,
    )
    try:
        return float(r.stdout.strip())
    except ValueError:
        return 0.0


def fmt(sec: float) -> str:
    m, s = divmod(int(sec), 60)
    return f"{m}:{s:02d}"


# --------------------------------------------------------------------------- #
# Comenzi
# --------------------------------------------------------------------------- #
async def cmd_synth(args):
    for d in (CACHE_DIR, OUT_CHAPTERS, OUT_SECTIONS):
        d.mkdir(parents=True, exist_ok=True)
    sem = asyncio.Semaphore(CONCURRENCY)
    sections = discover()
    section_files = []
    for sec_name, chapters in sections:
        if args.section and sec_name != args.section:
            continue
        chap_files = []
        for stem, path in chapters:
            rel = f"{sec_name}/{stem}"
            if args.only and args.only != rel:
                continue
            print(f"  · {rel} ...", flush=True)
            chap = await render_chapter(stem, path, sem)
            print(f"    -> {chap.name}  ({fmt(duration(chap))})", flush=True)
            chap_files.append(chap)
        if chap_files and not args.only:
            sec_out = concat(chap_files, OUT_SECTIONS / f"{sec_name}.mp3")
            section_files.append(sec_out)
            print(f"  == secțiune: {sec_out.name}  ({fmt(duration(sec_out))})\n", flush=True)
    if section_files and not args.section and not args.only:
        full = concat(section_files, FULL_OUT)
        print(f"\nAUDIOBOOK COMPLET: {full}  ({fmt(duration(full))})")


def cmd_list(args):
    total_words = 0
    for sec_name, chapters in discover():
        print(f"\n[{sec_name}]")
        for stem, path in chapters:
            segs = parse_script(path)
            words = sum(len(s["text"].split()) for s in segs if s["kind"] == "tts")
            total_words += words
            print(f"  {stem:<34} {words:>5} cuvinte  (~{fmt(words/2.4)})")
    print(f"\nTOTAL: {total_words} cuvinte  (~{fmt(total_words/2.4)} la ~144 cuv/min)")


def main():
    ap = argparse.ArgumentParser(description="Pipeline audiobook Definitivat")
    sub = ap.add_subparsers(dest="cmd", required=True)
    sp = sub.add_parser("synth", help="generează audio")
    sp.add_argument("--section", help="doar o secțiune (ex: 2-stiintific)")
    sp.add_argument("--only", help="doar un capitol (ex: 2-stiintific/01-algoritmi)")
    sub.add_parser("list", help="structura și duratele estimate")
    args = ap.parse_args()
    if args.cmd == "list":
        cmd_list(args)
    else:
        asyncio.run(cmd_synth(args))


if __name__ == "__main__":
    main()

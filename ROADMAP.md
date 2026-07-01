# ROADMAP — Curs Definitivat Informatică și TIC

Jurnal de dezvoltare și checklist de progres pentru site-ul static (VitePress) care acoperă
programa examenului național de definitivare în învățământ, disciplina **Informatică și Tehnologia
Informației**.

> Legendă: `[x]` finalizat · `[~]` în lucru · `[ ]` de făcut

---

## Pasul 0 — Documentația de dezvoltare
- [x] `ROADMAP.md` — pașii de dezvoltare + checklist (acest fișier)
- [x] `STRUCTURA-CONTINUT.md` — arhitectura de conținut + șablonul per-temă
- [x] `SURSE.md` — surse oficiale reale + bibliografia din programă

## Pasul 1 — Schelet proiect VitePress
- [x] `package.json` cu scripturile `docs:dev` / `docs:build` / `docs:preview`
- [x] `npm install` (vitepress)
- [x] `docs/.vitepress/config.mts` — limbă ro-RO, nav, sidebar, căutare locală, etichete în română
- [x] `docs/.vitepress/theme/index.ts` + `custom.css` — identitate vizuală, ajustări dark/light
- [x] `.gitignore`
- [x] `docs/index.md` — pagina principală (hero + module)

## Pasul 2 — Tematica științifică (10 teme)
- [x] 01 — Algoritmi
- [x] 02 — Limbaje de programare (C++)
- [x] 03 — Metode de programare
- [x] 04 — Alocarea dinamică a memoriei
- [x] 05 — Teoria grafurilor
- [x] 06 — Baze de date
- [x] 07 — Arhitectura sistemelor de calcul
- [x] 08 — Sisteme de operare
- [x] 09 — Aplicații și programe specializate
- [x] 10 — Rețele de calculatoare

## Pasul 3 — Tematica de metodică (3 teme)
- [x] 01 — Proiectarea, organizarea și desfășurarea activității didactice
- [x] 02 — Strategii didactice (predare–învățare–evaluare)
- [x] 03 — Evaluarea randamentului școlar

## Pasul 4 — Pagini transversale
- [x] `despre-examen.md` — metodologie, structură probă, notă minimă, calendar, surse
- [x] `competente-cadru.md` — competențele cadrului didactic (Secțiunea B)
- [x] `competente-scolare.md` — competențele din programele școlare: **liste complete** de competențe
      generale + specifice (gimnaziu V–VIII, liceu Informatică IX–X, extrase din PDF-urile oficiale) +
      explicarea codificării + cele citate în subiecte
- [x] `bibliografie.md` — bibliografie oficială + surse curente

## Pasul 5 — Modele de subiecte
> Aliniate la **structura reală** confirmată din subiecte oficiale (Subiect I 60p / Subiect II 30p / 10 oficiu).
- [x] Varianta 1 — **Model oficial 24 iulie 2024** (rezolvare integrală + barem oficial)
- [x] Varianta 2 — **Varianta oficială 8 iulie 2025** (rezolvare integrală + barem oficial)
- [x] Varianta 3 — variantă de antrenament în format real (rezolvare + barem orientativ)

## Pasul 5b — Aliniere la subiectele oficiale (revizuire)
- [x] Corectat structura examenului în `despre-examen.md` (Subiect I 60p / Subiect II 30p / 10 oficiu)
- [x] Actualizat `subiecte/index.md` cu tiparul cerințelor (I.1–I.4, II.1–II.2)
- [x] Adăugate subiectele oficiale ca referință în `SURSE.md`

## Pasul 6 — Verificare
- [x] `npm run docs:build` fără erori (inclusiv dead links) — 23 pagini generate în `dist/`
- [ ] `npm run docs:dev` — navigare, dark/light, responsive, căutare (verificare manuală în browser, de către utilizator)
- [~] Exemple C++: **nu există compilator** (`g++`/`clang++`/`cl`) pe sistem → verificare prin **revizuire manuală**;
      programele complete din `subiecte/` includ toate header-ele necesare (`-std=c++17`)
- [x] Confruntare referințe metodice/legislative cu documentele în vigoare (Legea 198/2023, OMEC 5434/2020)

---

## Pasul 7 — Extindere și aprofundare
- [x] Adăugat competențele specifice pentru **clasele a XI-a și a XII-a** (ciclul superior) în `competente-scolare.md`
- [x] Restructurat liceul pe **două cicluri** (IX–X: 5 comp. generale; XI–XII: 3 comp. generale)
- [x] Aprofundat **Teoria grafurilor**: definiții explicate pentru nod/muchie/arc/grad/lanț/drum/ciclu etc. + exemplu de lucru; explicație Dijkstra pas cu pas
- [x] Aprofundat **Algoritmi**: „cum funcționează" fiecare metodă de sortare
- [x] Adăugat **„Corelare cu programa școlară"** (coduri pe clase) la toate cele 10 teme științifice
- [x] Creat `harta-materiei.md` — cuprinsul complet al programei cu linkuri la fiecare subiect + intrare în meniu („Programa")

## Pasul 8 — Revizuire conținut + pagina interactivă „Carduri"
- [x] Re-verificat cadrul legal/programa în vigoare (CONFIRMAT: Legea 198/2023 — în vigoare în 2026,
      modificată de Legea 12/2026 și O.U.G. 28/2026; metodologie OMEC 5434/2020; calendar 2026 = Ordin
      5731/2025, **proba scrisă 14 iulie 2026**; programe școlare OMEN 3393/2017 și OMECI 5099/2009)
- [x] Precizări în `SURSE.md` și `despre-examen.md`: data probei 2026, taxa de 300 lei după 3 susțineri,
      mențiunea modificărilor Legii 198/2023
- [x] `stiintific/01-algoritmi.md`: rescrise exemplele de cod cu **denumiri intuitive** (`suma`, `numar`,
      `stanga`/`dreapta`/`mijloc`, `pozMinim`…); prescurtări doar consacrate, cu comentariu (`cmmdc`, `cmmmc`)
- [x] `stiintific/01-algoritmi.md`: secțiune nouă **1.9 Specificitatea limbajului C++** — funcții de
      bibliotecă uzuale (atoi/stoi, strncpy/strstr, isdigit/toupper, substr/find, sort/max/min) cu semnături + exemple
- [x] Pagina **`carduri.md`** + componenta `theme/components/Flashcards.vue` + bancul `theme/cards-data.js`:
      3 moduri (grilă / +text cu auto-evaluare / +cod), cod C++ rulat online prin **Wandbox** (CORS, fără cheie)
- [x] Înregistrată componenta global în `theme/index.ts` (`enhanceApp`); intrare „Carduri" în nav + pe pagina principală
- [x] Banc extins cu **tema „Competențe"** (25 întrebări: 16 grilă + 9 text) — competențe generale (gimnaziu,
      liceu IX–X și XI–XII) și specifice (cu text oficial), inclusiv decodarea codului `X.Y`
- [x] Adăugat **filtru pe temă** în ecranul de start (chips + contor de întrebări per mod)
- [x] `npm run docs:build` fără erori; ieșirile problemelor de cod validate pe compilatorul real

## Convenții de lucru
- Fiecare temă științifică respectă **șablonul unic**: `Teorie` → `Competențe vizate` → `Abordare metodică`
  (vezi `STRUCTURA-CONTINUT.md`).
- Cod în **C++** modern (`-std=c++17`), în blocuri evidențiate.
- Terminologie românească de specialitate; cadru legal/metodologic **în vigoare** (vezi `SURSE.md`).
- Nu se inventează surse — se folosesc cele oficiale și bibliografia din programă.

## Comenzi utile
```bash
npm install          # instalează dependențele
npm run docs:dev     # server local de dezvoltare (http://localhost:5173)
npm run docs:build   # generează site-ul static în docs/.vitepress/dist
npm run docs:preview # previzualizează varianta statică generată
```

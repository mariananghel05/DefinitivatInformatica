# Prelucrarea secvențelor de valori

> **Clasa a IX-a · Informatică.** Tema de gimnaziu (șiruri de valori), reluată la nivel de liceu:
> prelucrări combinate, poziții, secvențe cu proprietăți. Competențe specifice vizate: 2.2, 3.2, 3.3.

## 1. Lecția (teorie)

**Recapitulare-fulger a instrumentelor** (din clasa a VIII-a, acum „standard profesional"): contorul,
acumulatorul, campionul (min/max cu inițializare din prima valoare), fanionul (există/toate).

**Nivelul nou — prelucrări care țin minte contextul:**

- **poziția** elementului (a câta valoare citită e maximul?) — o variabilă-pereche a campionului;
- **valoarea anterioară** — compararea fiecărei valori cu precedenta: șirul e crescător? câte perechi
  de vecini egali există?

```text
citește n
citește x
anterior ← x
crescator ← adevărat
┌pentru i ← 2, n execută
│   citește x
│   ┌dacă x < anterior atunci
│   │   crescator ← fals
│   └■
│   anterior ← x
└■
```

- **secvențe maximale** (introductiv): cea mai lungă „serie" de valori pare consecutive — un contor
  care crește pe proprietate și se **resetează** la ruperea ei, plus un maxim al contorului.

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Inventarul uneltelor** *(sistematizare prin tabel)*
Clasa construiește tabelul: problemă-tip → unealta potrivită (numărare → contor; „cel mai…" → campion;
„toate/există" → fanion; „vecini" → anterior). *De ce așa:* recapitularea ca **hartă de decizie**
transformă cunoștințele disparate din gimnaziu în instrumentar conștient — exact ce cere rezolvarea de
probleme noi.

**Exercițiul 2 — Șirul crescător** *(exercițiu dirijat cu subtilitate)*
Algoritmul de mai sus, urmărit pe două șiruri; discuția fină: `<` sau `≤`? (strict crescător vs.
nedescrescător — vocabular de barem). *De ce așa:* tehnica „valorii anterioare" e noutatea lecției;
nuanța strict/nestrict e diferența dintre punctaj întreg și jumătate la examen.

**Exercițiul 3 — Seria maximă de pare** *(problematizare pe tablă)*
„Cea mai lungă secvență de valori pare consecutive" — elevii propun; se ajunge la contorul cu resetare
+ maximul lui. Urmărire pe `2 4 7 6 8 10 3`. *De ce așa:* combinarea a două unelte (contor + campion)
pe o problemă nouă este chiar saltul de la reproducere la **rezolvare** — obiectivul clasei a IX-a.

**Exercițiul 4 — Set de probleme în context** *(muncă independentă)*
Temperaturi zilnice: 1) media; 2) a câta zi a fost cea mai caldă; 3) au existat 3 zile consecutive de
îngheț?; 4) câte zile au fost mai calde decât precedenta? *De ce așa:* toate uneltele pe un context
unic, realist; formulările „a câta", „consecutive" antrenează citirea atentă a enunțului.

## 3. Particularități

- **Actualizarea lui `anterior` la finalul buclei** — uitarea ei e greșeala tipică a tehnicii; tabelul
  de execuție o prinde imediat.
- **Resetarea contorului** la secvențe: elevii uită fie resetarea, fie actualizarea maximului **înainte**
  de resetare — ordinea operațiilor se discută explicit pe contraexemplu.
- **Diferența față de gimnaziu** e de așteptare, nu de mecanism: enunțurile combină acum două-trei
  unelte; antrenamentul de „descompunere a cerinței" e partea metodică grea.
- **Evaluare potrivită:** o problemă cu poziție + una cu vecini + una cu secvență; urmărirea cu tabel
  rămâne obligatorie la cel puțin una.

## Legături

- Teoria de examen: [Algoritmi — prelucrarea secvențelor](/stiintific/01-algoritmi).
- Fundamentul de gimnaziu: [clasa a VIII-a — șiruri de valori](/lectii/viii-06-siruri-citire-parcurgere)
  și [minim/maxim](/lectii/viii-08-minim-maxim).
- Lecția anterioară: [Divizibilitate; primalitate](/lectii/ix-06-divizibilitate-primalitate) ·
  Lecția următoare: [Șiruri recurente (Fibonacci)](/lectii/ix-08-siruri-recurente).

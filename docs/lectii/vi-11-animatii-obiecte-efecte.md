# Animații grafice — editarea obiectelor și efecte (mișcare, temporizare, sunet)

> **Clasa a VI-a · domeniul TIC · modulul 2.** Continuarea lecției de animații: proprietățile
> obiectelor animate și efectele care dau viață scenariului. Competențe specifice vizate: 1.2, 3.2.

## 1. Lecția (teorie)

**Proprietățile obiectelor animate** — ce se poate schimba **în timpul** animației:

| Proprietate | În Scratch | Efectul vizual |
|---|---|---|
| **dimensiunea** | „setează mărimea la …%" | creștere/micșorare (apropiere-depărtare) |
| **rotirea** | „rotește-te … grade" | învârtire, înclinare |
| **transparența** | efectul „fantomă" | apariție/dispariție treptată |
| **poziția** | „glisează … / mergi la x, y" | deplasare lină sau salt |
| **costumul** | „schimbă costumul" | „cadrele" mișcării (mers, zbor) |

**Efectele de mișcare și temporizarea:**
- mișcarea **lină** = pași mici repetați sau blocul „glisează în … secunde";
- **temporizarea** = pauzele („așteaptă … secunde") care sincronizează personajele și dau ritm;
- **schimbarea treptată** = o proprietate modificată **puțin, în buclă** (transparența +5, de 20 de ori)
  — aici structura repetitivă din lecțiile de algoritmi devine unealtă de animație!

**Efectele sonore:** sunet pornit la un moment-cheie (impact, aplauze), sincronizat cu acțiunea prin
temporizare; volumul ca proprietate.

**Testarea și depanarea** animației: rulează → observă ce nu se sincronizează → ajustează pauzele/pașii
— vocabularul de depanare se exersează pe un caz în care „eroarea" se **vede**.

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Apariția fantomatică** *(exercițiu dirijat cu buclă)*
Personajul apare treptat: transparență 100 → 0 în pași de 5, cu „repetă de 20 de ori". *De ce așa:*
efectul spectaculos se obține **doar** cu repetiție — cea mai convingătoare demonstrație că structurile
algoritmice servesc creativitatea; puntea explicită TIC ↔ algoritmi cerută de programă.

**Exercițiul 2 — Duetul sincronizat** *(problematizare de temporizare)*
Două personaje trebuie să se „salute" pe rând (unul vorbește, celălalt răspunde, apoi se înclină
simultan). Elevii ajustează pauzele până iese. *De ce așa:* sincronizarea e problema tehnică centrală a
animației; rezolvarea prin temporizare (încearcă-observă-ajustează) e chiar metoda profesională la acest
nivel.

**Exercițiul 3 — Sunetul la momentul potrivit** *(exercițiu de precizie)*
O minge cade și „bum!" — sunetul exact la atingerea solului (nu înainte, nu după). *De ce așa:*
sincronizarea audio cere înțelegerea ordinii și duratei pașilor; nepotrivirea se aude — feedback
imediat fără profesor.

**Exercițiul 4 — „Repară animația sacadată"** *(depanare dirijată)*
O animație dată se mișcă sacadat și desincronizat (pași mari, pauze lipsă); elevii o fac fluidă.
*De ce așa:* depanarea pe criterii estetice (fluid/sacadat) antrenează aceleași reflexe ca depanarea
logică, într-un context motivant.

## 3. Particularități

- **Efectele se „consumă” repede:** elevii vor toate efectele în prima animație — bugetul („alege 2
  proprietăți animate, fă-le bine") păstrează calitatea; regula revine de la prezentări.
- **Resetarea proprietăților:** după efectul „fantomă", personajul rămâne invizibil la următoarea
  rulare! Scriptul de inițializare (mărime/transparență/poziție la valorile de start) e lecția ascunsă
  — echivalentul inițializării variabilelor.
- **Transparența și rotirea** au valori care „se adună" — sursă de confuzie între „setează" și
  „modifică cu"; distincția (absolut vs. relativ) merită un minut explicit.
- **Evaluare potrivită:** animația cu cerințe bifabile (un efect treptat cu buclă, o sincronizare de
  două personaje, un sunet la moment precis) + scriptul de inițializare prezent — grilă practică.

## Legături

- Prima parte a temei: [Animații grafice — scenariu și cadre](/lectii/vi-04-animatii-grafice).
- Structura repetitivă folosită la efecte: [Structura repetitivă cu contor](/lectii/vi-05-structura-repetitiva-contor).
- Tema de examen: [Aplicații specializate](/stiintific/09-aplicatii-specializate).

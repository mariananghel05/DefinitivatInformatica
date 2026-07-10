# Limbajul C++ — elemente de bază (consolidare)

> **Clasa a X-a · Informatică.** Anul implementării: pseudocodul clasei a IX-a devine sistematic
> **program C++**. Prima lecție aliniază toată clasa la același nivel de limbaj.
> Competențe specifice vizate: 1.1, 1.2 (OMECI 5099/2009).

## 1. Lecția (teorie)

**Sistematizarea limbajului** — tot ce s-a folosit „din mers" până acum, pus în ordine:

- **structura programului**: directive (`#include`), `main`, instrucțiuni, comentarii (`//`);
- **vocabularul**: cuvinte-cheie, identificatori (reguli de numire), separatori;
- **tipuri simple**: `int`, `long long` (când depășim ~2,1 miliarde!), `double`, `char`, `bool` —
  cu dimensiuni și limite;
- **constante și variabile**: declarare, inițializare, `const`;
- **expresii**: prioritatea operatorilor, conversii implicite (`int`/`double` — sursa împărțirii
  întregi), operatorul de atribuire compusă (`+=`, `*=`), incrementarea (`++`);
- **citire/scriere**: `cin`/`cout`, formatare minimă a afișării.

**Corespondența pseudocod ↔ C++** — tabelul de perete al anului:

| Pseudocod | C++ |
|---|---|
| `citește n` / `scrie n` | `cin >> n;` / `cout << n;` |
| `x ← expresie` | `x = expresie;` |
| `a div b` / `a mod b` | `a / b` / `a % b` (pe întregi) |
| `[x]` (parte întreagă) | conversia `(int)x` sau împărțirea întreagă |

**Mediul de lucru** (Code::Blocks sau echivalent): proiect, compilare, rulare, mesaje de eroare —
recapitulate ca rutină profesională, nu ca noutate.

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Traducerea de aliniere** *(diagnoză + exercițiu)*
Trei pseudocoduri din clasa a IX-a (suma cifrelor, Euclid, min/max) traduse în C++, individual.
*De ce așa:* servește simultan ca **diagnoză** (cine ce a reținut) și ca mesaj al anului: „pseudocodul
și C++ sunt același gând în două scrieri".

**Exercițiul 2 — „Vânătoarea de limite"** *(experiment cu tipuri)*
Programul care înmulțește două numere „mari" în `int` (rezultat absurd), apoi în `long long` (corect).
*De ce așa:* depășirea trebuie **văzută** o dată — e cel mai frecvent motiv de „50% din punctaj" la
probleme corecte algoritmic; regula practică: sume/produse mari → `long long`.

**Exercițiul 3 — Stilul de cod** *(atelier de lizibilitate)*
Un program corect dar ilizibil (nume `a1, a2, zz`, fără indentare) se „traduce" în cod curat.
*De ce așa:* clasa a X-a e momentul instaurării standardului: nume sugestive, indentare, un comentariu
pe idee — cerințe care apoi intră în grila oricărei evaluări.

## 3. Particularități

- **Eterogenitatea maximă e acum:** cei de la intensiv/pasionații vs. cei care „au uitat tot" —
  exercițiul 1 dă harta reală; grupele de lucru mixte (un avansat + un începător) funcționează dacă
  rolurile sunt clare (navigatorul explică, pilotul tastează).
- **Depășirea și împărțirea întreagă** rămân capcanele nr. 1 și 2 la bacalaureat — ambele au exercițiu
  dedicat chiar în prima lecție a anului, deliberat.
- **Evaluare potrivită:** test de aliniere scurt (traduceri + predicții de expresii), anunțat ca
  diagnostic — nota contează puțin, harta clasei contează mult.

## Legături

- Teoria de examen: [Limbaje de programare](/stiintific/02-limbaje-programare) (secțiunile 1.1–1.3 și
  capcanele numerice).
- Lecția următoare: [Structurile de control în C++](/lectii/x-02-structuri-control) ·
  Seria clasei: [clasa a X-a](/lectii/#clasa-a-x-a).

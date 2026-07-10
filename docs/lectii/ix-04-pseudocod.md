# Pseudocodul — convenții și structurile de control

> **Clasa a IX-a · Informatică.** Limbajul oficial al algoritmicii de liceu (și al subiectelor de
> bacalaureat): pseudocodul complet, cu toate structurile. Competențe specifice vizate: 3.1, 3.2.

## 1. Lecția (teorie)

**Convențiile pseudocodului** (stilul folosit la bacalaureat):

```text
citește n (număr natural)
p ← 1                          ▍atribuirea
┌cât timp n > 1 execută        ▍repetitivă cu test inițial
│  p ← p * n
│  n ← n - 1
└■
scrie p
```

**Toate structurile, sistematic:**

| Structura | Pseudocod | Observația-cheie |
|---|---|---|
| liniară | `citește`, `scrie`, `←` | se execută o dată, în ordine |
| alternativă | `dacă … atunci … altfel …` | ramuri exclusive |
| repetitivă cu test inițial | `cât timp c execută` | poate să nu se execute deloc |
| repetitivă cu test final | `repetă … până când c` | se execută **cel puțin o dată**; se oprește când c devine **adevărată** |
| repetitivă cu contor | `pentru i ← a, b execută` | număr cunoscut de pași |

**Subtilitatea de barem** — diferența dintre `cât timp` (continuă cât e **adevărată**) și
`până când` (se oprește când devine **adevărată**): aceeași buclă are condiții **negate** una față de
cealaltă. Transformările între structuri (orice `pentru` e un `cât timp` deghizat) se demonstrează.

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Urmărirea cu tabel, ca la examen** *(exercițiu dirijat)*
Pseudocodul factorialului, executat pentru n = 4, cu tabelul complet al valorilor. Apoi întrebarea de
tip bacalaureat: „ce valoare trebuie citită pentru ca rezultatul să fie 120?". *De ce așa:* formatul
subiectului real, exersat de la prima lecție de pseudocod — inclusiv întrebarea „inversă", care cere
înțelegere, nu doar execuție.

**Exercițiul 2 — Traducerea `cât timp` ↔ `până când`** *(exercițiu de echivalență)*
Aceeași buclă scrisă cu ambele structuri — ce se întâmplă cu condiția? (se neagă!). *De ce așa:*
transformarea structurilor repetitive este cerință explicită la examene; negarea condiției leagă direct
de De Morgan (lecția anterioară).

**Exercițiul 3 — „Ce face algoritmul?"** *(problematizare — citire globală)*
Un pseudocod necunoscut (numără cifrele pare ale unui număr); elevii îl execută pe 2–3 exemple și
formulează **în cuvinte** ce face. *De ce așa:* itemul „precizați ce afișează / ce calculează" cere
saltul de la execuția mecanică la înțelegerea globală — cel mai greu pas, antrenat explicit.

**Exercițiul 4 — Scrierea din enunț** *(producție individuală)*
Pseudocod pentru: suma cifrelor unui număr; câte dintre n numere citite sunt de trecere (≥ 5).
*De ce așa:* producția integrează structurile pe problemele-tipar ale anului; ambele revin în lecțiile
de algoritmi elementari — pregătirea terenului.

## 3. Particularități

- **Pseudocodul de la bac** are convenții precise (`←`, `[a]` pentru parte întreagă, structura grafică
  a blocurilor) — se predau **exact** acele convenții, nu variante personale; elevii le vor reciti în
  subiecte oficiale.
- **Greșeala tipică:** condiția lui `până când` gândită ca la `cât timp` — bucle care se opresc invers;
  exercițiul 2 e antidotul direct.
- **„De ce pseudocod, dacă știm C++?"** — răspuns onest: subiectele de examen sunt în pseudocod;
  gândirea fără compilator e mai rapidă la schiță; iar traducerea pseudocod → C++ devine mecanică
  (lecțiile următoare o exersează constant).
- **Evaluare potrivită:** trio-ul standard — urmărire cu tabel + întrebare inversă + transformare de
  structură repetitivă; exact anatomia subiectului I de bacalaureat.

## Legături

- Teoria de examen: [Algoritmi — reprezentarea algoritmilor](/stiintific/01-algoritmi).
- Introducerea de gimnaziu: [clasa a VI-a — pseudocodul](/lectii/vi-08-pseudocod).
- Lecția anterioară: [Date și operații](/lectii/ix-03-date-operatii) ·
  Lecția următoare: [Prelucrarea cifrelor unui număr](/lectii/ix-05-cifrele-unui-numar).

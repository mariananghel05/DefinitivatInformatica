# Șiruri recurente. Fibonacci

> **Clasa a IX-a · Informatică.** Șiruri în care fiecare termen se construiește din precedenții —
> cu vedeta lor, șirul lui Fibonacci. Competențe specifice vizate: 2.2, 3.2, 3.3.

## 1. Lecția (teorie)

**Șirul recurent** = șir definit prin: **termeni inițiali** + **regula** de obținere a termenului
curent din precedenții. Matematica îl scrie cu indici; informatica îl calculează **fără a memora tot
șirul** — doar ultimii termeni necesari.

**Șirul lui Fibonacci:** 1, 1, 2, 3, 5, 8, 13, … (`f₁ = f₂ = 1`, `fₙ = fₙ₋₁ + fₙ₋₂`). Calculul
termenului n cu **trei variabile „care alunecă"**:

```text
a ← 1                          ▍penultimul
b ← 1                          ▍ultimul
┌pentru i ← 3, n execută
│   c ← a + b                  ▍termenul nou
│   a ← b                      ▍alunecarea:
│   b ← c                      ▍  (a, b) devin ultimii doi
└■
scrie b
```

**Ideea de reținut** (formulată explicit): nu păstrăm tot șirul — păstrăm o „fereastră" cât cere
recurența (aici: 2 termeni). Aceeași schemă rezolvă orice recurență de forma dată.

**Alte recurențe lucrate:** termenul general prin adunare repetată (`aₙ = aₙ₋₁ + r` — progresia
aritmetică „calculată"), recurențe cu condiții (șirul Collatz — n par → n/2, impar → 3n+1 — excelent
pentru fascinație).

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Alunecarea pe tabel** *(exercițiu dirijat)*
Fibonacci pentru n = 7, cu tabelul (`i`, `a`, `b`, `c`) — se vede „fereastra" mișcându-se.
*De ce așa:* rotația `c ← a+b; a ← b; b ← c` este idiomul lecției; **ordinea** celor trei atribuiri e
tot secretul — tabelul o demonstrează (și arată de ce ordinea inversă strică tot).

**Exercițiul 2 — „De ce nu merge invers?"** *(analiza erorii)*
Aceleași trei atribuiri în ordine greșită (`a ← b; b ← c; c ← a+b`) — urmărire și diagnostic.
*De ce așa:* eroarea de ordine la atribuiri în lanț e subtilă și frecventă; înțeleasă aici, pe trei
variabile, previne erori la orice algoritm cu „stare care alunecă".

**Exercițiul 3 — Collatz, fascinația** *(explorare — IAC)*
Programul care afișează traseul lui n până la 1; elevii caută numărul sub 100 cu traseul cel mai lung.
*De ce așa:* o problemă **deschisă** (conjectura e nedemonstrată!) electrizează; exersează recurența cu
condiții și contorul de pași — plus o poveste adevărată despre limitele matematicii.

**Exercițiul 4 — Recurența din enunț** *(traducere)*
Din formulări în limbaj natural („fiecare termen e dublul precedentului minus 3, primul e 5") se scrie
algoritmul. *De ce așa:* traducerea recurenței din cuvinte în cod e formatul de examen; schema-fereastră
se reaplică mecanic odată înțeleasă.

## 3. Particularități

- **Conflictul cu matematica școlară:** la mate, șirul e formulă (`fₙ`); la info, e **proces** —
  distincția merită o frază, previne căutarea „formulei" acolo unde algoritmul e răspunsul.
- **Depășirea:** Fibonacci crește exploziv (f₄₇ nu mai încape în int) — prima motivație reală pentru
  `long long`; observația se leagă de dimensiunile tipurilor.
- **Fereastra minimă:** unii elevi vor „să țină tot șirul undeva" — corect la vector (clasa a X-a),
  dar aici disciplina ferestrei e chiar lecția; onest: „când vom avea vectori, unele probleme vor cere
  tot șirul — asta nu".
- **Evaluare potrivită:** urmărire cu tabel + scrierea unei recurențe noi din enunț; itemul de ordine a
  atribuirilor (găsește eroarea) e obligatoriu.

## Legături

- Teoria de examen: [Algoritmi — șiruri recurente](/stiintific/01-algoritmi); Fibonacci revine ca
  motivația **programării dinamice** la [Metode de programare](/stiintific/03-metode-programare).
- Lecția anterioară: [Prelucrarea secvențelor](/lectii/ix-07-secvente-valori) ·
  Lecția următoare: [Analiza eficienței; aplicații interdisciplinare](/lectii/ix-09-eficienta-aplicatii).

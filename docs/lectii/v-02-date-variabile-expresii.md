# Date, constante, variabile. Expresii

> **Clasa a V-a · domeniul „Algoritmi" · modulele 4–5.** A doua lecție a seriei: după ce elevii știu
> *ce este* un algoritm, învață *cu ce lucrează* el. Competențe specifice vizate: 2.1, 2.2, 2.3.

## 1. Lecția (teorie)

**Clasificarea datelor** — se predă direct pe un exemplu (media a două note):
- **date de intrare** — ce primește algoritmul (cele două note);
- **date de ieșire** — rezultatul (media);
- **date de manevră** — „ciornele" algoritmului, valori intermediare (suma notelor).

**Variabila** — imaginea care funcționează la clasa a V-a este **cutia cu etichetă**:

> O **variabilă** este ca o cutie pe care scrie un nume (eticheta) și în care se află **o singură
> valoare**, care **se poate schimba**. O **constantă** este o cutie sigilată: valoarea nu se mai schimbă.

Puncte-cheie, formulate pentru elevi:
- cutia are mereu **o singură** valoare — când pui alta, cea veche **dispare**;
- numele cutiei nu se schimbă, **conținutul** da (de aici „varia-bilă");
- în Scratch, variabila chiar arată ca o etichetă cu valoare pe scenă (`scor = 0`).

**Expresii și operatori** — la nivelul programei:
- operatori **aritmetici**: `+`, `−`, `*`, `/`, **restul împărțirii** (în Scratch: blocul „modulo");
- operatori **relaționali**: `<`, `>`, `=` (comparăm două valori: rezultatul e adevărat/fals);
- operatori **logici**: **și**, **sau**, **nu** — la nivel intuitiv, pe propoziții din viața reală;
- **evaluarea expresiilor**: ordinea operațiilor, ca la matematică (parantezele primează).

Exemplu lucrat la tablă: `media = (nota1 + nota2) / 2` — de ce sunt necesare parantezele?
Fără ele, `nota1 + nota2 / 2` împarte doar `nota2` (regula ordinii operațiilor, cunoscută de la
matematică, se **transferă** — moment de corelare interdisciplinară).

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — „Cutiile de pe catedră"** *(modelare cu material concret)*
Trei cutii etichetate `a`, `b`, `scor`; profesorul „atribuie" punând bilețele cu valori în cutii, iar
elevii spun mereu ce conține fiecare cutie. Se joacă și scenariul-cheie: în `a` este 5, punem 7 — unde a
dispărut 5-ul? *De ce așa:* atribuirea este **acțiune fizică**, nu simbol; regula „o cutie = o valoare"
se vede cu ochii. Este modelul mental pe care se va sprijini toată programarea ulterioară.

**Exercițiul 2 — „Schimbul valorilor"** *(problematizare)*
În cutia `a` e suc de portocale, în cutia `b` e apă. Cum facem schimbul? Elevii descoperă singuri că e
nevoie de **a treia cutie** (paharul gol) — data de manevră. *De ce așa:* problematizare autentică la
nivelul vârstei; „interschimbarea cu variabilă auxiliară" va reveni la sortări, în liceu — aici i se
pune temelia intuitivă.

**Exercițiul 3 — Evaluarea expresiilor** *(exercițiu gradat)*
Fișă cu expresii de calculat pas cu pas: `2 + 3 * 4`, `(2 + 3) * 4`, `10 / 2 + 3`, restul lui `17 : 5`.
Apoi expresii relaționale: `7 > 3` (adevărat), `4 = 5` (fals). *De ce așa:* exercițiul clasic rămâne
metoda de bază pentru deprinderi de calcul; gradarea (aritmetic → relațional) menține fiecare pas mic.

**Exercițiul 4 — „Scorul jocului"** *(învățare asistată de calculator — Scratch)*
Elevii creează în Scratch variabila `scor`, o setează la 0 și o măresc cu 1 la fiecare click pe
personaj. *De ce așa:* variabila devine **vizibilă și utilă** (scorul unui joc — motivant la 11 ani);
face puntea către lecțiile de structuri, unde variabilele vor „munci" în programe reale.

## 3. Particularități

- **Conflictul cu matematica**: la matematică `x` este o necunoscută **fixă**; în informatică variabila
  **își schimbă valoarea în timp**. Dacă nu tratezi explicit diferența, elevii citesc `scor = scor + 1`
  ca pe o ecuație imposibilă. Formularea salvatoare: „nu e o ecuație, e o **comandă**: pune în cutie
  vechea valoare plus 1".
- **Greșeală tipică**: elevii cred că după `b = a` cutia `a` rămâne goală (valoarea „s-a mutat"). Se
  corectează la exercițiul cu cutii: valoarea se **copiază**, nu se mută.
- **Împărțirea** este capcana aritmetică: la această clasă se lucrează cu împărțirea „de la mate" și cu
  **restul** ca operator separat; discuția cât/rest pregătește (fără a o numi) împărțirea întreagă din C++.
- **Ritm**: lecția pare „ușoară" și tentația e să fie parcursă repede — dar modelul mental al atribuirii
  este **cea mai importantă achiziție a anului**; merită timp și multe exemple.
- **Evaluare potrivită**: itemi de tip „ce conține cutia după acești pași?" (trasare pe 3–4 atribuiri) —
  pregătesc, în miniatură, itemii de urmărire a execuției din liceu.

## Legături

- Teoria de examen despre date și expresii: [Algoritmi](/stiintific/01-algoritmi) și
  [Limbaje de programare](/stiintific/02-limbaje-programare) (unde atribuirea și operatorii revin în C++).
- Metodele folosite (modelare, problematizare, IAC):
  [Strategii didactice](/metodica/02-strategii-didactice).
- Lecția anterioară: [Algoritmul — noțiune și proprietăți](/lectii/v-01-algoritmul) ·
  Lecția următoare: [Structura secvențială](/lectii/v-03-structura-secventiala).

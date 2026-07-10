# Date numerice. Citirea și afișarea datelor

> **Clasa a VII-a · domeniul Algoritmi · modulele 3–4.** Programele încep să **comunice**: primesc
> numere, calculează, afișează rezultate. Variabila din Scratch își primește tipul și declarația.
> Competențe specifice vizate: 2.1, 3.3.

## 1. Lecția (teorie)

**Tipuri de date numerice** (la nivelul clasei): `int` — numere întregi; `double` — numere cu virgulă
(zecimale). Noutatea față de Scratch: variabila trebuie **declarată** — îi spunem calculatorului numele
și tipul **înainte** s-o folosim:

```cpp
int varsta;            // declarare
varsta = 13;           // atribuire (cutia primește valoarea)
int anul = 2026;       // declarare + inițializare
```

**Citirea și afișarea:**

```cpp
#include <iostream>
using namespace std;

int main() {
    int a, b;
    cout << "Introdu doua numere: ";   // mesaj prietenos înainte de citire
    cin >> a >> b;
    cout << "Suma este " << a + b << "\n";
    cout << "Media este " << (a + b) / 2.0 << "\n";
    return 0;
}
```

**Operatorii** (revedere din clasa a V-a, acum „pe bune"): `+ - * /` și `%` (restul — vechiul prieten
„modulo" din Scratch). **Capcana lecției**, tratată frontal: `7 / 2` dă `3` (împărțire **întreagă**
între întregi!), `7 / 2.0` dă `3.5` — de aceea media se împarte la `2.0`.

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Calculatorul de buzunar** *(exercițiu dirijat)*
Program care citește două numere și afișează suma, diferența, produsul, câtul și restul — cu etichete
clare la afișare. *De ce așa:* un singur program exersează toată gama de operatori și disciplina
afișării „cu explicații" (nu doar numere seci) — obicei care ușurează depanarea toată viața.

**Exercițiul 2 — „Prezice, apoi rulează"** *(predicție + verificare)*
Fișă: 6 expresii (`7/2`, `7%2`, `7/2.0`, `1/2`, `10%5`, `9/4*2`) — elevii scriu predicția, apoi
verifică în program. *De ce așa:* conflictul dintre predicție („3.5!") și rezultat („3") este exact
momentul în care împărțirea întreagă se învață cu adevărat; verificarea la calculator dă sentința,
nu profesorul.

**Exercițiul 3 — Probleme cu poveste** *(exercițiu aplicativ)*
„Câți lei primește fiecare dintre cei 3 frați din X lei și cât rămâne?" (cât + rest!); „transformă n
minute în ore și minute". *De ce așa:* `%` și `/` întregi devin **utile**, nu ciudățenii; problemele cu
împărțire și rest sunt tiparul care revine ani la rând (cifrele numărului, la a IX-a, tot de aici vine).

**Exercițiul 4 — „Programul care greșește media"** *(depanare)*
Un program dat calculează media cu `(a + b) / 2` și afișează rezultate greșite pentru note impare —
elevii găsesc și repară. *De ce așa:* prima depanare **logică** (programul compilează, dar greșește) —
diferența dintre eroarea de sintaxă (o arată compilatorul) și cea de logică (o găsești tu).

## 3. Particularități

- **Declararea pare birocrație** după Scratch (unde variabilele apăreau la un click): explicația care
  împacă — „îi spui calculatorului cât loc să pregătească"; legătura cu tipurile de la lecția de
  unități de măsură (un `int` ocupă 4 octeți) e bonus pentru curioși.
- **Împărțirea întreagă** este dealul lecției — nu se trece mai departe până nu e stăpânită; itemul
  `7/2` vs. `7/2.0` reapare la fiecare evaluare a anului.
- **`cin` fără mesaj înainte** produce programe „mute" care par blocate — regula „întâi spui ce ceri,
  apoi citești" e de disciplină, nu de sintaxă.
- **Evaluare potrivită:** predicții de expresii (scris) + un program scurt cu poveste (practic);
  ambele tipare vin direct din evaluările standard de gimnaziu.

## Legături

- Teoria de examen (tipuri, operatori, citire/scriere):
  [Limbaje de programare](/stiintific/02-limbaje-programare) (inclusiv caseta „capcane numerice").
- Lecția anterioară: [Primul program C++](/lectii/vii-05-primul-program-cpp) ·
  Lecția următoare: [Structura liniară în C++](/lectii/vii-07-structura-liniara).

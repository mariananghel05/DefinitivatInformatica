# Verificarea unei proprietăți pe un șir de valori

> **Clasa a VIII-a · domeniul Algoritmi · modulul 5.** Vârful algoritmicii de gimnaziu: întrebări cu
> răspuns DA/NU despre **întregul** șir — „toate valorile…?" / „există vreo valoare…?".
> Competențe specifice vizate: 2.1, 2.2.

## 1. Lecția (teorie)

Două tipuri de întrebări, cu strategii **în oglindă** — miezul lecției:

| Întrebarea | Strategia | Cine decide răspunsul |
|---|---|---|
| **Există** vreo valoare pară? | presupun că NU; **o singură** valoare pară găsită → DA | un singur „da" e suficient |
| **Toate** valorile sunt pare? | presupun că DA; **o singură** valoare impară găsită → NU | un singur „nu" strică tot |

Implementarea cu **variabilă-fanion** (flag):

```cpp
int n, x;
bool toatePare = true;             // presupunerea optimistă
cin >> n;
for (int i = 1; i <= n; i++) {
    cin >> x;
    if (x % 2 != 0)                // contraexemplu găsit
        toatePare = false;
}
if (toatePare) cout << "DA";
else           cout << "NU";
```

Formularea care previne eroarea tipică: fanionul se schimbă **doar într-un sens** — odată găsit
contraexemplul, nicio valoare ulterioară nu mai poate „repara" răspunsul.

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — „Toți sau măcar unul"** *(joc didactic de logică)*
Întrebări despre clasă: „toți elevii poartă albastru?" / „există cineva cu ochelari?" — cum verificăm
fiecare? Câți oameni trebuie „controlați" ca să răspundem NU la prima? (unul!). *De ce așa:* logica
există/toate e universală — jucată pe clasă, se transferă apoi în cod fără frecușuri.

**Exercițiul 2 — „Fanionul care se răzgândește"** *(analiza erorii clasice)*
Programul greșit cu `else toatePare = true;` (fanionul revine la adevărat) — pe șirul `2 3 4` dă DA!
Elevii găsesc de ce. *De ce așa:* eroarea „fanionul se răzgândește" este **cea mai frecventă** greșeală
a temei la orice nivel (inclusiv bac); văzută acum pe un contraexemplu de 3 valori, se ține minte.

**Exercițiul 3 — Perechea de probleme** *(exercițiu în oglindă)*
Se rezolvă alăturat: „există vreo valoare negativă?" și „toate valorile sunt pozitive?" — apoi se
observă că sunt aceeași verificare privită invers. *De ce așa:* dualitatea există/toate e ideea de
logică pe care se sprijină toată tema; descoperită prin comparație, nu enunțată.

**Exercițiul 4 — Verificări în context** *(muncă independentă gradată)*
1) toate notele sunt de trecere (≥ 5)?; 2) există vreun număr de trei cifre?; 3) toate valorile sunt în
ordine crescătoare? (necesită compararea cu valoarea **anterioară** — se păstrează două variabile).
*De ce așa:* a treia problemă introduce tehnica „valorii anterioare" — puntea spre prelucrările mai
fine din liceu.

## 3. Particularități

- **Oprirea timpurie** (break la primul contraexemplu) se poate aminti, dar nu e obligatorie la
  gimnaziu — versiunea „parcurg tot, fanionul rămâne" e suficientă și mai puțin fragilă.
- **`bool` e nou** pentru unii; alternativa `int` 0/1 e acceptabilă, dar `bool` cu nume sugestiv
  (`toatePare`, `existaNegativ`) citește ca o propoziție — argument de lizibilitate.
- **Numele fanionului contează enorm:** `ok` spune nimic; `toatePare` conține chiar presupunerea —
  disciplină de numire care previne jumătate din erori.
- **Evaluare potrivită:** o problemă „există" + una „toate" + itemul-capcană cu fanionul care se
  răzgândește (depistare de eroare) — trio-ul complet al competenței.

## Legături

- Teoria de examen: [Algoritmi — verificarea unei proprietăți](/stiintific/01-algoritmi).
- Aceeași temă, formalizată la liceu: [clasa a IX-a — secvențe de valori](/lectii/#clasa-a-ix-a).
- Lecția anterioară: [Minim și maxim](/lectii/viii-08-minim-maxim) ·
  Continuarea: [clasa a IX-a](/lectii/#clasa-a-ix-a) — pseudocodul și algoritmii elementari.

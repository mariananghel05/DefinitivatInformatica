# Tablouri bidimensionale (matrice)

> **Clasa a X-a · Informatică.** Vectorul crește o dimensiune: tabelul de valori cu linii și coloane.
> Competențe specifice vizate: 2.1, 2.2.

## 1. Lecția (teorie)

**Matricea** = tablou cu **două** dimensiuni; elementul `a[i][j]` stă pe **linia i, coloana j**.
Analogii care funcționează: tabla de șah, sala de clasă (rândul și locul), foaia de calcul (Excel —
corelare directă cu clasa a VIII-a!).

**Parcurgerea standard** — bucle imbricate (linia „ține", coloana „aleargă"):

```cpp
int a[20][20], n, m;
cin >> n >> m;                       // n linii, m coloane
for (int i = 0; i < n; i++)
    for (int j = 0; j < m; j++)
        cin >> a[i][j];
```

**Matricea pătratică (n = n)** și zonele ei — vocabularul de examen:

- **diagonala principală**: `i == j`;
- **diagonala secundară**: `i + j == n - 1`;
- deasupra/sub fiecare diagonală — inegalitățile corespunzătoare (`i < j` = deasupra principalei etc.).

**Prelucrări-tipar:** suma/minimul pe o linie sau coloană dată; sumele pe fiecare linie; prelucrarea
diagonalelor; **transpunerea** (oglindirea față de diagonala principală); parcurgeri speciale
(pe margini, „în spirală" — pentru avansați).

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — „Bătălia navală 2.0"** *(joc de orientare + fișă)*
Pe o matrice desenată: colorați `a[2][3]`, elementele cu `i == j`, linia 1, coloana 0. *De ce așa:*
orientarea (i, j) trebuie automatizată înaintea oricărui algoritm; jocul de coordonate din clasa a
VIII-a (Excel) se reciclează — corelarea se spune explicit.

**Exercițiul 2 — Sumele pe linii** *(exercițiu dirijat cu subtilitate)*
Suma fiecărei linii, afișată: unde se **inițializează** suma? (în interiorul buclei de linii, înaintea
celei de coloane!). *De ce așa:* poziția inițializării în bucle imbricate e greșeala clasică a temei —
descoperită prin urmărirea variantei greșite (sumele „se adună între ele").

**Exercițiul 3 — Diagonalele descoperite** *(descoperire dirijată)*
Pe o matrice 4×4 cu indici vizibili, elevii scriu perechile (i, j) ale fiecărei diagonale și **deduc**
condițiile `i == j`, `i + j == n - 1`. *De ce așa:* formulele deduse din exemple se rețin; date de-a
gata, se confundă între ele la primul test. Verificarea imediată: „elementul (1,2) în matricea 4×4 —
pe care diagonală e?".

**Exercițiul 4 — Set de prelucrări gradate** *(muncă independentă)*
1) maximul de pe coloana k; 2) suma elementelor de pe diagonala principală; 3) verificați dacă matricea
e simetrică (`a[i][j] == a[j][i]`); avansat: parcurgerea în spirală. *De ce așa:* gradarea acoperă
itemii frecvenți; simetria combină diagonala cu compararea — nivel de barem complet.

## 3. Particularități

- **(i, j) sau (j, i)?** — inversarea indicilor e eroarea permanentă; convenția verbală „întâi linia,
  apoi coloana" + desenul cu indici pe margini țin ordinea în viață.
- **Diagonala secundară** se uită prima: formula `i + j == n - 1` merită re-dedusă (nu re-dictată) la
  fiecare recapitulare.
- **Doar matrice mici la urmărire:** 3×3, 4×4 — urmăririle pe matrice mari epuizează fără câștig.
- **Evaluare potrivită:** o urmărire pe matrice desenată + o prelucrare pe zonă (linie/coloană/diagonală)
  + simetria; itemul de inițializare în bucle imbricate — obligatoriu.

## Legături

- Teoria de examen: [Limbaje de programare — tablouri](/stiintific/02-limbaje-programare).
- Matricea revine masiv la [grafuri — matricea de adiacență](/lectii/#clasa-a-xi-a) (clasa a XI-a).
- Lecția anterioară: [Tablouri unidimensionale](/lectii/x-03-tablouri-unidimensionale) ·
  Lecția următoare: [Fișiere text](/lectii/x-05-fisiere-text).

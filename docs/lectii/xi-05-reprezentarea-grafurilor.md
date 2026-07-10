# Reprezentarea grafurilor în memorie

> **Clasa a XI-a · Informatică.** Graful desenat devine structură de date: matricea de adiacență,
> listele de adiacență, lista muchiilor. Competențe specifice vizate: 1.5, 1.6.

## 1. Lecția (teorie)

**Trei reprezentări, pe același graf de lucru** (cel din lecția anterioară — continuitate deliberată):

**1. Matricea de adiacență:** `a[i][j] = 1` dacă există muchia (i, j), altfel 0.
- neorientat → matrice **simetrică**; diagonala 0;
- **suma liniei i = gradul lui i** (citirea proprietăților direct din matrice!);
- test „există muchia?" instantaneu; cost: O(n²) memorie chiar dacă muchiile-s puține.

**2. Listele de adiacență:** pentru fiecare nod, lista vecinilor — compactă (O(n+m)), ideală pentru
parcurgeri; testul de muchie cere căutare în listă.

**3. Lista muchiilor:** perechi (x, y) — exact formatul **fișierelor de intrare** ale problemelor;
de aici se construiesc celelalte reprezentări.

**Tiparul de citire** (fișier: n, m, apoi m perechi):

```cpp
cin >> n >> m;
for (int k = 0; k < m; k++) {
    int x, y;
    cin >> x >> y;
    a[x][y] = 1;
    a[y][x] = 1;     // DOAR la neorientat — simetria!
}
```

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Traducerea în trei limbi** *(transfer între reprezentări)*
Graful de lucru scris în toate trei reprezentările, alăturat; apoi invers: dintr-o matrice dată se
**desenează** graful. *De ce așa:* itemii de examen dau oricare reprezentare și cer alta (sau
proprietăți); fluența traducerilor e chiar competența.

**Exercițiul 2 — Citirea proprietăților din matrice** *(fișă de examen)*
Pe o matrice dată, **fără desen**: gradul nodului 3? nodurile izolate? numărul de muchii? (suma
tuturor / 2!). *De ce așa:* extragerea proprietăților direct din matrice e formatul de subiect; regula
„suma matricei = 2·m" leagă reprezentarea de formula lecției trecute.

**Exercițiul 3 — Simetria uitată** *(depanare)*
Program de citire fără `a[y][x] = 1` — gradele ies greșite; diagnostic și corecție. *De ce așa:*
uitarea simetriei la neorientat e eroarea tipică de implementare; consecințele ei (grade înjumătățite)
se văd în rezultate, nu în compilare.

**Exercițiul 4 — Alegerea argumentată** *(studiu de decizie)*
Trei scenarii: graf cu 10⁵ noduri și 10⁵ muchii (matricea nu încape!); test intensiv de muchii pe graf
mic; citire din fișier de muchii. Care reprezentare, de ce? *De ce așa:* alegerea reprezentării după
problemă e gândirea de proiectare — nivelul care desparte reproducerea de competență.

## 3. Particularități

- **Matricea domină subiectele școlare** (deși listele domină practica) — ambele se predau, cu
  ponderea pe matrice pentru examene și mențiunea onestă a compromisului de memorie.
- **Indexarea de la 1** e naturală la grafuri (nodurile 1..n) — încă un motiv pentru „bilingvismul"
  0/1 exersat la vectori.
- **La orientate:** `a[x][y] = 1` fără simetrie; suma pe **linie** = grad extern, pe **coloană** = grad
  intern — distincția se citește tot din matrice.
- **Evaluare potrivită:** traduceri între reprezentări + proprietăți citite din matrice + un item de
  alegere argumentată.

## Legături

- Teoria de examen, cu reprezentările pe exemplu:
  [Teoria grafurilor — §5.2](/stiintific/05-teoria-grafurilor).
- Matricea de adiacență e o matrice — prelucrările de la [clasa a X-a](/lectii/x-09-prelucrari-matrice)
  se aplică direct.
- Lecția anterioară: [Grafuri — terminologie](/lectii/xi-04-grafuri-terminologie) ·
  Lecția următoare: [Parcurgerile BFS și DFS](/lectii/xi-06-parcurgeri-bfs-dfs).

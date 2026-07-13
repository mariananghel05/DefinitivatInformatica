# Algoritmii — complexități, implementări și animații

> Toți algoritmii cursului, într-un singur loc: **complexitatea**, o **implementare foarte simplă**
> (cu `vector`, comentată linie cu linie, în spoiler) și — pentru algoritmii de bază — **animatorul
> interactiv** cu două vizualizări simultane: **cum se execută codul** (stânga: linia curentă
> evidențiată) și **cum avansează datele** (dreapta: celulele, indicatorii și interschimbările).

## Cum citești animatorul

- **Panoul stâng** = animația execuției: linia de cod care „rulează" acum e evidențiată;
- **Panoul drept** = animația datelor: albastru = elementul curent · galben = se compară ·
  roșu = se interschimbă · verde = la locul final / găsit · estompat = în afara zonei de lucru;
  sub celule apar indicatorii (`i`, `j`, `st`, `dr`, `m`…), iar jetoanele arată valorile variabilelor;
- Controale: **▶ Rulează** / pauză, pas înainte/înapoi ◀ ▶, ⏮ de la început, viteza.
  Sfat didactic: rulează o dată complet, apoi ia-o **pas cu pas** și prezice următoarea mișcare
  înainte să apeși ▶.

## Tabelul complet

| Algoritm | Complexitate | Animație | Implementare |
|---|---|---|---|
| Căutarea secvențială | O(n) | ✅ | [↓](#cautarea-secventiala) |
| Căutarea binară | O(log n) — șir **sortat** | ✅ | [↓](#cautarea-binara) |
| Metoda bulelor | O(n²) | ✅ | [↓](#metoda-bulelor) |
| Sortarea prin inserție | O(n²), ~O(n) pe date aproape sortate | ✅ | [↓](#sortarea-prin-insertie) |
| Sortarea prin selecție | O(n²) | ✅ | [↓](#sortarea-prin-selectie) |
| Sortarea prin numărare | O(n + vmax) — valori întregi mici | — | [↓](#sortarea-prin-numarare) |
| Merge sort | O(n log n) | — | [↓](#sortarea-prin-interclasare-merge-sort) |
| Interclasarea | O(n + m) — vectori sortați | ✅ | [↓](#interclasarea) |
| Euclid (cmmdc / cmmmc) | O(log min(a, b)) | ✅ | [↓](#algoritmul-lui-euclid-cmmdc-si-cmmmc) |
| Verificarea primalității | O(√n) | — | [↓](#verificarea-primalitatii) |
| Cifrele unui număr | O(număr de cifre) | — | [↓](#cifrele-unui-numar) |
| BFS | O(n + m) pe liste / O(n²) pe matrice | tabelul pas cu pas: [teorie](/stiintific/05-teoria-grafurilor) | [↓](#bfs-parcurgerea-in-latime) |
| DFS | O(n + m) / O(n²) | idem | [↓](#dfs-parcurgerea-in-adancime) |
| Dijkstra | O(n²) simplu / O(m log n) cu heap — costuri ≥ 0 | tabelul d[]: [teorie](/stiintific/05-teoria-grafurilor) | [↓](#dijkstra) |
| Roy–Floyd | O(n³) | — | [↓](#roy-floyd) |
| Kruskal | O(m log m) | exemplul numeric: [teorie](/stiintific/05-teoria-grafurilor) | [↓](#kruskal) |
| Backtracking (permutări) | O(n · n!) | arborele: [metode](/stiintific/03-metode-programare) | [↓](#backtracking-permutari) |
| Fibonacci (progr. dinamică) | O(n) — vs. O(2ⁿ) naiv | — | [↓](#fibonacci-programare-dinamica) |
| LIS (subșir crescător maximal) | O(n²) | tabelul dp: [metode](/stiintific/03-metode-programare) | [↓](#subsirul-crescator-maximal-lis) |
| Greedy (problema spectacolelor) | O(n log n) | — | [↓](#greedy-problema-spectacolelor) |

> Regulile de calcul al complexității + tabelul de sinteză: [Esențialul](/esential#complexitati-tabelul-de-aur).

## Căutare

### Căutarea secvențială

Parcurge vectorul de la stânga la dreapta până găsește valoarea (sau îl termină).

<AlgoVis algo="secventiala" />

::: details Implementarea comentată (vector)
```cpp
// Caută valoarea x; returnează poziția primei apariții sau -1.
int cautare(vector<int>& v, int x) {
    for (int i = 0; i < (int)v.size(); i++)  // luăm fiecare element, în ordine
        if (v[i] == x)                       // l-am găsit?
            return i;                        // da → poziția lui (și ne oprim)
    return -1;                               // am terminat vectorul → nu există
}
```
Funcționează pe **orice** vector (nu cere sortare); în cel mai rău caz face `n` comparații.
:::

### Căutarea binară

Pe un vector **sortat**: compară cu mijlocul și aruncă jumătatea în care valoarea nu poate fi.

<AlgoVis algo="binara" />

::: details Implementarea comentată (vector)
```cpp
// PRECONDIȚIE: v este sortat crescător! Returnează poziția lui x sau -1.
int cautareBinara(vector<int>& v, int x) {
    int st = 0, dr = (int)v.size() - 1;      // intervalul în care x mai poate fi
    while (st <= dr) {                       // cât timp intervalul nu e gol
        int m = (st + dr) / 2;               // mijlocul intervalului
        if (v[m] == x) return m;             // găsit chiar la mijloc
        if (v[m] < x) st = m + 1;            // x e mai mare → doar în dreapta
        else          dr = m - 1;            // x e mai mic  → doar în stânga
    }
    return -1;                               // intervalul s-a golit → nu există
}
```
Fiecare pas **înjumătățește** intervalul → log₂ n pași (1 000 000 de elemente = ~20 de comparații).
De ce funcționează + capcanele: [Algoritmi — căutare](/stiintific/01-algoritmi).
:::

## Sortare

### Metoda bulelor

Compară **vecinii** și îi interschimbă dacă sunt în ordine greșită; cel mai mare „urcă" la capăt.

<AlgoVis algo="bule" />

::: details Implementarea comentată (vector)
```cpp
void bubbleSort(vector<int>& v) {
    int n = v.size();
    bool schimbat = true;                    // optimizare: ne oprim când nu mai e nimic de făcut
    for (int i = 0; i < n - 1 && schimbat; i++) {
        schimbat = false;                    // presupunem că e deja sortat
        for (int j = 0; j < n - 1 - i; j++)  // ultimele i elemente sunt DEJA la locul lor
            if (v[j] > v[j + 1]) {           // vecini în ordine greșită?
                swap(v[j], v[j + 1]);        // îi interschimbăm
                schimbat = true;             // a mai fost nevoie de o mișcare
            }
    }
}
```
Invariantul: după trecerea `i`, **ultimele i valori** sunt cele mai mari, la locul lor definitiv.
:::

### Sortarea prin inserție

Fiecare element nou se **inserează la locul lui** în partea deja sortată — ca la cărțile de joc.

<AlgoVis algo="insertie" />

::: details Implementarea comentată (vector)
```cpp
void insertionSort(vector<int>& v) {
    for (int i = 1; i < (int)v.size(); i++) {
        int curent = v[i];                   // elementul de inserat
        int j = i - 1;
        while (j >= 0 && v[j] > curent) {    // cât timp vecinii din stânga sunt mai mari
            v[j + 1] = v[j];                 // îi mutăm un pas la dreapta (facem loc)
            j--;
        }
        v[j + 1] = curent;                   // am găsit locul potrivit
    }
}
```
Invariantul: după pasul `i`, **primele i + 1 elemente** sunt sortate între ele. Pe date aproape
sortate, bucla interioară aproape nu rulează → aproape liniar.
:::

### Sortarea prin selecție

Caută **minimul** zonei nesortate și îl aduce pe prima poziție liberă.

<AlgoVis algo="selectie" />

::: details Implementarea comentată (vector)
```cpp
void selectionSort(vector<int>& v) {
    for (int i = 0; i < (int)v.size() - 1; i++) {
        int pozMin = i;                      // presupunem că minimul e chiar aici
        for (int j = i + 1; j < (int)v.size(); j++)
            if (v[j] < v[pozMin])            // provocarea campionului
                pozMin = j;                  // campion nou
        swap(v[i], v[pozMin]);               // minimul ajunge la locul lui DEFINITIV
    }
}
```
Face puține interschimbări (cel mult n − 1), dar mereu ~n²/2 comparații — indiferent de date.
:::

### Sortarea prin numărare

Nu compară deloc: **numără** aparițiile fiecărei valori, apoi rescrie vectorul în ordine.

::: details Implementarea comentată (vector)
```cpp
// PRECONDIȚIE: valori întregi în intervalul [0, vmax], cu vmax rezonabil de mic.
void countingSort(vector<int>& v, int vmax) {
    vector<int> frecventa(vmax + 1, 0);      // frecventa[x] = de câte ori apare valoarea x
    for (int x : v)
        frecventa[x]++;                      // numărăm fiecare valoare
    int poz = 0;
    for (int val = 0; val <= vmax; val++)    // valorile, în ordine crescătoare
        while (frecventa[val]-- > 0)         // fiecare, de câte ori a apărut
            v[poz++] = val;                  // rescriem vectorul, gata sortat
}
```
O(n + vmax) — „scapă" de limita n·log n pentru că **nu compară**; prețul: memoria pentru frecvențe.
:::

### Sortarea prin interclasare (merge sort)

Divide et impera: sortează recursiv jumătățile, apoi le **interclasează**.

::: details Implementarea comentată (vector)
```cpp
// Sortează porțiunea v[st..dr] — apel inițial: mergeSort(v, 0, v.size() - 1);
void mergeSort(vector<int>& v, int st, int dr) {
    if (st >= dr) return;                    // 0 sau 1 elemente = deja sortat (cazul de bază)
    int m = (st + dr) / 2;
    mergeSort(v, st, m);                     // sortăm jumătatea stângă
    mergeSort(v, m + 1, dr);                 // sortăm jumătatea dreaptă
    // combinăm: interclasarea celor două jumătăți sortate
    vector<int> tmp;
    int i = st, j = m + 1;
    while (i <= m && j <= dr)                // doi „candidați", trece cel mai mic
        if (v[i] <= v[j]) tmp.push_back(v[i++]);
        else              tmp.push_back(v[j++]);
    while (i <= m)  tmp.push_back(v[i++]);   // restul din stânga
    while (j <= dr) tmp.push_back(v[j++]);   // restul din dreapta
    for (int k = 0; k < (int)tmp.size(); k++)
        v[st + k] = tmp[k];                  // punem rezultatul înapoi
}
```
log n niveluri de înjumătățire × O(n) muncă pe nivel = **O(n log n)** — arborele desenat:
[Metode de programare](/stiintific/03-metode-programare).
:::

## Interclasarea

Combină doi vectori **deja sortați** într-unul sortat — fiecare element se mută o singură dată.

<AlgoVis algo="interclasare" />

::: details Implementarea comentată (vector)
```cpp
// PRECONDIȚIE: a și b sunt sortate crescător.
vector<int> interclasare(vector<int>& a, vector<int>& b) {
    vector<int> c;                           // rezultatul se construiește direct în ordine
    int i = 0, j = 0;                        // cei doi „candidați" din față
    while (i < (int)a.size() && j < (int)b.size())
        if (a[i] <= b[j]) c.push_back(a[i++]);   // trece cel mai mic dintre candidați
        else              c.push_back(b[j++]);
    while (i < (int)a.size()) c.push_back(a[i++]);  // un vector s-a epuizat:
    while (j < (int)b.size()) c.push_back(b[j++]);  // restul celuilalt trece direct
    return c;
}
```
`<=` la egalitate = interclasare **stabilă** (prioritate pentru primul vector).
:::

## Algoritmi elementari

### Algoritmul lui Euclid (cmmdc și cmmmc)

Perechea (a, b) devine (b, a mod b) — păstrând mereu aceiași divizori comuni (lema lui Euclid).

<AlgoVis algo="euclid" />

::: details Implementarea comentată
```cpp
// Cel Mai Mare Divizor Comun — algoritmul lui Euclid (împărțiri repetate)
int cmmdc(int a, int b) {
    while (b != 0) {
        int r = a % b;                       // restul împărțirii
        a = b;                               // perechea (a, b) devine (b, r) —
        b = r;                               // aceiași divizori comuni, numere mai mici
    }
    return a;                                // când b = 0, răspunsul e a
}

// Cel Mai Mic Multiplu Comun — din identitatea cmmdc(a,b) · cmmmc(a,b) = a · b
long long cmmmc(int a, int b) {
    return (long long)a / cmmdc(a, b) * b;   // împărțim ÎNTÂI, contra depășirii
}
```
Teorema, analogia „dalei maxime" și tabelul pas cu pas: [Algoritmi](/stiintific/01-algoritmi).
:::

### Verificarea primalității

Divizorii merg în perechi (d, n/d) — deci e suficient să căutăm până la √n.

::: details Implementarea comentată
```cpp
bool estePrim(int n) {
    if (n < 2) return false;                 // 0 și 1 NU sunt prime (capcana de barem!)
    for (int d = 2; (long long)d * d <= n; d++)  // d*d <= n, adică d <= radical(n)
        if (n % d == 0)                      // am găsit un divizor propriu
            return false;                    // deci nu e prim
    return true;                             // niciun divizor până la radical → prim
}
```
Pentru n ≈ 10¹²: ~10⁶ pași în loc de ~10¹². De ce e corect: [Algoritmi](/stiintific/01-algoritmi).
:::

### Cifrele unui număr

Mecanismul universal: `n % 10` = ultima cifră, `n / 10` = numărul fără ea.

::: details Implementarea comentată
```cpp
// Suma cifrelor
int sumaCifrelor(int n) {
    int suma = 0;
    while (n > 0) {
        suma += n % 10;                      // adunăm ultima cifră
        n /= 10;                             // o „tăiem"
    }
    return suma;
}

// Oglinditul (răsturnatul) numărului — idiomul „fă loc, apoi adaugă"
int oglindit(int n) {
    int ogl = 0;
    while (n > 0) {
        ogl = ogl * 10 + n % 10;             // împingem cifrele în noul număr
        n /= 10;
    }
    return ogl;                              // palindromul: n == oglindit(n) — pe o COPIE a lui n!
}
```
Atenție: mecanismul **consumă** numărul — păstrează o copie dacă mai ai nevoie de el.
:::

## Grafuri

Pentru grafuri, „animația" cea mai utilă la examen este **tabelul pas cu pas** — construit deja pe
exemple numerice la [Teoria grafurilor](/stiintific/05-teoria-grafurilor) (coada BFS, evoluția `d[]`
la Dijkstra, acceptările/respingerile la Kruskal).

### BFS — parcurgerea în lățime

::: details Implementarea comentată (vector)
```cpp
// lista[x] = vecinii lui x; returnează ordinea vizitării din start
vector<int> bfs(int start, int n, vector<vector<int>>& lista) {
    vector<int> ordine;
    vector<bool> vizitat(n + 1, false);
    vector<int> coada;                       // coada, simplu: vector + indexul primului
    int prim = 0;
    coada.push_back(start);
    vizitat[start] = true;                   // marcăm LA ADĂUGARE (altfel intră de 2 ori!)
    while (prim < (int)coada.size()) {
        int x = coada[prim++];               // extragem primul intrat (FIFO)
        ordine.push_back(x);
        for (int y : lista[x])               // toți vecinii nevizitați
            if (!vizitat[y]) {
                vizitat[y] = true;
                coada.push_back(y);          // intră la rând
            }
    }
    return ordine;                           // nodurile, în ordinea DISTANȚEI față de start
}
```
:::

### DFS — parcurgerea în adâncime

::: details Implementarea comentată (vector)
```cpp
vector<bool> vizitat;                        // vizitat.assign(n + 1, false); înainte de apel

void dfs(int x, vector<vector<int>>& lista) {
    vizitat[x] = true;                       // am ajuns în x
    // (aici se „prelucrează" x — de ex. afișare)
    for (int y : lista[x])                   // mergem cât mai adânc pe fiecare vecin
        if (!vizitat[y])
            dfs(y, lista);                   // recursivitatea = stiva care ține minte drumul
}

// Numărarea componentelor conexe: pornim DFS din fiecare nod nevizitat
int nrComponente(int n, vector<vector<int>>& lista) {
    vizitat.assign(n + 1, false);
    int nr = 0;
    for (int i = 1; i <= n; i++)
        if (!vizitat[i]) { nr++; dfs(i, lista); }
    return nr;                               // câte „porniri" = câte componente
}
```
:::

### Dijkstra

::: details Implementarea comentată (varianta simplă, O(n²))
```cpp
// cost[i][j] = costul muchiei i-j, sau INF dacă nu există; costuri >= 0!
vector<int> dijkstra(int start, int n, vector<vector<int>>& cost) {
    const int INF = 1e9;
    vector<int> d(n + 1, INF);               // d[x] = cel mai mic cost cunoscut până la x
    vector<bool> finalizat(n + 1, false);
    d[start] = 0;
    for (int pas = 1; pas <= n; pas++) {
        int x = -1;                          // 1) nodul NEfinalizat cu d minim (ca la selecție!)
        for (int i = 1; i <= n; i++)
            if (!finalizat[i] && (x == -1 || d[i] < d[x]))
                x = i;
        if (x == -1 || d[x] == INF) break;   // ce a rămas e inaccesibil
        finalizat[x] = true;                 // costul lui x e DEFINITIV (invariantul greedy)
        for (int y = 1; y <= n; y++)         // 2) relaxăm vecinii lui x
            if (cost[x][y] != INF && d[x] + cost[x][y] < d[y])
                d[y] = d[x] + cost[x][y];    // prin x se ajunge mai ieftin la y
    }
    return d;
}
```
Varianta cu coadă de priorități (O(m log n)), exemplul numeric și contraexemplul costurilor
negative: [Teoria grafurilor](/stiintific/05-teoria-grafurilor).
:::

### Roy–Floyd

::: details Implementarea comentată
```cpp
// d[i][j] = inițial costul muchiei directe (INF unde nu există; 0 pe diagonală)
void royFloyd(int n, vector<vector<int>>& d) {
    for (int k = 1; k <= n; k++)             // „dăm drumul" nodurilor intermediare pe rând
        for (int i = 1; i <= n; i++)
            for (int j = 1; j <= n; j++)
                if (d[i][k] + d[k][j] < d[i][j])   // ocolul prin k e mai ieftin?
                    d[i][j] = d[i][k] + d[k][j];
}
```
De ce k este bucla exterioară (programare dinamică pe noduri intermediare):
[Teoria grafurilor](/stiintific/05-teoria-grafurilor).
:::

### Kruskal

::: details Implementarea comentată (vector)
```cpp
struct Muchie { int x, y, cost; };

vector<int> tata;                            // pădurile: tata[x] = părintele lui x

int radacina(int x) {                        // reprezentantul pădurii lui x
    if (tata[x] == x) return x;
    tata[x] = radacina(tata[x]);             // comprimăm drumul
    return tata[x];
}

bool dupaCost(const Muchie& a, const Muchie& b) { return a.cost < b.cost; }

int kruskal(int n, vector<Muchie>& m) {
    sort(m.begin(), m.end(), dupaCost);      // muchiile, de la ieftină la scumpă
    tata.resize(n + 1);
    for (int i = 1; i <= n; i++) tata[i] = i;    // fiecare nod = pădure separată
    int costTotal = 0;
    for (Muchie& e : m) {
        int rx = radacina(e.x), ry = radacina(e.y);
        if (rx != ry) {                      // capete în păduri diferite → nu închide ciclu
            tata[rx] = ry;                   // unim pădurile
            costTotal += e.cost;             // muchia intră în arbore
        }
    }
    return costTotal;                        // costul arborelui parțial minim
}
```
De ce alegerea lacomă nu greșește (proprietatea tăieturii): [Teoria grafurilor](/stiintific/05-teoria-grafurilor).
:::

## Metode de programare

### Backtracking — permutări

::: details Implementarea comentată (vector)
```cpp
int n;
vector<int> st;                              // st = soluția construită element cu element
vector<bool> folosit;                        // folosit[val] = e deja în soluție?

void back(int k) {                           // completăm poziția k (0-indexat)
    if (k == n) {                            // soluție completă → o afișăm
        for (int x : st) cout << x << ' ';
        cout << '\n';
        return;
    }
    for (int val = 1; val <= n; val++)
        if (!folosit[val]) {                 // condiția de continuare
            st.push_back(val);               // ALEGEM valoarea
            folosit[val] = true;
            back(k + 1);                     // coborâm în arbore
            folosit[val] = false;            // REVENIM: refacem starea exact cum era
            st.pop_back();
        }
}
// apel: n = 3; folosit.assign(n + 1, false); back(0);   → cele 3! = 6 permutări
```
Arborele de explorare complet pentru n = 3: [Metode de programare](/stiintific/03-metode-programare).
:::

### Fibonacci — programare dinamică

::: details Implementarea comentată (vector)
```cpp
// Naiv (recursiv direct): O(2^n) — recalculează aceleași valori de un număr uriaș de ori!
// Dinamic: fiecare valoare se calculează O SINGURĂ dată, de la mic la mare.
long long fib(int n) {
    vector<long long> f(n + 1);
    f[0] = 0;  f[1] = 1;                     // cazurile de bază
    for (int i = 2; i <= n; i++)
        f[i] = f[i - 1] + f[i - 2];          // folosim rezultatele DEJA memorate
    return f[n];                             // O(n) timp — long long: crește exploziv!
}
```
:::

### Subșirul crescător maximal (LIS)

::: details Implementarea comentată (vector)
```cpp
int lis(vector<int>& v) {
    int n = v.size();
    vector<int> dp(n, 1);                    // dp[i] = lungimea celui mai lung subșir
    int best = (n > 0 ? 1 : 0);              //         crescător care se TERMINĂ în i
    for (int i = 1; i < n; i++)
        for (int j = 0; j < i; j++)          // orice element anterior mai mic
            if (v[j] < v[i] && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;           // îl putem prelungi până la i
                best = max(best, dp[i]);
            }
    return best;
}
```
Tabelul dp completat pas cu pas pe un exemplu: [Metode de programare](/stiintific/03-metode-programare).
:::

### Greedy — problema spectacolelor

::: details Implementarea comentată (vector)
```cpp
struct Activitate { int inceput, sfarsit; };

// regula lacomă: activitatea care se TERMINĂ mai devreme lasă cel mai mult loc celorlalte
bool dupaSfarsit(const Activitate& a, const Activitate& b) { return a.sfarsit < b.sfarsit; }

int maximActivitati(vector<Activitate> a) {
    sort(a.begin(), a.end(), dupaSfarsit);   // O(n log n) — sortarea domină costul
    int nr = 0, ultimSfarsit = -1;
    for (Activitate& act : a)
        if (act.inceput >= ultimSfarsit) {   // nu se suprapune cu ultima aleasă
            nr++;                            // o alegem
            ultimSfarsit = act.sfarsit;
        }
    return nr;
}
```
De ce alegerea e sigură aici (și când greedy EȘUEAZĂ — rucsacul discret):
[Metode de programare](/stiintific/03-metode-programare).
:::

---

> **Mai departe:** teoria completă a fiecărui algoritm (teoreme, demonstrații, capcane) — în
> [Tematica științifică](/stiintific/); complexitățile de recitat — în
> [Esențial](/esential#complexitati-tabelul-de-aur); exersare — [Carduri](/carduri) și
> [subiectele oficiale](/subiecte/arhiva-oficiala).

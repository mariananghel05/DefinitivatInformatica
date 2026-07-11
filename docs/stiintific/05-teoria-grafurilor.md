# 5. Teoria grafurilor

> Se studiază la liceu (clasele XI–XII). Modelează relații între obiecte și stă la baza multor algoritmi
> aplicați (rețele, trasee, dependențe).

## 1. Teorie

### 5.1. Ce este un graf?

Un **graf** este un model matematic format din **puncte** legate prin **linii**. Formal,
`G = (V, E)`, unde:

- **V** = mulțimea **vârfurilor** (numite și **noduri**) — punctele, de obicei numerotate `1, 2, …, n`;
- **E** = mulțimea **muchiilor** sau **arcelor** — legăturile dintre vârfuri.

Grafurile modelează relații: orașe legate prin șosele, persoane care se cunosc, pagini web legate prin
linkuri, sarcini cu dependențe etc.

#### Nod (vârf), muchie, arc

- **Nodul (vârful)** este un element al grafului (un „punct"). Exemplu: într-o rețea de orașe, fiecare
  oraș este un nod.
- **Muchia** este o legătură **neordonată** între două noduri, notată `{x, y}` (sau `[x, y]`). „Neordonată"
  înseamnă că `{x, y}` și `{y, x}` reprezintă **aceeași** legătură — relația merge în ambele sensuri
  (ex. „x este prieten cu y").
- **Arcul** este o legătură **orientată** (cu sens) de la un nod la altul, notată `(x, y)` — de la `x`
  **către** `y`. Aici sensul contează: `(x, y)` ≠ `(y, x)` (ex. „pagina x are link către pagina y").

Astfel:
- **graf neorientat** = graf cu **muchii** (legături în ambele sensuri);
- **graf orientat (digraf)** = graf cu **arce** (legături cu sens).

#### Exemplu de lucru

Vom folosi acest **graf neorientat** cu 5 noduri și muchiile `{1,2}`, `{1,3}`, `{2,3}`, `{3,4}`, `{4,5}`:

```
   1 --- 2
    \   /
     \ /
      3 --- 4 --- 5
```

#### Termeni esențiali (explicați pe exemplu)

| Termen | Explicație | Pe exemplu |
|---|---|---|
| **Adiacent** | două noduri sunt adiacente dacă **există o muchie** între ele | 1 și 2 sunt adiacente; 1 și 4 **nu** sunt |
| **Incident** | o muchie este incidentă nodurilor pe care le **unește** | muchia `{3,4}` este incidentă lui 3 și 4 |
| **Grad** (`grad(x)`) | numărul de muchii care **pleacă** din nod (= nr. de vecini) | `grad(3) = 3` (vecini: 1, 2, 4); `grad(5) = 1` |
| **Lanț** | succesiune de noduri consecutive legate prin muchii | `1 – 3 – 4 – 5` este un lanț |
| **Lanț elementar** | lanț care **nu repetă** niciun nod | `1 – 2 – 3 – 4` (elementar) |
| **Ciclu** | lanț **închis** (pleacă și revine în același nod), fără a repeta muchii | `1 – 2 – 3 – 1` este un ciclu |
| **Subgraf** | se obține **eliminând noduri** (și muchiile lor) | nodurile `{1,2,3}` cu muchiile dintre ele |
| **Graf parțial** | se obține **eliminând doar muchii** (nodurile rămân) | toate nodurile, dar fără muchia `{2,3}` |

::: tip La grafuri orientate (cu arce)
- în loc de **muchie** avem **arc**; în loc de **lanț**, avem **drum** (respectă sensul arcelor);
- în loc de **ciclu**, avem **circuit** (drum închis);
- **gradul** se desparte în **grad intern** (arce care **intră** în nod) și **grad extern** (arce care
  **ies** din nod);
- **graful transpus** se obține **inversând sensul** tuturor arcelor.
:::

#### Tipuri speciale de grafuri

- **Graf complet** (notat `Kₙ`) — **orice** două noduri sunt unite printr-o muchie (numărul maxim de muchii).
- **Graf bipartit** — nodurile se împart în **două mulțimi**, iar muchiile apar **doar între** cele două
  mulțimi (nu în interiorul uneia). Ex.: elevi ↔ discipline.
- **Graf turneu** — un graf complet ale cărui muchii au primit **o orientare** (model de „toți joacă cu toți").

#### Formule de numărare (apar constant în subiecte)

- **Suma gradelor** = `2·m` — **„lema strângerilor de mână"**: fiecare muchie este o „strângere de
  mână" numărată la ambele capete. Corolar: numărul nodurilor de grad **impar** este întotdeauna
  **par** (o sumă pară nu poate avea un număr impar de termeni impari).
- **Numărul maxim de muchii** într-un graf neorientat cu `n` noduri: `n(n−1)/2` (graful complet `Kₙ`).
- **Numărul grafurilor neorientate** distincte cu `n` noduri fixate: `2^(n(n−1)/2)` — fiecare muchie
  posibilă „există sau nu".
- Un **arbore** cu `n` noduri are exact `n − 1` muchii; orice graf **conex** are cel puțin `n − 1` muchii.

*Verificare pe exemplul de lucru:* `m = 5` muchii, iar suma gradelor este `2 + 2 + 3 + 2 + 1 = 10 = 2·5`. ✓

### 5.2. Metode de reprezentare

```cpp
// 1) Matricea de adiacență — a[i][j] = 1 dacă există muchie (i, j)
int a[100][100];                                        // static (maxim „ghicit")
vector<vector<int>> mat(n + 1, vector<int>(n + 1, 0));  // dinamic: exact (n+1) × (n+1)

// 2) Liste de adiacență — vecinii fiecărui vârf
vector<int> adj[100];                 // tablou static de vectori
vector<vector<int>> lista(n + 1);     // varianta complet dinamică
// adăugare muchie neorientată (x, y):
// lista[x].push_back(y); lista[y].push_back(x);
```

| Reprezentare | Spațiu | Bun pentru |
|---|---|---|
| Matrice de adiacență | O(n²) | grafuri dense, test rapid muchie |
| Liste de adiacență | O(n + m) | grafuri rare, parcurgeri |

**Pe exemplul de lucru** (muchiile `{1,2}, {1,3}, {2,3}, {3,4}, {4,5}`):

```text
Matricea de adiacență               Listele de adiacență
     1  2  3  4  5
1  [ 0  1  1  0  0 ]                1: 2, 3
2  [ 1  0  1  0  0 ]                2: 1, 3
3  [ 1  1  0  1  0 ]                3: 1, 2, 4
4  [ 0  0  1  0  1 ]                4: 3, 5
5  [ 0  0  0  1  0 ]                5: 4
```

Observații utile la itemi: matricea unui graf **neorientat** este **simetrică** față de diagonala
principală; suma valorilor de pe linia `i` este `grad(i)`; diagonala conține 0 (fără bucle).

### 5.3. Parcurgerea grafurilor

```cpp
// Parcurgere în lățime (BFS) — folosește o coadă
void bfs(int start, int n) {
    vector<bool> vizitat(n + 1, false);
    queue<int> q;
    q.push(start); vizitat[start] = true;
    while (!q.empty()) {
        int x = q.front(); q.pop();
        cout << x << ' ';
        for (int y : adj[x])
            if (!vizitat[y]) { vizitat[y] = true; q.push(y); }
    }
}

// Parcurgere în adâncime (DFS) — recursiv
vector<bool> viz(100, false);
void dfs(int x) {
    viz[x] = true;
    cout << x << ' ';
    for (int y : adj[x])
        if (!viz[y]) dfs(y);
}
```

- **BFS** găsește **distanțe minime** (în număr de muchii) într-un graf neponderat.
- **DFS** este util la **componente conexe**, cicluri, sortare topologică.

**Exemplu pas cu pas — BFS din nodul 1** (pe exemplul de lucru, vecinii luați în ordine crescătoare):

| Pas | Nod extras din coadă | Vecini nevizitați adăugați | Coada după pas |
|---|---|---|---|
| 1 | 1 | 2, 3 | 2, 3 |
| 2 | 2 | — (3 e deja marcat) | 3 |
| 3 | 3 | 4 | 4 |
| 4 | 4 | 5 | 5 |
| 5 | 5 | — | (goală) |

Ordinea de vizitare: `1, 2, 3, 4, 5` — nodurile apar în ordinea **distanței** față de start (întâi cele
la o muchie, apoi la două ș.a.m.d.), pentru că o **coadă** procesează nodurile în ordinea descoperirii.

**DFS din nodul 1** merge „în adâncime" cât poate înainte să revină: `1 → 2 → 3 → 4 → 5`. Pe alte grafuri
cele două ordini diferă vizibil; regula de reținut: **BFS = coadă** (strat cu strat), **DFS =
stivă/recursie** (cât mai adânc, apoi revenire — același mecanism ca la backtracking).

::: info De ce BFS dă chiar distanțele minime? (justificarea teoremei)
*Analogia:* o **piatră aruncată în apă** — unda atinge întâi malurile aflate la un pas, apoi pe cele
la doi ș.a.m.d. *Formal*, prin inducție pe straturi: nodurile intră în coadă în ordinea
**nedescrescătoare** a distanței (coada conține în orice moment noduri din cel mult două straturi
consecutive), deci în clipa în care un nod este descoperit, drumul pe care a fost atins folosește
numărul minim posibil de muchii — orice drum mai scurt l-ar fi descoperit mai devreme. Argumentul
funcționează pentru că toate muchiile „costă" la fel (1); pentru costuri diferite este nevoie de
**Dijkstra** (mai jos).
:::

### 5.4. Conexitate

- **Componentă conexă** (neorientat) — submulțime maximă de vârfuri între care există lanțuri.
  Se determină cu BFS/DFS repetate.
- **Tare conexitate** (orientat) — între orice două vârfuri există drum în ambele sensuri;
  **componente tare conexe** (algoritmii Tarjan/Kosaraju).
- **Matricea drumurilor** (închiderea tranzitivă) — `d[i][j] = 1` dacă există drum de la i la j
  (algoritmul Roy–Warshall).

### 5.5. Drumuri de cost minim (grafuri ponderate)

Un **graf ponderat** are un **cost** (pondere) asociat fiecărei muchii/arc. **Costul unui drum** este
suma costurilor muchiilor parcurse. Întrebarea tipică: *care este drumul de cost minim de la un nod la
altul?*

**Cum funcționează Dijkstra (intuitiv):** menținem un vector `d[]` cu cel mai mic cost cunoscut până la
fiecare nod (`d[sursă] = 0`, restul `∞`). Repetat: alegem nodul **nevizitat cu `d` minim**, îl marcăm
„finalizat" și **relaxăm** vecinii lui — dacă ajungem la un vecin pe un drum mai ieftin (`d[x] + cost <
d[y]`), îi actualizăm `d[y]`. Pentru că alegem mereu minimul, când un nod este finalizat costul lui este
deja optim. **Important:** funcționează doar cu **costuri nenegative**.

```cpp
// Dijkstra — drum minim dintr-o sursă, costuri nenegative — O(m log n)
vector<int> dijkstra(int start, int n, vector<vector<pair<int,int>>>& g) {
    const int INF = 1e9;
    vector<int> d(n + 1, INF);
    priority_queue<pair<int,int>, vector<pair<int,int>>, greater<>> pq;
    d[start] = 0; pq.push({0, start});
    while (!pq.empty()) {
        auto [cost, x] = pq.top(); pq.pop();
        if (cost > d[x]) continue;
        for (auto [y, w] : g[x])
            if (d[x] + w < d[y]) {
                d[y] = d[x] + w;
                pq.push({d[y], y});
            }
    }
    return d;
}
```

::: details Exemplu pas cu pas — Dijkstra din nodul 1
Graf ponderat cu muchiile: `1–2 (cost 4)`, `1–3 (cost 1)`, `3–2 (cost 2)`, `2–4 (cost 5)`, `3–4 (cost 8)`.

| Pas | Nod finalizat | d[1] | d[2] | d[3] | d[4] | Ce s-a relaxat |
|---|---|---|---|---|---|---|
| start | — | 0 | ∞ | ∞ | ∞ | — |
| 1 | **1** | 0 | 4 | 1 | ∞ | vecinii lui 1: d[2] = 4, d[3] = 1 |
| 2 | **3** (d minim) | 0 | **3** | 1 | 9 | prin 3: d[2] = 1 + 2 = 3 < 4 ✓; d[4] = 1 + 8 = 9 |
| 3 | **2** | 0 | 3 | 1 | **8** | prin 2: d[4] = 3 + 5 = 8 < 9 ✓ |
| 4 | **4** | 0 | 3 | 1 | 8 | — |

Drumul minim `1 → 4` costă **8** (traseul 1 → 3 → 2 → 4). Observă pasul 2: deși muchia directă `1–2`
are costul 4, ocolul prin 3 e mai ieftin — această „relaxare" repetată este inima algoritmului.
:::

**De ce funcționează Dijkstra (invariantul greedy):** în momentul în care un nod `x` este ales ca
minim și „finalizat", `d[x]` este deja costul optim. *Schița demonstrației:* presupunem că ar exista
un drum mai ieftin până la `x`; acesta ar trebui să iasă din mulțimea nodurilor finalizate printr-un
**prim nod nefinalizat** `y`, iar costul până la `y` ar fi strict mai mic decât `d[x]` (după `y` mai
urmează doar muchii de cost ≥ 0). Dar atunci algoritmul l-ar fi ales pe `y`, nu pe `x` — contradicție
cu alegerea minimului. **Exact aici se folosește ipoteza costurilor nenegative** — și tot aici se vede
de ce cade algoritmul fără ea:

::: warning Contraexemplu pentru costuri negative
Arce: `1→2` (cost 2), `1→3` (cost 3), `3→2` (cost **−2**). Drumul optim către 2 costă `3 + (−2) = 1`,
dar Dijkstra îl finalizează pe 2 cu `d[2] = 2` (minimul momentului) și nu mai revine asupra lui.
Pentru costuri negative se folosește algoritmul **Bellman–Ford**.
:::

*Analogie didactică:* un **incendiu** (sau apa care se revarsă) pornit din sursă, care înaintează pe
muchii cu viteză constantă: frontul atinge fiecare nod exact la momentul egal cu costul drumului
minim, iar ordinea „aprinderii" nodurilor este chiar ordinea finalizării lor în algoritm.

- **Dijkstra** — sursă unică, costuri **nenegative**.
- **Roy–Floyd (Floyd–Warshall)** — drumuri minime între **toate perechile**, O(n³):

```cpp
for (int k = 1; k <= n; ++k)
    for (int i = 1; i <= n; ++i)
        for (int j = 1; j <= n; ++j)
            if (d[i][k] + d[k][j] < d[i][j])
                d[i][j] = d[i][k] + d[k][j];
```

**Ideea din spatele lui Roy–Floyd (programare dinamică):** după pasul `k`, `d[i][j]` = costul drumului
minim de la `i` la `j` care folosește ca noduri **intermediare** doar noduri din mulțimea `{1, …, k}`.
Recurența: cel mai bun astfel de drum fie **ocolește** nodul `k` (rămâne valoarea de la pasul
anterior), fie **trece exact o dată** prin el (`d[i][k] + d[k][j]`) — de aceea `k` trebuie să fie
bucla **exterioară**: „dăm drumul" nodurilor intermediare unul câte unul. Matricea pornește cu
costurile muchiilor directe și `∞` în rest; aceeași schemă cu **sau logic** în loc de minim produce
**matricea drumurilor** (Roy–Warshall, închiderea tranzitivă).

### 5.6. Grafuri speciale

- **Graf hamiltonian** — admite un **ciclu hamiltonian** (trece o singură dată prin **fiecare vârf**).
- **Graf eulerian** — admite un **ciclu eulerian** (parcurge **fiecare muchie** exact o dată).

**Teorema lui Euler (1736):** un graf conex este eulerian **dacă și numai dacă** toate nodurile au
gradul **par**.

*De ce este necesară condiția:* de fiecare dată când ciclul **trece** printr-un nod, consumă exact
două muchii — una la intrare, una la ieșire; muchiile fiecărui nod se grupează deci în perechi, adică
gradele sunt pare. *De ce este și suficientă:* pornim din orice nod și „mergem fără să ridicăm
creionul" până ne blocăm — cu toate gradele pare, blocajul poate apărea **doar în nodul de start**
(am închis un ciclu); dacă au rămas muchii nefolosite, altoim pe ciclu, dintr-un nod al său cu muchii
rămase, un nou ciclu — și repetăm până se consumă tot (construcția lui Hierholzer).

::: tip Analogie și poveste didactică
**Eulerian = „desenul dintr-o singură trăsătură"**: figura se poate desena fără a ridica creionul și
fără a repeta vreo linie („plicul cu fundă" se poate? numără gradele!). Teorema s-a născut din problema
**podurilor din Königsberg**: se pot traversa toate cele 7 poduri ale orașului exact o dată? Euler a
modelat orașul ca graf, a văzut noduri de grad impar și a răspuns **nu** — momentul fondator al teoriei
grafurilor, excelent de povestit la clasă.
:::

**Contrastul Euler ↔ Hamilton** (întrebare clasică de examen): pentru eulerian există criteriul simplu
de mai sus; pentru hamiltonian **nu se cunoaște nicio condiție simplă** necesară și suficientă —
verificarea este dificilă computațional (se cunosc doar condiții **suficiente**, de tip Dirac: dacă
fiecare nod are gradul ≥ n/2, graful este hamiltonian). Reținere: la Euler contează **muchiile** — și
gradele le contorizează perfect; la Hamilton contează **vârfurile**, iar trecerea prin toate vârfurile
nu se „citește" din grade.

### 5.7. Arbori

Un **arbore** = graf **conex** și **fără cicluri** (n vârfuri, n−1 muchii).

**Teorema de caracterizare** — pentru un graf cu `n` noduri, următoarele proprietăți sunt echivalente
(oricare o implică pe oricare): **(1)** conex și fără cicluri; **(2)** conex, cu exact `n − 1` muchii;
**(3)** fără cicluri, cu exact `n − 1` muchii; **(4)** între oricare două noduri există **exact un**
lanț. *De ce n − 1:* construim graful muchie cu muchie pornind de la `n` noduri izolate (`n`
componente); fiecare muchie care nu închide ciclu unește **două componente diferite**, deci scade
numărul componentelor cu exact 1 — iar de la `n` componente la una singură e nevoie de exact `n − 1`
muchii. Arborele este, deci, „**rețeaua minimă care leagă totul**": orice muchie în plus închide un
ciclu, orice muchie scoasă rupe conexitatea — exact intuiția pe care se sprijină arborele parțial de
cost minim de mai jos.

- **Arbore parțial de cost minim (APM/MST)** — algoritmii **Kruskal** (muchii sortate + păduri disjuncte)
  și **Prim** (creștere din vârf).

```cpp
// Kruskal cu păduri de mulțimi disjuncte (union-find)
struct Muchie { int x, y, cost; };
int tata[100];                        // sau, dimensionat exact: vector<int> tata(n + 1);
int radacina(int x) { return tata[x] == x ? x : tata[x] = radacina(tata[x]); }

int kruskal(int n, vector<Muchie>& m) {
    sort(m.begin(), m.end(), [](auto& a, auto& b){ return a.cost < b.cost; });
    for (int i = 1; i <= n; ++i) tata[i] = i;
    int costTotal = 0;
    for (auto& e : m) {
        int rx = radacina(e.x), ry = radacina(e.y);
        if (rx != ry) { tata[rx] = ry; costTotal += e.cost; }   // nu formează ciclu
    }
    return costTotal;
}
```

**Cum „gândește" Kruskal:** ia muchiile de la cea mai ieftină la cea mai scumpă și acceptă o muchie doar
dacă **nu închide un ciclu** (adică unește două „păduri" diferite — de aici structura union-find). Se
oprește natural după acceptarea a `n − 1` muchii. Pe graful din exemplul Dijkstra: acceptă `1–3 (1)` și
`3–2 (2)`, respinge `1–2 (4)` (ar închide ciclul 1–3–2), acceptă `2–4 (5)` → arbore parțial de cost
minim **1 + 2 + 5 = 8**.

**De ce alegerea lacomă nu greșește niciodată (proprietatea tăieturii):** dacă împărțim nodurile în
două mulțimi nevide, cea mai **ieftină** muchie care le leagă face parte dintr-un arbore parțial de
cost minim. *Argument de schimb:* orice APM trebuie să traverseze tăietura pe undeva; dacă o face pe o
muchie mai scumpă, o înlocuim cu cea ieftină — înlocuirea păstrează conexitatea, nu creează ciclu în
plus și nu crește costul, deci obținem un arbore cel puțin la fel de bun. **Kruskal** aplică exact
această proprietate la fiecare acceptare (tăietura: componenta unui capăt vs. restul), iar **Prim** la
fel (mulțimea deja conectată vs. restul) — de aceea acești algoritmi greedy dau **garantat** optimul,
spre deosebire de greedy „în general" (vezi contraexemplul rucsacului la
[Metode de programare](/stiintific/03-metode-programare)).

- **Arbori binari speciali:** arbore binar **complet**, **de căutare** (BST) și **heap** (părintele ≥/≤ copiii).

## 2. Competențe vizate

- **modelarea unei probleme cu ajutorul grafurilor** (alegerea reprezentării potrivite);
- **aplicarea parcurgerilor** BFS/DFS pentru conexitate, distanțe, cicluri;
- **utilizarea algoritmilor** de drum minim (Dijkstra, Roy–Floyd) și de arbore parțial minim (Kruskal, Prim);
- **recunoașterea grafurilor speciale** (hamiltonian, eulerian, bipartit, complet).

::: info Corelare cu programa școlară
- **Liceu, cl. a XI-a:** 1.5 (transpunerea unei probleme în **limbaj de grafuri**, cu terminologia
  specifică), 1.6 (algoritmi simpli de verificare a proprietăților grafurilor). Algoritmii avansați
  (Dijkstra, Roy–Floyd, arbori parțiali de cost minim) apar la specializarea **intensiv informatică**.
:::

## 3. Abordare metodică

**Metode:** modelarea (desenarea grafurilor), problematizarea (probleme din viața reală — hărți, rețele),
studiul de caz, exercițiul.

**Tip de lecție** (predare — „BFS"): se pornește de la o problemă de „cel mai scurt traseu în număr de
stații"; se introduce coada; se trasează parcurgerea pe un graf desenat.

**Activități de învățare:** construirea matricei de adiacență pentru un graf dat; simularea BFS/DFS pe
tablă; identificarea componentelor conexe; aplicarea Kruskal pe o hartă de „drumuri".

**Itemi de evaluare:**
- *obiectiv:* „Câte muchii are un arbore cu n vârfuri? (n−1)";
- *semiobiectiv:* „Ce parcurgere folosește o coadă? (BFS)";
- *subiectiv:* „Determinați numărul componentelor conexe ale unui graf dat prin matrice de adiacență."

::: warning Erori tipice
- confuzia **lanț (neorientat)** ↔ **drum (orientat)**;
- aplicarea **Dijkstra** pe grafuri cu **costuri negative** (incorect — se folosește Bellman–Ford);
- confuzia **hamiltonian** (vârfuri) ↔ **eulerian** (muchii);
- la matricea de adiacență, uitarea simetriei la grafuri **neorientate**.
:::

## Conexiuni cu alte teme

- **BFS folosește coada, DFS folosește stiva/recursivitatea** — structurile dinamice de la
  [Alocarea dinamică](/stiintific/04-alocare-dinamica); tot acolo sunt detaliați arborii binari,
  cazul particular cel mai studiat de arbore.
- **DFS și backtracking** sunt același tipar de explorare cu revenire, iar **Dijkstra, Prim și Kruskal**
  sunt algoritmi greedy care chiar garantează optimul — vezi
  [Metode de programare](/stiintific/03-metode-programare).
- O **rețea de calculatoare** este un graf (dispozitive = noduri, legături = muchii), iar rutarea
  pachetelor este o problemă de drum de cost minim — vezi
  [Rețele de calculatoare](/stiintific/10-retele-de-calculatoare).
- Modelul **rețea** al bazelor de date este un graf de înregistrări
  ([Baze de date](/stiintific/06-baze-de-date)); web-ul, cu paginile legate prin linkuri, este un graf
  **orientat** uriaș.
- Complexitățile parcurgerilor (O(n + m) pe liste, O(n²) pe matrice) aplică analiza de la
  [Algoritmi](/stiintific/01-algoritmi).

## Recapitulare

- Graf = (vârfuri, muchii/arce); reprezentări: **matrice de adiacență** (O(n²)) / **liste** (O(n+m)).
- Parcurgeri: **BFS** (coadă, distanțe minime), **DFS** (recursiv, conexitate/cicluri).
- Drumuri minime: **Dijkstra** (costuri ≥ 0), **Roy–Floyd** (toate perechile).
- **Arbore** = conex fără cicluri; **APM** prin **Kruskal**/**Prim**.

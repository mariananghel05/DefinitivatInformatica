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

### 5.2. Metode de reprezentare

```cpp
// 1) Matricea de adiacență — a[i][j] = 1 dacă există muchie (i, j)
int a[100][100];

// 2) Liste de adiacență — vecinii fiecărui vârf
vector<int> adj[100];
// adăugare muchie neorientată (x, y):
// adj[x].push_back(y); adj[y].push_back(x);
```

| Reprezentare | Spațiu | Bun pentru |
|---|---|---|
| Matrice de adiacență | O(n²) | grafuri dense, test rapid muchie |
| Liste de adiacență | O(n + m) | grafuri rare, parcurgeri |

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

- **Dijkstra** — sursă unică, costuri **nenegative**.
- **Roy–Floyd (Floyd–Warshall)** — drumuri minime între **toate perechile**, O(n³):

```cpp
for (int k = 1; k <= n; ++k)
    for (int i = 1; i <= n; ++i)
        for (int j = 1; j <= n; ++j)
            if (d[i][k] + d[k][j] < d[i][j])
                d[i][j] = d[i][k] + d[k][j];
```

### 5.6. Grafuri speciale

- **Graf hamiltonian** — admite un **ciclu hamiltonian** (trece o singură dată prin **fiecare vârf**).
- **Graf eulerian** — admite un **ciclu eulerian** (parcurge **fiecare muchie** exact o dată);
  condiție (neorientat conex): **toate gradele pare**.

### 5.7. Arbori

Un **arbore** = graf **conex** și **fără cicluri** (n vârfuri, n−1 muchii).

- **Arbore parțial de cost minim (APM/MST)** — algoritmii **Kruskal** (muchii sortate + păduri disjuncte)
  și **Prim** (creștere din vârf).

```cpp
// Kruskal cu păduri de mulțimi disjuncte (union-find)
struct Muchie { int x, y, cost; };
int tata[100];
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

## Recapitulare

- Graf = (vârfuri, muchii/arce); reprezentări: **matrice de adiacență** (O(n²)) / **liste** (O(n+m)).
- Parcurgeri: **BFS** (coadă, distanțe minime), **DFS** (recursiv, conexitate/cicluri).
- Drumuri minime: **Dijkstra** (costuri ≥ 0), **Roy–Floyd** (toate perechile).
- **Arbore** = conex fără cicluri; **APM** prin **Kruskal**/**Prim**.

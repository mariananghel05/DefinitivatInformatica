# 3. Metode de programare

> Tehnici generale de proiectare a algoritmilor, studiate la liceu (clasele X–XI). Examenul cere atât
> *descrierea metodei* și *oportunitatea utilizării*, cât și *aplicații specifice*.

## 1. Teorie

### 3.1. Metoda Greedy (a optimului local)

**Idee:** construiește soluția pas cu pas, alegând la fiecare moment **opțiunea optimă local**, în
speranța obținerii optimului global. Rapidă, dar **nu garantează** întotdeauna soluția optimă.

**Oportunitate:** când proprietatea de optim local → optim global este demonstrabilă.

**Aplicații clasice:** problema **rucsacului continuu** (fracționar), **problema spectacolelor**
(planificarea activităților).

```cpp
// Problema spectacolelor: număr maxim de activități neconflictuale
// Sortăm crescător după timpul de sfârșit și alegem greedy.
struct Activitate { int inceput, sfarsit; };

int maximActivitati(vector<Activitate> a) {
    sort(a.begin(), a.end(),
         [](const Activitate& x, const Activitate& y){ return x.sfarsit < y.sfarsit; });
    int nr = 0, ultimSfarsit = -1;
    for (auto& act : a)
        if (act.inceput >= ultimSfarsit) {   // nu se suprapune
            nr++;
            ultimSfarsit = act.sfarsit;
        }
    return nr;
}
```

**De ce e corectă alegerea „cel mai devreme sfârșit"?** Activitatea care se termină prima lasă **cel mai
mult loc** pentru cele rămase; orice soluție optimă poate fi transformată, schimb cu schimb, într-una
care începe cu ea (argument „de schimb"). Acesta este tipul de justificare cerut când argumentezi
oportunitatea metodei greedy.

Formal, o problemă se pretează la greedy când are două proprietăți: **proprietatea alegerii lacome**
(o alegere optimă local poate fi extinsă la o soluție optimă globală — demonstrată de regulă prin
argumentul de schimb de mai sus) și **substructura optimă** (după alegere, restul problemei este o
instanță mai mică de același tip). Acestea sunt reperele „argumentării oportunității" la examen; când
prima proprietate lipsește, greedy eșuează — vezi contraexemplul de mai jos.

::: details Contraexemplu — de ce greedy NU merge la rucsacul discret
Rucsac de capacitate **10**; obiecte (greutate, valoare): A(6, 30), B(5, 20), C(5, 20).
Raportul valoare/greutate: A = 5, B = C = 4 ⇒ greedy alege **A**, apoi B și C nu mai încap → valoare **30**.
Soluția optimă este însă **B + C** → valoare **40**. Alegerea optimă local (A) a stricat optimul global —
de aceea rucsacul **discret** se rezolvă cu programare dinamică, iar doar cel **continuu** (obiectele se
pot fracționa) cu greedy. Un contraexemplu de acest fel este cel mai convingător argument și la clasă.
:::

### 3.2. Metoda Backtracking

**Idee:** construiește soluția **element cu element**; la fiecare nivel încearcă valori posibile, iar
dacă o alegere nu poate duce la o soluție validă, **revine** (backtrack) și încearcă alta. Explorează
sistematic spațiul soluțiilor.

**Oportunitate:** când soluția e o secvență/vector ce respectă **condiții de continuare** și se cer
**toate** soluțiile (sau una). Atenție: complexitate **exponențială**.

**Aplicații clasice:** **problema reginelor**, **comis-voiajorul**, **explorarea unui labirint**,
generarea aranjamentelor/permutărilor.

```cpp
// Generarea permutărilor mulțimii {1, 2, ..., n} (backtracking clasic)
int n;
int st[20];
bool folosit[20];

void afiseaza() {
    for (int i = 1; i <= n; ++i) cout << st[i] << ' ';
    cout << '\n';
}

void back(int k) {
    if (k > n) { afiseaza(); return; }       // soluție completă
    for (int val = 1; val <= n; ++val)
        if (!folosit[val]) {                 // condiție de continuare
            st[k] = val;
            folosit[val] = true;
            back(k + 1);                     // pas recursiv
            folosit[val] = false;            // backtrack
        }
}
```

> Varianta cu `std::vector`: `vector<int> st(n + 1);` și `vector<bool> folosit(n + 1, false);` —
> dimensionate **exact** la execuție, în locul maximului „ghicit" 20; restul codului rămâne identic.

**Componentele oricărui backtracking** (le regăsești în orice problemă de acest tip):
1. **soluția** — un vector `st[1..n]` construit element cu element;
2. **mulțimea valorilor candidate** pentru fiecare poziție (aici `1..n`);
3. **condiția de continuare**, testată *înainte* de coborâre (aici: valoarea să nu fie deja folosită);
4. **condiția de soluție finală** (aici `k > n`) și **revenirea** — refacerea stării (`folosit[val] = false`).

**Arborele de apeluri pentru n = 3** (coborârea = o alegere, urcarea = revenirea „backtrack"):

```text
back(1)
├── st[1]=1 ── back(2)
│   ├── st[2]=2 ── back(3) ── st[3]=3 → soluția 1 2 3
│   └── st[2]=3 ── back(3) ── st[3]=2 → soluția 1 3 2
├── st[1]=2 ── back(2)
│   ├── st[2]=1 ── back(3) ── st[3]=3 → soluția 2 1 3
│   └── st[2]=3 ── back(3) ── st[3]=1 → soluția 2 3 1
└── st[1]=3 ── back(2)
    ├── st[2]=1 ── back(3) ── st[3]=2 → soluția 3 1 2
    └── st[2]=2 ── back(3) ── st[3]=1 → soluția 3 2 1
```

După fiecare soluție afișată, algoritmul **urcă** în arbore și încearcă următoarea valoare disponibilă —
exact acest mecanism de revenire dă numele metodei. Numărul frunzelor este `n! = 6`, de unde și
complexitatea exponențială.

### 3.3. Divide et impera

**Idee (trei pași):** **împarte** problema în subprobleme independente de același tip, **rezolvă**
recursiv subproblemele, **combină** rezultatele.

**Aplicații clasice:** **turnurile din Hanoi**, **merge sort** (sortare prin interclasare),
**quicksort** (sortare rapidă), căutarea binară.

```cpp
// Merge sort — O(n log n)
void mergeSort(vector<int>& v, int st, int dr) {
    if (st >= dr) return;                     // caz de bază
    int m = (st + dr) / 2;
    mergeSort(v, st, m);                      // împarte stânga
    mergeSort(v, m + 1, dr);                  // împarte dreapta
    // combină (interclasare)
    vector<int> tmp;
    int i = st, j = m + 1;
    while (i <= m && j <= dr)
        tmp.push_back(v[i] <= v[j] ? v[i++] : v[j++]);
    while (i <= m) tmp.push_back(v[i++]);
    while (j <= dr) tmp.push_back(v[j++]);
    for (int k = 0; k < (int)tmp.size(); ++k) v[st + k] = tmp[k];
}
```

**De unde vine O(n log n)?** Arborele de descompunere are **log₂ n niveluri** (înjumătățim mereu), iar pe
fiecare nivel interclasările costă **în total O(n)** — deci `n` operații × `log n` niveluri:

```text
nivel 0:            [5 2 9 1 6 3]              → o interclasare de 6 elemente
nivel 1:        [5 2 9]      [1 6 3]           → interclasări de 3 + 3 elemente
nivel 2:      [5 2] [9]    [1 6] [3]           → interclasări de 2 + 2 elemente
nivel 3:     [5] [2]      [1] [6]              → cazuri de bază (un element = sortat)
rezultat:           [1 2 3 5 6 9]
```

> **Căutarea binară** este tot divide et impera — dar „degenerat": împarte în două, rezolvă **o singură**
> subproblemă și nu are pas de combinare; de aceea costă doar O(log n). Pasul de „combinare" al lui
> merge sort este exact **interclasarea** de la [Algoritmi](/stiintific/01-algoritmi).

### 3.4. Programarea dinamică

**Idee:** rezolvă probleme cu **subprobleme care se suprapun** și **substructură optimă**, memorând
rezultatele subproblemelor (tabelare) ca să **nu le recalculeze**. Transformă exponențialul în polinomial.

**De ce „memorare"? Exemplul-tip: șirul lui Fibonacci.** Recursivitatea directă recalculează aceleași
valori de un număr exponențial de ori (`fib(5)` apelează `fib(3)` de 2 ori, `fib(2)` de 3 ori):

```cpp
long long fibNaiv(int n) {                    // O(2ⁿ) — recalculează totul
    if (n <= 1) return n;
    return fibNaiv(n - 1) + fibNaiv(n - 2);
}

long long fibDinamic(int n) {                 // O(n) — fiecare valoare, calculată o singură dată
    vector<long long> f(n + 1);
    f[0] = 0; f[1] = 1;
    for (int i = 2; i <= n; ++i)
        f[i] = f[i - 1] + f[i - 2];           // folosim rezultatele deja memorate
    return f[n];
}
```

**Divide et impera vs. programare dinamică:** ambele descompun problema, dar la divide et impera
subproblemele sunt **independente** (nu se repetă), pe când la programarea dinamică ele **se suprapun**
— de aceea merită memorate într-o tabelă.

Fundamentul teoretic poartă un nume: **principiul optimalității (Bellman)** — o soluție optimă este
alcătuită din subsoluții la rândul lor optime (substructura optimă). Dacă principiul nu se verifică
(adică optimul global ar folosi subsoluții neoptime), programarea dinamică **nu se aplică** —
verificarea lui este primul pas al argumentării oportunității metodei.

**Aplicații clasice:** **subșir crescător de lungime maximă**, **rucsacul discret (0/1)**,
**cel mai lung subșir comun** (LCS).

```cpp
// Subșir crescător maximal (LIS) — O(n^2)
int lis(const vector<int>& v) {
    int n = v.size();
    vector<int> dp(n, 1);                     // dp[i] = lungimea LIS care se termină în i
    int best = (n ? 1 : 0);
    for (int i = 1; i < n; ++i)
        for (int j = 0; j < i; ++j)
            if (v[j] < v[i] && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;
                best = max(best, dp[i]);
            }
    return best;
}
```

::: details Exemplu pas cu pas — LIS pe șirul [3, 1, 4, 1, 5, 9, 2, 6]
| i | v[i] | anteriori mai mici decât v[i] | dp[i] = cel mai bun dp[j] + 1 |
|---|---|---|---|
| 0 | 3 | — | 1 |
| 1 | 1 | — | 1 |
| 2 | 4 | v[0]=3, v[1]=1 | dp[0] + 1 = **2** |
| 3 | 1 | — | 1 |
| 4 | 5 | v[0], v[1], v[2], v[3] | dp[2] + 1 = **3** |
| 5 | 9 | toți anteriorii | dp[4] + 1 = **4** |
| 6 | 2 | v[1]=1, v[3]=1 | dp[1] + 1 = 2 |
| 7 | 6 | v[0], v[1], v[2], v[3], v[4], v[6] | dp[4] + 1 = **4** |

Rezultat: **4** (de exemplu subșirul 3, 4, 5, 9 sau 3, 4, 5, 6). Observă principiul: `dp[i]` se
calculează o singură dată, **numai** din valori `dp[j]` deja finalizate — ordinea de completare a
tabelei este esențială.
:::

### 3.5. Generarea elementelor combinatoriale

Prin backtracking se generează: **permutări**, **aranjamente**, **combinări**, **submulțimi**,
**partițiile** unui număr natural și ale unei mulțimi.

| Element | Formulă număr | Idee de generare |
|---|---|---|
| Permutări | n! | back: fiecare valoare o singură dată |
| Aranjamente | n!/(n−k)! | back pe k poziții, valori nefolosite |
| Combinări | n!/(k!(n−k)!) | back crescător, fără repetare |
| Submulțimi | 2ⁿ | pentru fiecare element: în/în afara mulțimii |

### 3.6. Cum recunoști metoda potrivită? (ghid de decizie)

| Semnale în enunț | Metoda probabilă | Întrebarea de verificare |
|---|---|---|
| „numărul maxim/minim de…", alegeri succesive care nu se mai revizuiesc | **Greedy** | pot demonstra că optimul local nu strică optimul global? |
| „toate soluțiile…", „câte modalități…", soluție = vector cu restricții | **Backtracking** | am condiții de continuare care taie devreme ramurile moarte? |
| problema se sparge în subprobleme **independente** de același tip | **Divide et impera** | am caz de bază + pas de combinare? |
| „optim" + subprobleme care **se repetă** (rucsac discret, subșiruri) | **Programare dinamică** | pot defini `dp[...]` și relația de recurență? |

Aceeași problemă poate apărea în mai multe „haine": **rucsacul continuu** → greedy; **rucsacul discret**
→ programare dinamică; **generarea tuturor încărcărilor posibile** → backtracking. La examen se punctează
explicit *argumentarea oportunității* metodei alese, nu doar implementarea.

## 2. Competențe vizate

- **selectarea metodei potrivite** pentru o problemă dată (recunoașterea „tiparului");
- **argumentarea oportunității** unei metode (greedy vs. backtracking vs. programare dinamică);
- **implementarea** unor algoritmi reprezentativi pentru fiecare metodă;
- **estimarea eficienței** (polinomial vs. exponențial).

::: info Corelare cu programa școlară
- **Liceu, cl. a XI-a:** 2.1–2.3 (analiza problemei, construirea și aplicarea creativă a **metodelor de
  programare** — Divide et Impera, Backtracking). La specializarea **intensiv informatică** se adaugă
  metoda **Greedy** și **programarea dinamică**.
:::

## 3. Abordare metodică

**Metode:** problematizarea, **studiul de caz** (aceeași problemă rezolvată cu metode diferite),
învățarea prin descoperire, exercițiul.

**Tip de lecție** (de *sistematizare/recapitulare* — „alegerea metodei"): se compară pe o problemă
(ex. rucsacul) varianta greedy/continuă vs. programare dinamică/discretă.

**Activități de învățare:** dramatizarea backtracking-ului (elevii „revin" pas cu pas pe o tablă de
șah pentru reginele); completarea tabelei de programare dinamică; trasarea arborelui de apeluri pentru
divide et impera.

**Itemi de evaluare:**
- *obiectiv:* „Care metodă **nu garantează** optimul global? a) programare dinamică b) greedy";
- *semiobiectiv:* „Care e complexitatea merge sort?";
- *subiectiv:* „Rezolvați prin backtracking generarea submulțimilor unei mulțimi cu n elemente."

::: warning Confuzii frecvente
- aplicarea **greedy** unde nu garantează optimul (ex. rucsac **discret**);
- **backtracking fără condiție de continuare** → explozie combinatorială;
- la **programare dinamică**, ordine greșită de completare a tabelei → se folosesc valori încă necalculate;
- omiterea **cazului de bază** la divide et impera.
:::

## Conexiuni cu alte teme

- **Merge sort** este [interclasarea](/stiintific/01-algoritmi) pusă într-un schelet divide et impera,
  iar **căutarea binară** este tot divide et impera — legătura directă cu tema *Algoritmi*.
- Toate metodele se sprijină pe **recursivitate** — mecanismul stivei de apeluri este explicat la
  [Limbaje de programare](/stiintific/02-limbaje-programare) și la
  [Alocarea dinamică](/stiintific/04-alocare-dinamica).
- **Backtracking și DFS** sunt același tipar de explorare cu revenire — vezi
  [Teoria grafurilor](/stiintific/05-teoria-grafurilor); tot acolo, **Dijkstra, Prim și Kruskal** sunt
  algoritmi greedy la care alegerea locală chiar garantează optimul global.
- Didactic: compararea metodelor pe aceeași problemă este un **studiu de caz** tipic — vezi
  [Strategii didactice](/metodica/02-strategii-didactice).

## Recapitulare

- **Greedy** — optim local, rapid, nu mereu optim global (rucsac continuu, spectacole).
- **Backtracking** — explorare sistematică cu revenire, exponențial (regine, labirint, permutări).
- **Divide et impera** — împarte/rezolvă/combină (Hanoi, merge sort, quicksort).
- **Programare dinamică** — subprobleme suprapuse + substructură optimă, cu memorare (LIS, rucsac 0/1, LCS).

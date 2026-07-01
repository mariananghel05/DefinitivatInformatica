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

### 3.4. Programarea dinamică

**Idee:** rezolvă probleme cu **subprobleme care se suprapun** și **substructură optimă**, memorând
rezultatele subproblemelor (tabelare) ca să **nu le recalculeze**. Transformă exponențialul în polinomial.

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

### 3.5. Generarea elementelor combinatoriale

Prin backtracking se generează: **permutări**, **aranjamente**, **combinări**, **submulțimi**,
**partițiile** unui număr natural și ale unei mulțimi.

| Element | Formulă număr | Idee de generare |
|---|---|---|
| Permutări | n! | back: fiecare valoare o singură dată |
| Aranjamente | n!/(n−k)! | back pe k poziții, valori nefolosite |
| Combinări | n!/(k!(n−k)!) | back crescător, fără repetare |
| Submulțimi | 2ⁿ | pentru fiecare element: în/în afara mulțimii |

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

## Recapitulare

- **Greedy** — optim local, rapid, nu mereu optim global (rucsac continuu, spectacole).
- **Backtracking** — explorare sistematică cu revenire, exponențial (regine, labirint, permutări).
- **Divide et impera** — împarte/rezolvă/combină (Hanoi, merge sort, quicksort).
- **Programare dinamică** — subprobleme suprapuse + substructură optimă, cu memorare (LIS, rucsac 0/1, LCS).

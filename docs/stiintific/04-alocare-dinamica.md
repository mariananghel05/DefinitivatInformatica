# 4. Alocarea dinamică a memoriei

> Se studiază la liceu (clasa a XI-a). Permite gestionarea memoriei în timpul execuției și construirea
> **structurilor de date dinamice** (liste, stive, cozi, arbori).

## 1. Teorie

### 4.1. Conceptul de alocare dinamică

Memoria unui program se împarte în **zona statică** (variabile globale), **stivă** (variabile locale,
apeluri de funcții) și **heap** (memorie alocată dinamic, la cerere). **Alocarea dinamică** permite
rezervarea memoriei **în timpul execuției**, în funcție de necesități, și **eliberarea** ei când nu mai
e folosită.

| Zonă de memorie | Ce conține | Durata de viață |
|---|---|---|
| **Zona statică** | variabile globale, constante | toată execuția programului |
| **Stiva (stack)** | variabile locale, parametri, adrese de revenire din apeluri | cât durează apelul funcției |
| **Heap** | memoria cerută cu `new` | de la `new` până la `delete` — **programatorul decide** |

Diferența esențială: pe stivă memoria se eliberează **automat** la ieșirea din funcție; pe heap
eliberarea este **responsabilitatea programatorului**. De aici vin și avantajul (structuri care cresc
oricât în timpul execuției), și riscurile (*memory leak*).

```cpp
// Operatorii new / delete (C++)
int *p = new int;          // alocare pentru un întreg
*p = 7;
delete p;                  // eliberare

int *v = new int[n];       // alocare vector dinamic de n elemente
// ... utilizare ...
delete[] v;                // eliberarea unui vector dinamic
```

::: warning Greșeli de gestiune a memoriei
- **memory leak** — alocare fără eliberare (`new` fără `delete`);
- **dangling pointer** — folosirea unui pointer după `delete`;
- folosirea `delete` în loc de `delete[]` la vectori (și invers).
:::

### 4.2. Pointeri — recapitulare

Un **pointer** reține o **adresă de memorie**. Operatorii: `&` (adresa lui), `*` (dereferențiere).

```cpp
int x = 10;
int *p = &x;       // p reține adresa lui x
cout << *p;        // 10 (valoarea de la adresă)
*p = 20;           // modifică x prin pointer
```

### 4.3. Structuri de date liniare implementate dinamic

#### Lista simplu înlănțuită

Fiecare **nod** conține o informație și un pointer către **următorul** nod.

```cpp
struct Nod {
    int info;
    Nod* urm;
};

// Inserare la început
Nod* insereazaInceput(Nod* cap, int val) {
    Nod* nou = new Nod{val, cap};
    return nou;            // noul cap al listei
}

// Parcurgere
void parcurge(Nod* cap) {
    for (Nod* p = cap; p != nullptr; p = p->urm)
        cout << p->info << ' ';
}

// Ștergerea unui nod cu o valoare dată
Nod* sterge(Nod* cap, int val) {
    Nod *p = cap, *ant = nullptr;
    while (p && p->info != val) { ant = p; p = p->urm; }
    if (!p) return cap;                       // negăsit
    if (!ant) cap = p->urm; else ant->urm = p->urm;
    delete p;
    return cap;
}
```

**Ce se întâmplă, pas cu pas, la inserarea în față** — `insereazaInceput(cap, 5)` pe lista `7 → 3`:

```text
Înainte:                cap ──► [7|•] ──► [3|•] ──► NULL

Pas 1  nou = new Nod{5, cap}      nou ──► [5|•] ─┐
       (nou îl indică deja pe 7)                 └──► [7|•] ──► [3|•] ──► NULL

Pas 2  return nou (noul cap):     cap ──► [5|•] ──► [7|•] ──► [3|•] ──► NULL
```

**Ordinea contează:** noul nod primește mai întâi legătura spre vechiul cap și **abia apoi** devine cap.
Dacă am scrie întâi `cap = nou` și abia apoi am lega `nou->urm`, am pierde accesul la restul listei —
cea mai frecventă eroare la lucrul cu liste. La **ștergere**, pointerul `ant` (anteriorul) este necesar
pentru a „ocoli" nodul șters (`ant->urm = p->urm`); nodul se eliberează cu `delete` **după** refacerea
legăturii.

| Structură | Caracteristică |
|---|---|
| **Listă simplu înlănțuită** | un pointer „următor" per nod |
| **Listă dublu înlănțuită** | pointeri „anterior" și „următor" |
| **Listă circulară** | ultimul nod indică spre primul |

**Când listă, când vector?** Compararea costurilor operațiilor de bază:

| Operație | Vector (tablou) | Listă simplu înlănțuită |
|---|---|---|
| acces la al `i`-lea element | **O(1)** — prin indice | O(n) — parcurgere de la cap |
| inserare / ștergere la început | O(n) — deplasăm toate elementele | **O(1)** — refacem un pointer |
| inserare / ștergere după un nod cunoscut | O(n) | **O(1)** |
| memorie | bloc continuu, dimensiune fixată la alocare | crește/scade la nevoie; + un pointer pe nod |

#### Stiva (stack) — LIFO

Ultimul intrat, primul ieșit. Operații: `push`, `pop`, `top`.

```cpp
struct Nod { int info; Nod* urm; };
Nod* varf = nullptr;

void push(int x) { varf = new Nod{x, varf}; }
void pop() { if (varf) { Nod* t = varf; varf = varf->urm; delete t; } }
int top() { return varf->info; }
```

#### Coada (queue) — FIFO

Primul intrat, primul ieșit. Operații: `enqueue` (adăugare la coadă), `dequeue` (extragere de la început).
Spre deosebire de stivă, avem nevoie de **doi pointeri**: unul spre primul nod (de unde extragem) și
unul spre ultimul (unde adăugăm).

```cpp
struct Nod { int info; Nod* urm; };
Nod *prim = nullptr, *ultim = nullptr;

void enqueue(int x) {                    // adăugare la sfârșit
    Nod* nou = new Nod{x, nullptr};
    if (!prim) prim = ultim = nou;       // coada era goală
    else { ultim->urm = nou; ultim = nou; }
}

int dequeue() {                          // extragere de la început
    int valoare = prim->info;
    Nod* vechi = prim;
    prim = prim->urm;
    if (!prim) ultim = nullptr;          // coada a devenit goală
    delete vechi;
    return valoare;
}
```

::: tip Unde le folosim? (corelații care apar la examen)
**Stiva** este mecanismul din spatele **recursivității** (stiva de apeluri) și al verificării
corectitudinii parantezelor; **coada** stă la baza parcurgerii **BFS** din
[Teoria grafurilor](/stiintific/05-teoria-grafurilor).
:::

### 4.4. Structuri arborescente

- **Arbore cu rădăcină** — structură ierarhică (un nod-rădăcină, noduri-copil).
- **Arbore binar** — fiecare nod are cel mult **doi** descendenți (stâng, drept).
- **Arbore binar de căutare (ABC/BST)** — pentru fiecare nod: subarborele stâng < nod < subarborele drept.

```cpp
struct NodArbore {
    int cheie;
    NodArbore *st, *dr;
};

// Inserare într-un arbore binar de căutare
NodArbore* insereaza(NodArbore* rad, int x) {
    if (!rad) return new NodArbore{x, nullptr, nullptr};
    if (x < rad->cheie) rad->st = insereaza(rad->st, x);
    else if (x > rad->cheie) rad->dr = insereaza(rad->dr, x);
    return rad;
}

// Parcurgere în inordine (SRD) → afișează cheile crescător într-un BST
void inordine(NodArbore* rad) {
    if (!rad) return;
    inordine(rad->st);
    cout << rad->cheie << ' ';
    inordine(rad->dr);
}
```

**Exemplu de lucru:** inserăm pe rând `8, 3, 10, 1, 6` într-un BST inițial vid:

```text
      8            8 = rădăcina (primul element inserat)
     / \
    3   10         3 < 8 → stânga;   10 > 8 → dreapta
   / \
  1   6            1 < 8 și 1 < 3 → stânga lui 3;   6 < 8 dar 6 > 3 → dreapta lui 3
```

Parcurgerea în inordine (SRD) dă `1, 3, 6, 8, 10` — **crescător**, confirmând proprietatea BST.
Căutarea unei chei urmează același drum ca inserarea: la fiecare nod eliminăm un subarbore întreg,
deci într-un arbore echilibrat costă **O(log n)** — BST-ul este „ruda" arborescentă a
[căutării binare](/stiintific/01-algoritmi).

**Parcurgeri ale arborilor binari:**

| Parcurgere | Ordine | Acronim |
|---|---|---|
| Preordine | Rădăcină → Stâng → Drept | RSD |
| Inordine | Stâng → Rădăcină → Drept | SRD |
| Postordine | Stâng → Drept → Rădăcină | SDR |

> Într-un **arbore binar de căutare**, parcurgerea în **inordine** produce cheile în ordine crescătoare.

## 2. Competențe vizate

- **înțelegerea modelului de memorie** (stivă vs. heap) și a alocării/eliberării dinamice;
- **utilizarea corectă a pointerilor** și a operatorilor `new`/`delete`;
- **implementarea operațiilor** pe liste, stive, cozi (creare, inserare, ștergere, parcurgere, căutare);
- **implementarea arborilor binari de căutare** și a parcurgerilor.

::: info Corelare cu programa școlară
- **Liceu, cl. a XI-a:** 1.1–1.4 (alegerea modalităților de structurare a datelor; liste, stive, cozi).
  **Alocarea dinamică** a memoriei și **arborii** apar la specializarea **intensiv informatică**.
:::

## 3. Abordare metodică

**Metode:** modelarea (scheme cu noduri și săgeți), demonstrarea pas cu pas, învățarea prin descoperire,
exercițiul la calculator.

**Tip de lecție** (predare — „lista simplu înlănțuită"): pornind de la limitele vectorului (dimensiune
fixă), se introduce nevoia de structură dinamică; se desenează nodurile; se implementează inserarea.

**Activități de învățare:** „lanț uman" — elevii țin cartonașe (info) și se țin de mână (pointeri) pentru
a simula o listă; trasarea operațiilor push/pop pe o stivă; desenarea unui BST după o secvență de inserări.

**Itemi de evaluare:**
- *obiectiv:* „Ce structură funcționează LIFO? a) coadă b) stivă";
- *semiobiectiv:* „Ce parcurgere a unui BST afișează cheile crescător?";
- *subiectiv:* „Scrieți un subprogram care numără nodurile dintr-o listă simplu înlănțuită."

::: warning Erori tipice
- dereferențierea unui pointer `nullptr`;
- pierderea capului listei la inserare/ștergere (nu se actualizează `cap`);
- *memory leak* — `new` fără `delete`;
- confuzia între parcurgerile arborelui (RSD/SRD/SDR).
:::

## Conexiuni cu alte teme

- **Stiva de apeluri** este exact mecanismul care face posibilă **recursivitatea** de la
  [Limbaje de programare](/stiintific/02-limbaje-programare) — fiecare apel depune pe stivă parametrii
  și adresa de revenire.
- **Coada** este structura din spatele **BFS**, iar DFS-ul recursiv folosește implicit stiva — vezi
  [Teoria grafurilor](/stiintific/05-teoria-grafurilor); tot acolo, arborele apare ca graf conex fără cicluri.
- **BST** transpune ideea [căutării binare](/stiintific/01-algoritmi) într-o structură dinamică, ce
  acceptă inserări și ștergeri fără „mutarea" elementelor.
- Împărțirea memoriei în stivă/heap ține de gestiunea memoriei făcută de
  [sistemul de operare](/stiintific/08-sisteme-de-operare), pe RAM-ul descris la
  [Arhitectura sistemelor](/stiintific/07-arhitectura-sistemelor).
- Ierarhia de foldere a sistemului de fișiere și modelele istorice **ierarhic**/**rețea** de la
  [Baze de date](/stiintific/06-baze-de-date) sunt, structural, arbori și grafuri.

## Recapitulare

- Alocarea dinamică folosește **heap-ul** prin `new`/`delete`; atenție la *leak* și *dangling pointer*.
- Structuri **liniare**: liste (simplu/dublu/circulare), **stivă** (LIFO), **coadă** (FIFO).
- Structuri **arborescente**: arbore binar, **BST** (stâng < rădăcină < drept).
- Parcurgeri: **preordine (RSD)**, **inordine (SRD)**, **postordine (SDR)**; inordinea pe BST → ordine crescătoare.

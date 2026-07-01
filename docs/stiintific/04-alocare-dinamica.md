# 4. Alocarea dinamică a memoriei

> Se studiază la liceu (clasa a XI-a). Permite gestionarea memoriei în timpul execuției și construirea
> **structurilor de date dinamice** (liste, stive, cozi, arbori).

## 1. Teorie

### 4.1. Conceptul de alocare dinamică

Memoria unui program se împarte în **zona statică** (variabile globale), **stivă** (variabile locale,
apeluri de funcții) și **heap** (memorie alocată dinamic, la cerere). **Alocarea dinamică** permite
rezervarea memoriei **în timpul execuției**, în funcție de necesități, și **eliberarea** ei când nu mai
e folosită.

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

| Structură | Caracteristică |
|---|---|
| **Listă simplu înlănțuită** | un pointer „următor" per nod |
| **Listă dublu înlănțuită** | pointeri „anterior" și „următor" |
| **Listă circulară** | ultimul nod indică spre primul |

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

## Recapitulare

- Alocarea dinamică folosește **heap-ul** prin `new`/`delete`; atenție la *leak* și *dangling pointer*.
- Structuri **liniare**: liste (simplu/dublu/circulare), **stivă** (LIFO), **coadă** (FIFO).
- Structuri **arborescente**: arbore binar, **BST** (stâng < rădăcină < drept).
- Parcurgeri: **preordine (RSD)**, **inordine (SRD)**, **postordine (SDR)**; inordinea pe BST → ordine crescătoare.

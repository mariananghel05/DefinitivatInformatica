# 2. Limbaje de programare (C++)

> Se studiază la liceu (clasele IX–XII, filiera teoretică, profil real). Programa admite C/C++/Pascal;
> în acest curs folosim **C++** modern, standardul predat curent în școlile din România.

## 1. Teorie

### 1.1. Sintaxă și medii de programare

Un **limbaj de programare** are un **vocabular** (cuvinte-cheie, identificatori, operatori, separatori),
o **sintaxă** (reguli de scriere) și o **semantică** (înțelesul construcțiilor). Programele se scriu
într-un **mediu de programare** (IDE) și se transformă în cod executabil prin **compilare**.

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Salut, definitivat!" << endl;
    return 0;   // cod de retur către sistemul de operare
}
```

### 1.2. Elemente de bază

- **Identificatori**: nume de variabile/funcții (literă/`_`, apoi litere/cifre/`_`).
- **Constante**: literale (`42`, `3.14`, `'A'`, `"text"`) sau simbolice (`const int N = 100;`).
- **Tipuri de date simple** și dimensiuni uzuale:

| Tip | Semnificație | Dimensiune uzuală |
|---|---|---|
| `int` | întreg | 4 octeți |
| `long long` | întreg mare | 8 octeți |
| `float` / `double` | real | 4 / 8 octeți |
| `char` | caracter | 1 octet |
| `bool` | logic (`true`/`false`) | 1 octet |

- **Operatori**: aritmetici (`+ - * / %`), relaționali (`< <= > >= == !=`), logici (`&& || !`),
  pe biți (`& | ^ ~ << >>`), de atribuire (`= += ...`), incrementare/decrementare (`++ --`).
- **Citire/scriere**: `cin >> x;` și `cout << x;`.

```cpp
int a, b;
cin >> a >> b;
cout << "Suma = " << a + b << "\n";
cout << "Catul = " << a / b << ", restul = " << a % b << "\n";
```

::: warning Capcane numerice frecvente (apar des în subiecte)
- `7 / 2` este `3` — împărțire **întreagă** între întregi; `7.0 / 2` este `3.5`;
- `int` reține până la ~2,1 miliarde (2³¹ − 1) — produsele și sumele mari cer `long long`;
- numerele reale se compară cu o **toleranță** (`fabs(a - b) < 1e-9`), nu cu `==` — reprezentarea lor
  în memorie este aproximativă;
- caracterele sunt coduri numerice: `'A' + 1` este `'B'`, iar `cifra - '0'` transformă caracterul-cifră
  în valoarea sa numerică.
:::

### 1.3. Instrucțiuni

```cpp
// Decizie
if (n % 2 == 0) cout << "par";
else cout << "impar";

// Selecție multiplă
switch (zi) {
    case 1: cout << "luni"; break;
    default: cout << "alta zi";
}

// Repetitive
for (int i = 1; i <= n; ++i) cout << i << ' ';
while (n > 0) { cout << n % 10; n /= 10; }
do { cin >> x; } while (x < 0);
```

### 1.4. Tipuri de date structurate

- **Tablou (vector/matrice)** — colecție de elemente de același tip, accesate prin indice.

```cpp
int v[100];                 // vector
int a[50][50];              // matrice
// Suma elementelor de pe diagonala principală
int s = 0;
for (int i = 0; i < n; ++i) s += a[i][i];
```

**Varianta modernă — `std::vector`**, tabloul cu dimensiune dinamică din biblioteca standard:

```cpp
#include <vector>
using namespace std;

vector<int> v(n);                    // „vector" de n elemente, inițializate cu 0
vector<int> w;                       // vector gol...
w.push_back(7);                      // ...care crește la nevoie
vector<vector<int>> a(n, vector<int>(m, 0));   // matrice n × m, plină de 0

for (int i = 0; i < (int)v.size(); ++i) cin >> v[i];   // accesul: identic cu tabloul
for (int x : v) cout << x << ' ';                      // parcurgere modernă (range-for)
```

| Criteriu | Tablou static (`int v[100]`) | `std::vector<int>` |
|---|---|---|
| dimensiunea | fixată la compilare („ghicim" un maxim) | exactă, stabilită la execuție; poate crește (`push_back`) |
| lungimea curentă | ținută separat, într-un `n` | „la purtător": `v.size()` |
| transmiterea la subprograme | prin adresă, cu `n` alături | prin referință: `vector<int>& v` (sau `const&` la citire) |
| eliberarea memoriei | — (statică) / manuală la `new[]` | **automată** (își gestionează singur memoria) |

::: tip La examen
Subiectele oficiale folosesc de regulă **tablouri statice**, dar rezolvările cu `std::vector` sunt
corecte și adesea mai sigure (dimensiune exactă, fără maxim „ghicit"). Regula de conversie este
mecanică: antetul `int v[], int n` devine `vector<int>& v`, iar `n` devine `v.size()` — **corpul
algoritmului rămâne identic**.
:::

- **Înregistrare (struct)** — grupează date de tipuri diferite.

```cpp
struct Elev {
    char nume[30];
    int varsta;
    float media;
};
Elev e = {"Ana", 16, 9.50};
```

- **Șir de caractere** — în C++ avem `char[]` (stil C) și clasa `string`.

```cpp
#include <string>
string s;
getline(cin, s);                 // citește un rând întreg
cout << s.size();                // lungimea
for (char c : s) cout << c;      // parcurgere
```

### 1.5. Fișiere text

```cpp
#include <fstream>
ifstream fin("date.in");
ofstream fout("date.out");
int x, s = 0;
while (fin >> x) s += x;          // citește până la sfârșit de fișier
fout << s << "\n";
fin.close();
fout.close();
```

### 1.6. Subprograme

- **Predefinite**: din biblioteci (`<cmath>`: `sqrt`, `pow`, `abs`; `<algorithm>`: `sort`, `max`, `min`).
- **Definite de utilizator**: descompun problema (proiectare modulară).

```cpp
// Transmitere prin valoare vs. prin referință
int patrat(int x) { return x * x; }          // prin valoare (copie)
void dubleaza(int &x) { x *= 2; }            // prin referință (modifică originalul)
```

**Ce se întâmplă concret la apel:**

```cpp
int a = 5, b = 5;
int rezultat = patrat(a);   // valoarea 5 se COPIAZĂ în x; a rămâne 5
dubleaza(b);                // x devine „alt nume" pentru b; b devine 10
cout << a << ' ' << b;      // afișează: 5 10
```

Regulă de proiectare: parametrii de **intrare** se transmit prin valoare (sau prin referință constantă,
`const &`, la date mari), iar cei de **ieșire/modificați** — prin referință. **Tablourile** se transmit
întotdeauna prin adresă, deci modificările făcute în subprogram se văd în apelator.

::: tip Variabile globale vs. locale
O variabilă **locală** există doar în blocul/funcția unde e declarată (domeniu de vizibilitate restrâns).
O variabilă **globală** e vizibilă în tot fișierul. Recomandare didactică: minimizează globalele,
transmite datele prin **parametri**.
:::

- **Subprograme recursive** — se autoapelelază; necesită **caz de bază** + **pas recursiv**.

```cpp
// Factorial recursiv
long long fact(int n) {
    if (n <= 1) return 1;        // caz de bază
    return n * fact(n - 1);      // pas recursiv
}
```

**Cum se execută `fact(4)` — stiva de apeluri:**

```text
fact(4) = 4 * fact(3)          ┐  coborâre: apelurile se „stivuiesc"
  fact(3) = 3 * fact(2)        │  unul peste altul, până la
    fact(2) = 2 * fact(1)      │  atingerea cazului de bază
      fact(1) = 1              ┘  ← caz de bază
    fact(2) = 2 * 1 = 2        ┐  revenire: rezultatele se
  fact(3) = 3 * 2 = 6          │  calculează în ordine inversă,
fact(4) = 4 * 6 = 24           ┘  pe măsură ce apelurile se închid
```

Fiecare apel ocupă un „etaj" pe **stiva de apeluri** (parametrii + adresa de revenire) — de aceea
recursivitatea fără caz de bază umple stiva (*stack overflow*). Mecanismul stivei este detaliat la
[Alocarea dinamică](/stiintific/04-alocare-dinamica).

### 1.7. Programarea orientată pe obiecte (POO)

Patru principii: **abstractizare**, **încapsulare**, **moștenire**, **polimorfism**.

```cpp
class Punct {
private:                         // încapsulare: date ascunse
    double x, y;
public:
    Punct(double x = 0, double y = 0) : x(x), y(y) {}   // constructor
    double distantaLaOrigine() const { return sqrt(x * x + y * y); }  // metodă
    ~Punct() {}                  // destructor
};

// Moștenire și polimorfism
class Forma {
public:
    virtual double arie() const = 0;   // metodă virtuală pură
    virtual ~Forma() {}
};
class Cerc : public Forma {
    double r;
public:
    Cerc(double r) : r(r) {}
    double arie() const override { return 3.14159 * r * r; }
};
```

**Polimorfismul „la lucru"** — același apel se comportă diferit după obiectul concret:

```cpp
Forma* f = new Cerc(2);
cout << f->arie();     // se apelează Cerc::arie() — legare DINAMICĂ, datorată lui virtual
```

Fără `virtual`, compilatorul ar alege metoda după **tipul pointerului** (`Forma`), nu după obiectul
real (`Cerc`) — aceasta este diferența dintre legarea statică și cea dinamică, întrebare tipică de teorie.

| Concept | Semnificație |
|---|---|
| **Clasă / obiect** | tipar / instanță concretă a tiparului |
| **Membri** | date (atribute) + metode (funcții) |
| **Constructor / destructor** | inițializare / eliberare la creare/distrugere |
| **Niveluri de acces** | `private`, `protected`, `public` |
| **Supraîncărcare** | același nume, semnături diferite |
| **Derivare (moștenire)** | clasă nouă pe baza alteia existente |

## 2. Competențe vizate

- **utilizarea corectă a tipurilor de date** și a operatorilor în expresii;
- **scrierea de programe** cu structuri de control și prelucrarea tablourilor/șirurilor;
- **proiectarea modulară** prin subprograme (parametri, domeniu de vizibilitate);
- **lucrul cu fișiere text** pentru intrare/ieșire;
- **înțelegerea principiilor POO** și implementarea de clase simple.

::: info Corelare cu programa școlară
- **Liceu, cl. a X-a:** 1.1–1.2 (implementarea algoritmilor în limbaj, utilizarea unui mediu de programare), 2.1–2.3 (tablouri, fișiere text).
- **Liceu, cl. a XI-a:** 1.3–1.4 (șiruri de caractere, structuri neomogene), 3.1–3.5 (subprograme, recursivitate).
- **Gimnaziu, cl. a VII-a:** 1.4 (mediu de programare), 3.3 (implementarea algoritmilor).
:::

## 3. Abordare metodică

**Metode:** demonstrarea (exemple comentate la videoproiector), exercițiul (laborator pe calculator),
problematizarea, **învățarea asistată de calculator** (testare imediată a programelor).

**Tip de lecție** (laborator de *formare de deprinderi* — „subprograme"):
actualizare → prezentarea sintaxei → aplicație rezolvată împreună → aplicații independente → evaluare.

**Activități de învățare:** completarea unui program „cu lacune"; depanarea unui program cu erori
intenționate (*debugging*); modularizarea unui program lung în subprograme.

**Itemi de evaluare:**
- *obiectiv:* „Ce afișează `cout << 7/2 << ' ' << 7%2;`?" (răspuns: `3 1`);
- *semiobiectiv:* „Completați antetul unui subprogram care primește un vector prin referință.";
- *subiectiv:* „Definiți o clasă `Fractie` cu numărător/numitor și o metodă de simplificare."

::: warning Erori tipice
- împărțirea întreagă neintenționată (`7/2` dă `3`, nu `3.5`);
- depășirea limitelor tablourilor;
- transmitere **prin valoare** când era nevoie de **referință** (modificările se pierd);
- recursivitate **fără caz de bază** → stivă plină (*stack overflow*);
- confuzie `class` vs. `struct` la nivelul implicit de acces (`private` vs. `public`).
:::

## Conexiuni cu alte teme

- Limbajul este „unealta" cu care se implementează tot ce apare la [Algoritmi](/stiintific/01-algoritmi)
  și [Metode de programare](/stiintific/03-metode-programare); recursivitatea de aici este motorul
  backtracking-ului și al lui divide et impera.
- **Referințele** și lucrul cu adrese pregătesc pointerii și structurile dinamice de la
  [Alocarea dinamică](/stiintific/04-alocare-dinamica); `struct` devine acolo nodul listelor și arborilor.
- **Fișierele text** (secțiunea 1.5) sunt gestionate de
  [sistemul de operare](/stiintific/08-sisteme-de-operare); compilarea transformă sursa în cod-mașină
  executat de procesorul descris la [Arhitectura sistemelor](/stiintific/07-arhitectura-sistemelor) —
  iar dimensiunile tipurilor (int = 4 octeți) țin de organizarea memoriei.
- `struct Elev` este versiunea „în cod" a unei **înregistrări** dintr-un tabel de
  [bază de date](/stiintific/06-baze-de-date).

## Recapitulare

- Elemente de bază: **tipuri**, **operatori**, **instrucțiuni** (decizie, repetitive, switch).
- Date structurate: **tablou** (static sau dinamic — `std::vector`), **struct**, **string**; **fișiere text** pentru I/O.
- **Subprograme**: prin valoare/referință, variabile locale/globale, **recursivitate** (caz de bază!).
- **POO**: abstractizare, încapsulare, moștenire, polimorfism; clase, obiecte, constructori/destructori.

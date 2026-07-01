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

## Recapitulare

- Elemente de bază: **tipuri**, **operatori**, **instrucțiuni** (decizie, repetitive, switch).
- Date structurate: **tablou**, **struct**, **string**; **fișiere text** pentru I/O.
- **Subprograme**: prin valoare/referință, variabile locale/globale, **recursivitate** (caz de bază!).
- **POO**: abstractizare, încapsulare, moștenire, polimorfism; clase, obiecte, constructori/destructori.

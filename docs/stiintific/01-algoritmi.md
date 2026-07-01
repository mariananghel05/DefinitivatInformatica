# 1. Algoritmi

> Tema fundamentală a întregii informatici. Se studiază la **gimnaziu** (intuitiv, prin blocuri grafice)
> și la **liceu** (formal, în pseudocod și limbaj de programare). Stă la baza tuturor celorlalte teme.

## 1. Teorie

### 1.1. Noțiunea de algoritm și caracteristici

Un **algoritm** este o succesiune **finită** și **ordonată** de pași (operații) bine definiți, care,
pornind de la datele de intrare, conduce în timp finit la obținerea rezultatelor (datelor de ieșire),
rezolvând o clasă de probleme.

**Caracteristici (proprietăți) ale unui algoritm:**

| Proprietate | Semnificație |
|---|---|
| **Claritate** (precizie) | fiecare pas este formulat fără ambiguitate |
| **Finitudine** | se termină după un număr finit de pași |
| **Generalitate** | rezolvă o clasă de probleme, nu un singur caz particular |
| **Determinism** | pentru aceleași date de intrare produce mereu același rezultat |
| **Eficiență** | folosește rațional resursele (timp și memorie) |
| **Intrare / ieșire** | are zero sau mai multe date de intrare și cel puțin o ieșire |

### 1.2. Principiile programării structurate

Programarea structurată afirmă că **orice algoritm** poate fi exprimat folosind doar **trei structuri
fundamentale** (teorema Böhm–Jacopini), fără salturi necontrolate (`goto`):

- **structura secvențială** — pași executați unul după altul;
- **structura de decizie** (alternativă) — `dacă … atunci … altfel …`;
- **structura repetitivă** (ciclică) — `cât timp`, `repetă … până când`, `pentru`.

Avantaje: program **lizibil**, ușor de testat, depanat și întreținut.

### 1.3. Reprezentarea algoritmilor

- **Pseudocod** — limbaj semiformal, apropiat de limbajul natural (folosit la bacalaureat).
- **Scheme logice** — reprezentare grafică prin blocuri (start/stop, calcul, decizie, intrare/ieșire).
- **Blocuri grafice** — medii vizuale interactive (de ex. Scratch, Blockly), utile la gimnaziu.

```text
// Pseudocod — structura repetitivă „pentru": suma 1 + 2 + ... + n
citește n
suma ← 0
pentru i ← 1, n execută
    suma ← suma + i
scrie suma
```

::: tip Denumiri intuitive în exemple
În toate exemplele de cod folosim **nume vorbitoare** pentru variabile și funcții (`suma`, `numar`,
`stanga`, `mijloc`), nu litere izolate (`a`, `b`, `m`). Singurele prescurtări admise sunt cele
**consacrate**, însoțite mereu de un comentariu cu denumirea completă — de ex. `cmmdc` (cel mai mare
divizor comun) sau `cmmmc` (cel mai mic multiplu comun).
:::

### 1.4. Algoritmi elementari

Aplicabili în prelucrarea datelor: lucrul cu **cifrele unui număr**, **divizibilitate**, **prelucrarea
unei secvențe de valori**, **șiruri recurente**.

```cpp
// Suma cifrelor unui număr natural
int sumaCifrelor(int numar) {
    int suma = 0;
    while (numar > 0) {
        suma += numar % 10;   // adună ultima cifră
        numar /= 10;          // elimină ultima cifră
    }
    return suma;
}

// cmmdc = Cel Mai Mare Divizor Comun (algoritmul lui Euclid)
int cmmdc(int numar1, int numar2) {
    while (numar2 != 0) {
        int rest = numar1 % numar2;
        numar1 = numar2;
        numar2 = rest;
    }
    return numar1;
}

// cmmmc = Cel Mai Mic Multiplu Comun (se deduce din cmmdc)
long long cmmmc(int numar1, int numar2) {
    // împărțim înainte de înmulțire, ca să evităm depășirea
    return (long long)numar1 / cmmdc(numar1, numar2) * numar2;
}
```

::: tip Verificarea primalității eficient
Un număr `n` se testează că este prim verificând divizorii până la `√n`, nu până la `n`.
```cpp
bool estePrim(int numar) {
    if (numar < 2) return false;
    for (int divizor = 2; (long long)divizor * divizor <= numar; ++divizor)
        if (numar % divizor == 0) return false;   // are un divizor propriu ⇒ nu e prim
    return true;
}
```
:::

### 1.5. Algoritmi de sortare

Sortarea = rearanjarea elementelor unui șir în ordine (crescătoare/descrescătoare). Iată **ideea**
fiecărei metode, înainte de cod:

- **Metoda bulelor (bubble sort):** se compară perechi de elemente **vecine** și se interschimbă dacă sunt
  în ordine greșită; după fiecare „trecere" prin șir, cel mai mare element „urcă" la capăt (ca o bulă).
  Se repetă până când nu mai e nevoie de nicio interschimbare.
- **Sortarea prin inserție (insertion sort):** se parcurge șirul de la stânga la dreapta și fiecare element
  nou este **inserat la locul potrivit** în partea deja sortată (ca atunci când ordonezi cărțile de joc în
  mână). Foarte eficientă pe date **aproape sortate**.
- **Sortarea prin selecție (selection sort):** la fiecare pas se **caută minimul** din partea nesortată și
  se aduce pe prima poziție liberă. Face puține interschimbări, dar multe comparații.
- **Sortarea prin numărare (counting sort):** **nu compară** elemente; numără de câte ori apare fiecare
  valoare și reconstruiește șirul sortat din aceste frecvențe. Funcționează doar pentru **valori întregi
  într-un interval mic**, dar atinge timp liniar.

```cpp
// Sortare prin metoda bulelor (bubble sort) — O(n^2); n = numărul de elemente
void bubbleSort(int numere[], int n) {
    bool schimbat = true;
    for (int i = 0; i < n - 1 && schimbat; ++i) {
        schimbat = false;                              // presupunem că șirul e deja sortat
        for (int j = 0; j < n - 1 - i; ++j)
            if (numere[j] > numere[j + 1]) {
                std::swap(numere[j], numere[j + 1]);   // vecini în ordine greșită ⇒ interschimbăm
                schimbat = true;                       // optimizare: oprire dacă nu s-a mai schimbat nimic
            }
    }
}

// Sortare prin inserție (insertion sort) — O(n^2), eficient pe date aproape sortate
void insertionSort(int numere[], int n) {
    for (int i = 1; i < n; ++i) {
        int curent = numere[i];                  // elementul de inserat în partea deja sortată
        int j = i - 1;
        while (j >= 0 && numere[j] > curent) {   // mutăm la dreapta elementele mai mari ca el
            numere[j + 1] = numere[j];
            --j;
        }
        numere[j + 1] = curent;                  // poziția potrivită pentru element
    }
}

// Sortare prin selecție (selection sort) — O(n^2)
void selectionSort(int numere[], int n) {
    for (int i = 0; i < n - 1; ++i) {
        int pozMinim = i;                                  // poziția minimului din partea nesortată
        for (int j = i + 1; j < n; ++j)
            if (numere[j] < numere[pozMinim]) pozMinim = j;
        std::swap(numere[i], numere[pozMinim]);            // aducem minimul pe prima poziție liberă
    }
}
```

**Sortarea prin numărare** (counting sort) — pentru valori întregi într-un interval mic `[0, vmax]`,
atinge complexitatea liniară **O(n + vmax)**:

```cpp
// numere[] conține valori întregi în intervalul [0, valoareMax]
void countingSort(int numere[], int n, int valoareMax) {
    std::vector<int> frecventa(valoareMax + 1, 0);     // frecventa[v] = de câte ori apare valoarea v
    for (int i = 0; i < n; ++i) frecventa[numere[i]]++;
    int pozitie = 0;
    for (int valoare = 0; valoare <= valoareMax; ++valoare)
        while (frecventa[valoare]--)                   // refacem șirul în ordine crescătoare
            numere[pozitie++] = valoare;
}
```

### 1.6. Algoritmul de interclasare

Combină **două șiruri deja sortate** într-unul singur sortat, în timp liniar **O(n + m)**:

```cpp
// Interclasarea a doi vectori sortați crescător
std::vector<int> interclasare(const std::vector<int>& primul, const std::vector<int>& alDoilea) {
    std::vector<int> rezultat;
    size_t iPrim = 0, iAlDoilea = 0;
    while (iPrim < primul.size() && iAlDoilea < alDoilea.size())
        // alegem mereu cel mai mic element disponibil dintre cei doi vectori
        rezultat.push_back(primul[iPrim] <= alDoilea[iAlDoilea]
                           ? primul[iPrim++] : alDoilea[iAlDoilea++]);
    while (iPrim < primul.size())        rezultat.push_back(primul[iPrim++]);       // restul din primul
    while (iAlDoilea < alDoilea.size())  rezultat.push_back(alDoilea[iAlDoilea++]); // restul din al doilea
    return rezultat;
}
```

> Interclasarea stă la baza sortării prin interclasare (*merge sort*) — vezi
> [Metode de programare → Divide et impera](/stiintific/03-metode-programare#_3-divide-et-impera).

### 1.7. Algoritmi de căutare

```cpp
// Căutare secvențială (liniară) — O(n)
int cautareSecventiala(int numere[], int n, int cautat) {
    for (int i = 0; i < n; ++i)
        if (numere[i] == cautat) return i;   // poziția găsită
    return -1;                                // negăsit
}

// Căutare binară — O(log n), DOAR pe șir sortat
int cautareBinara(int numere[], int n, int cautat) {
    int stanga = 0, dreapta = n - 1;
    while (stanga <= dreapta) {
        int mijloc = stanga + (dreapta - stanga) / 2;   // evită depășirea
        if (numere[mijloc] == cautat) return mijloc;
        if (numere[mijloc] < cautat) stanga = mijloc + 1;
        else dreapta = mijloc - 1;
    }
    return -1;
}
```

::: warning Condiția căutării binare
Căutarea binară funcționează **doar pe un șir sortat**. Greșeala clasică este aplicarea ei pe date
nesortate. De asemenea, calculul mijlocului ca `(stanga + dreapta) / 2` poate produce depășire pentru
valori mari — preferă `stanga + (dreapta - stanga) / 2`.
:::

### 1.8. Analiza complexității unui algoritm

Eficiența se măsoară prin **complexitatea timp** (numărul de operații) și **complexitatea spațiu**
(memoria suplimentară folosită), exprimate asimptotic cu notația **O** (cazul cel mai defavorabil).

| Algoritm | Complexitate timp | Observații |
|---|---|---|
| Căutare secvențială | O(n) | orice șir |
| Căutare binară | O(log n) | doar șir sortat |
| Bubble / inserție / selecție | O(n²) | simple, ineficiente pe n mare |
| Counting sort | O(n + vmax) | valori întregi mici |
| Interclasare (merge) | O(n log n) | stabilă |

Clase uzuale, în ordinea creșterii: **O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!)**.

### 1.9. Specificitatea limbajului C++ — funcții uzuale din biblioteca standard

La examen, mai ales la **Subiectul I.3** (subprogram cu prelucrare de șiruri și fișiere), trebuie să
cunoști funcțiile predefinite și **semnătura** lor (ce parametri primesc și ce întorc). Mai jos sunt
grupate cele mai folosite, cu antet și exemplu de apel.

#### a) Conversii între text și numere

| Antet (semnătură) | Antet inclus | Ce face |
|---|---|---|
| `int atoi(const char* sir);` | `<cstdlib>` | convertește un șir stil C în `int` (0 dacă nu e număr) |
| `double atof(const char* sir);` | `<cstdlib>` | convertește un șir stil C în `double` |
| `long strtol(const char* sir, char** rest, int baza);` | `<cstdlib>` | conversie în `long` în baza dată; `rest` = unde s-a oprit |
| `int stoi(const string& s, size_t* poz = nullptr, int baza = 10);` | `<string>` | varianta pentru `std::string` (aruncă excepție dacă nu e număr) |
| `double stod(const string& s, size_t* poz = nullptr);` | `<string>` | `std::string` → `double` |
| `string to_string(int valoare);` | `<string>` | număr → `std::string` |

```cpp
#include <cstdlib>   // atoi, atof
#include <string>    // stoi, to_string

char text[] = "2026";
int an = atoi(text);                 // an = 2026
double pi = atof("3.14");            // pi = 3.14

std::string s = "150";
int numar = std::stoi(s);            // numar = 150
std::string inapoi = std::to_string(numar * 2);   // inapoi = "300"
```

#### b) Șiruri de caractere stil C — `<cstring>`

Atenție: aceste funcții lucrează cu `char[]` terminat cu caracterul nul `'\0'`. Variantele cu prefixul
**`n`** (`strncpy`, `strncat`, `strncmp`) limitează numărul de caractere prelucrate — mai sigure împotriva
depășirii bufferului.

| Antet (semnătură) | Ce face |
|---|---|
| `size_t strlen(const char* sir);` | lungimea șirului (fără `'\0'`) |
| `char* strcpy(char* dest, const char* sursa);` | copiază `sursa` în `dest` |
| `char* strncpy(char* dest, const char* sursa, size_t n);` | copiază **cel mult `n`** caractere |
| `char* strcat(char* dest, const char* sursa);` | concatenează `sursa` la finalul lui `dest` |
| `int strcmp(const char* a, const char* b);` | compară lexicografic: `0` egale, `<0`/`>0` ordine |
| `int strncmp(const char* a, const char* b, size_t n);` | compară primele `n` caractere |
| `char* strchr(const char* sir, int caracter);` | adresa primei apariții a unui caracter (sau `nullptr`) |
| `char* strstr(const char* sir, const char* subsir);` | adresa primei apariții a unui subșir |

```cpp
#include <cstring>

char nume[30];
strcpy(nume, "Ion");                 // nume = "Ion"
strcat(nume, " Popescu");            // nume = "Ion Popescu"
size_t lungime = strlen(nume);       // lungime = 11

char prefix[4];
strncpy(prefix, nume, 3);            // copiază doar "Ion"...
prefix[3] = '\0';                    // ...și închide manual șirul (strncpy NU pune mereu '\0')

if (strcmp(nume, "Ion Popescu") == 0)    // șiruri identice
    /* ... */;
char* gasit = strstr(nume, "Pop");   // gasit indică spre "Popescu"
```

#### c) Clasificarea și conversia caracterelor — `<cctype>`

| Antet (semnătură) | Întoarce adevărat / face |
|---|---|
| `int isdigit(int c);` | `c` este cifră `'0'`–`'9'` |
| `int isalpha(int c);` | `c` este literă |
| `int isalnum(int c);` | literă sau cifră |
| `int isspace(int c);` | spațiu, tab, newline etc. |
| `int isupper(int c);` / `int islower(int c);` | literă mare / mică |
| `int toupper(int c);` / `int tolower(int c);` | întoarce litera mare / mică |

```cpp
#include <cctype>

std::string text = "Salut 2026!";
int cifre = 0, litere = 0;
for (char caracter : text) {
    if (isdigit(caracter)) cifre++;
    else if (isalpha(caracter)) litere++;
}
char litMare = toupper('a');         // litMare = 'A'
```

#### d) Clasa `std::string` — metode des folosite

| Apel (semnătură) | Ce face |
|---|---|
| `s.size()` / `s.length()` | numărul de caractere |
| `s.substr(poz, lungime)` | extrage un subșir începând de la `poz` |
| `s.find(subsir)` | poziția primei apariții (sau `string::npos` dacă lipsește) |
| `s.c_str()` | întoarce echivalentul `const char*` (pentru funcții stil C) |
| `s.append(t)` / `s + t` | concatenare |
| `s.insert(poz, t)` / `s.erase(poz, lungime)` | inserare / ștergere |

```cpp
#include <string>

std::string propozitie = "limbajul C++";
size_t poz = propozitie.find("C++");        // poz = 9
std::string cuvant = propozitie.substr(0, 8); // cuvant = "limbajul"
if (propozitie.find("Java") == std::string::npos)
    /* subșirul nu există */;
int n = std::atoi(propozitie.c_str());      // interfață cu funcții stil C
```

#### e) Utilitare din `<algorithm>`, `<numeric>` și `<cmath>`

| Antet (semnătură) | Antet inclus | Ce face |
|---|---|---|
| `sort(prim, ultim);` | `<algorithm>` | sortează crescător intervalul `[prim, ultim)` |
| `sort(prim, ultim, comparator);` | `<algorithm>` | sortează după o regulă proprie |
| `max(a, b)` / `min(a, b)` | `<algorithm>` | maximul / minimul a două valori |
| `max_element(prim, ultim)` / `min_element(prim, ultim)` | `<algorithm>` | iterator spre cel mai mare / mic element |
| `reverse(prim, ultim);` | `<algorithm>` | inversează ordinea elementelor |
| `count(prim, ultim, valoare)` | `<algorithm>` | de câte ori apare `valoare` |
| `accumulate(prim, ultim, start)` | `<numeric>` | suma elementelor (pornind de la `start`) |
| `sqrt(x)`, `pow(baza, exp)`, `abs(x)`, `floor(x)`, `ceil(x)`, `round(x)` | `<cmath>` | radical, putere, modul, parte întreagă etc. |

```cpp
#include <algorithm>
#include <numeric>
#include <vector>

std::vector<int> numere = {5, 2, 9, 1};
std::sort(numere.begin(), numere.end());                 // {1, 2, 5, 9}
std::sort(numere.begin(), numere.end(), std::greater<int>()); // descrescător: {9, 5, 2, 1}

int maxim = *std::max_element(numere.begin(), numere.end()); // maxim = 9
int suma  = std::accumulate(numere.begin(), numere.end(), 0); // suma  = 17
```

::: tip De reținut pentru examen
- La șiruri stil C, după `strncpy` pune **manual** `'\0'`, altfel șirul poate rămâne neterminat.
- `strcmp`/`strncmp` **nu** întorc „true/false", ci `0` la egalitate — testează `== 0`.
- Pentru `std::string`, rezultatul lui `find` se compară cu `std::string::npos`, nu cu `-1`.
- `sort` ordonează implicit **crescător**; pentru descrescător folosește un comparator (`std::greater<int>()`).
:::

## 2. Competențe vizate

Prin această temă, elevul ajunge să:

- **identifice datele de intrare/ieșire** și să descompună o problemă în pași (gândire algoritmică);
- **utilizeze corect cele trei structuri fundamentale** ale programării structurate;
- **reprezinte algoritmi** în pseudocod / scheme logice / blocuri grafice;
- **aplice algoritmi elementari și clasici** (sortare, căutare, interclasare) la probleme noi;
- **analizeze și compare eficiența** unor algoritmi (criteriul timp/spațiu).

Aceste competențe corespund celor de specialitate ale cadrului didactic — *utilizarea creativă a
modalităților de elaborare a algoritmilor* (vezi [Competențele cadrului](/competente-cadru)).

::: info Corelare cu programa școlară
Competențe specifice formate prin această temă (coduri — vezi [Competențe din programele școlare](/competente-scolare)):
- **Gimnaziu (Informatică și TIC):** cl. V — 2.1–2.4; cl. VI — 2.1–2.3; cl. VII — 2.1–2.2; cl. VIII — 2.1–2.2.
- **Liceu, cl. a IX-a:** 2.1–2.3 (date + descrierea algoritmilor), 3.1–3.3 (pseudocod, programare structurată).
- **Liceu, cl. a X-a:** 3.1 (algoritmi fundamentali — căutare, sortare, interclasare).
:::

## 3. Abordare metodică

**Metode didactice potrivite:**
- **problematizarea** și **învățarea prin descoperire** — elevii deduc pașii pornind de la o problemă
  concretă (ex. „cum aflăm cel mai mare element?");
- **algoritmizarea** și **modelarea** — formalizarea pas cu pas;
- **exercițiul** — esențial pentru fixarea structurilor;
- **demonstrarea** cu medii vizuale (blocuri grafice la gimnaziu) și **exemplul comentat** la liceu.

**Tip de lecție și momente** (ex. lecție de *predare-învățare* pentru „căutarea binară"):
1. moment organizatoric;
2. captarea atenției / actualizarea cunoștințelor (reamintim căutarea secvențială);
3. anunțarea temei și a competențelor;
4. dirijarea învățării — analiza problemei, deducerea algoritmului, exemplu pas cu pas;
5. obținerea performanței — elevii rulează algoritmul pe un caz dat;
6. evaluarea (feedback) și tema pentru acasă.

**Activități de învățare:** „joc de rol" cu căutarea într-un dicționar (analogie cu căutarea binară);
trasarea (table de execuție) a unui algoritm; compararea timpilor pentru două sortări.

**Exemple de itemi de evaluare:**
- *item obiectiv (alegere multiplă):* „Care algoritm necesită un șir **sortat**? a) secvențial b) binar";
- *item semiobiectiv (răspuns scurt):* „Câte comparații face căutarea binară în cel mai rău caz pe 1000 de elemente?";
- *item subiectiv (rezolvare de problemă):* „Scrieți un subprogram care sortează crescător un vector prin metoda selecției."

::: warning Erori tipice ale elevilor
- confundă **=** (atribuire) cu **==** (comparație);
- aplică **căutarea binară pe date nesortate**;
- „ciclu infinit" — uită să modifice variabila de control în `cât timp`;
- la sortare, **greșesc limitele** buclelor (`n-1`, `n-1-i`) → ies din vector.
:::

## Recapitulare

- Algoritm = succesiune **finită**, **clară**, **generală** de pași; caracteristici esențiale: finitudine, determinism, eficiență.
- Programarea structurată: trei structuri — **secvențială, decizie, repetitivă**.
- Algoritmi-cheie: **sortări** (bule, inserție, selecție, numărare), **interclasare**, **căutare** (secvențială O(n), binară O(log n)).
- Complexitatea se exprimă cu **notația O**; ordinea: O(1) < O(log n) < O(n) < O(n log n) < O(n²).
- Funcții uzuale din biblioteca standard C++: conversii (`atoi`, `stoi`, `to_string`), șiruri (`strlen`,
  `strncpy`, `strstr`), caractere (`isdigit`, `toupper`), `string` (`substr`, `find`), `sort`/`max`/`min`.

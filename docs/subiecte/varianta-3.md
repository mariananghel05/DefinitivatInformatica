# Varianta 3 — Antrenament (format real)

> Variantă **de antrenament**, construită în structura reală a probei (Subiectul I — 60 p, Subiectul II —
> 30 p, 10 p din oficiu). Nu este un subiect oficial; servește exersării în condiții similare examenului.
> Timp recomandat: 4 ore.

---

## SUBIECTUL I (60 de puncte)

### I.1. Metoda backtracking (15 p)

*Cerință: prezentare „pe plan de idei" — noțiuni preliminare; descriere + exemplificare; un exemplu de
aplicare cu implementare.*

::: details Vezi rezolvarea I.1

**Noțiuni preliminare.**
- **Spațiul soluțiilor:** mulțimea tuturor configurațiilor posibile (de regulă, vectori `st[1..k]`).
- **Soluție parțială / completă:** o configurație construită până la nivelul `k`, respectiv până la `n`.
- **Condiție de continuare:** test care verifică dacă o alegere poate conduce la o soluție validă.

**Descriere.** Backtracking construiește soluția **element cu element**; la fiecare nivel încearcă pe rând
valorile posibile, verifică **condiția de continuare** și, dacă e îndeplinită, avansează la nivelul
următor; dacă nicio valoare nu e validă (sau s-a epuizat nivelul), **revine** (backtrack) la nivelul
anterior pentru a încerca altă valoare. Complexitatea este, în general, **exponențială**.

**Exemplificare** — generarea submulțimilor mulțimii `{1, 2, 3}`: pentru fiecare element se decide
*0 (absent)* sau *1 (prezent)*, rezultând 2³ = 8 submulțimi.

**Exemplu de aplicare.** *Enunț:* să se genereze toate submulțimile mulțimii `{1, …, n}`. *Soluție:*
vector `st`, unde `st[k] ∈ {0,1}` indică dacă elementul `k` aparține submulțimii; la nivelul `n+1` afișăm
submulțimea.

```cpp
#include <iostream>
using namespace std;

int n;
int st[25];

void afiseaza() {
    cout << "{ ";
    for (int i = 1; i <= n; ++i)
        if (st[i] == 1) cout << i << ' ';
    cout << "}\n";
}

void back(int k) {
    if (k > n) { afiseaza(); return; }   // soluție completă
    for (int val = 0; val <= 1; ++val) { // decizie: element absent / prezent
        st[k] = val;
        back(k + 1);
    }
}

int main() {
    cin >> n;
    back(1);
    return 0;
}
```
:::

### I.2. Rețele de calculatoare și servicii Internet (15 p)

::: details Vezi rezolvarea I.2

**Noțiuni preliminare.** O **rețea de calculatoare** este un ansamblu de dispozitive interconectate care
comunică și partajează resurse. Comunicarea se face după reguli numite **protocoale** (familia **TCP/IP**).

**Tipuri de rețele după arie de acoperire:**

| Tip | Acoperire | Exemplu |
|---|---|---|
| **PAN** | personală | Bluetooth |
| **LAN** | locală (clădire) | rețeaua unui laborator |
| **MAN** | metropolitană (oraș) | rețea municipală |
| **WAN** | extinsă (global) | Internetul |

**Patru servicii oferite de Internet:**
1. **WWW** — pagini web legate prin hyperlink-uri (protocol HTTP/HTTPS);
2. **e-mail** — poșta electronică (SMTP/POP3/IMAP);
3. **transfer de fișiere** (FTP) și **stocare în cloud**;
4. **aplicații colaborative** — documente partajate, platforme de e-learning, videoconferință.

**Adresare:** fiecare dispozitiv are o **adresă IP**; site-urile au **nume de domeniu** (ex. `edu.ro`),
traduse în adrese IP de serviciul **DNS**.
:::

### I.3. Numere palindrom (15 p)

*Subprogramul `oglindit(n)` returnează răsturnatul numărului natural `n` (ex. `oglindit(123)=321`). Din
fișierul `numere.in` (cel mult 10⁶ numere naturale din [1,10⁹]) se cere câte numere sunt **palindrom** și
cel mai mare palindrom (sau −1 dacă nu există).*

::: details Vezi rezolvarea I.3

**Algoritm (în limbaj natural).** Un număr este **palindrom** dacă este egal cu răsturnatul său. Citim
numerele din fișier; pentru fiecare calculăm `oglindit` și, dacă este egal cu numărul, incrementăm un
contor și actualizăm maximul. Afișăm contorul și maximul (sau −1 dacă nu s-a găsit niciun palindrom).

```cpp
#include <iostream>
#include <fstream>
using namespace std;

// răsturnatul (oglinditul) unui număr natural
long long oglindit(long long n) {
    long long r = 0;
    while (n > 0) { r = r * 10 + n % 10; n /= 10; }
    return r;
}

int main() {
    ifstream fin("numere.in");
    long long x, nrPal = 0, maxPal = -1;
    while (fin >> x)
        if (oglindit(x) == x) {      // este palindrom
            nrPal++;
            if (x > maxPal) maxPal = x;
        }
    fin.close();
    cout << nrPal << " " << maxPal << "\n";
    return 0;
}
```
:::

### I.4. Bază de date — bibliotecă școlară (15 p)

::: details Vezi rezolvarea I.4

**Model conceptual:**
- **Editura**(<u>id_editura</u>, denumire, oras)
- **Carte**(<u>id_carte</u>, titlu, autor, isbn, an_aparitie, *id_editura*)
- **Elev**(<u>id_elev</u>, nume, clasa)
- **Imprumut**(<u>id_imprumut</u>, *id_carte*, *id_elev*, data_imprumut, data_returnare)

**Relații:** o *Editură* publică mai multe *Cărți* (1:M); un *Împrumut* leagă o *Carte* și un *Elev*
(realizează relația M:N dintre cărți și elevi prin tabelul asociativ `Imprumut`).
**Restricții (FN1–FN3):** `isbn` unic; `data_returnare ≥ data_imprumut` (sau NULL dacă nu s-a returnat);
datele despre editură nu se repetă în `Carte` (se elimină dependența tranzitivă).

**Model fizic:**

| Tabel | Câmpuri | PK | FK |
|---|---|---|---|
| `Editura` | id_editura, denumire, oras | id_editura | – |
| `Carte` | id_carte, titlu, autor, isbn, an_aparitie, id_editura | id_carte | id_editura → Editura |
| `Elev` | id_elev, nume, clasa | id_elev | – |
| `Imprumut` | id_imprumut, id_carte, id_elev, data_imprumut, data_returnare | id_imprumut | id_carte → Carte, id_elev → Elev |

**Comenzi SQL — cărțile împrumutate și încă neînapoiate:**
```sql
SELECT c.titlu, e.nume, i.data_imprumut
FROM Imprumut i
JOIN Carte c ON c.id_carte = i.id_carte
JOIN Elev  e ON e.id_elev  = i.id_elev
WHERE i.data_returnare IS NULL;
```
:::

---

## SUBIECTUL al II-lea — Metodică (30 de puncte)

**Secvențe (model):**
- **A** (Informatică, liceu) — comp. spec. *Prelucrarea elementelor unui tablou unidimensional*; conținut:
  *Tablouri unidimensionale (vectori)*.
- **B** (Informatică și TIC, gimnaziu) — comp. spec. *Realizarea de pagini web simple*; conținut: *Limbajul
  HTML — etichete de bază*.

### II.1. Strategie/metodă didactică + scenariu (15 p)

::: details Vezi rezolvarea II.1 (pe secvența B — HTML)

**Forma de organizare:** activitate **individuală** la calculator (eventual în perechi).
**Metoda didactică:** **învățarea prin descoperire** + **exercițiul** (învățare asistată de calculator).
**Două caracteristici ale metodei:** elevul construiește activ cunoașterea testând imediat efectul codului;
profesorul are rol de **facilitator/ghid**, nu de transmițător unic.

**Elemente de proiectare:**
- **Mijloc de învățământ:** calculatorul cu un editor de text + browser; videoproiector pentru demonstrație.
- **Activitate de învățare:** crearea unei pagini HTML cu titlu, paragraf, listă și un link, apoi vizualizarea
  în browser.

**Scenariu didactic:**
- *Activitatea profesorului:* demonstrează o pagină HTML minimală; explică structura `<html>`/`<head>`/
  `<body>` și câteva etichete; propune sarcina; circulă printre elevi și oferă feedback punctual.
- *Activitatea elevilor:* scriu codul HTML, salvează fișierul, îl deschid în browser, observă legătura
  cod ↔ rezultat, corectează etichetele neînchise, adaugă elemente noi.
:::

### II.2. Metodă de evaluare + itemi (15 p)

::: details Vezi rezolvarea II.2

**Metoda de evaluare aleasă: proba practică** (potrivită disciplinelor informatice).
**Trei avantaje:** evaluează **competențe aplicative** reale (nu doar teorie); oferă **feedback** imediat
prin rezultatul rulării; **motivează** elevii prin caracterul concret. **O limită:** necesită
**infrastructură** (calculatoare funcționale) și timp de pregătire/corectare.

**Item pentru secvența A** (Vectori) — *tip subiectiv (rezolvare la calculator):*
*Enunț:* „Scrieți un program care citește `n` numere într-un vector și afișează suma elementelor pare."
*Răspuns așteptat:* program care citește vectorul, parcurge elementele și adună cele pentru care
`v[i] % 2 == 0`; afișează suma.

**Item pentru secvența B** (HTML) — *tip semiobiectiv (răspuns scurt / completare):*
*Enunț:* „Completați eticheta lipsă pentru a crea un hyperlink către `https://edu.ro`:
`<___ href="https://edu.ro">Minister</___>`."
*Răspuns așteptat:* eticheta **`a`** (`<a href="https://edu.ro">Minister</a>`).
:::

---

## Barem orientativ

**Subiectul I (60 p)** — câte 15 p pe cerință:

| Cerință | Repartizare orientativă |
|---|---|
| **I.1** | noțiuni 3p; descriere 2p; exemplificare 2p; enunț 1p; soluție 2p; implementare 5p |
| **I.2** | noțiuni 3p; tipuri de rețele 4p (4×1p); servicii 6p (4 servicii); adresare 2p |
| **I.3** | antet `oglindit` 2p; logica palindrom 4p; fișier 2p; contor 3p; maxim 3p; descriere 1p |
| **I.4** | entități 3p; relații 3p; forme normale 3p; tabele 3p; SQL 3p |

**Subiectul al II-lea (30 p)** — câte 15 p pe cerință:

| Cerință | Repartizare orientativă |
|---|---|
| **II.1** | metodă/formă 2p; caracteristici 4p; mijloc 1p; activitate 2p; activitatea profesorului 3p; activitatea elevilor 3p |
| **II.2** | metodă + 3 avantaje + limită 7p; 2 itemi (enunț + răspuns) 8p |

**Din oficiu: 10 p · Total: 100 p · Nota = total ÷ 10.**

# Varianta 1 — Model oficial (24 iulie 2024)

> **Subiect oficial** — Examenul național de definitivare, Informatică și TIC, **Model 24 iulie 2024**
> (Ministerul Educației, CNPEE). Total: **100 p** (90 p + 10 p din oficiu). Timp: 4 ore.
> Rezolvările sunt propuse ca material de pregătire; enunțurile aparțin ME. Vezi
> [subiecte.edu.ro](https://subiecte.edu.ro).

---

## SUBIECTUL I (60 de puncte)

### I.1. Algoritmul lui Dijkstra (15 p)

*Cerință: prezentare „pe plan de idei" — noțiuni preliminare; descriere + exemplificare pe un graf cu
cel puțin 7 vârfuri; un exemplu de aplicare cu implementare.*

::: details Vezi rezolvarea I.1

**Noțiuni preliminare**
- **Graf ponderat:** graf în care fiecărei muchii/arc i se asociază un număr (cost/pondere).
- **Drum:** succesiune de vârfuri consecutive legate prin muchii/arce.
- **Costul unui drum:** suma ponderilor muchiilor/arcelor care îl compun.

**Descrierea algoritmului (sursă unică, costuri nenegative).** Dijkstra determină costul minim de la un
vârf-sursă la toate celelalte vârfuri:
1. inițializează `d[sursă] = 0` și `d[v] = ∞` pentru restul;
2. cât timp există vârfuri neselectate: alege vârful `x` neselectat cu `d[x]` minim și marchează-l selectat;
3. **relaxează** vecinii: pentru fiecare vecin `y` al lui `x`, dacă `d[x] + cost(x,y) < d[y]`, actualizează `d[y]`;
4. se repetă până când toate vârfurile sunt selectate.

**Exemplificare** pe un graf neorientat ponderat cu 7 vârfuri (sursă = 1):

```
muchii (cost):  1-2:2  1-3:4  2-3:1  2-4:7  3-5:3
                5-4:2  5-6:5  4-6:1  6-7:2  5-7:6
```

Evoluția vectorului de distanțe (selectăm de fiecare dată minimul neselectat):

| Pas | Selectat | d1 | d2 | d3 | d4 | d5 | d6 | d7 |
|---|---|---|---|---|---|---|---|---|
| init | – | 0 | ∞ | ∞ | ∞ | ∞ | ∞ | ∞ |
| 1 | 1 | 0 | 2 | 4 | ∞ | ∞ | ∞ | ∞ |
| 2 | 2 | 0 | 2 | **3** | 9 | ∞ | ∞ | ∞ |
| 3 | 3 | 0 | 2 | 3 | 9 | **6** | ∞ | ∞ |
| 4 | 5 | 0 | 2 | 3 | **8** | 6 | 11 | 12 |
| 5 | 4 | 0 | 2 | 3 | 8 | 6 | **9** | 12 |
| 6 | 6 | 0 | 2 | 3 | 8 | 6 | 9 | **11** |
| 7 | 7 | 0 | 2 | 3 | 8 | 6 | 9 | 11 |

**Costuri minime de la 1:** `d = [0, 2, 3, 8, 6, 9, 11]`.

**Exemplu de aplicare.** *Enunț:* într-o rețea de șosele cu costuri (km) între orașe, să se afle costul
minim de la orașul-sursă la un oraș-destinație. *Soluție:* modelăm orașele ca vârfuri, șoselele ca muchii
ponderate; aplicăm Dijkstra din sursă și afișăm `d[destinație]`.

```cpp
#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int main() {
    int n, m, sursa, dest;
    cin >> n >> m >> sursa >> dest;
    vector<vector<pair<int,int>>> g(n + 1);   // g[x] = { (vecin, cost) }
    for (int i = 0; i < m; ++i) {
        int x, y, c; cin >> x >> y >> c;
        g[x].push_back({y, c});
        g[y].push_back({x, c});                // graf neorientat
    }
    const int INF = 1e9;
    vector<int> d(n + 1, INF);
    priority_queue<pair<int,int>, vector<pair<int,int>>, greater<>> pq;
    d[sursa] = 0; pq.push({0, sursa});
    while (!pq.empty()) {
        auto [cost, x] = pq.top(); pq.pop();
        if (cost > d[x]) continue;
        for (auto [y, c] : g[x])
            if (d[x] + c < d[y]) { d[y] = d[x] + c; pq.push({d[y], y}); }
    }
    cout << "Cost minim " << sursa << " -> " << dest << ": " << d[dest] << "\n";
    return 0;
}
```
:::

### I.2. Formatarea la nivelul paginii într-un procesor de text (15 p)

::: details Vezi rezolvarea I.2

**Noțiuni preliminare.** Un **procesor de text** (ex. Microsoft Word, LibreOffice Writer) are o interfață
cu *bară de meniu/panglică (ribbon)*, *zonă de editare*, *rigle*, *bare de defilare*. Un **document** este
structurat în caractere → cuvinte → paragrafe → pagini → secțiuni.

**Modalitate de aplicare a formatării la nivel de pagină.** Din fila/meniul **Aspect pagină / Layout**
(sau *Format → Pagină*) se deschid opțiunile de configurare a paginii, aplicabile întregului document sau
unei secțiuni.

**Șase opțiuni de personalizare a paginii (dimensionare și aspect):**
1. **dimensiunea (formatul) hârtiei** — A4, A5, Letter etc.;
2. **orientarea** — *portret* (vertical) sau *vedere/peisaj* (orizontal);
3. **marginile** — sus, jos, stânga, dreapta;
4. **antetul și subsolul** (header/footer);
5. **numerotarea paginilor**;
6. **culoarea/bordura paginii** (sau **numărul de coloane** ale paginii).
:::

### I.3. Cifra de control (15 p)

*Subprogramul `suma(n)` returnează suma cifrelor lui `n`. Din fișierul `def2023.in` (cel mult 10⁶ numere
din [10,10⁹]) se cere cea mai mică **cifră de control** și câți termeni o au.*

::: details Vezi rezolvarea I.3

**Algoritm (în limbaj natural).** „Cifra de control" este **rădăcina digitală**: aplicăm repetat suma
cifrelor până rămâne o singură cifră. Citim numerele din fișier; pentru fiecare calculăm cifra de control
și incrementăm un vector de frecvențe `frecv[1..9]`. La final, parcurgem `frecv` de la 1 la 9 și afișăm
prima cifră cu frecvență nenulă (minima) și frecvența ei.

```cpp
#include <fstream>
#include <iostream>
using namespace std;

// suma cifrelor lui n (cerută explicit ca subprogram)
int suma(int n) {
    int s = 0;
    while (n > 0) { s += n % 10; n /= 10; }
    return s;
}

// cifra de control = aplicăm suma până rămâne o singură cifră
int cifraControl(int n) {
    while (n >= 10) n = suma(n);
    return n;
}

int main() {
    ifstream fin("def2023.in");
    int frecv[10] = {0};      // cifra de control a unui numar >= 10 este in [1,9]
    int x;
    while (fin >> x)
        frecv[ cifraControl(x) ]++;   // apel util al subprogramului
    fin.close();

    int cmin = 1;
    while (cmin <= 9 && frecv[cmin] == 0) cmin++;   // cea mai mica cifra de control
    cout << cmin << " " << frecv[cmin] << "\n";
    return 0;
}
```

**Verificare pe exemplul din enunț** (`62 23 7 ... 2023`): cifrele de control sunt
8, 5, 7, 5, 6, 9, 6, 5, 8, 8, 7 → minima **5**, apare de **3** ori (la 23, 50000009, 8997899) ⇒ afișează
`5 3`. ✓
:::

### I.4. Bază de date — organizație de ciclism (15 p)

::: details Vezi rezolvarea I.4

**Model conceptual (entități, atribute, identificatori, relații):**
- **Competitie**(<u>id_competitie</u>, denumire, oras_secretariat, telefon, email, site_web)
- **TipProba**(<u>id_tip</u>, denumire_tip, descriere_generala) — *șosea, enduro etc.*
- **Proba**(<u>id_proba</u>, *id_competitie*, *id_tip*, descriere_particularitati, data_desfasurare, categorie_participanti)

**Relații:** o *Competiție* are mai multe *Probe* (1:M); un *TipProba* apare în mai multe *Probe* (1:M).
**Restricții (pentru FN1–FN3 și corectitudine):** atribute atomice (FN1); fiecare atribut depinde complet
de cheia primară (FN2); fără dependențe tranzitive — descrierea generală a tipului stă în `TipProba`, nu
în `Proba` (FN3); `email` în format valid; `data_desfasurare` validă; `categorie_participanti` dintr-o
listă (juniori, cadeți, elite, amatori).

**Model fizic (tabele):**

| Tabel | Câmpuri | PK | FK |
|---|---|---|---|
| `Competitie` | id_competitie, denumire, oras_secretariat, telefon, email, site_web | id_competitie | – |
| `TipProba` | id_tip, denumire_tip, descriere_generala | id_tip | – |
| `Proba` | id_proba, id_competitie, id_tip, descriere_particularitati, data_desfasurare, categorie_participanti | id_proba | id_competitie → Competitie, id_tip → TipProba |

**Comenzi SQL — afișarea competițiilor cu cel puțin o probă în anul curent:**
```sql
SELECT DISTINCT c.denumire
FROM Competitie c
JOIN Proba p ON p.id_competitie = c.id_competitie
WHERE YEAR(p.data_desfasurare) = YEAR(CURRENT_DATE);
```
:::

---

## SUBIECTUL al II-lea — Metodică (30 de puncte)

**Secvențele date:** *(coduri explicate în [Competențe din programele școlare](/competente-scolare))*
- **A** (Informatică, liceu) — comp. spec. *2.3. Descrierea coerentă a unei succesiuni de operații prin
  care se obțin, din datele de intrare, datele de ieșire*; conținut: *Operații asupra datelor (aritmetice,
  logice, relaționale)*.
- **B** (TIC, liceu) — comp. spec. *1.1. Identificarea componentelor hard și soft ale unui calculator
  personal*; conținut: *Unitatea centrală*.

### II.1. Strategie didactică (15 p)

::: details Vezi rezolvarea II.1 (pe secvența B)

**Forma de organizare aleasă:** activitate **pe grupe** (învățare prin cooperare).
**Justificare:** identificarea componentelor unui calculator (Unitatea centrală) se pretează la explorare
în echipă — fiecare grupă investighează o componentă și o prezintă, ceea ce dezvoltă competența specifică
**1.1** (*Identificarea componentelor hard și soft ale unui calculator personal*) prin descoperire activă
și comunicare, mai eficient decât expunerea frontală.

**Elemente de proiectare didactică:**
- **Mijloc de învățământ:** o unitate centrală reală (deschisă) sau imagini/animații + fișe de lucru.
- **Metodă didactică:** **învățarea prin descoperire** combinată cu **observarea**.
- **Activitate de învățare:** identificarea și descrierea rolului componentelor din unitatea centrală
  (procesor, placă de bază, memorie RAM, sursă, unități de stocare).

**Scenariu didactic (secvență):**
- *Activitatea profesorului:* organizează clasa pe 4 grupe; distribuie fișe cu sarcini; prezintă pe scurt
  unitatea centrală; ghidează observarea; pune întrebări de sprijin; coordonează prezentările grupelor;
  sintetizează și corectează eventualele erori științifice.
- *Activitatea elevilor:* observă componenta primită, completează fișa (denumire, rol, caracteristici);
  discută în grup; un reprezentant prezintă în fața clasei; notează concluziile; pun întrebări celorlalte
  grupe.
:::

### II.2. Itemi de tip întrebare structurată (15 p)

::: details Vezi rezolvarea II.2

**Două caracteristici** ale itemilor de tip *întrebare structurată*:
1. sunt formați din **mai multe subîntrebări (subitemi)** legate printr-un **element comun** (text, schemă,
   set de date), cu dificultate progresivă;
2. se situează **între** itemii obiectivi și cei subiectivi — permit evaluarea unor competențe variate,
   într-un cadru parțial dirijat.

**Trei cerințe/reguli de proiectare:**
1. subîntrebările să fie **clare** și să decurgă logic din materialul-stimul;
2. să existe **concordanță** între subitemi și competența evaluată;
3. baremul să precizeze **punctajul fiecărui subitem** și răspunsul așteptat.

**Item pentru secvența A** (Operații asupra datelor):
*Enunț:* „Se consideră `a = 7`, `b = 2`. Precizați valoarea expresiilor: a) `a / b`; b) `a % b`;
c) `(a > b) && (b > 0)`."
*Răspuns așteptat:* a) `3` (împărțire întreagă); b) `1` (restul); c) `true` (operatori relaționali + logic).

**Item pentru secvența B** (Unitatea centrală):
*Enunț:* „Pornind de la unitatea centrală: a) numiți două componente aflate în interiorul ei;
b) precizați rolul procesorului; c) explicați rolul memoriei RAM."
*Răspuns așteptat:* a) procesor (CPU), memorie RAM (sau placa de bază, sursă); b) procesorul execută
instrucțiunile programelor și prelucrează datele; c) RAM-ul stochează temporar (volatil) programele și
datele aflate în execuție.
:::

---

## Barem oficial (rezumat)

**Subiectul I (60 p)**

| Cerință | Detaliere barem | Punctaj |
|---|---|---|
| **I.1** | noțiuni 3×1p; descriere 2p; exemplificare 2p; enunț problemă 1p; descriere soluție 2p; **implementare 5p** (parțial 3p) | 15 p |
| **I.2** | noțiuni 2×1p; modalitate de aplicare 1p; **6 opțiuni × 2p = 12p** | 15 p |
| **I.3** | antet 1p; suma cifrelor 4p; fișier 1p; cifră de control minimă 3p; nr. termeni 3p; apeluri 1p; corectitudine 1p; descriere 1p | 15 p |
| **I.4** | entități 3p; relații 3p; forme normale 3×1p; tabele 3p; SQL 3p | 15 p |

**Subiectul al II-lea (30 p)**

| Cerință | Detaliere barem | Punctaj |
|---|---|---|
| **II.1** | formă de organizare 1p; justificare 2p; mijloc 1p; metodă 1p; activitate de învățare 2p; **activitatea profesorului 4p**; **activitatea elevilor 4p** | 15 p |
| **II.2** | 2 caracteristici 2×1p; 3 reguli 3×1p; enunțuri 2×3p; răspunsuri 2×2p | 15 p |

**Din oficiu: 10 p · Total: 100 p · Nota = total ÷ 10.**

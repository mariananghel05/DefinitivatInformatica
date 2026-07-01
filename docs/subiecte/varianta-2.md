# Varianta 2 — Subiect oficial (8 iulie 2025)

> **Subiect oficial** — Examenul național de definitivare, Informatică și TIC, **8 iulie 2025, Varianta 2**
> (Ministerul Educației, CNPEE). Total: **100 p** (90 p + 10 p din oficiu). Timp: 4 ore.
> Rezolvările sunt propuse ca material de pregătire; enunțurile aparțin ME.

---

## SUBIECTUL I (60 de puncte)

### I.1. Inserarea unui nod într-o listă simplu înlănțuită (15 p)

::: details Vezi rezolvarea I.1

**Noțiuni preliminare — parcurgerea unei liste simplu înlănțuite.** Fiecare **nod** are o informație și un
pointer `urm` către nodul următor; ultimul nod are `urm = nullptr`. Parcurgerea pornește de la `cap` și
avansează prin `p = p->urm` până la `nullptr`.

```cpp
struct Nod { int info; Nod* urm; };

void parcurge(Nod* cap) {
    for (Nod* p = cap; p != nullptr; p = p->urm)
        std::cout << p->info << ' ';
}
```

**Etapele inserării — patru poziții distincte** (pe o listă cu 5 noduri, alocare dinamică):

1. **Înainte de primul nod** (la început): `nou->urm = cap; cap = nou;` (noul nod devine cap).
2. **După ultimul nod** (la sfârșit): se parcurge până la ultimul nod `u` (cu `u->urm == nullptr`), apoi
   `u->urm = nou; nou->urm = nullptr;`.
3. **După un nod intermediar dat `p`:** `nou->urm = p->urm; p->urm = nou;` (legarea în două atribuiri).
4. **Înainte de un nod intermediar dat:** se reține nodul **anterior** `ant` (prin parcurgere), apoi se
   inserează după el: `nou->urm = ant->urm; ant->urm = nou;`.

> *Exemplu:* lista `10 → 20 → 30 → 40 → 50`. Inserarea lui `25` **după** nodul cu valoarea `20`:
> `nou->urm = (nod 30); (nod 20)->urm = nou` ⇒ `10 → 20 → 25 → 30 → 40 → 50`.

**Exemplu de utilizare într-o problemă.**
*Enunț:* se citesc `n` numere întregi; să se construiască o listă simplu înlănțuită care le conține în
ordinea citirii și să se afișeze. *Soluție:* pornim de la o listă vidă și inserăm fiecare număr **la
sfârșit** (alocare dinamică); apoi parcurgem lista și afișăm.

```cpp
#include <iostream>
using namespace std;

struct Nod { int info; Nod* urm; };

Nod* insereazaSfarsit(Nod* cap, int val) {
    Nod* nou = new Nod{val, nullptr};   // alocare dinamică
    if (cap == nullptr) return nou;     // lista era vidă
    Nod* p = cap;
    while (p->urm != nullptr) p = p->urm;
    p->urm = nou;
    return cap;
}

int main() {
    int n; cin >> n;
    Nod* cap = nullptr;
    for (int i = 0; i < n; ++i) {
        int x; cin >> x;
        cap = insereazaSfarsit(cap, x);
    }
    for (Nod* p = cap; p != nullptr; p = p->urm) cout << p->info << ' ';
    return 0;
}
```
:::

### I.2. Virușii informatici și programele antivirus (15 p)

::: details Vezi rezolvarea I.2

**Noțiuni preliminare.**
- **Sistem de calcul:** ansamblu hardware + software care prelucrează automat date.
- **Sistem de operare:** software de bază care gestionează resursele și asigură execuția aplicațiilor.
- **Rețea de calculatoare:** dispozitive interconectate care comunică și partajează resurse (vector
  frecvent de propagare a amenințărilor).

**Trei tipuri/categorii de amenințări, cu câte două caracteristici:**

| Categorie | Caracteristici |
|---|---|
| **Virus** | se atașează unui fișier-gazdă; se activează și se multiplică la execuția gazdei |
| **Vierme (worm)** | se propagă **autonom** prin rețea; nu are nevoie de un fișier-gazdă |
| **Troian (trojan)** | se deghizează într-un program util; deschide o „ușă" pentru acces neautorizat (nu se auto-replică) |

*(Alte exemple acceptate: ransomware — criptează datele și cere răscumpărare; spyware — colectează date pe ascuns.)*

**Două acțiuni ale unui antivirus la detectarea unui fișier infectat:** (1) **plasarea în carantină**
(izolarea fișierului); (2) **dezinfectarea/ștergerea** fișierului infectat (sau blocarea accesului).

**Exemplu de program antivirus:** *Windows Defender* (Microsoft Defender), *Bitdefender*, *ESET NOD32*,
*Kaspersky* (oricare dintre ele).
:::

### I.3. Etichete pentru scaunele unei săli (15 p)

*Subprogramul `eticheta(s, d, n)`: `n` se obține din `s` cu cifrele lui `d` alipite la dreapta
(ex. s=123, d=75 ⇒ n=12375). Se construiește un tablou `m × n` în care fiecare element este eticheta
minimă a scaunului și se scrie în `def2025.txt`.*

::: details Vezi rezolvarea I.3

**Algoritm (în limbaj natural).** Pentru scaunul de pe rândul `i`, coloana `j` (numerotate de la 1) se pot
obține două etichete: numărul scaunului `j` cu rândul `i` alipit la dreapta (`eticheta(j, i)`) și numărul
rândului `i` cu scaunul `j` alipit la dreapta (`eticheta(i, j)`). Elementul tabloului este **minimul**
celor două. Construim tabloul direct la scriere și îl trimitem în fișier, linie cu linie, valorile
separate prin spațiu.

> *Verificare (m=5, n=4):* pentru `i=2, j=1` ⇒ `eticheta(1,2)=12` și `eticheta(2,1)=21` ⇒ min = `12`,
> exact ca în tabloul din enunț.

```cpp
#include <iostream>
#include <fstream>
using namespace std;

int nrCifre(int x) {
    if (x == 0) return 1;
    int nr = 0;
    while (x > 0) { nr++; x /= 10; }
    return nr;
}

// n = s cu cifrele lui d alipite la dreapta: n = s * 10^(nr. cifre d) + d
void eticheta(int s, int d, int &n) {
    int p = 1;
    for (int i = 0; i < nrCifre(d); ++i) p *= 10;
    n = s * p + d;
}

int main() {
    int m, n;                 // m = nr. rânduri, n = nr. scaune pe rând
    cin >> m >> n;
    ofstream fout("def2025.txt");
    for (int i = 1; i <= m; ++i) {
        for (int j = 1; j <= n; ++j) {
            int e1, e2;
            eticheta(j, i, e1);          // scaunul j, alipim rândul i la dreapta
            eticheta(i, j, e2);          // rândul i, alipim scaunul j la dreapta
            int val = (e1 < e2) ? e1 : e2;
            fout << val;
            if (j < n) fout << ' ';
        }
        fout << '\n';
    }
    fout.close();
    return 0;
}
```
:::

### I.4. Bază de date — asociație de festivaluri (15 p)

::: details Vezi rezolvarea I.4

**Model conceptual:**
- **Festival**(<u>id_festival</u>, denumire, tematica, site_web)
- **TipEveniment**(<u>id_tip</u>, denumire_tip, spatiu_necesar, nr_max_participanti, varsta_public, alte_norme)
  — *concert, expoziție, workshop etc., cu normele specifice*
- **Eveniment**(<u>id_eveniment</u>, *id_festival*, *id_tip*, denumire, descriere, data_ora_inceput, durata, loc, categorie_public)

**Relații:** un *Festival* are mai multe *Evenimente* (1:M); un *TipEveniment* este folosit de mai multe
*Evenimente* (1:M).
**Restricții (FN1–FN3):** atribute atomice; normele unui tip stau în `TipEveniment` (nu se repetă la fiecare
eveniment) — se evită dependențele tranzitive; `data_ora_inceput` validă; `categorie_public` dintr-o listă.

**Model fizic:**

| Tabel | Câmpuri | PK | FK |
|---|---|---|---|
| `Festival` | id_festival, denumire, tematica, site_web | id_festival | – |
| `TipEveniment` | id_tip, denumire_tip, spatiu_necesar, nr_max_participanti, varsta_public, alte_norme | id_tip | – |
| `Eveniment` | id_eveniment, id_festival, id_tip, denumire, descriere, data_ora_inceput, durata, loc, categorie_public | id_eveniment | id_festival → Festival, id_tip → TipEveniment |

**Comenzi SQL — adăugarea unui nou festival (EduCode 2025):**
```sql
INSERT INTO Festival (id_festival, denumire, tematica)
VALUES (101, 'EduCode 2025', 'Inovatie in predarea informaticii');
```
:::

---

## SUBIECTUL al II-lea — Metodică (30 de puncte)

**Secvențele date:** *(coduri explicate în [Competențe din programele școlare](/competente-scolare))*
- **A** (Informatică, liceu) — comp. 2.1–2.3 (analiza problemei, construirea și aplicarea metodelor);
  conținut: *Metoda de programare **Divide et Impera*** (prezentare generală, aplicații).
- **B** (Informatică și TIC, gimnaziu) — comp. *1.1. Utilizarea eficientă și în siguranță a dispozitivelor
  de calcul*; conținut: *Dispozitive de stocare a datelor*.

### II.1. Metodă didactică + scenariu (15 p)

::: details Vezi rezolvarea II.1 (pe secvența A — Divide et Impera)

**Metoda didactică aleasă:** **problematizarea** (învățarea prin rezolvare de probleme).
**Două caracteristici:**
1. plasează elevul în fața unei **situații-problemă** (un conflict cognitiv) pe care trebuie să o rezolve,
   stimulând gândirea activă și transferul;
2. profesorul **ghidează** descoperirea soluției prin întrebări, fără a oferi direct algoritmul — elevul
   construiește cunoașterea.

**Elemente de proiectare didactică:**
- **Mijloc de învățământ:** videoproiector + mediu de programare (IDE) pentru exemplificare/testare.
- **Formă de organizare:** **frontală** la introducere, apoi **individuală** la implementare.
- **Activitate de învățare:** rezolvarea problemei sortării prin **interclasare (merge sort)** ca aplicație
  a metodei Divide et Impera (împarte–rezolvă–combină).

**Scenariu didactic (secvență):**
- *Activitatea profesorului:* propune problema „cum sortăm eficient un vector mare?"; conduce elevii să
  observe că un vector se poate **împărți** în jumătăți, fiecare sortată separat și apoi **interclasate**;
  formalizează cei trei pași ai metodei; oferă feedback la implementări.
- *Activitatea elevilor:* analizează problema; propun ideea împărțirii; deduc pașii (împarte/rezolvă/
  combină); implementează recursiv în IDE; testează pe exemple; formulează concluzia despre eficiență
  (O(n log n)).
:::

### II.2. Proba scrisă — metodă tradițională de evaluare (15 p)

::: details Vezi rezolvarea II.2

**Trei avantaje ale probei scrise:**
1. permite **evaluarea simultană** a tuturor elevilor, în aceleași condiții (echitate);
2. oferă **obiectivitate sporită** prin barem și posibilitatea recitirii/recorectării;
3. elevii **emotivi** se exprimă mai bine decât oral, având timp de organizare a răspunsului.

**O limită:** **feedbackul este întârziat** (nu imediat ca la evaluarea orală) și nu permite întrebări de
clarificare în timpul evaluării.

**Item pentru secvența A** (Divide et Impera) — *tip subiectiv (rezolvare de problemă):*
*Enunț:* „Descrieți cei trei pași ai metodei Divide et Impera și scrieți un subprogram recursiv care
calculează suma elementelor unui vector folosind această metodă."
*Răspuns așteptat:* pașii **împarte / rezolvă / combină**; subprogram care împarte vectorul în două
jumătăți, însumează recursiv fiecare jumătate și adună rezultatele (caz de bază: un singur element).

**Item pentru secvența B** (Dispozitive de stocare) — *tip semiobiectiv (răspuns scurt):*
*Enunț:* „Precizați două dispozitive de stocare a datelor și ordonați crescător, după capacitatea uzuală,
unitățile de măsură: GB, KB, TB, MB."
*Răspuns așteptat:* dispozitive — HDD, SSD, stick USB, DVD (oricare două); ordinea: **KB < MB < GB < TB**.
:::

---

## Barem oficial (rezumat)

**Subiectul I (60 p)**

| Cerință | Detaliere barem | Punctaj |
|---|---|---|
| **I.1** | noțiuni preliminare 1p; descrieri ale etapelor 4×1p; exemplificări 4×1p; enunț problemă 1p; descriere soluție 2p; **implementare 3p** | 15 p |
| **I.2** | noțiuni 3×1p; tipuri de amenințări 3×1p; caracteristici 3×2×1p = 6p; acțiuni antivirus 2×1p; exemplu antivirus 1p | 15 p |
| **I.3** | antet 1p; determinarea numărului 4p; construirea tabloului 6p; apeluri 1p; corectitudine 1p; fișier 1p; descriere algoritm 1p | 15 p |
| **I.4** | entități 3p; relații 3p; forme normale 3×1p; tabele 3p; SQL 3p | 15 p |

**Subiectul al II-lea (30 p)**

| Cerință | Detaliere barem | Punctaj |
|---|---|---|
| **II.1** | metodă 1p; **caracteristici 2×2p = 4p**; mijloc 1p; formă 1p; activitate de învățare 2p; **activitatea profesorului 3p**; **activitatea elevilor 3p** | 15 p |
| **II.2** | **avantaje 3×2p = 6p**; limită 1p; enunțuri 2×2p; răspunsuri 2×2p | 15 p |

**Din oficiu: 10 p · Total: 100 p · Nota = total ÷ 10.**

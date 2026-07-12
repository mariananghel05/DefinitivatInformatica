# 3. Evaluarea randamentului școlar

> A treia temă de metodică. Vizează **evaluarea** ca proces de măsurare și apreciere a competențelor
> formate, cu accent pe **itemi** și pe corectitudinea notării.

## 1. Teorie

### 3.1. Evaluarea — componentă a procesului de învățământ

**Evaluarea** este procesul prin care se **măsoară** și se **apreciază** nivelul de formare a
competențelor, în vederea luării de decizii pedagogice. Procesul didactic formează un tot unitar:
**predare – învățare – evaluare**.

**Funcțiile evaluării:**

| Funcție | Rol |
|---|---|
| **diagnostică** | identifică nivelul/dificultățile elevilor |
| **prognostică** | anticipează evoluția, orientează |
| **de reglare** | ajustează demersul didactic (feedback) |
| **motivațională** | stimulează învățarea |
| **de certificare** | atestă rezultatele (note, diplome) |

### 3.2. Tipuri (forme) de evaluare

După **momentul** realizării:
- **inițială (predictivă)** — la început de an/capitol; stabilește nivelul de plecare;
- **continuă (formativă)** — pe parcurs; oferă feedback și reglează învățarea;
- **sumativă (cumulativă)** — la final de capitol/semestru; bilanț al rezultatelor.

### 3.3. Metode și instrumente de evaluare

**Tradiționale:**
- probe **orale** (ascultarea, examinarea orală);
- probe **scrise** (test, lucrare, teză);
- probe **practice** (la informatică — rezolvarea unei probleme la calculator).

**Moderne / alternative (complementare):**
- **observarea sistematică** a activității și a comportamentului;
- **proiectul** și **portofoliul**;
- **investigația**;
- **autoevaluarea** și **evaluarea reciprocă (interevaluarea)**.

**Calități ale unui bun instrument de evaluare:** **validitate** (măsoară ce trebuie), **fidelitate**
(rezultate constante), **obiectivitate**, **aplicabilitate**.

### 3.4. Itemii de evaluare

Un **item** este o întrebare/sarcină dintr-un instrument de evaluare, împreună cu răspunsul/baremul.

| Categorie | Tipuri | Caracteristică |
|---|---|---|
| **Itemi obiectivi** | alegere duală (A/F), alegere multiplă, de tip pereche | corectare rapidă, total obiectivă |
| **Itemi semiobiectivi** | răspuns scurt, completare, întrebare structurată | răspuns scurt, dirijat |
| **Itemi subiectivi** | rezolvare de probleme, eseu structurat/liber | evaluează raționamente complexe |

**Reguli de proiectare:** enunț clar și fără ambiguități; o singură soluție corectă (la cei obiectivi);
barem explicit; concordanța cu competența evaluată; grad de dificultate adecvat.

**Avantaje/limite:**
- *obiectivi* — corectare rapidă și obiectivă, dar nu surprind raționamente complexe (risc de ghicire);
- *subiectivi* — evaluează gândirea de nivel înalt, dar corectarea e mai subiectivă și mai lentă.

::: tip Exemple de itemi (informatică)
- **obiectiv:** „Căutarea binară necesită un șir sortat. (A / F)";
- **semiobiectiv:** „Complexitatea sortării prin interclasare este ______.";
- **subiectiv:** „Scrieți un subprogram care returnează al doilea cel mai mare element dintr-un vector și justificați corectitudinea."
:::

#### Itemul de tip „întrebare structurată"

Cel mai important item pentru examen — cerința tipică de la **Subiectul II.2** („itemi de tip
întrebare structurată") și, didactic, puntea dintre itemii obiectivi și cei subiectivi.

**Definiție.** Item **semiobiectiv** alcătuit dintr-un **material-stimul** (text, program, desen,
tabel de date, secvență de cod) urmat de un set de **subîntrebări** (de regulă 3–5) care decurg din
material, cer **răspunsuri scurte, dirijate** și sunt **gradate** ca dificultate.

**Structura standard:**

```text
[ MATERIAL-STIMUL ]      un program scurt / un graf desenat / un set de date
        │
   a) subîntrebare de cunoaștere        (identificare, definire)
   b) subîntrebare de aplicare          (urmărire, calcul pe material)
   c) subîntrebare de analiză           (justificare, caz-limită, modificare)
        │
   (eventual, date suplimentare introduse pe parcurs)
```

**Regulile de proiectare specifice** (la examen se cer explicit, „3 reguli × 1p"):
1. subîntrebările **decurg din materialul-stimul** — nu se pot rezolva ignorându-l;
2. sunt **independente între ele** — răspunsul greșit la una nu blochează rezolvarea următoarelor;
3. dificultatea **crește gradat** (de la identificare spre analiză);
4. fiecare subîntrebare are **răspuns scurt, precis** și **punctaj propriu** în barem;
5. materialul este **adecvat vârstei** și competenței evaluate.

**Avantaje:** acoperă mai multe niveluri cognitive într-un singur item; corectare aproape obiectivă
(răspunsuri scurte + barem defalcat); simulează lectura de cod/date din practica reală.
**Limite:** construcția laborioasă (materialul trebuie „să susțină" toate subîntrebările); riscul
ascuns al dependenței între subîntrebări — se verifică explicit la proiectare.

**Exemplu complet** (conținut: *căutarea binară*, clasa a X-a — competența 3.1):

> **Material-stimul:** vectorul sortat `v = (3, 7, 10, 14, 21, 25, 32)` și subprogramul de căutare
> binară studiat la clasă.
>
> a) Ce condiție trebuie să îndeplinească vectorul pentru ca metoda să funcționeze? **(2p)**
> b) Pentru valoarea căutată `x = 21`, completați tabelul valorilor `stanga`, `dreapta`, `mijloc`
>    la fiecare pas. **(4p)**
> c) Câte comparații efectuează algoritmul, în cel mai rău caz, pentru un vector cu 1000 de
>    elemente? Justificați. **(3p)**
> d) Ce valoare returnează subprogramul dacă `x` nu se află în vector și de ce este aleasă această
>    valoare? **(3p)**
>
> **Răspunsuri așteptate:** a) vector **sortat**; b) tabelul: (0,6,3) → (4,6,5) → (4,4,4) — găsit pe
> poziția 4; c) ~10 comparații, deoarece 2¹⁰ = 1024 ≥ 1000 (înjumătățiri repetate); d) `-1` — valoare
> imposibilă ca indice, deci semnal clar de „negăsit". *(Total: 2+4+3+3 = 12p; punctajele se
> adaptează testului în care itemul este integrat.)*

Observă anatomia: a) cunoaștere → b) aplicare (urmărire) → c) raționament (calcul) → d) analiză
(decizie de proiectare) — gradarea cerută de regula 3, pe un singur material, cu subîntrebări
independente (poți răspunde la c) chiar dacă ai greșit b).

::: info La examenul de definitivat (II.2)
Cerința tipică: enunțarea a **două caracteristici** ale itemului + **trei reguli** de proiectare +
**elaborarea câte unui item** pentru fiecare dintre cele două secvențe de programă date, cu enunț și
răspuns așteptat. Modelul rezolvat pe subiectul real: [Varianta 1, II.2](/subiecte/varianta-1);
pașii de construcție: [Ghidul examenului — itemul II.2 pas cu pas](/ghid-examen#construirea-itemului-ii-2-pas-cu-pas).
:::

### 3.5. Proiectarea unui test — matricea de specificații

**Matricea de specificații** garantează **validitatea** testului: distribuie itemii pe conținuturi și pe
niveluri cognitive, astfel încât testul să acopere echilibrat ce s-a predat. Exemplu pentru un test
„Algoritmi de sortare și căutare" (clasa a IX-a):

| Conținut \ Nivel cognitiv | cunoaștere | aplicare | raționament | Pondere |
|---|---|---|---|---|
| căutare secvențială / binară | 1 item (A/F) | 1 item (trasare) | — | 30% |
| sortare prin selecție | 1 item (grilă) | 1 item (implementare) | — | 40% |
| analiza complexității | — | 1 item (calcul) | 1 item (comparare argumentată) | 30% |
| **Total** | 30% | 45% | 25% | 100% |

Pașii proiectării unui test: stabilirea competențelor evaluate → **matricea de specificații** →
redactarea itemilor → **baremul** → aplicarea → analiza rezultatelor (ce reglăm în predare).

### 3.6. Notarea și aprecierea școlară

**Notarea** transformă aprecierea în notă (1–10). Sistemul de notare poate fi: **prin raportare la
barem** (criterial), prin raportare la grup (normativă) sau la progresul individual.

**Variabilitatea notării** — aceeași lucrare poate primi note diferite. **Factori/efecte perturbatoare:**

| Efect | Descriere |
|---|---|
| **efectul „halo"** | impresia generală despre elev influențează nota |
| **efectul Pygmalion** | așteptările profesorului influențează rezultatul |
| **efectul de contrast / ordine** | lucrarea e notată în raport cu cea precedentă |
| **ecuația personală** | exigența diferită de la profesor la profesor |
| **eroarea de generozitate / severitate** | tendința de a nota constant mai sus/jos |

**Modalități de minimizare:** **barem de corectare** clar, corectarea **pe itemi** (nu pe lucrări
întregi), anonimizarea lucrărilor, criterii explicite, evaluare cu mai mulți corectori.

## 2. Competențe vizate (ale profesorului)

- **proiectarea instrumentelor de evaluare** adecvate competențelor (validitate, fidelitate);
- **elaborarea de itemi** de toate tipurile, cu barem corect;
- **aplicarea formelor de evaluare** (inițială, formativă, sumativă) și a metodelor alternative;
- **notarea obiectivă** și minimizarea factorilor de variabilitate.

## 3. Aplicații metodice (model)

**Mini-test pentru „Algoritmi de sortare" (clasa a IX-a), 90 p + 10 din oficiu:**

| Item | Tip | Competență evaluată | Punctaj |
|---|---|---|---|
| 1. „Bubble sort are complexitatea O(n²). A/F" | obiectiv (dual) | analiza complexității | 10 p |
| 2. „Completați limita buclei interioare: `for(j=0;j<___;j++)`" | semiobiectiv | implementare corectă | 20 p |
| 3. „Scrieți subprogramul de sortare prin selecție" | subiectiv | aplicarea algoritmului | 60 p |

**Baremul detaliat pentru itemul 3** (subiectiv, 60 p) — corectarea „pe itemi" cere punctaj defalcat:

| Criteriu | Punctaj |
|---|---|
| antetul corect al subprogramului (parametri, tipuri) | 10 p |
| bucla exterioară cu limite corecte | 10 p |
| determinarea corectă a poziției minimului | 15 p |
| interschimbarea elementelor | 10 p |
| corectitudine de ansamblu (compilează; cazuri-limită: șir cu 1 element) | 10 p |
| claritatea codului (denumiri, structurare) | 5 p |

Se acordă **punctaje parțiale** pentru orice altă rezolvare corectă — formularea standard din baremele
oficiale (vezi [modelele de subiecte](/subiecte/)).

**Metodele alternative, concretizate la informatică:** **portofoliul** = colecția programelor și
proiectelor elevului de-a lungul semestrului; **proiectul** = un produs finit — mini-site
[HTML](/stiintific/10-retele-de-calculatoare) sau o [bază de date](/stiintific/06-baze-de-date) cu
interogări; **investigația** = analiza unui set real de date în
[calcul tabelar](/stiintific/09-aplicatii-specializate); **autoevaluarea** = elevul își testează
programul pe cazuri-limită înainte de predare.

::: warning Greșeli frecvente la examen
- confuzia **evaluare formativă** (pe parcurs, reglare) ↔ **sumativă** (final, bilanț);
- confuzia **tipurilor de itemi** (obiectiv/semiobiectiv/subiectiv);
- itemi **fără barem** sau cu enunț ambiguu;
- ignorarea **factorilor de variabilitate** a notării și a modalităților de minimizare.
:::

## Conexiuni cu alte teme

- Evaluarea este al treilea pilon al triadei predare–învățare–evaluare: proiectarea ei începe încă din
  [proiectul de lecție](/metodica/01-proiectare-didactica) și din alegerea
  [strategiilor didactice](/metodica/02-strategii-didactice).
- Fiecare temă științifică din curs se încheie cu **exemple de itemi** pe cele trei categorii — de la
  [Algoritmi](/stiintific/01-algoritmi) până la [Rețele](/stiintific/10-retele-de-calculatoare) — surse
  directe pentru construirea testelor.
- Structura reală a probei de definitivat (Subiect I / II, barem oficial) este detaliată la
  [modelele de subiecte](/subiecte/).

## Recapitulare

- Evaluarea măsoară și apreciază competențele; **funcții**: diagnostică, prognostică, de reglare, de certificare.
- Forme: **inițială**, **formativă** (pe parcurs), **sumativă** (final).
- **Itemi**: obiectivi, semiobiectivi, subiectivi; calități: **validitate, fidelitate, obiectivitate**.
- **Notarea** e afectată de efecte perturbatoare (halo, Pygmalion...); se minimizează prin **barem** și corectare pe itemi.

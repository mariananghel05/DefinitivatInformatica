# Esențialul — formule și repere de reținut

> Fișa de sinteză a cursului: formulele, teoremele, valorile și listele care merită știute **pe de
> rost** la examen. Fiecare rând are trimitere către pagina unde este explicat pe larg — aici doar
> fixezi, acolo înțelegi. Pereche naturală cu [Ghidul examenului](/ghid-examen) și cu
> [Cardurile](/carduri).

## Formule și numărători

### Grafuri — formulele care apar direct în subiecte

| Formula | Enunț | Capcana |
|---|---|---|
| **Σ grade = 2·m** | suma gradelor = dublul numărului de muchii („lema strângerilor de mână") | corolar: numărul nodurilor de grad **impar** e mereu **par** |
| **max muchii = n(n−1)/2** | graful complet Kₙ | la **orientat**: n(n−1) arce |
| **nr. grafuri = 2^(n(n−1)/2)** | cu n noduri fixate | fiecare muchie posibilă „există sau nu" |
| **arbore: m = n − 1** | conex + fără cicluri ⇔ conex cu n−1 muchii | graf **conex** ⇒ m ≥ n − 1 (condiție necesară!) |
| **grad(i) = suma liniei i** | în matricea de adiacență (neorientat) | la orientat: linia = grad **extern**, coloana = grad **intern** |

→ Demonstrațiile și exemplele: [Teoria grafurilor](/stiintific/05-teoria-grafurilor)

### Combinatorică — câte soluții generează backtracking-ul

| Generarea | Numărul de soluții |
|---|---|
| permutări (n elemente) | **n!** |
| aranjamente (n luate câte k) | **n!/(n−k)!** |
| combinări (n luate câte k) | **n!/(k!·(n−k)!)** |
| submulțimile unei mulțimi cu n elemente | **2ⁿ** |
| produs cartezian A₁×…×Aₖ | **|A₁|·…·|Aₖ|** |

→ Schema și arborele de explorare: [Metode de programare](/stiintific/03-metode-programare)

### Aritmetica algoritmilor

| Formula / regula | Unde se folosește |
|---|---|
| **cmmdc(a,b) · cmmmc(a,b) = a·b** | calculul cmmmc: `a / cmmdc * b` (împărțirea întâi — contra depășirii) |
| **cmmdc(a,b) = cmmdc(b, a mod b)**; cmmdc(a,0)=a | lema lui Euclid — baza algoritmului |
| divizorii merg **în perechi (d, n/d)** | de aceea primalitatea se testează doar până la **√n** |
| `n mod 10` = ultima cifră; `n div 10` = taie ultima cifră | toată familia „cifrele numărului" |
| **1 + 2 + … + n = n(n+1)/2** | numărarea pașilor la bucle imbricate (sortări: ~n²/2 comparații) |
| numărul de cifre ale lui n ≈ **log₁₀ n + 1** | estimarea pașilor la prelucrarea cifrelor |

→ Explicații complete: [Algoritmi](/stiintific/01-algoritmi)

## Complexități — tabelul de aur

| Algoritm | Complexitate | Condiția / observația |
|---|---|---|
| căutare secvențială | **O(n)** | orice șir |
| căutare binară | **O(log n)** | DOAR pe șir **sortat** |
| bule / inserție / selecție | **O(n²)** | inserția e rapidă pe date aproape sortate |
| sortare prin numărare | **O(n + vmax)** | doar valori întregi în interval mic; **nu compară** |
| interclasare | **O(n + m)** | ambii vectori deja sortați |
| merge sort | **O(n log n)** | log n niveluri × O(n) pe nivel |
| Euclid (cmmdc) | logaritmic | resturile scad strict |
| primalitate | **O(√n)** | divizorii-pereche |
| BFS / DFS | **O(n + m)** pe liste, **O(n²)** pe matrice | — |
| Dijkstra | **O(m log n)** | costuri **nenegative**! |
| Roy–Floyd | **O(n³)** | toate perechile; k = bucla exterioară |
| backtracking | **exponențial** (ex. n! la permutări) | condițiile de continuare taie ramuri |

**Ordinea claselor:** O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!).
**Regula practică:** ~**10⁸ operații simple/secundă**; buclele **imbricate se înmulțesc**, cele
**succesive se adună**. **Limita teoretică:** orice sortare prin comparații ≥ n·log₂ n comparații.
→ [Analiza complexității](/stiintific/01-algoritmi)

## Valori și limite numerice

| Valoarea | De reținut |
|---|---|
| 2¹⁰ = **1024** | treapta unităților de măsură (KB→MB→GB→TB) |
| 1 octet (byte) = **8 biți** | un caracter; `int` = 4 octeți = 32 biți |
| `int` max ≈ **2,1 miliarde** (2³¹−1 = 2 147 483 647) | produse/sume mari → `long long` |
| log₂(10⁶) ≈ **20** | căutarea binară pe un milion de elemente: ~20 pași |
| 0 și 1 **nu** sunt prime; 2 = singurul prim par | capcanele de barem la primalitate |

## Teoreme și proprietăți de citat

| Teorema / principiul | Într-o frază | Unde e demonstrată |
|---|---|---|
| **Lema lui Euclid** | (a,b) și (b, a mod b) au aceiași divizori comuni | [Algoritmi](/stiintific/01-algoritmi) |
| **Böhm–Jacopini** | orice algoritm se scrie doar cu secvență + decizie + repetiție | [Algoritmi](/stiintific/01-algoritmi) |
| **Teorema lui Euler (1736)** | graf conex eulerian ⇔ **toate gradele pare** | [Grafuri](/stiintific/05-teoria-grafurilor) |
| **Condiția lui Dirac** | grad(v) ≥ n/2 pentru toate nodurile ⇒ graf hamiltonian (suficientă, nu necesară!) | [Grafuri](/stiintific/05-teoria-grafurilor) |
| **Caracterizarea arborilor** | conex fără cicluri ⇔ conex cu n−1 muchii ⇔ exact un lanț între oricare două noduri | [Grafuri](/stiintific/05-teoria-grafurilor) |
| **Proprietatea tăieturii** | cea mai ieftină muchie peste o tăietură aparține unui APM — de aceea Kruskal/Prim garantează optimul | [Grafuri](/stiintific/05-teoria-grafurilor) |
| **Invariantul lui Dijkstra** | nodul finalizat are costul optim — valabil doar cu costuri ≥ 0 | [Grafuri](/stiintific/05-teoria-grafurilor) |
| **Principiul optimalității (Bellman)** | soluția optimă e formată din subsoluții optime — condiția programării dinamice | [Metode](/stiintific/03-metode-programare) |
| **BST + inordine = crescător** | invariantul „stâng < rădăcină < drept" în fiecare nod | [Alocare dinamică](/stiintific/04-alocare-dinamica) |

## Capcanele de limbaj C++ — top 10

| Capcana | Regula |
|---|---|
| `7 / 2` dă `3` | împărțire **întreagă** între întregi; media → `/ 2.0` |
| `=` vs `==` | `=` atribuie, `==` compară — citește „este egal cu" |
| `strcmp(a,b)` | întoarce **0 la egalitate** — testează `== 0`, nu ca bool |
| `strncpy` | nu pune mereu `'\0'` — închide șirul manual |
| `s.find(...)` | se compară cu `std::string::npos`, nu cu −1 |
| `;` după `for(...)` / `while(...)` | buclă „goală" — programul merge, dar greșit |
| depășirea | `int` × `int` mare → rezultat absurd; folosește `long long` |
| numere reale | se compară cu toleranță: `fabs(a-b) < 1e-9`, nu cu `==` |
| indexarea | vectorii C++ încep de la **0**; subiectele folosesc des 1..n — fii „bilingv" |
| `&` la parametri | fără `&`, subprogramul modifică o **copie** — modificările se pierd |

→ Detalii și exemple: [Limbaje de programare](/stiintific/02-limbaje-programare)

## Structuri de date — pe scurt

- **Stiva = LIFO** (ultimul intrat, primul ieșit) — undo, stiva de apeluri, verificarea parantezelor.
- **Coada = FIFO** (primul intrat, primul ieșit) — BFS, cozi de așteptare.
- **Parcurgerile arborelui binar:** preordine **RSD**, inordine **SRD**, postordine **SDR**;
  pe BST, inordinea dă cheile **crescător**.
- **Memoria programului:** stivă (variabile locale, apeluri — eliberare automată) vs. **heap**
  (`new`/`delete` sau `std::vector` — care își eliberează singur memoria).
- **Inițializări corecte:** sumă/contor de la **0**, produs de la **1**, minim/maxim de la
  **prima valoare** (nu de la 0!), fanionul nu se „răzgândește".

→ [Alocarea dinamică](/stiintific/04-alocare-dinamica) · [Algoritmi](/stiintific/01-algoritmi)

## Baze de date — esențialul

- **Formele normale într-o frază:** FN1 = valori atomice; FN2 = FN1 + fără dependențe **parțiale** de
  cheia compusă; FN3 = FN2 + fără dependențe **tranzitive**.
- **PK** = „cine sunt eu" (unică, nenulă); **FK** = „la cine mă refer" — stă pe partea **„mulți"** a
  relației 1:N; relația **M:N se sparge** printr-o entitate de legătură.
- **Ordinea logică a lui SELECT:** `FROM (+JOIN) → WHERE → GROUP BY → HAVING → SELECT → ORDER BY` —
  de aceea agregatele nu pot sta în WHERE.
- **WHERE** filtrează **rânduri**, **HAVING** filtrează **grupuri**.
- **DELETE** șterge conținut (păstrează tabelul), **DROP** șterge tabelul; `UPDATE`/`DELETE` fără
  `WHERE` afectează **tot** tabelul.
- Comenzi pe categorii: **DML** = SELECT/INSERT/UPDATE/DELETE; **DDL** = CREATE/ALTER/DROP.

→ [Baze de date](/stiintific/06-baze-de-date) · lecțiile [clasei a XII-a](/lectii/#clasa-a-xii-a)

## TIC — reperele de enumerat

- **RAM ≠ stocare:** RAM = volatilă, „masa de lucru"; HDD/SSD = nevolatilă, „dulapul". Ierarhia:
  **regiștri → cache → RAM → memorie externă** (de la rapid/mic la lent/mare).
- **Ciclul procesorului:** fetch → decode → execute.
- **Rețele după arie:** PAN < LAN < MAN < WAN (Internetul = WAN global).
- **Protocoale-cheie:** TCP/IP (transport/adresare), HTTP/HTTPS (web; S = criptat), DNS (nume →
  adresă IP), SMTP/POP3/IMAP (e-mail), FTP (fișiere).
- **HTML = structură, CSS = aspect, JavaScript = interactivitate**; documentul HTML e un **arbore**.
- **Licențe:** comercială / freeware (gratuit, fără sursă) / **open source** (cu sursă) / trial.
- **Formatarea documentului pe 3 niveluri:** caracter → paragraf → **pagină** (margini, orientare,
  antet/subsol, numerotare — enumerarea tipică cerută la I.2!).
- **Referințe în calcul tabelar:** `A1` relativă (se ajustează la copiere), `$A$1` absolută (fixă).

→ [Arhitectură](/stiintific/07-arhitectura-sistemelor) · [SO](/stiintific/08-sisteme-de-operare) ·
[Birotică](/stiintific/09-aplicatii-specializate) · [Rețele](/stiintific/10-retele-de-calculatoare)

## Didactica — listele de recitat înainte de Subiectul II

**Momentele lecției mixte (9):** organizatoric → captarea atenției → reactualizarea → anunțarea temei
și competențelor → dirijarea învățării → obținerea performanței → feedback → evaluare → tema.

**Tipurile de lecție (5):** transmitere/însușire · formare de priceperi și deprinderi (laborator) ·
recapitulare și sistematizare · evaluare · **mixtă** (cea mai frecventă).

**Categoriile de metode:** de comunicare (expunerea, conversația euristică, explicația,
problematizarea) · de explorare (observarea, descoperirea, modelarea, studiul de caz) · de acțiune
(exercițiul, algoritmizarea, lucrările practice, proiectul) · activ-participative (brainstorming,
cooperarea, mozaicul) · specifice informaticii (**instruirea programată, IAC**).

**Formele de organizare (3):** frontală · individuală · pe grupe.
**Nu confunda:** metoda (*cum*) ↔ mijlocul (*cu ce*) ↔ forma (*cu cine*).

**Itemii (3 categorii):** obiectivi (alegere duală A/F, alegere multiplă, de tip pereche) ·
semiobiectivi (răspuns scurt, completare, **întrebare structurată**) · subiectivi (rezolvare de
probleme, eseu structurat/liber). Calitățile instrumentului: **validitate, fidelitate, obiectivitate,
aplicabilitate**.

**Evaluarea:** forme — **inițială / formativă (pe parcurs) / sumativă (bilanț)**; funcții —
diagnostică, prognostică, de reglare, motivațională, de certificare.

**Efectele perturbatoare ale notării:** halo · Pygmalion · contrast/ordine · ecuația personală ·
generozitate/severitate — se combat cu **barem** și corectare **pe itemi**.

**Lanțul documentelor de proiectare:** programa școlară → **planificarea calendaristică** →
**proiectul unității de învățare** → **proiectul de lecție**. Terminologia actuală: **competențe**
(nu „obiective operaționale").

**Practica pe niveluri (capcana de vârstă la II.1!):** clasele V–VI = medii grafice (**Scratch**),
de la a VII-a = **C++**; gimnaziul lucrează **fără vectori** (șiruri de valori „pe flux"), tablourile
apar la clasa a X-a.

→ [Proiectarea didactică](/metodica/01-proiectare-didactica) ·
[Strategii didactice](/metodica/02-strategii-didactice) ·
[Evaluarea randamentului](/metodica/03-evaluare-randament) ·
[matricea de corelare din Ghid](/ghid-examen#corelarea-didactica-tabloul-complet)

## Cadrul de referință (actele normative citate în curs)

| Act normativ | Ce reglementează |
|---|---|
| **Legea învățământului preuniversitar nr. 198/2023** | cadrul legal în vigoare (nu mai cita Legea 1/2011!) |
| **OMEC 5434/2020** | metodologia examenului de definitivat |
| **OMEN 3393/2017** | programele școlare de gimnaziu (Informatică și TIC, V–VIII) |
| **OMECI 5099/2009** | programele de liceu Informatică (profil real, IX–X) |

→ Contextul complet și calendarul sesiunii: [Despre examen](/despre-examen) ·
[Bibliografie](/bibliografie)

---

> **Cum folosești fișa:** recitire activă — acoperă coloana din dreapta a fiecărui tabel și
> reconstruiește-o din memorie; ce nu iese, deschide linkul. În ultima săptămână înainte de examen:
> această fișă + [Ghidul examenului](/ghid-examen) (cu nodurile închise) + un subiect pe zi din
> [modelele rezolvate](/subiecte/).

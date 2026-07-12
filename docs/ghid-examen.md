# Ghidul examenului — de la structură la detaliu

> Pagina-coloană vertebrală a cursului: pornește de la **structura probei scrise** și coboară, concept
> cu concept, spre detalii — fiecare nod se deschide cu un click, iar trimiterile duc la paginile care
> tratează subiectul pe larg. **Parcurgerea completă a acestui ghid, cu deschiderea fiecărui nod și a
> trimiterilor lui, acoperă întreaga pregătire pentru examen.**

## Cum folosești ghidul

- **Închis = scheletul examenului.** Cu toate nodurile pliate, pagina arată exact harta pe care trebuie
  s-o ai în minte în sală. **Deschis = detaliul.** Înainte să deschizi un nod, încearcă să-ți răspunzi
  singur — ghidul devine astfel și instrument de autoevaluare.
- Fiecare nod are titlul marcat cu **subpunctul de examen vizat și punctajul** (ex. `· vizat: I.1 (15p)`)
  și răspunde mereu, în aceeași ordine, la patru întrebări:

| Întrebarea | Ce afli |
|---|---|
| **Ce este?** | definiția esențială + trimiterea la teoria completă |
| **Ce trebuie să știu ca să rezolv?** | elementele care apar tipic în barem |
| **Cum se rezolvă?** | șablonul răspunsului-model + trimiterea la o rezolvare reală |
| **Cum se abordează didactic?** | unde și cum se predă la clasă (lecția + metoda + capcana) |

- A patra întrebare leagă mereu o **lecție din practica școlară** și o **temă de metodică** — așa se
  țes legăturile științific ↔ didactic ↔ structura anului ↔ competențe.

## Harta examenului la o privire

| Proba scrisă | Detalii |
|---|---|
| **Durata** | 4 ore |
| **Subiectul I — Specialitatea** | **60 p** = 4 cerințe × 15 p (I.1–I.4) |
| **Subiectul al II-lea — Metodica** | **30 p** = 2 cerințe × 15 p (II.1–II.2), pe două secvențe din programe școlare |
| **Din oficiu** | 10 p · **Nota = total ÷ 10** |
| **Limbaj** | Pascal, C sau C++, la alegere (acest curs: C++) |

Arborele ghidului (click pe orice ramură):

- **[Subiectul I — Specialitatea (60p)](#subiectul-i-specialitatea-60p)**
  - [I.1 — Subiect teoretic de specialitate](#i-1-subiect-teoretic-de-specialitate-15p) · algoritmi, structuri de date, grafuri, metode de programare
  - [I.2 — Subiect teoretic de TIC](#i-2-subiect-teoretic-de-tic-15p) · arhitectură, SO, birotică, rețele/securitate
  - [I.3 — Problema de programare](#i-3-problema-de-programare-15p) · subprogram cu antet dat, fișiere, descrierea algoritmului
  - [I.4 — Baze de date](#i-4-baze-de-date-15p) · model conceptual, normalizare, tabele, SQL
- **[Subiectul II — Metodica (30p)](#subiectul-ii-metodica-30p)**
  - [II.1 — Scenariul didactic](#ii-1-scenariul-didactic-15p) · metodă + formă + mijloc + activitatea profesorului/elevilor
  - [II.2 — Evaluarea și itemii](#ii-2-evaluarea-si-itemii-15p) · instrumente de evaluare, elaborare de itemi
- **[Corelarea didactică — tabloul complet](#corelarea-didactica-tabloul-complet)** · cum se leagă metodele, formele, mijloacele, evaluarea
- **[Acoperirea materiei — verificare finală](#acoperirea-materiei-verificare-finala)** · toate cele 10+3 teme, mapate pe examen

> Metodologia completă (înscriere, calendar, notă minimă): [Despre examen](/despre-examen).

## Subiectul I — Specialitatea (60p)

### I.1 — Subiect teoretic de specialitate (15p)

**Forma tipică a cerinței:** o temă de specialitate (ex. liste înlănțuite, algoritmul lui Dijkstra)
prezentată „pe plan de idei": noțiuni preliminare → descriere în limbaj natural → exemplu de aplicare →
implementare. Baremul punctează separat fiecare parte (noțiunile ~3p, descrierea ~2p, exemplul ~2p,
**implementarea ~5p**). Buget de timp recomandat: ~45 de minute.

::: details Algoritmi: caracteristici, complexitate, corectitudine · vizat: I.1 (15p)
**Ce este?** — Algoritmul: succesiune finită, clară, generală de pași; caracteristicile (claritate,
finitudine, generalitate) + complexitatea în notația O. → [Algoritmi §1.1–1.8](/stiintific/01-algoritmi)

**Ce trebuie să știu ca să rezolv?** — definițiile cu contraexemple; ordinea claselor de complexitate
(O(1) < O(log n) < … < O(n!)); regula buclelor (imbricate se înmulțesc, succesive se adună); invarianți
ca argument de corectitudine.

**Cum se rezolvă?** — șablonul: definiție → proprietăți cu câte un exemplu → analiza complexității pe
un algoritm concret. → [Modele de subiecte](/subiecte/)

**Cum se abordează didactic?** — introdus la cl. a V-a intuitiv, formalizat la a IX-a; metoda:
problematizarea (jocul „Robotul"). Capcana: definiția predată înaintea exemplelor.
→ [Lecția IX.2](/lectii/ix-02-etapele-rezolvarii-algoritmul) · [Lecția V.1](/lectii/v-01-algoritmul) ·
[Strategii didactice](/metodica/02-strategii-didactice)
:::

::: details Tablouri (1D/2D) și șiruri de caractere · vizat: I.1 / I.3 (15p)
**Ce este?** — Colecții indexate de elemente de același tip (vector, matrice) și textul ca dată
(char[] cu `'\0'`, `std::string`). → [Limbaje de programare](/stiintific/02-limbaje-programare) ·
[Șiruri — Algoritmi §1.9](/stiintific/01-algoritmi)

**Ce trebuie să știu ca să rezolv?** — indexarea (0 vs. 1!), zonele matricei pătratice (diagonale:
`i==j`, `i+j==n-1`), inserare/ștergere cu deplasări, funcțiile de șiruri (`strlen`, `strcpy`, `strcmp`
— egal înseamnă **0**!, `strstr`) și prelucrarea pe cuvinte.

**Cum se rezolvă?** — desenul structurii cu indici înainte de cod; la șiruri: parcurgere + funcțiile
de bibliotecă cu semnături corecte. → [Varianta 2 (I.3 rezolvat)](/subiecte/varianta-2)

**Cum se abordează didactic?** — vectorii abia la cl. a X-a (gimnaziul lucrează „pe flux", fără
tablouri — particularitate de programă!); metoda: modelarea („dulapul cu sertare").
→ [Lecția X.3](/lectii/x-03-tablouri-unidimensionale) · [Lecția XI.1](/lectii/xi-01-siruri-caractere) ·
[Strategii didactice](/metodica/02-strategii-didactice)
:::

::: details Căutare, sortare, interclasare (algoritmii fundamentali) · vizat: I.1 (15p)
**Ce este?** — Cele trei prelucrări clasice pe tablouri: căutarea (secvențială O(n), binară O(log n) —
doar pe date sortate), sortarea (selecție/inserție/bule O(n²); numărare O(n+vmax)), interclasarea a
două șiruri sortate O(n+m). → [Algoritmi §1.5–1.7](/stiintific/01-algoritmi)

**Ce trebuie să știu ca să rezolv?** — ideea + invariantul fiecărei metode; tabelul de execuție
(„starea după pasul k" — item de barem!); precondiția binarei; de ce interclasarea nu resortează.

**Cum se rezolvă?** — descrierea metodei în limbaj natural + exemplu urmărit în tabel + implementarea
comentată; la comparații de metode: numărarea operațiilor. → [Varianta 3](/subiecte/varianta-3)

**Cum se abordează didactic?** — cl. a X-a; metode: dramatizarea („sortarea umană"), exercițiul;
capcana: elevii confundă selecția cu bulele. → [Lecția X.7](/lectii/x-07-sortare) ·
[Lecția X.6](/lectii/x-06-cautare) · [Lecția X.8](/lectii/x-08-interclasare) ·
[Proiectarea didactică — model de lecție pe căutarea binară](/metodica/01-proiectare-didactica)
:::

::: details Subprograme și recursivitate · vizat: I.1 / I.3 (15p)
**Ce este?** — Descompunerea programului în funcții (parametri prin valoare/referință, variabile
locale/globale) și subprogramul care se autoapelează (caz de bază + pas recursiv, stiva de apeluri).
→ [Limbaje de programare §1.6](/stiintific/02-limbaje-programare)

**Ce trebuie să știu ca să rezolv?** — diferența valoare/referință (`&` — itemul etern); antetul scris
exact ca în cerință; desenul coborâre/urcare al apelurilor recursive; transformarea recursiv ↔ iterativ.

**Cum se rezolvă?** — la urmăriri: tabelul apelurilor completat de la cazul de bază în sus; la
implementări: antet conform + corp + exemplu de apel. → [Varianta 1 (I.3 cu subprogram)](/subiecte/varianta-1)

**Cum se abordează didactic?** — cl. a XI-a; metoda: demonstrația cu desenul stivei; capcana:
recursivitatea predată fără mecanism („crede-mă că merge").
→ [Lecția XI.7](/lectii/xi-07-subprograme) · [Lecția XI.8](/lectii/xi-08-recursivitate) ·
[Strategii didactice](/metodica/02-strategii-didactice)
:::

::: details Alocarea dinamică: liste, stive, cozi · vizat: I.1 (15p)
**Ce este?** — Structuri de date construite la execuție: lista înlănțuită (noduri + pointeri), stiva
(LIFO), coada (FIFO); memoria împărțită în stivă/heap. → [Alocarea dinamică](/stiintific/04-alocare-dinamica)

**Ce trebuie să știu ca să rezolv?** — operațiile pe listă cu **ordinea legăturilor** (întâi legi noul
nod, apoi muți capul!); push/pop/enqueue/dequeue; unde apar în realitate (stiva de apeluri, BFS);
memory leak / dangling pointer.

**Cum se rezolvă?** — desenul cu noduri și săgeți **înainte** de cod + implementarea operației cerute +
exemplu pas cu pas pe 3–4 noduri. → [Modele de subiecte](/subiecte/)

**Cum se abordează didactic?** — cl. a XI-a (implementare statică la baza programei); metoda: modelarea
(„lanțul uman"); capcana: pierderea capului listei. → [Lecția XI.3](/lectii/xi-03-liste-stiva-coada) ·
[Lecția XI.2](/lectii/xi-02-struct) · [Strategii didactice](/metodica/02-strategii-didactice)
:::

::: details Grafuri: terminologie, reprezentare, parcurgeri · vizat: I.1 (15p)
**Ce este?** — Modelul matematic al relațiilor: noduri + muchii/arce; matrice/liste de adiacență;
BFS (coadă, distanțe minime) și DFS (recursie, componente conexe).
→ [Teoria grafurilor §5.1–5.4](/stiintific/05-teoria-grafurilor)

**Ce trebuie să știu ca să rezolv?** — vocabularul dublu (lanț/drum, ciclu/circuit); formulele de
numărare (suma gradelor = 2m, maxim n(n−1)/2 muchii, arbore = n−1); citirea proprietăților din matrice;
ordinea de vizitare BFS/DFS cu tabelul cozii.

**Cum se rezolvă?** — desenează graful din date → aplică formula/parcurgerea → justifică (teorema
folosită se numește!). → [Varianta 3](/subiecte/varianta-3)

**Cum se abordează didactic?** — cl. a XI-a; metode: modelarea pe „graful clasei", dramatizarea undei
(BFS); capcana: terminologia orientat/neorientat amestecată.
→ [Lecția XI.4](/lectii/xi-04-grafuri-terminologie) · [Lecția XI.6](/lectii/xi-06-parcurgeri-bfs-dfs) ·
[Strategii didactice](/metodica/02-strategii-didactice)
:::

::: details Drumuri minime: Dijkstra, Roy–Floyd; arbori parțiali (Kruskal/Prim) · vizat: I.1 (15p)
**Ce este?** — Algoritmii pe grafuri ponderate: Dijkstra (sursă unică, costuri ≥ 0, invariant greedy),
Roy–Floyd (toate perechile, programare dinamică pe noduri intermediare), Kruskal/Prim (arborele parțial
de cost minim, proprietatea tăieturii). → [Teoria grafurilor §5.5–5.7](/stiintific/05-teoria-grafurilor)

**Ce trebuie să știu ca să rezolv?** — tabelul evoluției lui `d[]` la Dijkstra (item de barem!); de ce
cad costurile negative (contraexemplul!); semnificația lui k la Roy–Floyd; simularea Kruskal cu
respingerea muchiilor care închid ciclu.

**Cum se rezolvă?** — noțiuni (graf ponderat, costul drumului) → descrierea algoritmului în pași →
exemplul numeric urmărit în tabel → implementarea comentată — exact structura rezolvării oficiale.
→ [Varianta 1, I.1 — Dijkstra rezolvat integral](/subiecte/varianta-1)

**Cum se abordează didactic?** — cl. a XI-a (intensiv); metoda: studiul de caz pe o hartă reală;
capcana: algoritmul predat fără exemplul numeric. → [Lecția XI.6](/lectii/xi-06-parcurgeri-bfs-dfs) ·
[Strategii didactice](/metodica/02-strategii-didactice)
:::

::: details Metode de programare: backtracking, Divide et Impera, greedy, programare dinamică · vizat: I.1 (15p)
**Ce este?** — Tehnicile generale de proiectare a algoritmilor, fiecare cu „semnătura" ei: explorare cu
revenire / împarte-și-stăpânește / optim local / subprobleme suprapuse memorate.
→ [Metode de programare](/stiintific/03-metode-programare)

**Ce trebuie să știu ca să rezolv?** — componentele backtracking-ului (soluție-vector, condiții de
continuare, revenire) + arborele de explorare; schema divide/stăpânește/combină + merge sort; cele două
proprietăți greedy + contraexemplul rucsacului; principiul lui Bellman.

**Cum se rezolvă?** — prezentarea metodei „pe plan de idei" + **argumentarea oportunității** (cerință
explicită!) + o aplicație reprezentativă implementată. → [Ghidul de decizie §3.6](/stiintific/03-metode-programare)

**Cum se abordează didactic?** — cl. a XI-a; metoda: studiul de caz (aceeași problemă prin metode
diferite); capcana: schelet nou la fiecare problemă în loc de aceeași schemă.
→ [Lecția XI.10](/lectii/xi-10-backtracking) · [Lecția XI.9](/lectii/xi-09-divide-et-impera) ·
[Strategii didactice](/metodica/02-strategii-didactice)
:::

### I.2 — Subiect teoretic de TIC (15p)

**Forma tipică a cerinței:** o temă de TIC (ex. viruși și antiviruși, formatarea paginii) cu noțiuni +
caracteristici + exemple/opțiuni de aplicare — baremul plătește consistent **enumerările precise**
(ex. 6 opțiuni × 2p).

::: details Arhitectura sistemelor de calcul · vizat: I.2 (15p)
**Ce este?** — Modelul von Neumann: CPU (UCC + UAL) + memorie + periferice + magistrale; ierarhia de
memorie; unitățile de măsură. → [Arhitectura sistemelor](/stiintific/07-arhitectura-sistemelor)

**Ce trebuie să știu ca să rezolv?** — rolul fiecărei componente (nu lista lor!); RAM ≠ stocare;
ciclul fetch–decode–execute; conversiile KB/MB/GB.

**Cum se rezolvă?** — definiție → schema desenată → rolurile pe componente → exemple concrete de
dispozitive. → [Modele de subiecte](/subiecte/)

**Cum se abordează didactic?** — cl. a V-a, prin analogia „bucătăriei" și demonstrarea pe unitatea
deschisă. → [Lecția V — arhitectura](/lectii/v-08-arhitectura-sistem-calcul) ·
[Lecția V — dispozitive](/lectii/v-09-dispozitive-unitati-masura) ·
[Strategii didactice](/metodica/02-strategii-didactice)
:::

::: details Sisteme de operare, fișiere, securitate · vizat: I.2 (15p)
**Ce este?** — SO = gestionarul resurselor (procese, memorie, fișiere, periferice); sistemul de
fișiere ierarhic; virușii și protecția; licențele software. → [Sisteme de operare](/stiintific/08-sisteme-de-operare)

**Ce trebuie să știu ca să rezolv?** — funcțiile SO (tabelul!); căi absolute/relative + metacaractere
(`*`, `?`); tipuri de malware + măsuri de protecție (enumerările cu caracteristici = punctele!);
freeware vs. open source.

**Cum se rezolvă?** — definiție → clasificare → câte o caracteristică + un exemplu pentru fiecare
element enumerat (baremul numără elementele!). → [Modele de subiecte](/subiecte/)

**Cum se abordează didactic?** — cl. a V-a, cu analogia „dulapului cu dosare" și probă practică.
→ [Lecția V — SO și fișiere](/lectii/v-10-sistem-operare-fisiere) ·
[Evaluarea randamentului](/metodica/03-evaluare-randament)
:::

::: details Birotică: editor de texte, calcul tabelar, prezentări · vizat: I.2 (15p)
**Ce este?** — Aplicațiile de productivitate: formatare pe trei niveluri (caracter/paragraf/pagină),
celule + formule + funcții + referințe relative/absolute, diapozitive + reguli de design.
→ [Aplicații specializate](/stiintific/09-aplicatii-specializate)

**Ce trebuie să știu ca să rezolv?** — opțiunile de formatare **cu numele lor** (margini, orientare,
antet/subsol — tipică cerința „6 opțiuni de formatare la nivel de pagină"); comportamentul `$A$1` la
copiere; funcțiile SUM/AVERAGE/IF cu sintaxă.

**Cum se rezolvă?** — enumerare precisă + descrierea fiecărei opțiuni într-o frază + unde se aplică.
→ [Varianta 1, I.2 — formatarea paginii, rezolvat](/subiecte/varianta-1)

**Cum se abordează didactic?** — gimnaziu (VI–VIII), prin sarcini practice și proiecte cu produs real.
→ [Lecția VII — formatarea documentului](/lectii/vii-01-word-document) ·
[Lecția VIII — funcții Excel](/lectii/viii-02-excel-functii-sortare) ·
[Strategii didactice](/metodica/02-strategii-didactice)
:::

::: details Internet, rețele, securitate online · vizat: I.2 (15p)
**Ce este?** — Rețele (LAN/WAN), protocoale (TCP/IP, HTTP/HTTPS, DNS), servicii Internet, HTML de
bază, siguranța online. → [Rețele de calculatoare](/stiintific/10-retele-de-calculatoare)

**Ce trebuie să știu ca să rezolv?** — rolul fiecărui protocol (tabelul!); traseul „ce se întâmplă
când tastezi un URL"; etichetele HTML de bază; reguli de securitate cu justificare.

**Cum se rezolvă?** — definiții → clasificare (tipuri de rețele) → protocoale cu rol → exemple.
→ [Modele de subiecte](/subiecte/)

**Cum se abordează didactic?** — cl. a V-a (siguranța) și a VIII-a (HTML); metoda: proiectul
(mini-site). → [Lecția V — Internet](/lectii/v-11-internet-siguranta) ·
[Lecția VIII — HTML](/lectii/viii-04-html-structura) · [Strategii didactice](/metodica/02-strategii-didactice)
:::

### I.3 — Problema de programare (15p)

**Forma tipică a cerinței:** un **subprogram cu antet dat** + prelucrări (adesea cu fișier text) +
**descrierea algoritmului în limbaj natural** — atenție, descrierea e punct separat de barem, nu
opțională! Baremul defalcă: antetul ~1p, fiecare prelucrare 3–4p, lucrul cu fișierul ~1p, corectitudinea
de ansamblu ~1p, descrierea ~1p.

::: details Cum citești cerința (înainte de orice cod) · vizat: I.3 (15p)
**Ce este?** — Protocolul de analiză a enunțului: ce se dă (antetul e DAT — se respectă literă cu
literă), ce se cere, ce format au datele. → [Etapele rezolvării](/lectii/ix-02-etapele-rezolvarii-algoritmul)

**Ce trebuie să știu ca să rezolv?** — antetul impus nu se modifică; fișierele au nume fixe din enunț;
cazurile-limită (șir vid, n=0, valori egale) valorează puncte; descrierea algoritmului se scrie chiar
dacă pare redundantă.

**Cum se rezolvă?** — subliniază în enunț: antetul / intrarea / ieșirea / condițiile; scrie întâi
schema în cuvinte, apoi codul. → [Varianta 1, I.3 rezolvat integral](/subiecte/varianta-1)

**Cum se abordează didactic?** — exact „analiza problemei" predată la cl. a IX-a — profesorul care o
cere elevilor o exersează pentru propriul examen.
→ [Lecția IX.2](/lectii/ix-02-etapele-rezolvarii-algoritmul) · [Proiectarea didactică](/metodica/01-proiectare-didactica)
:::

::: details Fișiere text în C++ · vizat: I.3 (15p)
**Ce este?** — Citirea/scrierea din/în fișiere cu `ifstream`/`ofstream`; idiomul `while (fin >> x)`
pentru „câte valori sunt, nu știm". → [Limbaje de programare §1.5](/stiintific/02-limbaje-programare)

**Ce trebuie să știu ca să rezolv?** — deschiderea cu numele exact din enunț; citirea până la sfârșit;
scrierea cu separatorii ceruți (spațiu/linie nouă); `close()` la final.

**Cum se rezolvă?** — șablonul: deschide → citește în buclă → prelucrează → scrie → închide; testează
mental pe fișierul-exemplu din enunț. → [Lecția X.5 — fișiere text](/lectii/x-05-fisiere-text)

**Cum se abordează didactic?** — cl. a X-a; metoda: exercițiul cu fișiere de test proprii (cultura
testării). → [Lecția X.5](/lectii/x-05-fisiere-text) · [Evaluarea randamentului](/metodica/03-evaluare-randament)
:::

::: details Subprogramul cu antet impus · vizat: I.3 (15p)
**Ce este?** — Funcția a cărei semnătură (nume, parametri, tip returnat) e fixată de enunț — tu scrii
doar corpul + apelul. → [Limbaje de programare §1.6](/stiintific/02-limbaje-programare)

**Ce trebuie să știu ca să rezolv?** — transcrierea antetului fără nicio abatere; `&` acolo unde
parametrul se modifică; diferența returnează/afișează (enunțul spune explicit!); apelul demonstrativ
dacă e cerut.

**Cum se rezolvă?** — copiază antetul → stabilește rolul fiecărui parametru → scrie corpul → verifică
tipul returnat. → [Varianta 2, I.3](/subiecte/varianta-2)

**Cum se abordează didactic?** — cl. a XI-a, „antetul din enunț" ca exercițiu-tipar.
→ [Lecția XI.7 — subprograme](/lectii/xi-07-subprograme) · [Strategii didactice](/metodica/02-strategii-didactice)
:::

::: details Algoritmii tipici de prelucrare (numere, șiruri, tablouri) · vizat: I.3 (15p)
**Ce este?** — Repertoriul din care se compun problemele: cifrele numărului (`%10`, `/10`),
divizibilitate/primalitate, contor/acumulator/campion/fanion, prelucrări pe tablouri și pe cuvinte.
→ [Algoritmi — algoritmi elementari](/stiintific/01-algoritmi)

**Ce trebuie să știu ca să rezolv?** — mecanismul mod/div și oglinditul; inițializările corecte
(suma=0, produs=1, maxim=prima valoare!); fanionul care nu se „răzgândește"; parcurgerea pe cuvinte.

**Cum se rezolvă?** — recunoaște tiparul în cerință („cel mai mare…" = campion; „câte…" = contor;
„toate…" = fanion) și compune-le. → [Varianta 1, I.3 — suma cifrelor + cifra de control](/subiecte/varianta-1)

**Cum se abordează didactic?** — construite progresiv din cl. a VIII-a (pe flux) până la a X-a (pe
tablouri); metoda: variații pe același schelet.
→ [Lecția IX.5 — cifrele numărului](/lectii/ix-05-cifrele-unui-numar) ·
[Lecția VIII.9 — fanionul](/lectii/viii-09-verificarea-proprietatii) ·
[Strategii didactice](/metodica/02-strategii-didactice)
:::

### I.4 — Baze de date (15p)

**Forma tipică a cerinței:** proiectarea unei baze de date dintr-un enunț de gestiune: model
conceptual (entități ~3p, relații ~3p) → normalizare (FN1–FN3, ~3p) → tabele cu chei (~3p) → comenzi
SQL (~3p). Se lucrează pe hârtie — diagrame + comenzi scrise.

::: details Modelul conceptual: entități, atribute, relații · vizat: I.4 (15p)
**Ce este?** — Traducerea enunțului în entități (obiectele), atribute (proprietățile), identificatori
unici și relații cu cardinalitate (1:1, 1:N, M:N). → [Baze de date §6.2](/stiintific/06-baze-de-date)

**Ce trebuie să știu ca să rezolv?** — identificatorul NU e numele (se repetă!); citirea cardinalității
în ambele sensuri; **rezolvarea M:N printr-o entitate de legătură** — pasul care desparte notele.

**Cum se rezolvă?** — subliniază substantivele (candidate la entități) → atributele fiecăreia →
relațiile cu cardinalitate → sparge M:N. → [Varianta 1, I.4 rezolvat](/subiecte/varianta-1)

**Cum se abordează didactic?** — cl. a XII-a, pe cazul bibliotecii școlii; metoda: studiul de caz +
„atacarea" modelului de către colegi. → [Lecția XII.1](/lectii/xii-01-entitati-relatii) ·
[Strategii didactice](/metodica/02-strategii-didactice)
:::

::: details Normalizarea FN1–FN3 · vizat: I.4 (15p)
**Ce este?** — Cele trei „filtre" împotriva redundanței: valori atomice (FN1), fără dependențe parțiale
de cheia compusă (FN2), fără dependențe tranzitive (FN3). → [Baze de date §6.2](/stiintific/06-baze-de-date)

**Ce trebuie să știu ca să rezolv?** — definiția fiecărei forme + **anomalia** pe care o previne
(actualizare/ștergere/inserare); diagnosticul „în ce formă e tabelul dat?".

**Cum se rezolvă?** — pentru fiecare formă: enunț + verificarea pe tabelul din problemă + despărțirea
justificată. → [Lecția XII.2 — normalizarea condusă complet](/lectii/xii-02-normalizare)

**Cum se abordează didactic?** — cl. a XII-a, prin „provocarea anomaliilor" pe un tabel stufos.
→ [Lecția XII.2](/lectii/xii-02-normalizare) · [Evaluarea randamentului](/metodica/03-evaluare-randament)
:::

::: details Tabele, chei, integritate referențială · vizat: I.4 (15p)
**Ce este?** — Modelul fizic: tabele cu câmpuri tipizate, cheia primară (PK), cheia străină (FK) care
implementează relația, regulile de integritate. → [Baze de date §6.3](/stiintific/06-baze-de-date)

**Ce trebuie să știu ca să rezolv?** — PK = „cine sunt eu", FK = „la cine mă refer"; FK stă pe partea
„mulți" a relației 1:N; constrângerile (`NOT NULL`, `UNIQUE`, `CHECK`).

**Cum se rezolvă?** — din diagrama conceptuală: entitate → tabel, atribut → câmp cu tip ales,
identificator → PK, relație → FK. → [Varianta 1, I.4](/subiecte/varianta-1)

**Cum se abordează didactic?** — cl. a XII-a, cu experimentul „sabotează baza!" (integritatea văzută
apărându-se). → [Lecția XII.4](/lectii/xii-04-chei-integritate) · [Lecția XII.3](/lectii/xii-03-tabele)
:::

::: details SQL: SELECT + manipularea datelor · vizat: I.4 (15p)
**Ce este?** — Limbajul declarativ al bazelor de date: interogarea (`SELECT … FROM … WHERE … GROUP BY …
ORDER BY`, `JOIN`) și modificarea (`INSERT`/`UPDATE`/`DELETE`, `CREATE TABLE`).
→ [Baze de date §6.4](/stiintific/06-baze-de-date)

**Ce trebuie să știu ca să rezolv?** — ordinea logică de evaluare (de ce agregatele nu stau în WHERE);
WHERE vs. HAVING; condiția de JOIN = FK la PK; UPDATE/DELETE fără WHERE = dezastru.

**Cum se rezolvă?** — traducerea cerinței din română clauză cu clauză; scrie SELECT-ul de verificare
înaintea oricărui UPDATE. → [Varianta 1, I.4 — comenzile SQL](/subiecte/varianta-1)

**Cum se abordează didactic?** — cl. a XII-a, pe SGBD real; metoda: „din română în SQL" gradat.
→ [Lecția XII.5](/lectii/xii-05-sql-select) · [Lecția XII.6](/lectii/xii-06-sql-dml-ddl) ·
[Strategii didactice](/metodica/02-strategii-didactice)
:::

## Subiectul II — Metodica (30p)

**Forma cerinței:** primești **două secvențe (A și B) din programe școlare reale** — cu competențe
specifice și conținuturi. Pe ele construiești un scenariu didactic (II.1) și itemi de evaluare (II.2).
Cheia întregului subiect: **totul se raportează la secvențele date**, nu la generalități.
→ Programele și competențele, integral: [Competențe din programele școlare](/competente-scolare) ·
[Conținuturi pe clase](/programa-clase) · [Lecțiile în practică](/lectii/)

### II.1 — Scenariul didactic (15p)

**Baremul tipic:** forma de organizare 1p + justificare 2p + mijloc 1p + metodă 1p + activitate de
învățare 2p + **activitatea profesorului 4p + activitatea elevilor 4p**. Cele 8 puncte pe scenariu se
câștigă cu verbe concrete, nu cu formulări generale.

::: details Citirea secvenței de programă · vizat: II.1 (15p)
**Ce este?** — Decodarea secvenței date: competența specifică (codul `X.Y`), conținutul, clasa —
acestea dictează tot ce urmează. → [Competențe din programele școlare](/competente-scolare)

**Ce trebuie să știu ca să rezolv?** — structura programei (competențe generale → specifice →
conținuturi); codificarea `X.Y`; la ce clasă/nivel se predă conținutul dat (Scratch la V–VI, C++ de la
VII, vectori abia la X!).

**Cum se rezolvă?** — extrage din secvență: clasa → competența (o citezi!) → conținutul → nivelul
elevilor; abia apoi alegi metoda. → [Varianta 1, II.1 rezolvat](/subiecte/varianta-1)

**Cum se abordează didactic?** — este chiar primul pas al proiectării didactice (programă →
planificare → lecție). → [Proiectarea didactică](/metodica/01-proiectare-didactica) ·
[Programa pe clase](/programa-clase)
:::

::: details Alegerea metodei, formei de organizare și mijlocului · vizat: II.1 (15p)
**Ce este?** — Strategia didactică: combinația coerentă metodă + formă + mijloc, adecvată competenței
și conținutului din secvență. → [Strategii didactice](/metodica/02-strategii-didactice)

**Ce trebuie să știu ca să rezolv?** — clasificarea metodelor (expozitive / euristice /
activ-participative / IAC) cu **caracteristicile** lor; formele (frontal/individual/grupe); mijloacele
specifice informaticii; și mai ales **justificarea** alegerii (2p!).

**Cum se rezolvă?** — folosește [matricea de corelare](#corelarea-didactica-tabloul-complet) de mai
jos: tipul de conținut → metoda potrivită → forma + mijlocul coerente; scrie justificarea prin
raportare la competență. → [Varianta 1, II.1](/subiecte/varianta-1)

**Cum se abordează didactic?** — n/a (aceasta e chiar didactica) — dar modelele de mini-scenarii pe
conținut informatic sunt gata făcute în [tabelul metodelor-cheie](/metodica/02-strategii-didactice).
:::

::: details Scenariul: activitatea profesorului și a elevilor (4p + 4p) · vizat: II.1 (15p)
**Ce este?** — Descrierea concretă, pe două voci, a secvenței de lecție: ce face profesorul / ce fac
elevii, în paralel, moment cu moment. → [Proiectarea didactică — proiectul de lecție model](/metodica/01-proiectare-didactica)

**Ce trebuie să știu ca să rezolv?** — momentele lecției; verbe concrete pentru profesor (prezintă,
demonstrează, adresează întrebarea…, distribuie fișa) și pentru elevi (observă, formulează, implementează,
compară, testează); corelarea explicită cu competența din secvență.

**Cum se rezolvă?** — tabel pe două coloane, 4–6 rânduri (momente), fiecare rând cu ambele voci;
niciodată doar „profesorul explică, elevii ascultă". → [Varianta 1, II.1 — scenariul complet](/subiecte/varianta-1)

**Cum se abordează didactic?** — modelul complet de proiect de lecție („Căutarea binară", cl. a X-a)
e construit exact pe acest tipar. → [Proiectarea didactică](/metodica/01-proiectare-didactica) ·
[fluxul pas cu pas de mai jos](#de-la-secventa-de-programa-la-scenariul-ii-1-pas-cu-pas)
:::

### II.2 — Evaluarea și itemii (15p)

**Baremul tipic:** caracteristici ale metodei/instrumentului 2×1p + reguli de proiectare 3×1p +
**câte un item pentru fiecare secvență** (enunț 3p + răspuns așteptat 2p, ×2). Itemul fără răspuns
așteptat pierde puncte sigure.

::: details Metode și instrumente de evaluare · vizat: II.2 (15p)
**Ce este?** — Evaluarea tradițională (orală/scrisă/practică) și alternativă (proiect, portofoliu,
investigație, autoevaluare), cu formele inițială/formativă/sumativă.
→ [Evaluarea randamentului](/metodica/03-evaluare-randament)

**Ce trebuie să știu ca să rezolv?** — caracteristicile fiecărei metode (se cer explicit!); calitățile
instrumentului (validitate, fidelitate); la informatică: proba practică și proiectul au specific
propriu (produsul rulează!).

**Cum se rezolvă?** — numește metoda → 2–3 caracteristici → de ce e potrivită competenței din secvență.
→ [Varianta 1, II.2](/subiecte/varianta-1)

**Cum se abordează didactic?** — formele alternative concretizate la informatică (portofoliu = colecția
de programe, investigația = set de date în Excel). → [Evaluarea randamentului](/metodica/03-evaluare-randament) ·
[Lecția V.5 — evaluarea prin proiect](/lectii/v-05-medii-grafice-scratch)
:::

::: details Tipologia itemilor + matricea de specificații · vizat: II.2 (15p)
**Ce este?** — Itemii obiectivi (dual, multiplu, pereche), semiobiectivi (răspuns scurt, completare,
**întrebare structurată** — vedeta subiectelor), subiectivi (rezolvare de probleme, eseu); matricea de
specificații pentru validitate. → [Evaluarea randamentului §3.4–3.5](/metodica/03-evaluare-randament)

**Ce trebuie să știu ca să rezolv?** — definiția + avantaje/limite pentru fiecare categorie; regulile
de proiectare (enunț clar, barem explicit, concordanță cu competența); structura
[întrebării structurate](/metodica/03-evaluare-randament#itemul-de-tip-intrebare-structurata)
(material-stimul + subîntrebări gradate, independente) — dezvoltată complet, cu exemplu și barem.

**Cum se rezolvă?** — identifică tipul cerut → enunță 2 caracteristici + 3 reguli → abia apoi redactezi.
→ [Varianta 1, II.2 — itemi de tip întrebare structurată](/subiecte/varianta-1)

**Cum se abordează didactic?** — matricea de specificații și baremul detaliat pe criterii, cu model
complet pe „algoritmi de sortare". → [Evaluarea randamentului](/metodica/03-evaluare-randament)
:::

::: details Redactarea itemului: enunț + răspuns așteptat + barem · vizat: II.2 (15p)
**Ce este?** — Produsul final cerut: câte un item **pe conținutul fiecărei secvențe date**, complet
(enunț + răspunsul corect + punctajul). → [Evaluarea randamentului](/metodica/03-evaluare-randament)

**Ce trebuie să știu ca să rezolv?** — itemul se ancorează în competența și conținutul secvenței (nu
un item „în general"!); enunțul fără ambiguități; răspunsul așteptat scris integral; baremul defalcat.

**Cum se rezolvă?** — șablonul: [contextul din secvență] + [sarcina precisă] + [răspuns model] +
[punctaj]; verifică-l cu regulile enunțate la punctul anterior — coerența se punctează.
→ [Varianta 2, II.2](/subiecte/varianta-2) · [fluxul pas cu pas de mai jos](#construirea-itemului-ii-2-pas-cu-pas)

**Cum se abordează didactic?** — exemplele de itemi pe toate cele trei categorii există la **fiecare**
temă științifică (secțiunea „Abordare metodică") — sursă directă de inspirație.
→ [Algoritmi — itemii temei](/stiintific/01-algoritmi) · [harta tuturor temelor](/harta-materiei)
:::

## Corelarea didactică — tabloul complet

Secțiunea care face didactica **intuitivă**: cum se leagă între ele piesele (competență, conținut, tip
de lecție, metodă, formă, mijloc, evaluare) — și cum se folosesc legăturile la Subiectul II.

### Lanțul didactic

Ordinea deciziilor — fiecare verigă o determină pe următoarea:

> **Competența** (din programă) → **Conținutul** (prin care se formează) → **Tipul de lecție** (ce fac
> azi: predau? exersez? evaluez?) → **Metoda** (cum) → **Forma de organizare** (cu cine) →
> **Mijlocul** (cu ce) → **Evaluarea** (cum verific)

Definițiile verigilor: [Proiectarea didactică](/metodica/01-proiectare-didactica) ·
[Strategii didactice](/metodica/02-strategii-didactice) ·
[Evaluarea randamentului](/metodica/03-evaluare-randament). Greșeala clasică la examen: alegerea
metodei **înaintea** citirii competenței — lanțul curge într-un singur sens.

### Matricea de corelare: tip de lecție ↔ metode ↔ forme ↔ mijloace ↔ evaluare

| Tip de lecție | Metode potrivite | Forma de organizare | Mijloace tipice | Evaluarea asociată | Exemplu din curs |
|---|---|---|---|---|---|
| **dobândire de cunoștințe** | expunerea, conversația euristică, problematizarea, demonstrația | frontal → apoi individual | videoproiector, IDE demonstrativ, planșe/scheme | observare sistematică, întrebări formative | [Grafuri — terminologie](/lectii/xi-04-grafuri-terminologie) |
| **formare de priceperi (laborator)** | exercițiul, algoritmizarea, învățarea prin descoperire, IAC | individual sau perechi la calculator | calculator, fișe de lucru, mediu de programare | probă practică, verificare pe criterii | [Fișiere text](/lectii/x-05-fisiere-text) |
| **recapitulare / sistematizare** | studiul de caz, problematizarea, învățarea prin cooperare | pe grupe | scheme recapitulative, seturi de probleme | test formativ, hartă conceptuală | [Aplicații practice X](/lectii/x-10-aplicatii-practice) |
| **evaluare** | — (instrumentele din [metodica 3](/metodica/03-evaluare-randament)) | individual | test scris, calculator (probă practică) | sumativă: test, probă practică, proiect | [Proiecte Scratch — evaluare](/lectii/vi-10-proiecte-scratch-repetitii) |
| **mixtă** (cea mai frecventă) | combinații: conversație + exercițiu + IAC | frontal + individual | videoproiector + calculatoare | formativă continuă + temă | [Proiectul de lecție model](/metodica/01-proiectare-didactica) |

Cum o folosești la II.1: identifici tipul de lecție potrivit secvenței → iei de pe **același rând**
metoda, forma, mijlocul și evaluarea — coerența dintre ele este ce punctează baremul la „justificare".

### „Ce metodă aleg?" — tabel decizional pe tipul de conținut

| Conținutul din secvență | Metoda recomandată | De ce | Scenariul-tip într-o frază |
|---|---|---|---|
| **algoritm nou** (ex. căutarea binară) | problematizarea + descoperirea dirijată | elevii pot deduce ideea din problemă | profesorul pune problema-joc; elevii propun strategii și formulează algoritmul |
| **sintaxă / limbaj** (ex. instrucțiunea `for`) | demonstrația + exercițiul | sintaxa nu se descoperă, se arată și se exersează | profesorul demonstrează pe model; elevii scriu variații gradate |
| **aplicație TIC** (ex. formule Excel) | demonstrația la videoproiector + exercițiul practic + IAC | deprindere de operare, feedback imediat | profesorul execută pașii; elevii reproduc și extind pe sarcini proprii |
| **concept teoretic** (ex. proprietățile algoritmilor) | conversația euristică + exemplul și contraexemplul | conceptul se construiește din cazuri | profesorul aduce exemple/contraexemple; elevii extrag definiția |
| **consolidare / probleme** | exercițiul + studiul de caz + cooperarea în grupe | transfer și comparare de soluții | elevii rezolvă în grupe; profesorul moderează compararea soluțiilor |
| **proiect / produs final** | învățarea bazată pe proiect | integrare + motivație autentică | elevii construiesc un produs pe etape; profesorul jalonează și evaluează pe grilă |

Detaliile fiecărei metode + mini-scenarii pe conținut informatic:
[Strategii didactice](/metodica/02-strategii-didactice).

### De la secvența de programă la scenariul II.1 — pas cu pas

1. **Citește secvența**: notează clasa, competența specifică (o vei **cita**), conținutul.
   → [Competențe școlare](/competente-scolare)
2. **Clasifică conținutul** (algoritm nou / sintaxă / TIC / teoretic / consolidare) — tabelul decizional
   de mai sus îți dă metoda. *(metodă corectă = 1p)*
3. **Justifică alegerea** prin competență și vârstă: „metoda X este adecvată deoarece competența Y cere…,
   iar elevii de clasa Z…". *(justificare = 2p)*
4. **Alege forma + mijlocul** de pe același rând al matricei de corelare — coerente cu metoda.
   *(formă 1p + mijloc 1p)*
5. **Formulează activitatea de învățare** legată explicit de competență („exersarea… prin…"). *(2p)*
6. **Scrie scenariul pe două coloane** — profesorul (verbe: prezintă, demonstrează, adresează, distribuie,
   monitorizează) / elevii (verbe: observă, formulează, implementează, testează, compară) — 4–6 momente.
   *(4p + 4p — aici se câștigă subiectul)*
7. **Autoverificare**: fiecare element cerut în enunț are corespondent în text? competența e citată?
   elevii **fac** ceva în fiecare moment?

Model rezolvat integral: [Varianta 1, II.1](/subiecte/varianta-1) · proiect de lecție complet:
[Proiectarea didactică](/metodica/01-proiectare-didactica).

### Construirea itemului II.2 — pas cu pas

1. **Identifică instrumentul cerut** (test / probă practică / proiect / portofoliu) și dă-i 2
   caracteristici din [metodica 3](/metodica/03-evaluare-randament). *(2×1p)*
2. **Enunță regulile de proiectare** (claritate, barem explicit, concordanță cu competența…). *(3×1p)*
3. **Ancorează itemul în secvență**: conținutul itemului = conținutul secvenței A (apoi B), competența
   = cea citată.
4. **Redactează enunțul** precis (la
   [întrebarea structurată](/metodica/03-evaluare-randament#itemul-de-tip-intrebare-structurata):
   material-stimul + subîntrebări gradate de la simplu la complex, independente). *(3p per item)*
5. **Scrie răspunsul așteptat integral** + punctajul defalcat. *(2p per item)*
6. **Verifică validitatea** cu matricea de specificații: itemul măsoară chiar competența vizată?

Model rezolvat: [Varianta 1, II.2](/subiecte/varianta-1) · tipologia completă a itemilor:
[Evaluarea randamentului](/metodica/03-evaluare-randament).

### Greșeli frecvente la Subiectul II

::: warning Capcanele care costă puncte
- metoda numită **fără justificare** (justificarea = 2p separate);
- scenariu în care elevii doar „ascultă și notează" — activitatea elevilor valorează **4p**;
- confuzia metodă (cum) ↔ mijloc (cu ce) ↔ formă (cu cine);
- item „în general", neancorat în **secvența dată**;
- item fără **răspuns așteptat** și fără punctaj — se pierd 2p siguri per item;
- terminologie veche („obiective operaționale") în loc de **competențe**;
- ignorarea nivelului de vârstă (C++ propus la clasa a V-a, unde programa cere medii grafice!).
:::

## Acoperirea materiei — verificare finală

Fiecare temă din programă, mapată pe examen — bifează pe măsură ce stăpânești:

| Tema din programă | Vizată la | Teoria | Didactica aplicată (lecții) |
|---|---|---|---|
| 1. Algoritmi | I.1, I.3 | [Algoritmi](/stiintific/01-algoritmi) | [IX](/lectii/#clasa-a-ix-a) · [X](/lectii/#clasa-a-x-a) |
| 2. Limbaje de programare (C++) | I.1, I.3 | [Limbaje](/stiintific/02-limbaje-programare) | [VII](/lectii/#clasa-a-vii-a) · [X](/lectii/#clasa-a-x-a) |
| 3. Metode de programare | I.1 | [Metode](/stiintific/03-metode-programare) | [XI](/lectii/#clasa-a-xi-a) |
| 4. Alocarea dinamică | I.1 | [Alocare dinamică](/stiintific/04-alocare-dinamica) | [XI](/lectii/#clasa-a-xi-a) |
| 5. Teoria grafurilor | I.1 | [Grafuri](/stiintific/05-teoria-grafurilor) | [XI](/lectii/#clasa-a-xi-a) |
| 6. Baze de date | I.4 | [Baze de date](/stiintific/06-baze-de-date) | [XII](/lectii/#clasa-a-xii-a) |
| 7. Arhitectura sistemelor | I.2 | [Arhitectură](/stiintific/07-arhitectura-sistemelor) | [V](/lectii/#clasa-a-v-a) |
| 8. Sisteme de operare | I.2 | [SO](/stiintific/08-sisteme-de-operare) | [V](/lectii/#clasa-a-v-a) |
| 9. Aplicații specializate | I.2 | [Birotică](/stiintific/09-aplicatii-specializate) | [VI](/lectii/#clasa-a-vi-a) · [VII](/lectii/#clasa-a-vii-a) · [VIII](/lectii/#clasa-a-viii-a) |
| 10. Rețele de calculatoare | I.2 | [Rețele](/stiintific/10-retele-de-calculatoare) | [V](/lectii/#clasa-a-v-a) · [VIII](/lectii/#clasa-a-viii-a) |
| M1. Proiectarea didactică | II.1 | [Metodica 1](/metodica/01-proiectare-didactica) | toate planificările din [catalog](/lectii/) |
| M2. Strategii didactice | II.1 | [Metodica 2](/metodica/02-strategii-didactice) | secțiunea „Exerciții cu metodica" din fiecare lecție |
| M3. Evaluarea randamentului | II.2 | [Metodica 3](/metodica/03-evaluare-randament) | secțiunea „Particularități" din fiecare lecție |

**Traseul de pregătire recomandat:**

1. Parcurge ghidul cu nodurile **închise** — reconstruiește din memorie ce ar conține fiecare;
2. Deschide nodurile unde ai ezitat și urmează trimiterile la teorie;
3. La fiecare temă științifică, citește și secțiunile **„Conexiuni cu alte teme"** — ele țes plasa;
4. Rezolvă integral [Varianta 1](/subiecte/varianta-1) cu ceas (4 ore), apoi confruntă cu baremul;
5. Fixează cu [Cardurile](/carduri) (grilă + cod), reia [Variantele 2–3](/subiecte/) și continuă cu
   subiectele reale din [Arhiva oficială 2018–2026](/subiecte/arhiva-oficiala);
6. Cu o săptămână înainte: doar acest ghid (închis!) + [fișa cu Esențialul de reținut](/esential)
   + [greșelile frecvente](#greseli-frecvente-la-subiectul-ii).

# ROADMAP — Curs Definitivat Informatică și TIC

Jurnal de dezvoltare și checklist de progres pentru site-ul static (VitePress) care acoperă
programa examenului național de definitivare în învățământ, disciplina **Informatică și Tehnologia
Informației**.

> Legendă: `[x]` finalizat · `[~]` în lucru · `[ ]` de făcut

---

## Pasul 0 — Documentația de dezvoltare
- [x] `ROADMAP.md` — pașii de dezvoltare + checklist (acest fișier)
- [x] `STRUCTURA-CONTINUT.md` — arhitectura de conținut + șablonul per-temă
- [x] `SURSE.md` — surse oficiale reale + bibliografia din programă

## Pasul 1 — Schelet proiect VitePress
- [x] `package.json` cu scripturile `docs:dev` / `docs:build` / `docs:preview`
- [x] `npm install` (vitepress)
- [x] `docs/.vitepress/config.mts` — limbă ro-RO, nav, sidebar, căutare locală, etichete în română
- [x] `docs/.vitepress/theme/index.ts` + `custom.css` — identitate vizuală, ajustări dark/light
- [x] `.gitignore`
- [x] `docs/index.md` — pagina principală (hero + module)

## Pasul 2 — Tematica științifică (10 teme)
- [x] 01 — Algoritmi
- [x] 02 — Limbaje de programare (C++)
- [x] 03 — Metode de programare
- [x] 04 — Alocarea dinamică a memoriei
- [x] 05 — Teoria grafurilor
- [x] 06 — Baze de date
- [x] 07 — Arhitectura sistemelor de calcul
- [x] 08 — Sisteme de operare
- [x] 09 — Aplicații și programe specializate
- [x] 10 — Rețele de calculatoare

## Pasul 3 — Tematica de metodică (3 teme)
- [x] 01 — Proiectarea, organizarea și desfășurarea activității didactice
- [x] 02 — Strategii didactice (predare–învățare–evaluare)
- [x] 03 — Evaluarea randamentului școlar

## Pasul 4 — Pagini transversale
- [x] `despre-examen.md` — metodologie, structură probă, notă minimă, calendar, surse
- [x] `competente-cadru.md` — competențele cadrului didactic (Secțiunea B)
- [x] `competente-scolare.md` — competențele din programele școlare: **liste complete** de competențe
      generale + specifice (gimnaziu V–VIII, liceu Informatică IX–X, extrase din PDF-urile oficiale) +
      explicarea codificării + cele citate în subiecte
- [x] `bibliografie.md` — bibliografie oficială + surse curente

## Pasul 5 — Modele de subiecte
> Aliniate la **structura reală** confirmată din subiecte oficiale (Subiect I 60p / Subiect II 30p / 10 oficiu).
- [x] Varianta 1 — **Model oficial 24 iulie 2024** (rezolvare integrală + barem oficial)
- [x] Varianta 2 — **Varianta oficială 8 iulie 2025** (rezolvare integrală + barem oficial)
- [x] Varianta 3 — variantă de antrenament în format real (rezolvare + barem orientativ)

## Pasul 5b — Aliniere la subiectele oficiale (revizuire)
- [x] Corectat structura examenului în `despre-examen.md` (Subiect I 60p / Subiect II 30p / 10 oficiu)
- [x] Actualizat `subiecte/index.md` cu tiparul cerințelor (I.1–I.4, II.1–II.2)
- [x] Adăugate subiectele oficiale ca referință în `SURSE.md`

## Pasul 6 — Verificare
- [x] `npm run docs:build` fără erori (inclusiv dead links) — 23 pagini generate în `dist/`
- [ ] `npm run docs:dev` — navigare, dark/light, responsive, căutare (verificare manuală în browser, de către utilizator)
- [~] Exemple C++: **nu există compilator** (`g++`/`clang++`/`cl`) pe sistem → verificare prin **revizuire manuală**;
      programele complete din `subiecte/` includ toate header-ele necesare (`-std=c++17`)
- [x] Confruntare referințe metodice/legislative cu documentele în vigoare (Legea 198/2023, OMEC 5434/2020)

---

## Pasul 7 — Extindere și aprofundare
- [x] Adăugat competențele specifice pentru **clasele a XI-a și a XII-a** (ciclul superior) în `competente-scolare.md`
- [x] Restructurat liceul pe **două cicluri** (IX–X: 5 comp. generale; XI–XII: 3 comp. generale)
- [x] Aprofundat **Teoria grafurilor**: definiții explicate pentru nod/muchie/arc/grad/lanț/drum/ciclu etc. + exemplu de lucru; explicație Dijkstra pas cu pas
- [x] Aprofundat **Algoritmi**: „cum funcționează" fiecare metodă de sortare
- [x] Adăugat **„Corelare cu programa școlară"** (coduri pe clase) la toate cele 10 teme științifice
- [x] Creat `harta-materiei.md` — cuprinsul complet al programei cu linkuri la fiecare subiect + intrare în meniu („Programa")

## Pasul 8 — Revizuire conținut + pagina interactivă „Carduri"
- [x] Re-verificat cadrul legal/programa în vigoare (CONFIRMAT: Legea 198/2023 — în vigoare în 2026,
      modificată de Legea 12/2026 și O.U.G. 28/2026; metodologie OMEC 5434/2020; calendar 2026 = Ordin
      5731/2025, **proba scrisă 14 iulie 2026**; programe școlare OMEN 3393/2017 și OMECI 5099/2009)
- [x] Precizări în `SURSE.md` și `despre-examen.md`: data probei 2026, taxa de 300 lei după 3 susțineri,
      mențiunea modificărilor Legii 198/2023
- [x] `stiintific/01-algoritmi.md`: rescrise exemplele de cod cu **denumiri intuitive** (`suma`, `numar`,
      `stanga`/`dreapta`/`mijloc`, `pozMinim`…); prescurtări doar consacrate, cu comentariu (`cmmdc`, `cmmmc`)
- [x] `stiintific/01-algoritmi.md`: secțiune nouă **1.9 Specificitatea limbajului C++** — funcții de
      bibliotecă uzuale (atoi/stoi, strncpy/strstr, isdigit/toupper, substr/find, sort/max/min) cu semnături + exemple
- [x] Pagina **`carduri.md`** + componenta `theme/components/Flashcards.vue` + bancul `theme/cards-data.js`:
      3 moduri (grilă / +text cu auto-evaluare / +cod), cod C++ rulat online prin **Wandbox** (CORS, fără cheie)
- [x] Înregistrată componenta global în `theme/index.ts` (`enhanceApp`); intrare „Carduri" în nav + pe pagina principală
- [x] Banc extins cu **tema „Competențe"** (25 întrebări: 16 grilă + 9 text) — competențe generale (gimnaziu,
      liceu IX–X și XI–XII) și specifice (cu text oficial), inclusiv decodarea codului `X.Y`
- [x] Adăugat **filtru pe temă** în ecranul de start (chips + contor de întrebări per mod)
- [x] Carduri „cod → denumirea algoritmului" (grilă cu bloc de cod) + carduri competențe specifice generate automat
- [x] Deploy **GitHub Pages**: `base` din `DOCS_BASE` (config.mts) + `.github/workflows/deploy.yml`
- [x] Pagina **`programa-clase.md`** — conținuturile pe clase V–XII, extrase din programele în vigoare
      (gimnaziu OMEN 3393/2017; liceu IX–X OMECI 5099/2009; XI–XII mat-info) + notă despre reforma liceală
- [x] `npm run docs:build` fără erori; ieșirile problemelor de cod validate pe compilatorul real

## Pasul 9 — Aprofundare didactică: explicații, corelații, breakdown-uri de cod
- [x] **Exemple „pas cu pas"** (tabele de execuție) la temele științifice: inserție și căutare binară
      (01), arborele de apeluri backtracking + arborele de recursie merge sort + tabela LIS (03),
      inserarea în listă + BST construit din inserări (04), BFS + Dijkstra + Kruskal pe exemple numerice (05)
- [x] **Intuiție „de ce funcționează"**: argumentul de corectitudine la inserție/greedy, contraexemplu
      greedy la rucsacul discret, Fibonacci naiv vs. dinamic, de unde vine O(n log n)
- [x] **Ghid de decizie** „cum recunoști metoda potrivită" (secțiunea 3.6 la Metode de programare)
- [x] Completări punctuale: implementarea **cozii** (04), formule de numărare la grafuri (suma gradelor,
      nr. maxim de muchii), matrice/liste de adiacență pe exemplul de lucru, ciclul fetch–decode–execute
      și unități de măsură (07), procese/multitasking + căi absolute/relative + metacaractere (08),
      referințe absolute/relative pas cu pas + COUNTIF/SUMIF (09), „ce se întâmplă când tastezi un URL" (10),
      ordinea logică de evaluare SELECT + normalizare pe exemplu + tipuri de JOIN (06), stiva de apeluri
      la recursivitate + capcane numerice + polimorfism „la lucru" (02)
- [x] Secțiune nouă **„Conexiuni cu alte teme"** pe toate cele 10 teme științifice + cele 3 de metodică
      (corelații interne cu linkuri: coadă↔BFS, DFS↔backtracking, BST↔căutare binară, rețea↔graf,
      struct↔înregistrare, IF tabelar↔decizie etc.)
- [x] Metodică aprofundată: **proiect de lecție complet** („Căutarea binară", cl. a X-a) și exemple
      intra/inter/transdisciplinare (01), metode aplicate pe conținut informatic + diferențiere (02),
      **matricea de specificații** + barem detaliat pe criterii + metode alternative concretizate (03)
- [x] Corectat: „conturi" → „conținuturi" (metodica 01); ancoră link divide et impera (algoritmi 01)
- [x] Verificare statică: toate linkurile interne noi țintesc pagini existente; containerele `:::`
      sunt echilibrate pe toate paginile
- [ ] `npm run docs:build` — **de rulat pe o mașină cu Node.js** (npm indisponibil pe sistemul curent)

## Pasul 10 — Modulul „Lecții pe clase — în practică" (V–XII), construit pe loturi
> Scop: stratul „practica reală din școală" peste programă — instrumente efective (Scratch la V–VI,
> trecerea la C++ la VII…), planificarea pe **modulele** anului școlar și **serii de lecții** per clasă,
> fiecare lecție dezvoltată cu șablonul **Lecția (teorie) · Exerciții (cu metodica aplicabilă) · Particularități**.

- [x] Schelet: `docs/lectii/index.md` — catalog complet V–XII (instrumente pe clase, planificare
      orientativă pe module M1–M5, seriile de lecții per clasă, șablonul paginilor de lecție)
- [x] `programa-clase.md`: bloc „Cum arată în practică" la fiecare clasă (V–XII) + linkuri spre catalog
- [x] Navigație: intrare „Lecții în practică (V–XII)" în meniul Programa + sidebar `/lectii/` + link pe
      pagina principală
- [x] **Lot 1 — Clasa a V-a, domeniul Algoritmi (5 lecții dezvoltate):** Algoritmul · Date/variabile/expresii ·
      Structura secvențială · Structura alternativă · Proiecte Scratch
- [x] Lot 2 — Clasa a V-a, domeniul TIC (7 lecții: ergonomie, sisteme de calcul, arhitectură,
      dispozitive/unități de măsură, SO/fișiere, Internet/siguranță, editoare grafice)
- [x] Lot 3 — Clasa a VI-a (10 lecții: prezentări ×3, animații, e-mail, repetitive ×2, schemă logică,
      pseudocod, proiecte)
- [x] Lot 4 — Clasa a VII-a (TIC ×4 + programare C++ ×5: primul program, date/citire/afișare, liniară,
      alternativă, repetitive)
- [x] Lot 5 — Clasa a VIII-a (Excel ×3, HTML ×2, șiruri de valori C++ ×4)
- [x] Lot 6 — Clasa a IX-a (9 lecții: societate, etape/algoritm, date, pseudocod, cifre, divizibilitate,
      secvențe, recurente, eficiență)
- [x] Lot 7 — Clasa a X-a (10 lecții: C++ bază, structuri, tablouri 1D/2D, fișiere, căutări, sortări,
      interclasare, matrice, aplicații)
- [x] Lot 8 — Clasa a XI-a (10 lecții: șiruri de caractere, struct, liste/stivă/coadă, grafuri ×3,
      subprograme, recursivitate, divide et impera, backtracking)
- [x] Lot 9 — Clasa a XII-a (7 lecții: entități/relații, normalizare, tabele, chei/integritate,
      SELECT, DML/DDL, dezvoltare profesională)
- [x] La fiecare lot: transformarea titlurilor din catalog în linkuri + extinderea sidebar-ului `/lectii/`
- [x] **TOATE cele 76 de lecții (V–XII) dezvoltate** — modulul „Lecții pe clase" este complet

## Convenții de lucru
- Fiecare temă științifică respectă **șablonul unic**: `Teorie` → `Competențe vizate` → `Abordare metodică`
  (vezi `STRUCTURA-CONTINUT.md`).
- Cod în **C++** modern (`-std=c++17`), în blocuri evidențiate.
- Terminologie românească de specialitate; cadru legal/metodologic **în vigoare** (vezi `SURSE.md`).
- Nu se inventează surse — se folosesc cele oficiale și bibliografia din programă.

## Comenzi utile
```bash
npm install          # instalează dependențele
npm run docs:dev     # server local de dezvoltare (http://localhost:5173)
npm run docs:build   # generează site-ul static în docs/.vitepress/dist
npm run docs:preview # previzualizează varianta statică generată
```

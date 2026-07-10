# Modelul conceptual: entități, atribute, relații

> **Clasa a XII-a · Informatică · modulul obligatoriu „Baze de date".** Înainte de orice tabel:
> **modelarea** lumii reale în entități și relații. Competențe specifice vizate: 1.1–1.3.

## 1. Lecția (teorie)

**Problema de gestiune** = o situație reală cu date de organizat (biblioteca, secretariatul, un
magazin). Primul pas nu e calculatorul, ci **modelul conceptual**:

- **entitatea** — obiectul despre care păstrăm date (*Elev*, *Carte*); **instanța** — un exemplar
  concret (eleva Ana Pop);
- **atributele** — proprietățile entității (nume, clasă, medie);
- **identificatorul unic** — atributul care distinge instanțele (CNP, numărul matricol) — de ce numele
  **nu** e bun? (se repetă!);
- **relațiile între entități** cu **cardinalitatea** lor:

| Relație | Exemplu | Cum se citește |
|---|---|---|
| **unu-la-unu (1:1)** | elev ↔ dosar personal | un elev are exact un dosar |
| **unu-la-mulți (1:N)** | clasă ↔ elevi | o clasă are mulți elevi; un elev, o singură clasă |
| **mulți-la-mulți (M:N)** | elevi ↔ discipline opționale | un elev — mai multe opționale; un opțional — mai mulți elevi |

**Rezolvarea relației M:N** — regula de aur a modelării: se introduce o **entitate de legătură**
(*Înscriere*: elev + opțional + data) care sparge M:N în două relații 1:N.

Corelarea explicită: elevii au modelat deja date cu `struct` (clasa a XI-a) — entitatea e „structul",
instanța e „variabila", atributele sunt „câmpurile"; nou e limbajul **relațiilor**.

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Diagrama bibliotecii** *(studiu de caz dirijat)*
Biblioteca școlii modelată împreună: entitățile (Elev, Carte, Împrumut), atributele, identificatorii,
relațiile cu cardinalități — desenate ca diagramă. *De ce așa:* biblioteca e cazul-școală perfect
(o relație M:N naturală: elevi ↔ cărți); diagrama construită împreună devine referința întregului modul.

**Exercițiul 2 — „Ce e greșit în model?"** *(analiza erorilor de modelare)*
Modele cu defecte plantate: numele ca identificator; „media" ca entitate; M:N nerezolvat. *De ce așa:*
erorile de modelare sunt conceptuale, nu de sintaxă — se corectează prin discuție, nu prin compilator;
colecția de defecte acoperă exact greșelile tipice.

**Exercițiul 3 — Modelarea pe grupe** *(proiectare autonomă)*
Fiecare grupă modelează alt caz (magazin online, cabinet medical, concurs sportiv) și prezintă
diagrama; clasa „atacă" modelul cu întrebări („un produs poate fi în mai multe comenzi?").
*De ce așa:* modelarea se învață modelând; „atacul" colegial simulează validarea cerințelor cu
beneficiarul — practica reală a proiectării.

## 3. Particularități

- **Lecție fără calculator — și e bine așa:** modelarea se face pe hârtie/tablă; elevii (și unii
  profesori) se grăbesc spre SQL — dar un model greșit costă totul mai târziu; disciplina „întâi
  modelul" e chiar lecția.
- **Cardinalitatea se citește în ambele sensuri** — sursa confuziilor: „un elev are o clasă" ȘI
  „o clasă are mulți elevi" — ambele propoziții se verbalizează.
- **Identificatorul unic** pare detaliu și e fundament: itemul „de ce nu numele?" merită insistență —
  el pregătește cheia primară.
- **Evaluare potrivită:** o diagramă din enunț nou + un item de depistare a erorii de model + rezolvarea
  unei relații M:N; toate pe hârtie.

## Legături

- Teoria de examen: [Baze de date — modelul conceptual](/stiintific/06-baze-de-date).
- Puntea dinspre programare: [struct — clasa a XI-a](/lectii/xi-02-struct).
- Lecția următoare: [Normalizarea datelor](/lectii/xii-02-normalizare) ·
  Seria clasei: [clasa a XII-a](/lectii/#clasa-a-xii-a).

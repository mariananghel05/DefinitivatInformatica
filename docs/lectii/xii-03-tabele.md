# Tabele — structură, conținut, operații

> **Clasa a XII-a · Informatică · modulul „Baze de date".** Modelul conceptual devine **tabel real**
> într-un SGBD (în practică: MySQL, adesea prin phpMyAdmin, sau Oracle Academy).
> Competențe specifice vizate: 2.1–2.3.

## 1. Lecția (teorie)

**Vocabularul fizic** (traducerea celui conceptual):

| Conceptual (lecțiile 1–2) | Fizic (acum) |
|---|---|
| entitate | **tabel** |
| instanță | **înregistrare** (rând, tuplu) |
| atribut | **câmp** (coloană) |
| identificator unic | **cheie primară** |

**Structura tabelului:** fiecare câmp are un **tip de date** — întreg (`INT`), text (`VARCHAR(n)`),
numeric cu zecimale (`DECIMAL`), dată calendaristică (`DATE`). Alegerea tipului = decizie de proiectare
(media: `DECIMAL(4,2)`, nu text!).

**Operațiile cu conținutul** — deocamdată prin interfața SGBD-ului (SQL vine în lecțiile următoare):
**adăugare**, **modificare**, **ștergere** de înregistrări; **sortare** și **căutare/filtrare**;
vizualizare; calcule statistice simple (sumă, medie pe coloană).

Observația de continuitate: sortarea și căutarea din SGBD sunt **algoritmii clasei a X-a**, ambalați —
utilizatorul cere, sistemul execută (cu structuri eficiente — indecși, menționați ca perspectivă).

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — De la diagramă la tabele** *(transfer)*
Diagrama bibliotecii (lecția 1) se implementează: tabelele, câmpurile cu tipuri alese și argumentate,
cheile primare. *De ce așa:* firul roșu model → normalizare → tabele se închide vizibil; alegerea
tipurilor obligă la decizii concrete (VARCHAR cât? DATE sau text?).

**Exercițiul 2 — Popularea și operațiile** *(exercițiu practic în SGBD)*
Fiecare elev adaugă 5 înregistrări, modifică una, șterge una, sortează după un câmp, filtrează după o
condiție. *De ce așa:* operațiile de bază prin interfață construiesc intuiția înaintea SQL-ului —
elevii **văd** ce vor cere apoi prin comenzi.

**Exercițiul 3 — „Tipul greșit"** *(analiza consecințelor)*
Un tabel cu media ca `VARCHAR`: sortarea dă „10" înaintea lui „9"! De ce? (sortare de text!). *De ce
așa:* consecința tipului greșit, văzută pe sortare, argumentează decizi(ile) de proiectare mai bine
decât orice regulă; leagă de compararea lexicografică (șiruri, clasa a XI-a).

## 3. Particularități

- **Logistica SGBD** decide lecția: mediul (MySQL local / phpMyAdmin / Oracle APEX) se pregătește și
  se testează **înainte**; conturile elevilor — create din timp.
- **„10" < „9" la text** e demonstrația-cheie a lecției — mică, memorabilă, cu morala exactă
  (tipul de date contează).
- **Cheia primară se pune de la creare** — tabelele „fără cheie" merg până se strică; disciplina se
  instalează acum, motivată de identificatorul unic (lecția 1).
- **Evaluare potrivită:** probă practică (creează tabelul din diagramă, populează, sortează,
  filtrează) + un item scris de alegere a tipurilor cu justificare.

## Legături

- Teoria de examen: [Baze de date — modelul fizic](/stiintific/06-baze-de-date).
- Sortarea/căutarea „de sub capotă": [clasa a X-a](/lectii/x-07-sortare).
- Lecția anterioară: [Normalizarea](/lectii/xii-02-normalizare) ·
  Lecția următoare: [Chei și integritate](/lectii/xii-04-chei-integritate).

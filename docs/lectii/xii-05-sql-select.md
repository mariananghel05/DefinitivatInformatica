# SQL — interogarea datelor (SELECT)

> **Clasa a XII-a · Informatică · modulul „Baze de date".** Limbajul în care „întrebi" baza de date:
> SELECT, de la filtrarea simplă la grupări și legarea tabelelor. Competențe specifice vizate: 3.1–3.3.

## 1. Lecția (teorie)

**Principiul SQL** (diferit de tot ce au programat!): spui **ce** vrei, nu **cum** să se calculeze —
limbaj declarativ; SGBD-ul alege algoritmul.

**SELECT, construit incremental** — fiecare clauză motivată de o întrebare în românește:

```sql
-- „elevii din 12A cu media peste 9, în ordinea mediilor"
SELECT nume, media
FROM Elevi
WHERE clasa = '12A' AND media > 9
ORDER BY media DESC;

-- „câți elevi și ce medie are fiecare clasă?"
SELECT clasa, COUNT(*) AS nr_elevi, AVG(media) AS medie_clasa
FROM Elevi
GROUP BY clasa
HAVING AVG(media) > 8;

-- „numele elevului și titlul cărții împrumutate" (două tabele!)
SELECT e.nume, c.titlu
FROM Imprumuturi i
JOIN Elevi e ON i.id_elev = e.id_elev
JOIN Carti c ON i.id_carte = c.id_carte;
```

**Regulile care se punctează:** `WHERE` filtrează **rânduri**, `HAVING` filtrează **grupuri** (după
`GROUP BY`); funcțiile de agregare (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`) nu pot sta în `WHERE`;
condiția de `JOIN` leagă **FK de PK** — fără ea, produs cartezian (fiecare cu fiecare!).

**Corelarea care luminează:** `SELECT … WHERE` este bucla cu `if` din C++, scrisă declarativ;
`Excel`-ul din clasa a VIII-a (filtrare, sortare, funcții) era SQL cu butoane.

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Din română în SQL** *(traducere dirijată)*
Zece întrebări în limbaj natural pe baza bibliotecii, traduse incremental (întâi fără condiții, apoi cu
WHERE, apoi cu ORDER BY…). *De ce așa:* SQL-ul se învață ca traducere de întrebări, nu ca sintaxă;
gradarea clauzelor previne supraîncărcarea.

**Exercițiul 2 — „Ce întoarce interogarea?"** *(itemul de examen invers)*
Pe un conținut de tabele dat (afișat!), elevii **prezic** rezultatul a 5 interogări — inclusiv una cu
GROUP BY și una cu JOIN. *De ce așa:* sensul invers (citirea SQL) e formatul frecvent la itemi; predicția
pe date vizibile face fiecare clauză verificabilă.

**Exercițiul 3 — WHERE vs. HAVING** *(experiment țintit)*
Aceeași cerință („clasele cu media peste 8") încercată cu WHERE (eroare/rezultat greșit!) și corect cu
HAVING. *De ce așa:* confuzia WHERE/HAVING e **greșeala** modulului; văzută eșuând, cu explicația
ordinii de evaluare (întâi rânduri, apoi grupuri), se fixează definitiv.

**Exercițiul 4 — JOIN-ul uitat** *(experiment cu produs cartezian)*
Interogarea pe două tabele **fără** condiția de legătură: 20 × 30 = 600 de rânduri fără sens.
*De ce așa:* produsul cartezian trăit o dată face condiția de JOIN reflex; numărul de rânduri
(înmulțirea!) e diagnosticul de recunoscut.

## 3. Particularități

- **Textul în ghilimele simple** (`'12A'`), egalitatea cu un singur `=` — SQL diferă de C++ exact în
  detaliile care produc erori mărunte; tabelul de diferențe C++/SQL se afișează în laborator.
- **Ordinea logică de evaluare** (FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY) explică
  „de ce nu merge" în 80% din cazuri — se predă ca instrument de depanare.
- **Aliasurile** (`AS`, `e.`, `c.`) țin interogările citibile — disciplina de stil continuă și în SQL.
- **Evaluare potrivită:** traduceri română → SQL (gradate) + predicția rezultatului pe date date +
  itemul WHERE/HAVING; exact structura subiectelor cu baze de date.

## Legături

- Teoria de examen, cu ordinea de evaluare și tipurile de JOIN:
  [Baze de date — SQL](/stiintific/06-baze-de-date).
- Strămoșul cu butoane: [Excel — funcții și sortare](/lectii/viii-02-excel-functii-sortare).
- Lecția anterioară: [Chei și integritate](/lectii/xii-04-chei-integritate) ·
  Lecția următoare: [SQL — manipularea și definirea datelor](/lectii/xii-06-sql-dml-ddl).

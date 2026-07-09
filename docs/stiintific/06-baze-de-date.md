# 6. Baze de date

> Se studiază la liceu (TIC / informatică aplicată). Acoperă modelarea, normalizarea și interogarea
> datelor în model relațional, cu limbajul **SQL**.

## 1. Teorie

### 6.1. Concepte de bază

- **Bază de date (BD)** — colecție organizată de date corelate, stocate persistent.
- **Sistem de gestiune a bazelor de date (SGBD)** — software care creează, administrează și interoghează
  baza de date (ex. MySQL, PostgreSQL, Oracle, SQL Server, Access).

**Clasificarea modelelor de baze de date:**

| Model | Idee | Observație |
|---|---|---|
| **Relațional** | date în **tabele** legate prin chei | cel mai răspândit |
| **Rețea** | înregistrări legate prin pointeri (graf) | istoric |
| **Ierarhic** | structură arborescentă (părinte–copil) | istoric |

### 6.2. Modelul conceptual (entitate–relație)

- **Entitate** — obiect despre care păstrăm date (ex. *Elev*); **instanță** — un exemplar concret.
- **Atribut** — proprietate a entității (ex. *nume*, *medie*).
- **Identificator unic** — atribut(e) ce identifică unic o instanță.
- **Relații între entități** — *unu-la-unu*, *unu-la-mulți*, *mulți-la-mulți*.
- **Normalizarea** — proces de organizare a datelor pentru a **elimina redundanța** și anomaliile.

**Formele normale uzuale:**

| Formă | Cerință |
|---|---|
| **FN1** | valori atomice (fără grupuri repetitive) |
| **FN2** | FN1 + fără dependențe parțiale de cheia compusă |
| **FN3** | FN2 + fără dependențe tranzitive |

::: details Exemplu de normalizare — de la un tabel „stufos" la o structură corectă
Tabelul nenormalizat `Imprumuturi(id_elev, nume_elev, clasa, id_carte, titlu, autor, data_imprumut)`
repetă numele elevului și titlul cărții la **fiecare** împrumut (redundanță) și suferă de **anomalii**:
- **de actualizare** — schimbi numele unui elev într-o linie și uiți alta ⇒ date contradictorii;
- **de ștergere** — ștergi ultimul împrumut al unei cărți și pierzi odată cu el datele cărții;
- **de inserare** — nu poți înregistra o carte nouă până când nu e împrumutată de cineva.

Soluția: descompunem pe entități, legate prin chei străine:
- `Elevi(id_elev, nume, clasa)`
- `Carti(id_carte, titlu, autor)`
- `Imprumuturi(id_imprumut, id_elev → Elevi, id_carte → Carti, data_imprumut)`

Fiecare fapt este stocat **o singură dată**; împrumutul leagă doar identificatorii. Acesta este exact
tipul de raționament cerut la proiectarea unei baze de date pornind de la cerințe.
:::

### 6.3. Modelul fizic (relațional)

- **Tabel (relație)** — structură cu linii și coloane.
- **Înregistrare (tuplu/rând)** — o linie din tabel.
- **Câmp (atribut/coloană)** — o coloană, cu un **tip de date** (întreg, text, dată etc.).
- **Cheie primară (PK)** — identifică unic fiecare înregistrare.
- **Cheie străină/externă (FK)** — referă cheia primară a altui tabel (leagă tabelele).
- **Constrângeri** — `NOT NULL`, `UNIQUE`, `CHECK`, `DEFAULT`.
- **Integritate referențială** — o FK trebuie să refere o valoare existentă (sau NULL).

### 6.4. Limbajul SQL

**Definirea structurii (DDL):**

```sql
CREATE TABLE Elevi (
    id        INT PRIMARY KEY,
    nume      VARCHAR(50) NOT NULL,
    clasa     VARCHAR(5),
    media     DECIMAL(4,2) CHECK (media BETWEEN 1 AND 10)
);

CREATE TABLE Note (
    id        INT PRIMARY KEY,
    id_elev   INT,
    disciplina VARCHAR(40),
    nota      INT,
    FOREIGN KEY (id_elev) REFERENCES Elevi(id)   -- cheie străină
);
```

**Manipularea datelor (DML):**

```sql
-- Inserare
INSERT INTO Elevi (id, nume, clasa, media) VALUES (1, 'Ana Pop', '11A', 9.50);

-- Actualizare
UPDATE Elevi SET media = 9.75 WHERE id = 1;

-- Ștergere
DELETE FROM Elevi WHERE id = 1;
```

**Interogarea datelor (SELECT):**

```sql
-- Selecție simplă cu filtrare și sortare
SELECT nume, media
FROM Elevi
WHERE clasa = '11A' AND media >= 9
ORDER BY media DESC;

-- Funcții de agregare și grupare
SELECT clasa, COUNT(*) AS nr_elevi, AVG(media) AS medie_clasa
FROM Elevi
GROUP BY clasa
HAVING AVG(media) > 8;

-- Interogare cu join (date din două tabele)
SELECT e.nume, n.disciplina, n.nota
FROM Elevi e
JOIN Note n ON n.id_elev = e.id
WHERE n.nota = 10;
```

**Ordinea logică de evaluare a unui `SELECT`** (diferită de ordinea în care se scrie!):

```text
FROM (+ JOIN) → WHERE → GROUP BY → HAVING → SELECT → ORDER BY
```

De aici decurg regulile care „pică" frecvent la examen: `WHERE` **nu poate folosi** funcții de agregare
(grupurile nu există încă în acel moment — de aceea există `HAVING`), iar aliasurile definite în
`SELECT` nu sunt vizibile în `WHERE`.

**Tipuri de `JOIN`:** `INNER JOIN` (cel implicit) păstrează doar perechile cu corespondent în **ambele**
tabele; `LEFT JOIN` păstrează **toate** liniile din tabelul din stânga, completând cu `NULL` acolo unde
nu există corespondent (de exemplu: și elevii care nu au nicio notă).

| Comandă | Categorie | Rol |
|---|---|---|
| `SELECT` | DML / interogare | extrage date |
| `INSERT` | DML | adaugă înregistrări |
| `UPDATE` | DML | modifică date |
| `DELETE` | DML | șterge înregistrări |
| `CREATE` / `ALTER` / `DROP` | DDL | structura tabelelor |

## 2. Competențe vizate

- **proiectarea unei baze de date** pornind de la cerințe (entități, atribute, relații);
- **aplicarea normalizării** pentru reducerea redundanței;
- **definirea tabelelor** cu chei și constrângeri (integritate referențială);
- **scrierea interogărilor SQL** simple și complexe (filtrare, sortare, grupare, join).

::: info Corelare cu programa școlară
- **Liceu, cl. a XII-a:** modulul *Baze de date* — 1.1–1.4 (model conceptual, relații între entități,
  structurarea datelor), 2.1–2.3 și 3.1–3.3 (dezvoltarea aplicației); **comenzi SQL**.
:::

## 3. Abordare metodică

**Metode:** modelarea (diagrame entitate–relație), studiul de caz (o BD pentru o bibliotecă/școală),
exercițiul la calculator (SGBD real), problematizarea.

**Tip de lecție** (formare de deprinderi — „interogări SELECT"): se pornește de la o întrebare în limbaj
natural („care elevi au media peste 9?") și se traduce pas cu pas în SQL.

**Activități de învățare:** completarea unei diagrame ER; identificarea cheilor primare/străine;
scrierea de interogări pe o bază de date demonstrativă; corectarea unei interogări greșite.

**Itemi de evaluare:**
- *obiectiv:* „Care clauză filtrează liniile? a) `ORDER BY` b) `WHERE`";
- *semiobiectiv:* „Ce rol are cheia străină?";
- *subiectiv:* „Scrieți o interogare care afișează numărul de elevi din fiecare clasă."

::: warning Erori tipice
- confuzia **`WHERE`** (filtrează linii) ↔ **`HAVING`** (filtrează grupuri);
- omiterea condiției de **join** → produs cartezian;
- `DELETE`/`UPDATE` **fără `WHERE`** → afectează tot tabelul;
- confuzia **cheie primară** ↔ **cheie străină**.
:::

## Conexiuni cu alte teme

- O **înregistrare** este echivalentul unui `struct` din [C++](/stiintific/02-limbaje-programare);
  un tabel este, conceptual, un „vector de structuri" persistent.
- `ORDER BY` și indecșii aplică **sortarea și căutarea** de la [Algoritmi](/stiintific/01-algoritmi);
  intern, indecșii folosesc arbori de căutare — vezi
  [Alocarea dinamică](/stiintific/04-alocare-dinamica).
- Modelele istorice **ierarhic** și **rețea** sunt un arbore, respectiv un graf —
  [Teoria grafurilor](/stiintific/05-teoria-grafurilor).
- SGBD-ul rulează de regulă pe un server accesat prin
  [rețea](/stiintific/10-retele-de-calculatoare); **îmbinarea corespondenței** (mail merge) din
  [aplicațiile de birotică](/stiintific/09-aplicatii-specializate) consumă exact astfel de date tabelare.

## Recapitulare

- **BD** = date corelate; **SGBD** = software de gestiune; modelul dominant este **relațional**.
- Modelul conceptual: **entități, atribute, relații, normalizare** (FN1–FN3).
- Modelul fizic: **tabele, înregistrări, câmpuri, PK, FK, constrângeri, integritate referențială**.
- SQL de bază: **`SELECT`, `INSERT`, `UPDATE`, `DELETE`** + `JOIN`, `GROUP BY`, `WHERE`/`HAVING`.

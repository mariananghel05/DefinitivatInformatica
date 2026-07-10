# SQL — manipularea și definirea datelor (INSERT, UPDATE, DELETE, CREATE)

> **Clasa a XII-a · Informatică · modulul „Baze de date".** Restul limbajului: schimbarea conținutului
> (DML) și a structurii (DDL) — cu comenzile care „nu se mai pot lua înapoi".
> Competențe specifice vizate: 3.1–3.3.

## 1. Lecția (teorie)

**Manipularea datelor (DML):**

```sql
INSERT INTO Elevi (id_elev, nume, clasa, media)
VALUES (31, 'Dan Pop', '12A', 8.75);

UPDATE Elevi SET media = 9.00 WHERE id_elev = 31;

DELETE FROM Elevi WHERE id_elev = 31;
```

**Avertismentul lecției** (scris mare): `UPDATE`/`DELETE` **fără WHERE** afectează **toate**
înregistrările — greșeala celebră a începătorilor (și nu numai); reflexul profesionist: scrie întâi
`SELECT` cu același `WHERE`, vezi ce prinde, abia apoi transformă în `UPDATE`/`DELETE`.

**Definirea structurii (DDL):**

```sql
CREATE TABLE Elevi (
    id_elev  INT PRIMARY KEY,
    nume     VARCHAR(50) NOT NULL,
    clasa    VARCHAR(5),
    media    DECIMAL(4,2) CHECK (media BETWEEN 1 AND 10)
);
```

plus `ALTER TABLE` (modificarea structurii) și `DROP TABLE` (ștergerea tabelului — definitivă!).
Distincția-cheie de vocabular: `DELETE` șterge **conținut**, `DROP` șterge **tabelul însuși**.

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Ciclul de viață al unei înregistrări** *(exercițiu dirijat)*
Fiecare elev: inserează un elev nou, îi corectează media (UPDATE cu WHERE!), apoi îl șterge — cu
SELECT de verificare **după fiecare pas**. *De ce așa:* tripleta INSERT–UPDATE–DELETE cu verificare
instalează rutina profesională; „SELECT înainte de UPDATE" se exersează, nu doar se recomandă.

**Exercițiul 2 — Dezastrul controlat** *(demonstrație memorabilă)*
Pe o copie a bazei: `UPDATE Elevi SET media = 10` fără WHERE — toată clasa are 10; apoi restaurarea.
*De ce așa:* greșeala fatală, văzută o dată în sandbox, imunizează; discuția „de ce nu există undo?"
introduce onest ideea de copii de siguranță.

**Exercițiul 3 — CREATE din diagramă** *(sinteza modulului)*
Diagrama bibliotecii, implementată integral prin DDL: tabele cu tipuri, PK, FK, constrângeri CHECK.
*De ce așa:* firul complet model → normalizare → chei → **script SQL** se închide; scriptul rezultat e
livrabil de portofoliu.

**Exercițiul 4 — DELETE vs. DROP** *(item de precizie)*
Cinci scenarii („vrem să golim tabelul dar să-l păstrăm", „nu mai avem nevoie deloc de el"…) — comanda
potrivită? *De ce așa:* confuzia DELETE/DROP (și TRUNCATE, menționat) e clasică la itemi; scenariile o
tranșează prin consecințe.

## 3. Particularități

- **Sandbox obligatoriu:** fiecare elev pe baza lui (sau pe copii) — experimentele DML/DDL pe o bază
  comună produc haos garantat; izolarea e lecție de infrastructură.
- **WHERE-ul din UPDATE/DELETE** se verifică ritualic („ce prinde acest WHERE?") — obiceiul mic care
  previne dezastrele mari.
- **Ghilimelele și tipurile:** textul cu `'…'`, numerele fără — erorile de INSERT sunt aproape toate
  de ghilimele/ordine a valorilor; enumerarea explicită a coloanelor în INSERT e stilul predat.
- **Evaluare potrivită:** un script complet CREATE + INSERT pe o schemă nouă + itemul de scenarii
  DELETE/DROP + corectarea unui UPDATE periculos; probă practică, în SGBD.

## Legături

- Teoria de examen, cu toate comenzile: [Baze de date — SQL](/stiintific/06-baze-de-date).
- Lecția anterioară: [SQL — SELECT](/lectii/xii-05-sql-select) ·
  Lecția următoare: [Dezvoltarea profesională în IT](/lectii/xii-07-dezvoltare-profesionala).

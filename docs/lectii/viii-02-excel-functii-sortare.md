# Calcul tabelar — funcții și sortarea datelor

> **Clasa a VIII-a · domeniul TIC · modulul 1.** Funcțiile predefinite (SUM, AVERAGE, MIN, MAX, IF) și
> sortarea — foaia de calcul devine instrument de analiză. Competențe specifice vizate: 1.1, 3.1.

## 1. Lecția (teorie)

**Funcția** = o formulă gata făcută, cu nume și paranteze; lucrează de obicei pe o **zonă** de celule
(`A2:A20` — „de la A2 până la A20"):

| Funcție | Rol | Exemplu |
|---|---|---|
| `SUM` | suma valorilor | `=SUM(B2:B9)` |
| `AVERAGE` | media | `=AVERAGE(B2:B9)` |
| `MIN` / `MAX` | cea mai mică / mare valoare | `=MAX(B2:B9)` |
| `COUNT` | câte celule cu numere | `=COUNT(B2:B9)` |
| `IF` | decizie | `=IF(B2>=5;"promovat";"corigent")` |

**`IF`** primește trei „ingrediente": condiția, valoarea dacă e adevărată, valoarea dacă e falsă —
elevii recunosc imediat `if/else` din C++ (corelarea se face explicit, cu tabelul în paralel).

**Copierea formulelor:** trasă în jos de colțul celulei, formula se **ajustează** (`B2` devine `B3`,
`B4`…) — referințele relative; comportamentul care face tabelele mari posibile.

**Sortarea:** după o coloană (crescător/descrescător), apoi după **mai multe criterii** (întâi după
clasă, apoi după medie). Regula de siguranță: selectăm **tot** tabelul, altfel se amestecă rândurile!

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Catalogul clasei** *(exercițiu dirijat)*
Tabel cu 10 elevi fictivi și note; sub el: media clasei, nota minimă, maximă, numărul de note — toate
cu funcții. *De ce așa:* contextul de catalog dă sens fiecărei funcții; „minim/maxim/medie" sunt exact
prelucrările care revin la programare (clasa a VIII-a, șiruri de valori) — corelarea se anunță.

**Exercițiul 2 — „Promovat sau corigent"** *(transfer din C++)*
Coloana „situație" cu `IF` după medie; apoi provocarea: „premiant" pentru medii peste 9 (IF în IF —
doar demonstrat). *De ce așa:* elevii au scris deja decizii în C++; a le regăsi în Excel consolidează
ambele — același concept, două unelte.

**Exercițiul 3 — Sortarea periculoasă** *(experiment cu greșeală controlată)*
Se sortează intenționat **doar coloana notelor** (fără nume) — catalogul se amestecă: notele nu mai
corespund elevilor. Se anulează (Ctrl+Z) și se sortează corect. *De ce așa:* greșeala clasică de
sortare, trăită o dată controlat, previne dezastrele reale; Ctrl+Z ca „plasă de siguranță" se
consolidează.

**Exercițiul 4 — Topul clasei** *(exercițiu de sinteză)*
Tabelul sortat descrescător după medie; discuție: cine e primul? s-au pierdut date? *De ce așa:*
sortarea cu scop (topul) e mai motivantă decât sortarea „ca să fie"; verifică integritatea rândurilor
după sortare.

## 3. Particularități

- **Separatorul de argumente** diferă (`;` sau `,` după setările sistemului) — sursă de frustrare
  inexplicabilă pentru elevi; se clarifică din prima oră pe stațiile din laborator.
- **Zona `A2:A20` citită greșit** („A2 și A20" în loc de „de la... până la") — două puncte = interval;
  merită un desen pe tablă.
- **`IF` cu text fără ghilimele** dă eroare — regula din C++ (textul stă în ghilimele) se transferă.
- **Evaluare potrivită:** probă practică pe un tabel dat (funcții cerute + o sortare după două
  criterii); itemul-capcană: „sortează doar coloana B" — elevul care refuză și sortează tot tabelul a
  înțeles lecția.

## Legături

- Tema de examen (funcții, sortare): [Aplicații specializate](/stiintific/09-aplicatii-specializate);
  sortarea „adevărată", cu algoritmii ei, vine la [clasa a X-a](/lectii/#clasa-a-x-a).
- Decizia `IF` ↔ `if/else` din C++: [clasa a VII-a](/lectii/vii-08-structura-alternativa-cpp).
- Lecția anterioară: [Registrul și formulele](/lectii/viii-01-excel-interfata-formule) ·
  Lecția următoare: [Grafice](/lectii/viii-03-excel-grafice).

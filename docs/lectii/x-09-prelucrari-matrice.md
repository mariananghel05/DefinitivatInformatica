# Prelucrări specifice tablourilor bidimensionale

> **Clasa a X-a · Informatică.** Matricele, la nivel de examen: zone, transformări, generări —
> repertoriul complet de prelucrări. Competențe specifice vizate: 3.1.

## 1. Lecția (teorie)

**Repertoriul sistematizat** (fiecare cu condiția/mecanismul ei):

| Prelucrare | Mecanismul |
|---|---|
| sume/minime pe fiecare linie/coloană | buclă exterioară pe zonă, interioară pe elemente |
| zonele diagonalelor | condițiile `i == j`, `i + j == n − 1`, inegalitățile pentru triunghiuri |
| **transpunerea** | interschimbă `a[i][j] ↔ a[j][i]` doar pentru `j > i` (jumătate!) |
| **interschimbarea a două linii/coloane** | interschimbări element cu element |
| **bordarea / eliminarea** unei linii/coloane | deplasări, ca la vectori, pe dimensiunea respectivă |
| **generarea** matricelor cu model | formula elementului `a[i][j]` dedusă din model |

**Generarea din model** — tipul de problemă emblematic: se dă desenul (de ex. „șerpuit": liniile pare
cresc, imparele descresc) și se cere programul care îl produce. Strategia predată: exprimă `a[i][j]`
**în funcție de i și j** sau construiește cu un contor care „curge" în ordinea modelului.

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Transpunerea și capcana ei** *(experiment cu eroare)*
Transpunerea cu bucle complete (i, j peste tot) — matricea revine la forma inițială! De ce? (fiecare
pereche se interschimbă de două ori). *De ce așa:* eroarea „dublei interschimbări" e cea mai
instructivă din temă; condiția `j > i` se deduce din eșec, nu se dictează.

**Exercițiul 2 — Citirea modelului** *(descoperire dirijată)*
Trei matrice-model desenate (tabla de șah din 0/1; linii constante; șerpuitul) — pentru fiecare, elevii
caută formula lui `a[i][j]` (paritatea lui i+j; valoarea i; …). *De ce așa:* generarea cere „citirea"
tiparului din desen — competență de recunoaștere care se antrenează pe colecție, nu pe un caz.

**Exercițiul 3 — Set de examen** *(muncă independentă gradată)*
1) suma pe fiecare coloană; 2) maximul din triunghiul de sub diagonala principală; 3) interschimbarea
liniilor k și p; 4) eliminarea coloanei k. *De ce așa:* exact distribuția itemilor din subiecte; fiecare
folosește alt mecanism din repertoriu.

**Exercițiul 4 — Matricea „în spirală"** *(provocare pentru diferențiere)*
Parcurgerea/generarea în spirală — pe grupe, cu prezentarea strategiilor (4 bucle pe „rame" succesive).
*De ce așa:* problema-vedetă a temelor de concurs; diferitele strategii prezentate arată că problemele
grele admit descompuneri diferite — discuție de proiectare autentică.

## 3. Particularități

- **Desenul înainte de cod** — regula temei: orice prelucrare de matrice începe cu desenul zonei/
  modelului pe caiet, cu indici; elevii care sar desenul greșesc limitele.
- **Eliminarea unei linii** e conceptual „vectorul de linii" — deplasarea liniilor întregi; analogia cu
  ștergerea din vector (deja știută) reduce noutatea la zero.
- **Generarea pe hârtie întâi:** la generări, se completează manual colțul 4×4 al matricei după program
  — verificarea formulei înainte de implementare.
- **Evaluare potrivită:** o generare din model + o prelucrare pe zonă + transpunerea/interschimbarea;
  urmărirea „ce matrice rezultă după acest fragment?" — obligatorie.

## Legături

- Teoria de examen: [Limbaje de programare — tablouri](/stiintific/02-limbaje-programare) și
  [Algoritmi](/stiintific/01-algoritmi).
- Matricea de adiacență (clasa a XI-a): [Teoria grafurilor](/stiintific/05-teoria-grafurilor).
- Lecția anterioară: [Interclasarea](/lectii/x-08-interclasare) ·
  Lecția următoare: [Aplicații practice](/lectii/x-10-aplicatii-practice).

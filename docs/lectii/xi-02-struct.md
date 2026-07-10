# Structuri de date neomogene (`struct`)

> **Clasa a XI-a · Informatică.** Date de tipuri diferite, legate într-o singură entitate: elevul cu
> nume și medie, punctul cu x și y. Competențe specifice vizate: 1.3, 1.4.

## 1. Lecția (teorie)

**Problema care cere `struct`:** catalogul din clasa a X-a ținea numele într-un vector și mediile în
altul — două „coloane" paralele care se pot desincroniza (sortezi una, uiți cealaltă!). Soluția:
**înregistrarea** — un tip nou, croit de noi:

```cpp
struct Elev {
    char nume[30];
    int  clasa;
    double medie;
};

Elev e;                      // o variabilă de tip Elev
strcpy(e.nume, "Ana Pop");
e.medie = 9.50;              // accesul la câmpuri: operatorul punct

Elev catalog[30];            // vector de structuri — modelul de date al aplicațiilor
```

Vocabular: **câmpuri (membri)**, accesul cu `.`, structuri **imbricate** (câmp de tip `struct Data`
într-un `Elev`), vector de structuri.

**Marea consecință:** sortarea catalogului mută **înregistrări întregi** — numele și media călătoresc
împreună; desincronizarea devine imposibilă prin construcție.

**Corelația care dă sens** (spusă explicit): `struct Elev` este o **înregistrare** dintr-un tabel de
bază de date; vectorul de structuri e „tabelul" — clasa a XII-a va da acestei idei un limbaj întreg (SQL).

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Refactorizarea catalogului** *(problematizare prin durere cunoscută)*
Catalogul „pe două coloane" (vectori paraleli) primește cerința „sortați după medie" — elevii constată
riscul, apoi refac totul cu `struct`. *De ce așa:* nevoia structurii se demonstrează pe problema pe
care au trăit-o în clasa a X-a; refactorizarea (același comportament, structură mai bună) e o practică
profesională prezentată la vârsta potrivită.

**Exercițiul 2 — Modelarea din enunț** *(atelier de proiectare)*
Pentru trei enunțuri (bibliotecă: cărți; concurs: participanți; agendă: contacte), elevii proiectează
doar **structura** (ce câmpuri? ce tipuri?). *De ce așa:* alegerea câmpurilor și tipurilor e prima
decizie de **modelare a datelor** — competența pe care bazele de date o vor cere formal.

**Exercițiul 3 — Sortarea pe criterii multiple** *(exercițiu de examen)*
Catalogul sortat descrescător după medie, iar la medii egale alfabetic după nume. *De ce așa:*
comparația compusă (criteriu principal + departajare) e itemul-tipar cu structuri; obligă la `strcmp`
pentru nume — recapitulare naturală a lecției anterioare.

**Exercițiul 4 — Căutarea în catalog** *(integrare)*
Căutarea elevului după nume (secvențială — de ce nu binară? doar dacă e sortat după nume!) și afișarea
completă a înregistrării. *De ce așa:* reunește căutarea (clasa a X-a) cu structurile; discuția despre
precondiția binarei se reactivează în context nou.

## 3. Particularități

- **Punctul uitat:** `e.medie` scris `medie` (câmpul „plutește") — eroarea de început; formularea „câmpul
  aparține mereu cuiva" o previne.
- **Copierea structurilor merge cu `=`** (spre deosebire de șiruri și vectori!) — surpriza plăcută a
  temei; interschimbarea a doi elevi devine trei atribuiri simple.
- **Numirea tipurilor:** convenția `Elev` (majusculă) vs. `elev` (variabilă) ține codul citibil —
  disciplina de stil continuă.
- **Evaluare potrivită:** proiectarea unei structuri din enunț + o sortare cu departajare + o căutare;
  urmărirea pe vector de structuri desenat ca tabel — formatul intuitiv corect.

## Legături

- Teoria de examen: [Limbaje de programare — struct](/stiintific/02-limbaje-programare);
  legătura cu înregistrările din tabele: [Baze de date](/stiintific/06-baze-de-date).
- Lecția anterioară: [Șiruri de caractere](/lectii/xi-01-siruri-caractere) ·
  Lecția următoare: [Liste; stiva și coada](/lectii/xi-03-liste-stiva-coada).

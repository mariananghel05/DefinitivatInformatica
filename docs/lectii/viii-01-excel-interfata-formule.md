# Calcul tabelar — registrul, celulele și primele formule

> **Clasa a VIII-a · domeniul TIC · modulul 1.** Începutul seriei de calcul tabelar (în practică:
> **Excel** sau Google Sheets) — foaia de calcul ca „hârtie care calculează singură".
> Competențe specifice vizate: 1.1, 3.1 (OMEN 3393/2017).

## 1. Lecția (teorie)

**Structura registrului:** registru → **foi de calcul** → **celule** la intersecția rând × coloană;
**adresa** celulei = literă coloană + număr rând (`B3`) — sistemul de coordonate pe care stă totul.

**Tipuri de date în celule:** numere, text, date calendaristice — aliniate implicit diferit (numerele
la dreapta, textul la stânga: indiciu vizual util).

**Formula** — ideea revoluționară a lecției:

- orice formulă începe cu **`=`**; fără el, ce scrii e doar text;
- formula folosește **adrese**, nu valori: `=B2+B3` în loc de `=10+20`;
- consecința magică: **schimbi valoarea din B2, rezultatul se recalculează singur** — demonstrația care
  definește calculul tabelar.

**Operații de editare:** selectarea (celulă, zonă, rând, coloană), copiere/mutare, inserarea și
ștergerea de rânduri/coloane, formatarea simplă (chenare, culoare de umplere, bold pentru antete).

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — „Bătălia navală"** *(joc de orientare)*
Profesorul strigă adrese (`C7!`), elevii colorează celulele — se formează un desen. *De ce așa:*
adresarea celulelor, competența de bază, se antrenează ca joc; analogia cu jocul cunoscut face
sistemul de coordonate instantaneu familiar.

**Exercițiul 2 — „Hârtia care calculează"** *(demonstrație + descoperire)*
Tabel cu 3 produse × preț × cantitate; totalul cu `=B2*C2`. Apoi profesorul schimbă un preț — totalul
se schimbă singur. Elevii verifică pe stațiile lor. *De ce așa:* momentul „se recalculează singur!"
este revelația care desparte foaia de calcul de tabelul din Word; se pune în scenă, nu se povestește.

**Exercițiul 3 — Bugetul de buzunar** *(exercițiu aplicativ)*
Tabelul cheltuielilor pe o săptămână: zile, sume, total cu formulă, formatare (antet colorat, chenare).
*De ce așa:* context personal + toate operațiile lecției; greșeala tipică (total scris „de mână", nu cu
formulă) se vânează explicit la verificare: „schimbă o sumă — se actualizează totalul?"

## 3. Particularități

- **Testul formulei:** elevii scriu deseori rezultatul calculat de ei în loc de formulă; verificarea
  standard a profesorului devine „modific o valoare — se schimbă rezultatul?". Acest test separă
  înțelegerea de mimare.
- **`=` uitat** — formula devine text vizibil (`B2+B3` afișat ca atare): se arată ca semn de
  recunoaștere a greșelii, nu ca mister.
- **Legătura cu programarea** (spusă explicit): celula e o **variabilă** cu nume-adresă, formula e o
  **expresie** — elevii au făcut asta în C++ anul trecut; foaia de calcul e „programare fără program".
- **Evaluare potrivită:** probă practică scurtă (construiește tabelul dat, cu formule funcționale);
  criteriul decisiv: rezultatele se **recalculează** la schimbarea datelor.

## Legături

- Tema de examen (calcul tabelar): [Aplicații specializate](/stiintific/09-aplicatii-specializate).
- Lecția următoare: [Funcții și sortare](/lectii/viii-02-excel-functii-sortare) ·
  Seria clasei: [clasa a VIII-a](/lectii/#clasa-a-viii-a).

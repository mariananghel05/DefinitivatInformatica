# Date cu care lucrează algoritmii. Operații

> **Clasa a IX-a · Informatică.** Sistematizarea riguroasă a datelor (constante, variabile, expresii) și
> a operațiilor — vocabularul comun al pseudocodului și al limbajului. Competențe specifice vizate:
> 2.1, 2.3.

## 1. Lecția (teorie)

**Clasificarea datelor:** după rol — de **intrare**, de **ieșire**, de **manevră** (intermediare);
după variabilitate — **constante** și **variabile**; după tip — **întregi**, **reale**, **caractere**,
**logice** (adevărat/fals), **șiruri de caractere**.

**Operațiile asupra datelor:**

| Categorie | Operatori | Observații de rigoare |
|---|---|---|
| aritmetice | `+ − * /`, **div** (cât întreg), **mod** (rest) | în pseudocod: `[a/b]` sau `a div b`; `mod` doar pe întregi |
| relaționale | `< ≤ > ≥ = ≠` | rezultatul e **logic** (adevărat/fals) |
| logice | **și**, **sau**, **nu** | tabelele de adevăr — se scriu complet |

**Expresii și evaluare:** prioritatea operatorilor (aritmetici > relaționali > logici; **nu** > **și** >
**sau**), parantezele decid. Exemplu lucrat de evaluare pas cu pas:
`(7 mod 2 = 1) și (10 div 3 > 2)` → `(1 = 1) și (3 > 2)` → adevărat **și** adevărat → **adevărat**.

**Condiții utile-standard** (se constituie „dicționarul" anului): `n mod 2 = 0` (par); `n mod k = 0`
(divizibil cu k); ultima cifră `n mod 10`; „tăierea" ultimei cifre `n div 10`; cifră ↔ interval
(`n ≥ 0 și n ≤ 9`).

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Tabelele de adevăr construite** *(conversație euristică)*
**și** / **sau** completate de elevi pe exemple din viață („intru dacă am bilet ȘI e deschis"), apoi
formalizate. *De ce așa:* logica formală se sprijină pe intuiția lingvistică; capcana lui **sau**
(inclusiv, nu exclusiv!) se discută explicit pe exemplu.

**Exercițiul 2 — Evaluarea pas cu pas** *(exercițiu gradat)*
Fișă cu expresii tot mai complexe (aritmetice → cu div/mod → relaționale → logice compuse), evaluate în
scris, cu pașii vizibili. *De ce așa:* evaluarea de expresii este item standard de examen; scrierea
pașilor (nu doar rezultatul) e cerință de barem și obicei de precizie.

**Exercițiul 3 — „Tradu condiția"** *(traducere bilingvă română ↔ expresie)*
Din enunț în expresie („n este număr par de două cifre" → `n mod 2 = 0 și n ≥ 10 și n ≤ 99`) și
invers (ce înseamnă `n mod 10 = n div 10`? — cifrele egale). *De ce așa:* traducerea enunț ↔ condiție
este chiar competența cerută la subiectele de examen; sensul invers (citirea expresiei) e mai greu și
mai formativ.

**Exercițiul 4 — Vânătoarea de echivalențe** *(problematizare)*
Sunt echivalente `nu(a și b)` cu `(nu a) sau (nu b)`? Se verifică pe toate cazurile (mini-tabel).
*De ce așa:* legile lui De Morgan descoperite prin verificare exhaustivă — surpriza („chiar sunt la
fel!") le fixează; negarea condițiilor compuse e capcana clasică la `while`.

## 3. Particularități

- **`div` și `mod` sunt limbile materne ale clasei a IX-a:** jumătate din algoritmii elementari (cifre,
  divizibilitate) stau pe ele; „dicționarul de condiții" început acum se completează tot anul, afișat
  în clasă.
- **„Sau" din română e adesea exclusiv** („mergi sau stai") — sursa erorilor logice; distincția se
  tratează frontal.
- **Prioritatea operatorilor** nu se memorează ca listă: regula practică „la îndoială, pune paranteze"
  e legitimă și profesionistă.
- **Evaluare potrivită:** evaluări de expresii cu pași + traduceri enunț ↔ condiție; itemul De Morgan
  (negarea unei condiții compuse) separă notele mari.

## Legături

- Teoria de examen: [Algoritmi](/stiintific/01-algoritmi) și operatorii C++ la
  [Limbaje de programare](/stiintific/02-limbaje-programare).
- Versiunea de gimnaziu: [clasa a V-a — date, variabile, expresii](/lectii/v-02-date-variabile-expresii).
- Lecția anterioară: [Etapele rezolvării; algoritmul](/lectii/ix-02-etapele-rezolvarii-algoritmul) ·
  Lecția următoare: [Pseudocodul — convenții și structuri](/lectii/ix-04-pseudocod).

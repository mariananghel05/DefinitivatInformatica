# Analiza eficienței. Aplicații interdisciplinare

> **Clasa a IX-a · Informatică · finalul anului.** Sinteza: cum comparăm algoritmi corecți și cum se
> aplică algoritmica în alte discipline. Competențe specifice vizate: 2.3, 3.3, 1.2.

## 1. Lecția (teorie)

**Eficiența unui algoritm** = cât **timp** (număr de operații) și câtă **memorie** consumă, în funcție
de dimensiunea datelor. La clasa a IX-a — nivel introductiv, prin **numărarea operațiilor**:

| Algoritm (din acest an) | Operații dominante | Observație |
|---|---|---|
| suma cifrelor lui n | câte cifre are n (~log n) | foarte rapid oricât de mare e n |
| primalitate naivă | n împărțiri | lent pentru n mare |
| primalitate cu √n | ~√n împărțiri | de mii de ori mai rapid la n mare |
| parcurgerea a n valori | n pași | crește liniar cu datele |

Regula de lucru: identifică operația din **bucla cea mai adâncă** și numără de câte ori se execută.
Ideea de dus în clasa a X-a: notația O sistematizează exact această numărare.

**Aplicațiile interdisciplinare din programă** — algoritmica pusă la treabă:
- **matematică**: ecuația de gradul I și II (cu discuție completă a cazurilor!), simplificarea
  fracțiilor (cmmdc), calcule geometrice;
- **fizică**: mișcarea rectilinie uniformă (viteză, distanță, timp);
- **chimie**: masa moleculară dintr-o formulă simplă.

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Numărătoarea de operații** *(exercițiu dirijat)*
Pentru trei algoritmi ai anului (suma cifrelor, primalitate naivă, primalitate √n), se numără operațiile
pentru n = 100, 10 000, 1 000 000 — tabel comparativ. *De ce așa:* eficiența devine **numere concrete**
înainte de orice notație; tabelul arată cum „se desface" diferența la date mari.

**Exercițiul 2 — Cursa finală** *(experiment — IAC)*
Cele două primalități cronometrate pe un număr prim mare; predicție înainte, măsurare după.
*De ce așa:* măsurarea reală validează numărătoarea teoretică — legătura teorie–practică ce dă
credibilitate întregii discuții despre eficiență.

**Exercițiul 3 — Ecuația de gradul II, cu toată discuția** *(studiu de caz de rigoare)*
Algoritmul complet: a = 0? (devine gradul I; și acolo: b = 0?); Δ < 0 / = 0 / > 0. Se testează pe
toate ramurile. *De ce așa:* problema-școală pentru **discuția de cazuri** — diferența dintre un
program de nota 7 (merge pe cazul fericit) și unul de nota 10 (acoperă tot); exact rigoarea cerută de
bareme.

**Exercițiul 4 — Mini-proiect interdisciplinar** *(pe grupe, la alegere)*
Grupele aleg: simplificarea fracțiilor / conversii de unități fizice / masa moleculară — și produc
programul cu analiza problemei documentată (etapele din prima lecție!). *De ce așa:* închide anul cu
ciclul complet analiză → algoritm → implementare → testare pe o problemă din altă disciplină —
demonstrația practică a „generalității" informaticii.

## 3. Particularități

- **Fără notația O încă:** programa clasei a IX-a cere „analiza eficienței" la nivel de numărare și
  comparație; formalizarea O vine în clasa a X-a — anticiparea ei aici încarcă inutil.
- **Discuția de cazuri e marea lecție ascunsă:** ecuația de gradul II predată complet valorează mai
  mult decât încă un algoritm nou — formează reflexul „ce se întâmplă la marginile enunțului?".
- **Interdisciplinaritatea autentică:** exemplele se aleg din materia **realmente parcursă** la
  matematică/fizică în clasa a IX-a (coordonare cu colegii de catedră — bună practică menționabilă la
  examenul de definitivat).
- **Evaluare potrivită:** compararea a doi algoritmi (numărare de operații + concluzie argumentată) și
  o problemă cu discuție de cazuri; mini-proiectul intră în portofoliu.

## Legături

- Teoria de examen: [Algoritmi — analiza complexității](/stiintific/01-algoritmi) (notația O — pasul
  următor).
- Demersul interdisciplinar, metodic: [Proiectarea didactică](/metodica/01-proiectare-didactica).
- Lecția anterioară: [Șiruri recurente](/lectii/ix-08-siruri-recurente) ·
  Continuarea: [clasa a X-a — tablouri și algoritmi fundamentali](/lectii/#clasa-a-x-a).

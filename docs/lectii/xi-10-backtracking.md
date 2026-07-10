# Metoda Backtracking

> **Clasa a XI-a · Informatică.** Explorarea sistematică cu revenire: generarea permutărilor,
> combinărilor, aranjamentelor și problemele-legendă (reginele). Vârful dificultății liceului.
> Competențe specifice vizate: 2.1–2.3.

## 1. Lecția (teorie)

**Ideea:** soluția e un **vector construit element cu element**; la fiecare poziție se încearcă pe
rând valorile candidate; dacă o alegere încalcă **condițiile de continuare**, se **revine**
(backtrack) și se încearcă următoarea.

**Componentele oricărui backtracking** (grila de proiectare — se completează pentru fiecare problemă):

| Componentă | La permutări |
|---|---|
| soluția `st[1..n]` | st[k] = elementul de pe poziția k |
| candidații pentru poziția k | valorile 1..n |
| condiția de continuare | valoarea să nu fie deja folosită |
| soluția completă | k = n → afișare |
| revenirea | eliberează valoarea, încearcă următoarea |

**Arborele de explorare** pentru n = 3 (desenat integral la tablă): coborâre = alegere, urcare =
revenire; frunzele = cele 3! = 6 permutări. Complexitatea **exponențială** — de aceea condițiile de
continuare care „taie" devreme sunt esența eficienței.

**Familia de generări** (variații pe schelet): permutări · aranjamente (k poziții) · combinări
(crescătoare — condiția `st[k] > st[k-1]` elimină duplicatele!) · submulțimi · produs cartezian.
**Reginele pe tabla n×n** — aplicația-legendă: condiția de continuare = coloană și diagonale libere.

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Arborele jucat** *(dramatizare pe tablă)*
Trei elevi „ocupă poziții" în permutare sub dictarea clasei; la blocaj, ultimul „se retrage" fizic.
*De ce așa:* revenirea — conceptul greu — devine mișcare vizibilă; arborele desenat în paralel leagă
jocul de formalizare.

**Exercițiul 2 — Grila de proiectare** *(instrumentare metodică)*
Pentru combinări și pentru submulțimi, elevii completează **întâi grila** (candidați? condiții?
soluție completă?), apoi codul. *De ce așa:* backtracking-ul se scrie greu „din inspirație" dar ușor
din grilă; grila e transferabilă la orice problemă nouă — inclusiv la examen.

**Exercițiul 3 — „Câte soluții afișează?"** *(itemul de examen)*
Pentru un backtracking dat, cu condiții de continuare specifice: câte soluții produce? care e a treia
afișată? *De ce așa:* itemul standard de bacalaureat la backtracking cere execuția mentală **ordonată**
(candidații în ordine!); antrenamentul pe cazuri mici (n = 3, 4) construiește disciplina.

**Exercițiul 4 — Reginele, cu numărarea tăierilor** *(problema-capstone)*
4 regine pe 4×4: arborele explorării cu ramurile **tăiate** marcate; câte așezări verifică
backtracking-ul față de toate cele C(16,4)? *De ce așa:* vizualizarea tăierilor arată de ce condițiile
de continuare sunt „inteligența" metodei — diferența dintre explorare brută și explorare sistematică.

## 3. Particularități

- **Tema cu cea mai abruptă curbă din liceu:** ritmul corect e problema-pe-schelet (nu schelet nou pe
  problemă); o singură schemă, multe instanțe.
- **Refacerea stării la revenire** (`folosit[val] = false`) uitată = soluții lipsă — eroarea tipică;
  simetria „marchez la coborâre / demarchez la urcare" se verbalizează ca ritual.
- **Ordinea candidaților** decide ordinea soluțiilor — la itemii „a k-a soluție", ordinea crescătoare
  se respectă strict.
- **La intensiv** se adaugă variantele iterative și problemele pe spații de căutare mai bogate;
  la clasele obișnuite, generările standard + o aplicație (regine/labirint) acoperă programa.
- **Evaluare potrivită:** grila de proiectare pentru o problemă nouă + itemul „câte soluții / a k-a
  soluție" + o implementare pe schelet dat.

## Legături

- Teoria de examen, cu arborele pentru n = 3 desenat complet:
  [Metode de programare — backtracking](/stiintific/03-metode-programare); înrudirea cu DFS:
  [Teoria grafurilor](/stiintific/05-teoria-grafurilor).
- Lecția anterioară: [Divide et Impera](/lectii/xi-09-divide-et-impera) ·
  Continuarea: [clasa a XII-a — baze de date](/lectii/#clasa-a-xii-a).

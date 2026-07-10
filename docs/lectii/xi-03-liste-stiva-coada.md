# Liste. Stiva și coada

> **Clasa a XI-a · Informatică.** Structuri de date cu **disciplină de acces**: lista ca șir de
> elemente legate, stiva (LIFO) și coada (FIFO) — conform programei, cu implementare statică
> (pe vector); alocarea dinamică apare la intensiv. Competențe specifice vizate: 1.1–1.4.

## 1. Lecția (teorie)

**Lista** = colecție ordonată de elemente cu operații specifice: inițializare, inserare (la început /
sfârșit / după un element), ștergere, parcurgere, căutare. Reprezentarea grafică: noduri legate prin
săgeți — desenul se predă indiferent de implementare (el este limbajul subiectelor).

**Stiva (LIFO — ultimul intrat, primul ieșit):** operații `push` (pune deasupra), `pop` (scoate de
deasupra), `top`. Implementarea statică:

```cpp
int stiva[100], varf = 0;                 // varf = câte elemente sunt
void push(int x) { stiva[varf++] = x; }
int  pop()       { return stiva[--varf]; }
```

**Coada (FIFO — primul intrat, primul ieșit):** `adaugă` la sfârșit, `extrage` de la început — doi
indici (`prim`, `ultim`) pe un vector.

**Unde trăiesc în realitate** (corelațiile care dau sens):

| Structura | Aplicații |
|---|---|
| stiva | undo-ul editoarelor, **stiva de apeluri** a funcțiilor (recursivitatea!), verificarea parantezelor |
| coada | cozile de imprimare, **BFS pe grafuri** (peste câteva lecții!), rândul la casă |

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Teancul de farfurii vs. rândul la casă** *(modelare cu obiecte)*
Simulare fizică: cărți puse teanc (iei doar de deasupra) vs. elevi la rând (iese primul venit).
*De ce așa:* LIFO/FIFO sunt discipline din viață — numirea lor pe experiențe fizice face definițiile
de neuitat; abia apoi vine codul.

**Exercițiul 2 — Verificarea parantezelor** *(problema-vedetă a stivei)*
Expresie cu `( ) [ ]`: e corect parantezată? — cu stivă (deschisă → push; închisă → pop și potrivire).
Urmărire pe `([()])` și pe `([)]`. *De ce așa:* prima problemă unde stiva e **necesară**, nu decorativă;
cazul `([)]` (imbricare încrucișată) arată de ce numărarea simplă nu ajunge.

**Exercițiul 3 — Urmărirea operațiilor** *(formatul de examen)*
Secvență dată de push/pop pe stivă și adaugă/extrage pe coadă — ce conține structura la final? ce se
afișează? *De ce așa:* itemul standard de barem; executarea pe desen (teancul care crește/scade) previne
inversarea LIFO/FIFO.

**Exercițiul 4 — Coada circulară** *(problematizare pentru aprofundare)*
Coada pe vector „se termină" deși are locuri libere la început — cum le refolosim? (indici modulo n).
*De ce așa:* problema reală a implementării statice; soluția circulară e eleganța care separă nivelul
de aprofundare — potrivită diferențierii.

## 3. Particularități

- **Programa cere aplicații cu implementare statică** — pe vector; listele înlănțuite cu pointeri și
  alocarea dinamică țin de intensiv/aprofundare. Desenul cu noduri și săgeți se predă însă tuturor:
  el apare în enunțuri.
- **Confuzia LIFO ↔ FIFO** se tratează prin ancorele fizice (teanc/rând), nu prin definiții repetate.
- **Stiva goală:** `pop` pe stivă goală e eroarea de robustețe — verificarea `varf > 0` intră în reflex.
- **Evaluare potrivită:** urmărirea unei secvențe de operații + verificarea parantezelor + un item
  teoretic de recunoaștere (ce structură folosește undo-ul?).

## Legături

- Teoria de examen (inclusiv implementările dinamice, pentru profesor):
  [Alocarea dinamică a memoriei](/stiintific/04-alocare-dinamica).
- Stiva de apeluri → [recursivitatea](/lectii/xi-08-recursivitate); coada → BFS la
  [parcurgerile grafurilor](/lectii/xi-06-parcurgeri-bfs-dfs).
- Lecția anterioară: [Struct](/lectii/xi-02-struct) ·
  Lecția următoare: [Grafuri — terminologie](/lectii/xi-04-grafuri-terminologie).

# Parcurgerea grafurilor: BFS și DFS. Conexitate

> **Clasa a XI-a · Informatică.** Cele două moduri de a „vizita" un graf — în lățime (cu coadă) și în
> adâncime (recursiv) — și aplicația lor majoră: componentele conexe.
> Competențe specifice vizate: 1.5, 1.6.

## 1. Lecția (teorie)

**BFS (parcurgerea în lățime)** — „unda": pornește dintr-un nod, vizitează întâi **toți** vecinii,
apoi vecinii vecinilor, strat cu strat. Instrumentul: **coada** (lecția de structuri rodește!).
Proprietatea de aur: BFS atinge nodurile în ordinea **distanței** (număr de muchii) față de start.

**DFS (parcurgerea în adâncime)** — „labirintul": mergi cât de departe poți, revii doar când nu mai
ai unde. Instrumentul: **recursivitatea** (stiva de apeluri) — mecanismul de „revenire" care va deveni
backtracking.

```cpp
void dfs(int x) {
    vizitat[x] = true;
    for (int y = 1; y <= n; y++)
        if (a[x][y] == 1 && !vizitat[y])
            dfs(y);
}
```

**Aplicația centrală — componentele conexe:** DFS/BFS repetat din fiecare nod nevizitat; numărul de
porniri = numărul componentelor.

```cpp
int nrComponente = 0;
for (int i = 1; i <= n; i++)
    if (!vizitat[i]) { nrComponente++; dfs(i); }
```

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Unda vie** *(dramatizare pe graful clasei)*
Elevii-noduri stau conform grafului desenat; „vestea" pleacă de la un nod: cine o află în minutul 1?
în minutul 2? — se joacă BFS-ul fizic. *De ce așa:* metafora undei/zvonului este BFS; distanța „în
minute" e chiar distanța în muchii — proprietatea centrală, trăită.

**Exercițiul 2 — Tabelul cozii** *(urmărire — formatul de examen)*
BFS din nodul 1 pe graful de lucru, cu tabelul: nod extras / vecini adăugați / conținutul cozii.
Apoi DFS din același nod — compararea ordinilor. *De ce așa:* itemul standard „ordinea de vizitare";
tabelul cozii disciplinează execuția, iar comparația BFS/DFS fixează diferența de instrument
(coadă vs. stivă).

**Exercițiul 3 — Numărarea componentelor** *(exercițiu integrator)*
Pe un graf neconex dat prin muchii: desenați-l, preziceti numărul componentelor, verificați cu
programul. *De ce așa:* conexitatea e aplicația de barem a parcurgerilor; predicția pe desen +
verificarea pe cod leagă intuiția de implementare.

**Exercițiul 4 — „Zvonul ajunge la toți?"** *(problemă în context)*
Rețea de prieteni dată: dacă persoana k află o veste, o află toată rețeaua? (echivalent: graful e
conex? / componenta lui k acoperă tot?). *De ce așa:* reformularea în limbaj de grafuri a unei
întrebări „sociale" este exact competența 1.5 din programă — transpunerea problemelor în model.

## 3. Particularități

- **`vizitat` uitat la resetare** sau lipsa marcării înainte de adăugarea în coadă (noduri băgate de
  două ori) — cele două erori tehnice tipice; tabelul de urmărire le prinde.
- **Ordinea vecinilor** (crescătoare, de regulă) decide ordinea de vizitare — enunțurile o precizează;
  elevii trebuie s-o respecte, altfel „rezultat corect, ordine greșită" = punctaj pierdut.
- **BFS vs. DFS — când care?** Distanțe minime → BFS; explorare completă/componente → oricare;
  regula scurtă previne alegerile la nimereală.
- **Evaluare potrivită:** ordinea de vizitare cu tabel (BFS și DFS) + numărul componentelor + o
  transpunere din context real în graf.

## Legături

- Teoria de examen, cu tabelul BFS pe exemplu: [Teoria grafurilor — §5.3](/stiintific/05-teoria-grafurilor);
  coada și stiva: [Alocarea dinamică](/stiintific/04-alocare-dinamica).
- DFS reapare ca backtracking la [metoda backtracking](/lectii/xi-10-backtracking).
- Lecția anterioară: [Reprezentarea grafurilor](/lectii/xi-05-reprezentarea-grafurilor) ·
  Lecția următoare: [Subprograme](/lectii/xi-07-subprograme).

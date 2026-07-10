# Interclasarea

> **Clasa a X-a · Informatică.** Al treilea algoritm fundamental: combinarea a doi vectori **deja
> sortați** într-unul singur sortat — în timp liniar. Competențe specifice vizate: 3.1.

## 1. Lecția (teorie)

**Problema:** două cataloage sortate (a și b) trebuie unite într-unul singur, tot sortat. Soluția naivă
(lipire + sortare) ignoră aurul din enunț: **sunt deja sortate**.

**Ideea interclasării:** două „degete" (i pe a, j pe b); la fiecare pas, **cel mai mic** dintre
elementele indicate trece în rezultat și degetul lui avansează; la final, ce rămâne dintr-un vector se
**copiază** integral.

```cpp
int i = 0, j = 0, k = 0;
while (i < n && j < m)
    if (a[i] <= b[j]) c[k++] = a[i++];
    else              c[k++] = b[j++];
while (i < n) c[k++] = a[i++];      // restul din a (dacă a mai rămas)
while (j < m) c[k++] = b[j++];      // restul din b
```

**Costul:** fiecare element se mută **o singură dată** → **O(n + m)** — liniar; comparat cu lipire +
sortare (O((n+m)²) cu metodele clasei) — diferența se calculează.

**Aplicațiile-tipar:** unirea a două fișiere sortate; „interclasarea inversă" (elementele comune /
doar din primul — variații de examen); și anunțul de perspectivă: interclasarea repetată = **merge
sort**, sortarea în O(n log n) (clasa a XI-a, divide et impera).

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Interclasarea umană** *(dramatizare cu două cozi)*
Două șiruri de elevi sortate după înălțime se unesc într-un singur șir sortat: mereu iese în față cel
mai scund dintre cei doi „capi de coloană". *De ce așa:* algoritmul celor două degete devine mișcare
fizică; „restul coloanei trece integral" se vede natural la epuizarea unei cozi.

**Exercițiul 2 — Tabelul i/j/k** *(urmărire — formatul de examen)*
Interclasarea vectorilor `1 4 9` și `2 3 7 10`, cu tabelul complet al indicilor și al rezultatului.
*De ce așa:* itemul standard; punctele fine (egalitatea — cine trece primul? epuizarea unui vector) se
văd doar în urmărirea completă.

**Exercițiul 3 — „De ce nu sortăm pur și simplu?"** *(calcul comparativ)*
Pentru n = m = 1000: interclasare ≈ 2000 de pași; lipire + selecție ≈ 2 000 000. *De ce așa:*
argumentul numeric transformă interclasarea din „încă un algoritm" în „instrumentul corect când datele
sunt sortate" — recunoașterea oportunității e competența de examen.

**Exercițiul 4 — Variațiile de barem** *(muncă independentă gradată)*
1) elementele **comune** celor doi vectori sortați; 2) elementele din primul care **nu** apar în al
doilea; 3) interclasare descrescătoare. *De ce așa:* toate trei sunt același schelet cu altă decizie la
comparație — familia de probleme care apare la bacalaureat și admiteri.

## 3. Particularități

- **Copierea „resturilor"** se uită sistematic (buclele finale) — vectorul rezultat iese trunchiat;
  urmărirea pe exemplu cu vectori de lungimi diferite o face de neuitat.
- **`<=` la egalitate** decide stabilitatea și, în variații (elemente comune), corectitudinea — semnul
  se alege **conștient**, nu din inerție.
- **Interclasarea cere vectori sortați** — ca la căutarea binară, precondiția se verifică în enunț;
  „interclasați" pe date nesortate = alt algoritm (și alt punctaj).
- **Evaluare potrivită:** urmărirea cu tabel + o variație (comune/diferență); itemul de cost
  (interclasare vs. sortare directă — care și de ce?) verifică înțelegerea de ansamblu.

## Legături

- Teoria de examen, cu implementarea completă: [Algoritmi — interclasarea](/stiintific/01-algoritmi);
  merge sort: [Metode de programare — divide et impera](/stiintific/03-metode-programare).
- Lecția anterioară: [Metode de sortare](/lectii/x-07-sortare) ·
  Lecția următoare: [Prelucrări specifice matricelor](/lectii/x-09-prelucrari-matrice).

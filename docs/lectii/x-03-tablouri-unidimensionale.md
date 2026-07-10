# Tablouri unidimensionale (vectori)

> **Clasa a X-a · Informatică.** Momentul mult așteptat: **memorăm** toate valorile! Vectorul schimbă
> fundamental clasa de probleme accesibile. Competențe specifice vizate: 2.1, 2.2.

## 1. Lecția (teorie)

**Motivația** (promisiunea făcută în gimnaziu se onorează): „afișați valorile în ordine inversă
citirii" — imposibil pe flux, banal cu memorare.

**Vectorul** = colecție de elemente **de același tip**, sub **un singur nume**, accesate prin
**indice**:

```cpp
int v[100];          // declarare: 100 de „căsuțe" int
int n;
cin >> n;
for (int i = 0; i < n; i++)     // citirea celor n elemente
    cin >> v[i];
for (int i = n - 1; i >= 0; i--) // afișarea în ordine inversă — acum se poate!
    cout << v[i] << " ";
```

Punctele-cheie:
- **indexarea de la 0**: elementele sunt `v[0] … v[n-1]` (convenția școlară alternativă `v[1..n]` se
  menționează — subiectele oficiale o folosesc adesea);
- **dimensiunea declarată** (capacitatea, 100) ≠ **numărul de elemente folosite** (n);
- accesul în afara vectorului (`v[n]`, `v[-1]`) = comportament imprevizibil — eroarea gravă a temei.

**Prelucrările de bază, reluate cu memorare:** parcurgere, min/max **cu poziție**, numărări/sume — și
noutățile imposibile pe flux: inversarea vectorului **în memorie** (interschimbări simetrice),
ștergerea/inserarea unui element (deplasarea elementelor), rotirea cu o poziție.

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — „Dulapul cu sertare"** *(modelare + exercițiu dirijat)*
Vectorul desenat ca șir de sertare numerotate **de la 0**; citirea și afișarea inversă, implementate
împreună. *De ce așa:* imaginea sertarelor numerotate previne confuziile de indexare; problema-motivație
(inversarea) dă sens imediat memorării.

**Exercițiul 2 — Vânătoarea de indici** *(fișă de precizie)*
Pentru un vector dat desenat: ce este `v[3]`? dar `v[i+1]` când i = 2? câte elemente are `v[2..7]`?
ce e greșit în `for (i = 0; i <= n; i++)`? *De ce așa:* aritmetica indicilor e sursa a jumătate din
erorile anului; itemul cu `<= n` (depășirea cu 1 — „off by one") e cel mai valoros din fișă.

**Exercițiul 3 — Inversarea în memorie** *(problematizare)*
Cum inversăm vectorul **fără** al doilea vector? — elevii descoperă interschimbările simetrice
(`v[i] ↔ v[n-1-i]` până la mijloc); capcana: bucla până la mijloc, nu până la capăt (altfel inversează
de două ori!). *De ce așa:* prima problemă „în loc" (in-place) — gândire care culminează la sortări;
capcana mijlocului e descoperită prin urmărire, memorabil.

**Exercițiul 4 — Ștergerea și inserarea** *(exercițiu dirijat cu deplasări)*
Ștergerea elementului de pe poziția k (deplasare stânga, `n--`) și inserarea pe poziția k (deplasare
dreapta — **de la capăt spre k!**, `n++`). *De ce așa:* direcția deplasării e subtilitatea temei
(inserarea de la stânga suprascrie tot); ambele operații sunt itemi frecvenți de examen.

## 3. Particularități

- **0 sau 1?** — indexarea de la 0 (C++) vs. de la 1 (multe subiecte în pseudocod): elevii trebuie să
  fie **bilingvi**; regula practică: în C++ de la 0, dar citește cu atenție convenția enunțului.
- **„Off by one"** este eroarea emblematică a vectorilor — fiecare buclă nouă primește întrebarea
  rituală: „primul indice? ultimul indice? câte elemente?".
- **Depășirea vectorului nu dă mereu eroare vizibilă** în C++ (comportament nedefinit) — programul
  „merge" și greșește aiurea; demonstrația acestui comportament straniu justifică disciplina indicilor.
- **Evaluare potrivită:** urmărire pe vector desenat + o prelucrare in-place + ștergere/inserare;
  itemul de „off by one" (găsește eroarea) — obligatoriu.

## Legături

- Teoria de examen: [Limbaje de programare — tablouri](/stiintific/02-limbaje-programare);
  prelucrările clasice: [Algoritmi](/stiintific/01-algoritmi).
- De ce nu am avut vectori în gimnaziu: [clasa a VIII-a — șiruri de valori](/lectii/viii-06-siruri-citire-parcurgere).
- Lecția anterioară: [Structuri de control](/lectii/x-02-structuri-control) ·
  Lecția următoare: [Tablouri bidimensionale](/lectii/x-04-tablouri-bidimensionale).

# Metode de sortare

> **Clasa a X-a · Informatică.** Tema-regină a algoritmilor fundamentali: ordonarea unui vector, prin
> trei metode clasice comparate. Competențe specifice vizate: 3.1.

## 1. Lecția (teorie)

**Sortarea** = rearanjarea elementelor în ordine (crescătoare, de regulă). Trei metode, predate prin
**ideea** lor înainte de cod:

| Metoda | Ideea într-o frază | Specific |
|---|---|---|
| **selecție** | caută minimul din zona nesortată și adu-l pe prima poziție liberă | puține interschimbări |
| **inserție** | fiecare element nou se **inserează la locul lui** în partea deja sortată | rapidă pe date aproape sortate |
| **bule (bubble)** | compară vecinii, interschimbă-i dacă-s în ordine greșită; repetă până nu mai e nimic de schimbat | cea mai intuitivă; optimizabilă cu fanion |

Toate trei: **O(n²)** comparații în cel mai rău caz — se numără concret (n(n−1)/2). Observația de
perspectivă: există sortări mai rapide (interclasarea — lecția următoare; O(n log n)).

**Sortarea prin selecție, integral** (metoda de barem cea mai frecventă):

```cpp
for (int i = 0; i < n - 1; i++) {
    int pozMin = i;
    for (int j = i + 1; j < n; j++)
        if (v[j] < v[pozMin]) pozMin = j;
    swap(v[i], v[pozMin]);
}
```

Componentele numite: zona sortată (stânga lui i) crește cu 1 la fiecare pas; căutarea minimului e
algoritmul de la min/max **cu poziție** — clasa a VIII-a rodește aici.

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Sortarea umană** *(dramatizare)*
Șase elevi cu cartonașe-numere în fața clasei; clasa dictează pașii selecției (unde e minimul? schimbă!).
Apoi aceeași linie sortată prin inserție — se simte diferența de stil. *De ce așa:* algoritmii de
sortare se **văd** pe oameni mai bine decât pe orice animație; kinestezicul fixează invarianta
(zona sortată crește).

**Exercițiul 2 — Tabelul pașilor** *(urmărire — formatul de examen)*
Vectorul `5 2 8 1` sortat prin selecție: starea vectorului după **fiecare** pas i. Apoi întrebarea de
barem: câte interschimbări s-au făcut? *De ce așa:* „starea după pasul k" e itemul standard; numărarea
operațiilor leagă sortarea de eficiență.

**Exercițiul 3 — Care metodă, când?** *(studiu comparativ)*
Trei scenarii: vector aproape sortat (inserția câștigă), vector cu interschimbări scumpe (selecția),
vector oarecare mic (oricare). Cronometrare pe vectori mari generați. *De ce așa:* „cea mai bună
sortare" nu există absolut — alegerea argumentată e competența matură; măsurarea reală
(100 000 de elemente: secunde vs. clipire) impresionează durabil.

**Exercițiul 4 — Sortare cu criterii** *(extindere aplicativă)*
Sortați descrescător (ce se schimbă? o comparație!); sortați după ultima cifră; mențiune: `sort()` din
STL există și e permis la bacalaureat — dar metodele clasice se cer **explicit** la examene.
*De ce așa:* variația criteriului arată că metoda e schelet, comparația e parametru — pregătește
funcțiile de comparare și, conceptual, subprogramele.

## 3. Particularități

- **Confuzia selecție ↔ bule** e clasică (ambele „duc minimul/maximul la capăt") — diferența verbalizată:
  selecția **caută întâi, schimbă o dată**; bulele **schimbă din mers, de multe ori**.
- **Limitele buclelor** (`n-1`, `i+1`, `n-1-i`) sunt punctele de pierdut punctaj — fiecare limită se
  justifică cu voce tare la predare („de ce nu până la n?").
- **Stabilitatea** (păstrarea ordinii elementelor egale) — doar mențiune la nivel de curiozitate;
  devine relevantă la sortări pe structuri (clasa a XI-a).
- **Evaluare potrivită:** starea vectorului după k pași (metoda impusă!) + numărare de operații + o
  sortare cu criteriu schimbat; „metoda impusă" e formularea de examen — elevii trebuie să le distingă.

## Legături

- Teoria de examen, cu toate implementările: [Algoritmi — sortare](/stiintific/01-algoritmi)
  (inclusiv exemplul pas cu pas la inserție).
- Modelul de unitate de învățare pe sortări: [Proiectarea didactică](/metodica/01-proiectare-didactica);
  mini-testul model pe sortare: [Evaluarea randamentului](/metodica/03-evaluare-randament).
- Lecția anterioară: [Căutarea](/lectii/x-06-cautare) ·
  Lecția următoare: [Interclasarea](/lectii/x-08-interclasare).

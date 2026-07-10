# Grafuri — terminologie și proprietăți

> **Clasa a XI-a · Informatică.** Începe capitolul cu cea mai bogată terminologie din liceu: noduri,
> muchii, grade, lanțuri, conexitate. Competențe specifice vizate: 1.5.

## 1. Lecția (teorie)

**Graful** = model matematic pentru **relații**: noduri (obiectele) + muchii/arce (legăturile).
Motivarea prin exemplele care „sunt" grafuri: harta orașelor, rețeaua de prieteni, dependențele între
sarcini, paginile web cu linkuri.

**Distincția fundamentală:** **neorientat** (muchii `{x,y}` — relația merge în ambele sensuri:
prietenia) vs. **orientat** (arce `(x,y)` — sensul contează: „x urmărește pe y").

**Vocabularul de bază** — construit pe **un graf de lucru** desenat mare pe tablă (5 noduri, 5 muchii):

| Termen | Pe scurt |
|---|---|
| adiacent / incident | noduri legate direct / muchia „atinge" nodul |
| **gradul** | câți vecini are nodul; la orientate: grad intern + extern |
| **lanț / drum** | traseu prin muchii (neorientat) / pe sensul arcelor (orientat) |
| elementar | nu repetă noduri |
| **ciclu / circuit** | traseu închis (neorientat / orientat) |
| subgraf / graf parțial | eliminăm noduri / eliminăm doar muchii |
| **conex** | între oricare două noduri există lanț |

**Formulele de numărare** (itemii de grilă favoriți): suma gradelor = 2·m; numărul maxim de muchii =
n(n−1)/2 (graful **complet** Kₙ); numărul nodurilor de grad impar e mereu **par**.

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Graful clasei** *(modelare pe date proprii)*
Se desenează graful „cine cu cine a colaborat la proiecte" (subset de elevi) — apoi pe el: gradele, un
lanț, un ciclu, e conex? *De ce așa:* terminologia aplicată pe o realitate proprie se fixează altfel
decât pe figuri abstracte; graful clasei revine ca exemplu în toate lecțiile capitolului.

**Exercițiul 2 — Verificarea formulelor** *(descoperire prin numărare)*
Pe trei grafuri desenate: suma gradelor vs. numărul muchiilor — se conjecturează 2·m, apoi se
argumentează (fiecare muchie „dă" 2 grade). *De ce așa:* formula demonstrată de elevi printr-un
argument de numărare e cunoaștere, nu memorare; „de ce nodurile de grad impar sunt în număr par?"
devine corolar accesibil.

**Exercițiul 3 — Vânătoarea terminologică** *(fișă de precizie)*
Pe graful de lucru: dați un lanț elementar de lungime 3; un ciclu; un subgraf cu 3 noduri; e `1-3-4-3-2`
lanț elementar? (nu — repetă nodul 3). *De ce așa:* distincțiile fine (elementar, subgraf vs. graf
parțial) sunt exact ce se pierde la itemi; fișa le exersează punctual.

**Exercițiul 4 — Numărători de examen** *(itemi de calcul)*
Câte muchii are K₆? Un graf cu 7 noduri și 5 muchii poate fi conex? (nu — minimum n−1 = 6!). Câte
grafuri neorientate cu 3 noduri există? (2³ = 8). *De ce așa:* itemii numerici pe formule sunt prezența
garantată a grafurilor la examene; se antrenează ca familie, cu justificare obligatorie.

## 3. Particularități

- **Terminologia dublă** (lanț/drum, ciclu/circuit — neorientat/orientat) e sursa clasică de puncte
  pierdute: tabelul cu două coloane se afișează în clasă tot capitolul.
- **Desenul e obligatoriu:** grafurile nu se predau fără cretă/tablă — fiecare noțiune se arată pe
  graful de lucru în secunda definirii.
- **Numărul de grafuri (2^(n(n−1)/2))** derutează — argumentul „fiecare muchie posibilă există sau nu"
  se leagă de submulțimi (combinatorică).
- **Evaluare potrivită:** fișă terminologică pe un graf dat + 3 itemi numerici cu justificare;
  distincția subgraf/graf parțial — nelipsită.

## Legături

- Teoria de examen, cu tabelul complet de termeni și formulele:
  [Teoria grafurilor](/stiintific/05-teoria-grafurilor).
- Lecția anterioară: [Liste; stiva și coada](/lectii/xi-03-liste-stiva-coada) ·
  Lecția următoare: [Reprezentarea grafurilor](/lectii/xi-05-reprezentarea-grafurilor).

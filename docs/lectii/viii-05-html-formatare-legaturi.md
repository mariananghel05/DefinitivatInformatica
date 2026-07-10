# Pagini web — formatare, imagini și legături

> **Clasa a VIII-a · domeniul TIC · modulul 3.** Pagina prinde culoare și — esența web-ului —
> **legături** către alte pagini. Competențe specifice vizate: 1.2, 3.2.

## 1. Lecția (teorie)

**Formatarea textului:** `<b>`/`<strong>` (aldin), `<i>`/`<em>` (cursiv), `<u>` (subliniat); atribute
pentru culoare și fundal (la nivel introductiv, eventual cu stiluri simple `style="color: blue"`).

**Imaginea** — eticheta fără pereche de închidere:

```html
<img src="pisica.jpg" alt="pisica mea">
```

`src` = fișierul imaginii (în **același folder** cu pagina — sursa clasică de imagini „sparte");
`alt` = textul descriptiv (se afișează când imaginea lipsește).

**Legătura (hyperlink)** — eticheta care a dat numele întregului web (HyperText):

```html
<a href="pagina2.html">Mergi la pagina 2</a>     <!-- legătură internă -->
<a href="https://www.edu.ro">Site-ul ministerului</a>  <!-- legătură externă -->
```

**Tabelele:** `<table>`, rând `<tr>`, celulă `<td>` — structura cunoscută de la Word/Excel, acum scrisă
manual.

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Îmbogățirea paginii** *(exercițiu incremental)*
Pagina „Despre mine" de lecția trecută primește: formatări, o imagine cu `alt`, un tabel cu orarul.
*De ce așa:* construcția incrementală pe produsul propriu arată că paginile **cresc** — și reciclează
tot ce s-a învățat.

**Exercițiul 2 — „Imaginea spartă"** *(depanare dirijată)*
O pagină primită cu imagine care nu se afișează (nume greșit / fișier în alt folder) — elevii o repară.
*De ce așa:* cea mai frecventă problemă HTML din practică, rezolvată o dată controlat; consolidează
căile relative (fișiere/foldere — clasa a V-a).

**Exercițiul 3 — Mini-site-ul cu două pagini** *(mini-proiect)*
Două pagini legate între ele („Acasă" ↔ „Pasiunile mele"), fiecare cu drum de întoarcere. *De ce așa:*
legătura **dus-întors** transformă pagini izolate în **site** — saltul conceptual al lecției; e și
tiparul „meniului" descoperit la prezentări (clasa a VI-a).

## 3. Particularități

- **Folderul proiectului:** pagina + imaginile stau împreună într-un folder; mutarea imaginii „sparge"
  pagina — disciplina de organizare devine vizibil necesară.
- **Legătura care nu duce nicăieri** (`href` greșit) nu dă eroare — browserul afișează „pagina nu
  există" abia la click; testarea **tuturor** legăturilor intră în rutina de verificare.
- **Diacriticele în pagini:** dacă apar semne ciudate, e problema de codificare — se rezolvă cu
  `<meta charset="UTF-8">` în `head` (se dă ca rețetă, fără teorie).
- **Evaluare potrivită:** mini-site-ul pe grilă (2 pagini / legături funcționale ambele sensuri /
  imagine cu `alt` / tabel) — grila verificabilă prin click, criteriu cu criteriu.

## Legături

- Tema de examen: [Rețele de calculatoare](/stiintific/10-retele-de-calculatoare) (HTML, „ce se
  întâmplă când tastezi un URL").
- Lecția anterioară: [Structura unei pagini HTML](/lectii/viii-04-html-structura) ·
  Lecția următoare: [Șiruri de valori — citire și parcurgere](/lectii/viii-06-siruri-citire-parcurgere).

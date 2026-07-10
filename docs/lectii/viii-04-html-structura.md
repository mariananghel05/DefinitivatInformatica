# Pagini web — structura unei pagini HTML

> **Clasa a VIII-a · domeniul TIC · modulul 3.** Elevii văd „sub capota" web-ului: prima pagină scrisă
> în HTML, deschisă în browser. Competențe specifice vizate: 1.2, 3.2.

## 1. Lecția (teorie)

**Pagina web** = un fișier text cu **etichete (taguri)** care descriu structura; browserul citește
fișierul și „desenează" pagina. Demonstrația de deschidere: click dreapta pe orice site → „View page
source" — *„asta veți scrie azi"*.

**Scheletul obligatoriu** (se construiește în orice editor de text simplu, salvat ca `pagina.html`):

```html
<!DOCTYPE html>
<html>
<head>
    <title>Pagina mea</title>      <!-- titlul din bara browserului -->
</head>
<body>
    <h1>Bun venit!</h1>            <!-- titlu principal -->
    <p>Primul meu paragraf.</p>    <!-- paragraf -->
</body>
</html>
```

Regulile de bază:
- eticheta se **deschide** `<p>` și se **închide** `</p>`; conținutul stă între ele;
- `head` = informații **despre** pagină (titlu); `body` = ce **se vede** în pagină;
- etichetele se închid **înăuntrul** părintelui (structură de cuib) — pagina e o ierarhie;
- titluri pe niveluri: `<h1>`–`<h6>`; paragrafe: `<p>`; liste: `<ul>`/`<ol>` cu `<li>`.

**Fluxul de lucru:** editez fișierul → salvez → **reîmprospătez browserul** (F5) → văd schimbarea.

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Scheletul tastat împreună** *(exercițiu dirijat)*
Pagina minimă, tastată sincron, salvată și deschisă în browser. *De ce așa:* ca la primul program C++ —
succesul garantat al primei pagini decide atitudinea; ciclul editează–salvează–F5 se automatizează
prin repetare imediată.

**Exercițiul 2 — „Strică și repară"** *(experiment cu erori)*
Elevii șterg o etichetă de închidere, un `>`, inversează `</b></p>` — și observă ce face browserul.
*De ce așa:* browserul **nu dă erori** ca compilatorul (afișează „ce poate") — diferență esențială pe
care elevii C++ trebuie să o descopere; depanarea HTML = compararea cod ↔ rezultat.

**Exercițiul 3 — Pagina „Despre mine"** *(exercițiu individual)*
Titlu, două paragrafe, o listă ordonată (top 3 filme) și una neordonată (hobby-uri). *De ce așa:*
subiectul personal + toate etichetele lecției; structura pe niveluri (`h1`, `h2`) se exersează natural
pe secțiuni („Despre mine", „Pasiunile mele").

## 3. Particularități

- **HTML nu e limbaj de programare** (nu are decizii, repetiții) — e limbaj de **marcare**; distincția
  se spune explicit elevilor care întreabă „unde e if-ul?".
- **Extensia contează:** fișierul salvat ca `.txt` nu se deschide ca pagină — legătura cu lecția de
  extensii din clasa a V-a; „Save as" cu `.html` se demonstrează.
- **Ierarhia = arbore:** cuiburile de etichete se desenează o dată ca arbore (html → head/body →…) —
  aceeași structură ca folderele; pentru profesor: e chiar arborele DOM, dar cuvântul nu e necesar la clasă.
- **Evaluare potrivită:** pagina „Despre mine" pe grilă (schelet corect / etichetele cerute / cod
  indentat lizibil) + un item de depanare (găsește eticheta neînchisă).

## Legături

- Tema de examen (HTML): [Rețele de calculatoare](/stiintific/10-retele-de-calculatoare) (inclusiv
  caseta „documentul HTML este un arbore").
- Lecția anterioară: [Grafice](/lectii/viii-03-excel-grafice) ·
  Lecția următoare: [Formatare și legături în HTML](/lectii/viii-05-html-formatare-legaturi).

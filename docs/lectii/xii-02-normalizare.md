# Normalizarea datelor (FN1–FN3)

> **Clasa a XII-a · Informatică · modulul „Baze de date".** De ce tabelul „mare și stufos" e o bombă cu
> ceas — și cum se dezamorsează, în trei forme normale. Competențe specifice vizate: 1.4.

## 1. Lecția (teorie)

**Motivația — anomaliile** tabelului nenormalizat `Împrumuturi(elev, clasa, carte, autor, data)`:

- **de actualizare**: elevul își schimbă clasa → de modificat în 20 de rânduri; uiți unul → date
  contradictorii;
- **de ștergere**: se șterge ultimul împrumut al unei cărți → dispar și datele cărții;
- **de inserare**: nu poți înregistra o carte nouă până n-o împrumută cineva.

Diagnosticul comun: **redundanța** — același fapt stocat de mai multe ori.

**Formele normale** — trei „filtre" succesive:

| Forma | Cerința | Pe scurt |
|---|---|---|
| **FN1** | valori **atomice**, fără grupuri repetitive | o celulă = o valoare |
| **FN2** | FN1 + fără dependențe **parțiale** de cheia compusă | fiecare atribut depinde de **toată** cheia |
| **FN3** | FN2 + fără dependențe **tranzitive** | atributele depind **doar** de cheie, nu unele de altele |

**Exemplul condus complet:** tabelul bibliotecii dus prin FN1 (lista de cărți dintr-o celulă → rânduri
separate) → FN2 (titlul depinde doar de id_carte, nu de cheia compusă → tabel separat *Cărți*) →
FN3 (autorul depinde de carte, nu de împrumut). Rezultatul: exact structura pe entități din lecția
anterioară — **normalizarea confirmă modelul conceptual bun**.

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Provocarea anomaliilor** *(demonstrație prin scenariu)*
Pe tabelul nenormalizat afișat, clasa „execută" scenariile: schimbă clasa Anei (câte rânduri?); șterge
ultimul împrumut al unei cărți (ce s-a pierdut?). *De ce așa:* anomaliile trăite pe exemplu valorează
mai mult decât definițiile lor; „durerea" motivează filtrele.

**Exercițiul 2 — Filtrarea pas cu pas** *(exercițiu dirijat)*
Un tabel nou (catalog cu note și diriginte) trecut prin FN1 → FN2 → FN3, cu justificarea **fiecărei**
despărțiri. *De ce așa:* normalizarea e procedură cu criterii — se exersează ca procedură; justificarea
verbală („de ce se desparte?") e ce cere itemul de examen.

**Exercițiul 3 — „În ce formă normală e?"** *(diagnostic)*
Patru tabele date, fiecare blocat în altă formă — elevii diagnostichează și indică pasul următor.
*De ce așa:* itemul standard de barem; diagnosticul cere recunoașterea dependențelor, nu recitarea
definițiilor.

## 3. Particularități

- **FN2 presupune cheie compusă** — la tabele cu cheie simplă, FN2 e automat îndeplinită; nuanța
  scapă frecvent și încurcă diagnosticul.
- **Dependența tranzitivă** e cel mai greu concept al modulului: formularea „atribut care depinde de
  alt atribut nechie" + exemplul autor→carte o domesticesc.
- **Normalizarea nu e scop în sine:** mesajul echilibrat — FN3 e standardul școlar și practic; „de ce
  nu normalizăm la infinit?" merită un răspuns onest (uneori se denormalizează pentru viteză).
- **Evaluare potrivită:** normalizarea completă a unui tabel nou + diagnosticul formei normale +
  enumerarea anomaliilor pe exemplu; toate trei sunt itemi consacrați.

## Legături

- Teoria de examen, cu exemplul de normalizare complet:
  [Baze de date — §6.2](/stiintific/06-baze-de-date).
- Lecția anterioară: [Entități, atribute, relații](/lectii/xii-01-entitati-relatii) ·
  Lecția următoare: [Tabele — structură și operații](/lectii/xii-03-tabele).

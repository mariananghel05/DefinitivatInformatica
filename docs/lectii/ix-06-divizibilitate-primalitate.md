# Divizibilitate. Primalitate. Cmmdc

> **Clasa a IX-a · Informatică.** A doua mare familie de algoritmi elementari: divizori, numere prime
> și algoritmul lui Euclid — prima întâlnire cu un algoritm „celebru". Competențe specifice vizate:
> 2.2, 3.2, 3.3.

## 1. Lecția (teorie)

**Divizorii unui număr:** d divide n ⇔ `n mod d = 0`. Afișarea divizorilor — parcurgere de la 1 la n;
apoi observația de eficiență: divizorii merg **în perechi** (d și n/d), deci e suficient până la √n.

**Verificarea primalității** — construită în două versiuni, deliberat:

1. **naivă**: numără divizorii de la 1 la n; prim ⇔ exact 2 divizori;
2. **eficientă**: n < 2 → nu e prim; caută divizor de la 2 la √n (`d * d ≤ n`); găsit → nu e prim.

Compararea celor două pe n = 1 000 003: mii de pași vs. ~1000 — **prima demonstrație vie de eficiență**.

**Cmmdc — algoritmul lui Euclid** (prin împărțiri repetate):

```text
┌cât timp b ≠ 0 execută
│   r ← a mod b
│   a ← b
│   b ← r
└■
scrie a
```

Urmărit pe (48, 18): (48,18) → (18,12) → (12,6) → (6,0) → **6**. Se menționează și varianta prin
scăderi repetate (mai intuitivă, mai lentă) și `cmmmc = a·b / cmmdc` (cu împărțirea înainte de înmulțire,
contra depășirii).

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Perechile de divizori** *(descoperire dirijată)*
Elevii listează divizorii lui 36 și îi așază în perechi (1·36, 2·18, 3·12, 4·9, 6·6) — unde se „întorc"
perechile? (la √36). *De ce așa:* limita √n se **vede** pe exemplu înainte de a fi folosită în cod;
argumentul devine al elevilor.

**Exercițiul 2 — Cursa algoritmilor** *(experiment de eficiență — IAC)*
Ambele verificări de primalitate implementate și cronometrate pe numere mari. *De ce așa:* diferența
de eficiență trăită pe propriul calculator valorează cât zece lecții teoretice despre complexitate —
și motivează lecția de analiză care încheie anul.

**Exercițiul 3 — Euclid pas cu pas** *(urmărire + conjectură)*
Tabelul lui Euclid pe 3 perechi; apoi întrebarea: de ce se termină mereu? (resturile scad strict).
*De ce așa:* prima discuție informală de **corectitudine și terminare** a unui algoritm — sămânța
raționamentului riguros, pusă pe cel mai potrivit exemplu din școală.

**Exercițiul 4 — Probleme integratoare** *(muncă independentă gradată)*
1) suma divizorilor lui n; 2) al câtelea număr prim este n?; 3) fracția a/b adusă la forma ireductibilă
(cmmdc aplicat!); avansații: numerele perfecte până la 10000. *De ce așa:* familia de probleme leagă
divizibilitatea de cifre (tema anterioară) și pregătește aplicațiile interdisciplinare (simplificarea
fracțiilor e chiar în programă).

## 3. Particularități

- **`d * d ≤ n` în loc de `d ≤ √n`:** varianta cu înmulțire evită radicalul (și erorile lui de
  reprezentare) — idiomul se explică, pentru că elevii îl vor întâlni în toate rezolvările oficiale.
- **Capcanele de barem ale primalității:** n = 0, n = 1 (nu sunt prime!), n = 2 (prim!) — cazurile
  mici se testează sistematic; „merge pe 7" nu înseamnă corect.
- **Euclid merită povestea lui** (cel mai vechi algoritm încă în uz, ~300 î.Hr.) — treizeci de secunde
  de istorie care dau temei greutate culturală.
- **Evaluare potrivită:** primalitate cu cazuri-limită + Euclid cu tabel + o problemă integratoare;
  itemul „de ce doar până la √n?" verifică argumentul, nu rețeta.

## Legături

- Teoria de examen: [Algoritmi — divizibilitate, cmmdc, primalitate](/stiintific/01-algoritmi)
  (implementările C++ complete).
- Eficiența, formalizată: [lecția de analiză a eficienței](/lectii/ix-09-eficienta-aplicatii).
- Lecția anterioară: [Cifrele unui număr](/lectii/ix-05-cifrele-unui-numar) ·
  Lecția următoare: [Prelucrarea secvențelor de valori](/lectii/ix-07-secvente-valori).

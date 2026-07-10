# Metoda Divide et Impera

> **Clasa a XI-a · Informatică.** Prima metodă generală de programare: împarte problema în subprobleme
> de același tip, rezolvă recursiv, combină. Competențe specifice vizate: 2.1–2.3.

## 1. Lecția (teorie)

**Schema metodei** — trei pași cu nume:

1. **Împarte** problema în subprobleme **independente, de același tip**, mai mici;
2. **Stăpânește**: rezolvă subproblemele (recursiv; direct la dimensiune mică — cazul de bază);
3. **Combină** rezultatele subproblemelor în rezultatul problemei.

**Exemplele canonice, în ordinea predării:**

- **căutarea binară** — divide et impera „degenerat": împarte în două, rezolvă **una**, combinare
  inexistentă (de aceea O(log n)); elevii o știu — acum îi văd scheletul;
- **maximul din vector** recursiv (max pe jumătăți, combinat cu un `max` simplu) — didactic pur;
- **merge sort** — vedeta: sortează jumătățile recursiv, **combină prin interclasare** (clasa a X-a
  rodește!); costul O(n log n) prin argumentul arborelui: log n niveluri × O(n) pe nivel;
- **turnurile din Hanoi** — mută n−1, mută baza, mută n−1 înapoi; recurența 2ⁿ − 1.

**Oportunitatea metodei** (formularea de examen): subprobleme **independente** de același tip +
combinare naturală a rezultatelor.

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Cartea de telefon, formal** *(recunoașterea scheletului)*
Căutarea binară rescrisă pe schema împarte/stăpânește/combină — care pas lipsește? *De ce așa:*
pornirea de la un algoritm stăpânit face metoda o **grilă de lectură**, nu o noutate; „combinarea vidă"
explică eleganța costului.

**Exercițiul 2 — Arborele lui merge sort** *(urmărire structurată)*
Sortarea vectorului `5 2 9 1 6 3` cu arborele complet al descompunerii și interclasările fiecărui
nivel. *De ce așa:* arborele de apeluri e reprezentarea care face vizibile și corectitudinea, și
costul (nivelurile!); e și formatul cerut la „exemplificați funcționarea metodei".

**Exercițiul 3 — Hanoi jucat și numărat** *(joc + recurență)*
Turnurile cu 3 discuri reale (monede), apoi recurența pașilor: 1, 3, 7, 15… → 2ⁿ − 1; „câte secole
pentru 64 de discuri?" *De ce așa:* jocul fizic dă algoritmul; numărătoarea dă prima întâlnire
autentică cu **explozia exponențială** — memorabilă prin legenda templului.

**Exercițiul 4 — Oportunitatea, argumentată** *(item de metodă)*
Pentru 4 probleme date (sortare mare; suma unui vector; maximul; căutare în date nesortate), elevii
argumentează: divide et impera se justifică sau nu? *De ce așa:* la examen se punctează
**argumentarea oportunității** metodei; suma unui vector (unde iterativul simplu e la fel de bun) e
contraexemplul care echilibrează entuziasmul.

## 3. Particularități

- **Metoda cere recursivitate stăpânită** — dacă lecția anterioară șchioapătă, aceasta se prăbușește;
  o oră de consolidare între ele e investiție, nu întârziere.
- **„Divide" fără „combină" nu e divide et impera** (e doar recursivitate) — distincția se discută pe
  maximul recursiv vs. o recursivitate oarecare.
- **Merge sort la barem:** interclasarea trebuie scrisă corect (resturile!) — eroarea de acolo se
  propagă aici; recapitularea țintită previne.
- **Evaluare potrivită:** arborele descompunerii pe un exemplu + implementarea unei probleme pe schemă
  + argumentarea oportunității pe un caz nou.

## Legături

- Teoria de examen, cu arborele lui merge sort desenat:
  [Metode de programare — divide et impera](/stiintific/03-metode-programare);
  interclasarea: [Algoritmi](/stiintific/01-algoritmi).
- Lecția anterioară: [Recursivitatea](/lectii/xi-08-recursivitate) ·
  Lecția următoare: [Backtracking](/lectii/xi-10-backtracking).

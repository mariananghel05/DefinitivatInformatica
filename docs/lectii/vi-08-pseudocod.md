# Pseudocodul — reguli de notare a variabilelor și de indentare

> **Clasa a VI-a · domeniul Algoritmi · modulul 5.** A doua reprezentare formală: algoritmul scris în
> „românește standardizat". Competențe specifice vizate: 2.2, 2.3.

## 1. Lecția (teorie)

**Pseudocodul** = descrierea algoritmului în cuvinte, dar cu **reguli fixe** — puntea dintre limbajul
natural și limbajul de programare (care vine în clasa a VII-a).

**Cuvintele-cheie** (convențiile uzuale în școala românească):

```text
citește n
dacă restul împărțirii lui n la 2 = 0 atunci
    scrie "par"
altfel
    scrie "impar"
sfârșit dacă
```

- `citește` / `scrie` — intrare / ieșire;
- `←` — atribuirea („`suma ← suma + 1`" se citește „suma **primește** suma plus 1");
- `dacă … atunci … altfel …` — decizia;
- `cât timp … execută`, `repetă … până când`, `pentru … execută` — repetitivele.

**Regulile de notare:**
- **numele variabilelor**: sugestive (`suma`, `numar`), fără spații și diacritice, încep cu literă;
- **indentarea**: pașii din interiorul unei structuri se scriu **retrași spre dreapta** — indentarea
  arată *ce aparține de ce* (echivalentul „interiorului" blocului C din Scratch!);
- fiecare structură se închide vizibil (prin indentare sau prin `sfârșit dacă` / `sfârșit cât timp`).

**Exemplu cu repetiție** — suma primelor n numere:

```text
citește n
suma ← 0
pentru i ← 1, n execută
    suma ← suma + i
scrie suma
```

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Traducerea în trei limbi** *(transfer de reprezentare)*
Același algoritm (par/impar) în: blocuri Scratch → schemă logică (lecția trecută) → pseudocod. Tabel cu
trei coloane la tablă. *De ce așa:* alinierea celor trei reprezentări arată că e **același** algoritm;
pseudocodul intră ca a treia haină, nu ca materie nouă.

**Exercițiul 2 — „Execută pseudocodul"** *(urmărirea execuției)*
Fișă: suma primelor n numere, executată pas cu pas pentru n = 4, cu tabelul valorilor (`i`, `suma`).
*De ce așa:* tabelul de execuție este **instrumentul** central al algoritmicii de liceu; prima
completare se face acum, pe un caz de 4 pași, cu profesorul.

**Exercițiul 3 — „Corectează notarea"** *(analiza erorilor)*
Un pseudocod cu greșeli de formă: variabile cu spații („suma note"), indentare haotică, `=` în loc de
`←`. *De ce așa:* regulile de notare se fixează pe contraexemple; discuția „de ce contează indentarea"
pregătește direct scrierea de cod real.

**Exercițiul 4 — Scrie singur** *(producție)*
Pseudocod pentru „media a trei note" și „numără de la 10 la 1" (cu `pentru` descrescător sau `cât timp`).
*De ce așa:* producția verifică atât algoritmul, cât și convențiile; a doua problemă cere o repetitivă —
nivelul de vârf al clasei a VI-a.

## 3. Particularități

- **Atribuirea `←` vs. egalul de la matematică** — conflictul din clasa a V-a revine în formă scrisă;
  citirea cu voce tare („primește") previne citirea ca ecuație.
- **Indentarea pare moft** la 12 ani — argumentul care convinge: două pseudocoduri identice ca text,
  dar indentate diferit, cu comportamente diferite discutate („pasul acesta e în buclă sau după ea?").
- **Nu e limbaj de programare:** pseudocodul nu „rulează"; unii elevi întreabă unde se apasă „play".
  Răspunsul cinstit: rulează **în capul nostru** — și tocmai asta antrenează.
- **Evaluare potrivită:** o urmărire de execuție cu tabel + o scriere de pseudocod scurt; exact
  formatul care va apărea, amplificat, la evaluările de liceu.

## Legături

- Teoria de examen (pseudocod, reprezentări): [Algoritmi](/stiintific/01-algoritmi).
- Pseudocodul devine C++ la [clasa a VII-a](/lectii/#clasa-a-vii-a) și rămâne limbajul subiectelor
  de bacalaureat (clasa a IX-a: [seria de lecții](/lectii/#clasa-a-ix-a)).
- Lecția anterioară: [Schema logică](/lectii/vi-07-schema-logica) ·
  Lecția următoare: [E-mail și netichetă](/lectii/vi-09-email-neticheta).

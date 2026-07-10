# Structuri repetitive condiționate (anterior și posterior)

> **Clasa a VI-a · domeniul Algoritmi · modulul 4.** Repetarea al cărei sfârșit **nu se cunoaște
> dinainte**: se repetă „cât timp" sau „până când" o condiție decide. Competențe specifice vizate:
> 2.1, 2.2.

## 1. Lecția (teorie)

**Problema care nu se rezolvă cu contor:** „personajul merge până atinge marginea scenei". De câte ori
repetăm? Nu știm — depinde de unde pornește. Avem nevoie de o repetare **condusă de o condiție**:

| Structura | Cum funcționează | În Scratch |
|---|---|---|
| **condiționată anterior** („cât timp") | verifică **întâi** condiția; dacă e adevărată, execută pașii; posibil să nu execute **niciodată** | „repetă până când ⟨condiție⟩" (echivalent logic) |
| **condiționată posterior** („repetă … până când") | execută **întâi** pașii, apoi verifică; pașii se execută **cel puțin o dată** | — se discută pe pseudocod simplu |
| **cu contor** (lecția trecută) | număr de repetări cunoscut dinainte | „repetă de n ori" |

Diferența esențială, formulată pentru elevi: la contor **știm de la început** de câte ori; la cele
condiționate **aflăm pe parcurs** — condiția e „paznicul" care decide continuarea.

**Exemplul central în Scratch:** jocul „prinde mărul" — mărul cade „repetă până când ⟨atinge marginea⟩",
personajul se mișcă după săgeți „la nesfârșit"; scorul crește la atingere.

::: warning Repetarea care nu se mai termină
Dacă condiția de oprire **nu poate deveni adevărată** (mărul nu cade pentru că am uitat mișcarea),
repetarea nu se termină niciodată — **bucla infinită**, prima „eroare celebră" pe care elevii o întâlnesc
și o țin minte. Merită provocată intenționat la clasă.
:::

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — „De câte ori?"** *(problematizare)*
Trei sarcini: „sari de 10 ori" / „sari până obosești" / „bate din palme cât timp cântă muzica" — care
se poate număra dinainte? *De ce așa:* clasificarea situațiilor din viața reală separă cele trei
structuri înainte de orice bloc de cod; elevii formulează singuri criteriul „știm / nu știm numărul".

**Exercițiul 2 — Jocul „prinde mărul"** *(exercițiu dirijat — IAC)*
Construirea ghidată a jocului din lecție, apoi personalizare (viteză, obiecte). *De ce așa:* jocul e
motivația supremă la 12 ani; structura condiționată apare ca **necesitate a jocului** (mărul cade până
jos), nu ca teorie.

**Exercițiul 3 — „Provoacă bucla infinită"** *(experiment dirijat)*
Elevii primesc sarcina inversă: stricați jocul astfel încât repetarea să nu se mai oprească; apoi
explicați de ce. *De ce așa:* eroarea provocată deliberat e inofensivă și memorabilă; „de ce nu se
oprește?" obligă la analiza condiției — gândire de depanare autentică.

**Exercițiul 4 — Ghicește numărul (versiunea completă)** *(consolidare)*
Jocul din clasa a V-a, rescris corect: „repetă până când ⟨răspuns = număr⟩" cu indicii mare/mic.
*De ce așa:* aceeași problemă, structură nouă — elevii văd progresul propriu; compararea cu versiunea
veche (care întreba o singură dată) arată exact ce aduce repetiția condiționată.

## 3. Particularități

- **Confuzia anterior/posterior** nu se forțează la a VI-a: distincția se arată pe un exemplu („dacă
  ești deja la margine, mai mergi o dată sau deloc?"), dar formalizarea completă rămâne pentru
  pseudocod (lecția următoare) și liceu.
- **Condiția se citește la fiecare repetare** — elevii cred că se verifică o singură dată la început;
  jocul cu mărul o demonstrează vizibil (condiția devine adevărată „pe parcurs").
- **Greșeala tipică:** condiție inversată („repetă până când NU atinge marginea") — comportament
  derutant; se depanează prin citirea cu voce tare a condiției.
- **Evaluare potrivită:** item de clasificare (situație → structura potrivită) + proba practică pe joc;
  clasificarea e cea care intră și în testele scrise.

## Legături

- Teoria de examen (cele trei structuri repetitive): [Algoritmi](/stiintific/01-algoritmi); versiunile
  C++ (`while`, `do…while`, `for`) la [clasa a VII-a](/lectii/#clasa-a-vii-a).
- Lecția anterioară: [Structura repetitivă cu contor](/lectii/vi-05-structura-repetitiva-contor) ·
  Lecția următoare: [Schema logică](/lectii/vi-07-schema-logica).

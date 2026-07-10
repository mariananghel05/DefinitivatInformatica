# Structura alternativă (decizională)

> **Clasa a V-a · domeniul „Algoritmi" · modulul 5 (de regulă).** Programul „ia decizii": dacă o
> condiție e adevărată se întâmplă ceva, altfel — altceva. Implementare în Scratch.
> Competențe specifice vizate: 2.2, 2.3, 3.1.

## 1. Lecția (teorie)

**Structura alternativă** = algoritmul alege **una din două căi**, în funcție de o **condiție**
(o întrebare cu răspuns adevărat/fals):

- **dacă … atunci …** — pașii se execută **numai** când condiția e adevărată;
- **dacă … atunci … altfel …** — o cale pentru „adevărat", **cealaltă** pentru „fals"; se execută
  **exact una** dintre ele, niciodată ambele.

Exemple de pornire din viața elevilor: *„dacă plouă, iau umbrela"* (fără altfel — dacă nu plouă, pur și
simplu nu o iau); *„dacă am terminat temele, mă joc, altfel continui la teme"* (cu altfel).

**În Scratch**, cele două blocuri portocalii de Control au **forma literei C** — pașii dintre „brațele"
C-ului se execută doar pe ramura respectivă:

```text
când se dă click pe steagul verde
întreabă „Care este parola?" și așteaptă
dacă <răspuns = „info5”> atunci
    spune „Bun venit!"
altfel
    spune „Parolă greșită!"
```

**Condițiile** folosesc operatorii relaționali din lecția de expresii (`=`, `<`, `>`) — blocurile
hexagonale verzi. Exemplu numeric lucrat: *par sau impar?* — condiția „restul împărțirii lui `n` la 2
este 0" (se leagă explicit de operatorul „rest" învățat anterior).

::: tip Formularea care previne confuzia
„Programul ajunge la blocul *dacă*, **pune întrebarea o singură dată**, alege **o singură** ramură și
merge mai departe." Cuvintele „o singură dată" pregătesc diferența față de structura repetitivă
(clasa a VI-a), unde întrebarea se pune iar și iar.
:::

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — „Așa da / așa nu"** *(joc didactic de mișcare)*
Profesorul enunță condiții („dacă porți ceva albastru → ridică mâna, altfel → pune mâinile pe bancă");
elevii **sunt** programul și execută ramura potrivită. *De ce așa:* decizia se trăiește corporal înainte
de a fi construită pe ecran; se verifică rapid și înțelegerea lui „exact una dintre ramuri".

**Exercițiul 2 — „Ghicește numărul" (versiunea simplă)** *(problematizare + IAC)*
Personajul „se gândește" la un număr (variabilă setată de autor); utilizatorul răspunde la întrebare,
iar scriptul spune „prea mic!", „prea mare!" sau „bravo!" folosind două decizii. *De ce așa:* problema
e un **joc autentic**, nu un exercițiu deghizat; folosește variabila, întrebarea și decizia împreună —
prima „aplicație integratoare". (Același joc, jucat invers cu clasa, va vinde ideea căutării binare la
liceu — sămânța se pune acum.)

**Exercițiul 3 — „Par sau impar"** *(exercițiu dirijat)*
Script care citește un număr și anunță dacă e par sau impar, cu condiția „rest = 0". Apoi variații pe
fișă: ce afișează scriptul pentru 7? pentru 12? pentru 0? *De ce așa:* exercițiul leagă operatorul
„rest" de o decizie utilă; întrebarea despre 0 deschide discuția despre **cazuri-limită** — deprindere
de testare care trebuie formată de timpuriu.

**Exercițiul 4 — „Semaforul"** *(studiu de caz mic, decizii înlănțuite)*
Personajul întreabă culoarea semaforului și răspunde: verde → „traversez", roșu → „aștept", altceva →
„atenție, semafor defect!". Necesită un „dacă" în interiorul lui „altfel". *De ce așa:* primul contact
cu **deciziile imbricate**, pe un context de educație rutieră (corelare transdisciplinară); doar la
nivel de observare — nu se cere stăpânirea imbricării la a V-a.

## 3. Particularități

- **Dificultatea reală a lecției este „altfel"**: elevii preferă două blocuri „dacă" separate, cu
  condiții opuse („dacă rest = 0 → par"; „dacă rest = 1 → impar"). Nu e o eroare — merită **discutat**,
  nu sancționat: ambele variante funcționează aici, dar „altfel" garantează că se alege mereu exact o
  ramură și scutește a doua întrebare. Comparația celor două scripturi este un excelent moment metodic.
- **Condiția = întrebare cu da/nu**: elevii formulează condiții vagi („dacă numărul e frumos"). Regula
  de aur: orice condiție trebuie să poată fi verificată de calculator cu adevărat/fals.
- **Egalitatea în Scratch este `=` simplu** — nedureros acum, dar la trecerea în C++ (clasa a VII-a)
  aceiași elevi vor scrie `if (a = b)`. Profesorul care predă și la a VII-a plantează de pe acum
  formularea „întrebăm dacă sunt egale" (comparație), distinctă de „punem în cutie" (atribuire).
- **Condițiile compuse** („și"/„sau") rămân la nivel de observare pe exemple simple; formalizarea lor
  vine mai târziu.
- **Evaluare potrivită**: fișă de „urmărire a execuției" (pentru intrarea X, ce spune personajul?) +
  verificarea scriptului „par/impar" pe 3 valori alese de profesor (inclusiv una-limită). Ambele tipuri
  prefigurează itemii de bacalaureat, la scară de gimnaziu.

## Legături

- Teoria de examen: [Algoritmi — structurile fundamentale](/stiintific/01-algoritmi); versiunea C++
  (`if`/`else`) la [Limbaje de programare](/stiintific/02-limbaje-programare).
- Metodele folosite (joc didactic, problematizare, studiu de caz):
  [Strategii didactice](/metodica/02-strategii-didactice).
- Lecția anterioară: [Structura secvențială](/lectii/v-03-structura-secventiala) ·
  Lecția următoare: [Proiecte în Scratch](/lectii/v-05-medii-grafice-scratch).

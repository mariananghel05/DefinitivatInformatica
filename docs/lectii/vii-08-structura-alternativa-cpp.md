# Structura alternativă în C++ (`if` / `else`)

> **Clasa a VII-a · domeniul Algoritmi · modulele 4–5.** Decizia din Scratch și din pseudocod, acum în
> sintaxă C++ — împreună cu cea mai celebră capcană a limbajului: `=` vs. `==`.
> Competențe specifice vizate: 2.2, 3.3.

## 1. Lecția (teorie)

**Sintaxa** — pusă imediat în paralel cu formele deja cunoscute:

| Pseudocod (a VI-a) | C++ (acum) |
|---|---|
| `dacă n rest 2 = 0 atunci` | `if (n % 2 == 0)` |
| `    scrie "par"` | `    cout << "par";` |
| `altfel` | `else` |
| `    scrie "impar"` | `    cout << "impar";` |

Reguli noi față de pseudocod:
- condiția stă obligatoriu **în paranteze**;
- **`==` compară, `=` atribuie** — capcana lecției, scrisă mare pe tablă;
- mai multe instrucțiuni pe o ramură se grupează cu **acolade** `{ }` (altfel doar prima aparține lui `if`);
- operatorii de comparație: `< <= > >= == !=`; condiții compuse cu `&&` (și), `||` (sau).

**Exemple lucrate:** par/impar; maximul a două numere; „admis/respins" după medie (condiție cu `>=`);
pozitiv/negativ/zero (primul `else if` — decizia în trepte).

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Traducerea din pseudocod** *(transfer)*
Trei pseudocoduri cunoscute din clasa a VI-a se traduc în C++. *De ce așa:* algoritmii sunt stăpâniți,
efortul rămâne doar pe sintaxă — separarea dificultăților e principiul de aur al trecerii la C++.

**Exercițiul 2 — „Vânătoarea lui `=`"** *(analiza erorilor)*
Cinci programe scurte, unele cu `if (a = b)` în loc de `==` — elevii prezic comportamentul, apoi
verifică. *De ce așa:* capcana `=`/`==` nu se previne prin avertisment, ci prin **întâlnire controlată**;
programul care „merge dar greșește" e mai instructiv decât cel care nu compilează.

**Exercițiul 3 — Maximul a trei numere** *(problematizare)*
După maximul a două numere, se cere al treilea — elevii propun soluții (decizii înlănțuite sau
variabila `maxim` actualizată). Se compară variantele. *De ce așa:* problema cu mai multe soluții
corecte deschide discuția „care e mai clară?" — prima conversație despre calitatea codului; varianta cu
`maxim` pregătește parcurgerile din clasa a VIII-a.

**Exercițiul 4 — „Buletinul meteo"** *(exercițiu integrator)*
Program care citește temperatura și afișează mesaje pe intervale (`else if` în lanț: ger / frig /
plăcut / caniculă). *De ce așa:* decizia în trepte pe un context real; intervalele obligă la atenție cu
`<=` vs. `<` la capete — precizia condițiilor, exersată devreme.

## 3. Particularități

- **`=` în loc de `==`** va apărea ani de zile; obiceiul bun format acum: citirea condiției cu voce
  tare („dacă a **este egal** cu b").
- **Acoladele:** elevii pun a doua instrucțiune pe ramură fără `{ }` și nu înțeleg comportamentul —
  regula practică a clasei: **acolade întotdeauna**, chiar și la o singură instrucțiune (obicei care
  previne o clasă întreagă de erori).
- **Indentarea** vine din pseudocod — se cere identic în C++; codul „înghesuit la stânga" se respinge
  la evaluare ca „neîngrijit", exact ca un caiet dezordonat.
- **Evaluare potrivită:** predicție pe programe cu decizii (inclusiv una cu capcană) + o problemă cu
  `else if`; criteriile includ explicit lizibilitatea (acolade, indentare).

## Legături

- Teoria de examen (`if`/`else`, operatori): [Limbaje de programare](/stiintific/02-limbaje-programare);
  structura alternativă în ansamblu: [Algoritmi](/stiintific/01-algoritmi).
- Versiunea Scratch a acelorași idei: [clasa a V-a — structura alternativă](/lectii/v-04-structura-alternativa).
- Lecția anterioară: [Structura liniară](/lectii/vii-07-structura-liniara) ·
  Lecția următoare: [Structurile repetitive în C++](/lectii/vii-09-structuri-repetitive-cpp).

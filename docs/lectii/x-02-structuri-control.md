# Structurile de control în C++

> **Clasa a X-a · Informatică.** Decizia și repetițiile în C++, la nivel complet: `if`/`else`,
> `switch`, `while`, `do…while`, `for` — cu echivalențele și capcanele lor.
> Competențe specifice vizate: 1.1, 1.2.

## 1. Lecția (teorie)

**Alternativele:** `if`/`else` (cunoscut), plus **`switch`** pentru selecția multiplă pe valori
discrete (cu `break`-ul obligatoriu și `default`); când `switch`, când lanț de `else if` (intervale →
doar `else if`).

**Repetitivele — tabelul complet al echivalențelor:**

| Pseudocod | C++ | Specific |
|---|---|---|
| `cât timp c execută` | `while (c)` | test inițial; posibil 0 execuții |
| `repetă … până când c` | `do { … } while (!c);` | test final; **condiția se neagă!** |
| `pentru i ← a, b` | `for (int i = a; i <= b; i++)` | contor |

Sublinierea de barem: la traducerea `repetă…până când` → `do…while`, condiția **se neagă** („până când
devine adevărată" = „cât timp e falsă") — negarea condițiilor compuse folosește De Morgan.

**Instrumentar suplimentar:** bucle cu pas diferit (`i += 2`), descrescătoare, **bucle imbricate**
(tabla înmulțirii, desene din caractere) — cu numărarea execuțiilor (n·m — legătura cu eficiența).

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Traducerea cu negare** *(exercițiu țintit)*
Trei bucle `repetă…până când` traduse în `do…while` — condițiile se neagă explicit, în scris, înainte
de cod. *De ce așa:* negarea condiției e punctul unde se pierd punctele; pasul intermediar scris
(condiția negată) devine obicei de siguranță.

**Exercițiul 2 — „Câte steluțe?"** *(bucle imbricate + numărare)*
Programe cu două bucle imbricate (dreptunghi, triunghi de steluțe); pentru fiecare: câte caractere se
afișează în total? *De ce așa:* desenele fac buclele imbricate vizuale, iar numărarea execuțiilor
(n·m, n(n+1)/2) leagă structurile de analiza eficienței — două competențe într-un exercițiu.

**Exercițiul 3 — `switch` vs. `else if`** *(studiu comparativ)*
Aceeași problemă (ziua săptămânii din număr) în ambele forme; apoi o problemă de intervale (nota →
calificativ) unde `switch` **nu** e potrivit. *De ce așa:* alegerea structurii potrivite e competența;
contraexemplul fixează criteriul (valori discrete vs. intervale).

**Exercițiul 4 — Depanarea clasicelor** *(fișă de erori)*
Cinci fragmente cu erori-tipar: `;` după `for`, `break` uitat în `switch`, `while` cu condiție
inversată, buclă infinită, contor modificat în corp. *De ce așa:* colecția completă a erorilor de
structuri, întâlnită sistematic o dată — la evaluări, aceleași erori vor apărea ca itemi de depistare.

## 3. Particularități

- **`do…while` e rar dar sigur la examene** — apare exact ca traducere din `repetă…până când`;
  exersarea negării condiției e cel mai bun raport efort/punctaj din an.
- **Buclele imbricate sperie** la început: metafora „acele ceasornicului" (minutarul face un tur complet
  pentru fiecare pas al orarului) domesticește ideea.
- **`break`-ul din `switch`** uitat produce „căderea în cascadă" — demonstrată o dată, comic (toate
  zilele săptămânii afișate deodată).
- **Evaluare potrivită:** traducere cu negare + numărare de execuții la bucle imbricate + un item de
  depanare — trio-ul care acoperă complet competența.

## Legături

- Teoria de examen: [Limbaje de programare — instrucțiuni](/stiintific/02-limbaje-programare);
  echivalența structurilor: [Algoritmi](/stiintific/01-algoritmi).
- Lecția anterioară: [C++ — elemente de bază](/lectii/x-01-cpp-elemente-baza) ·
  Lecția următoare: [Tablouri unidimensionale](/lectii/x-03-tablouri-unidimensionale).

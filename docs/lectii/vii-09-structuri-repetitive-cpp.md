# Structurile repetitive în C++ (`while`, `for`) — de la Scratch la cod

> **Clasa a VII-a · domeniul Algoritmi · modulul 5.** Ultimul pas al trecerii la C++: repetițiile.
> Cu ele, gimnazistul are **întreg** instrumentarul programării structurate.
> Competențe specifice vizate: 2.2, 3.3.

## 1. Lecția (teorie)

**Corespondența cu ce știu deja** — tabelul care organizează lecția:

| Scratch (a V-a–a VI-a) | Pseudocod (a VI-a) | C++ (acum) |
|---|---|---|
| „repetă de n ori" | `pentru i ← 1, n execută` | `for (int i = 1; i <= n; i++)` |
| „repetă până când ⟨condiție⟩" | `cât timp … execută` | `while (conditie)` |
| — | `repetă … până când` | `do { … } while (conditie);` *(menționat)* |

**`for` desfăcut în părțile lui** (se citește ca o propoziție): *pornește* cu `i = 1`; *cât timp*
`i <= n` repetă; *după fiecare* repetare `i++` (crește cu 1).

```cpp
int n;
cin >> n;
int suma = 0;
for (int i = 1; i <= n; i++)
    suma = suma + i;           // vechiul „suma ← suma + i" din pseudocod
cout << "Suma este " << suma;
```

**`while`** pentru repetările fără număr cunoscut — exemplul care va deveni clasic: câte cifre are un
număr? (`while (n > 0) { contor++; n = n / 10; }` — „tăiem" ultima cifră până nu mai rămâne nimic).

::: warning Bucla infinită, acum în C++
`while (n > 0)` în care **uiți** `n = n / 10` nu se termină niciodată — vechea „buclă infinită" din
Scratch, dar acum programul chiar îngheață. Oprirea forțată a programului e o mică lecție de sine
stătătoare.
:::

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Traducerea sumelor** *(transfer)*
Pseudocodul „suma primelor n numere" (știut de la a VI-a) devine `for`; apoi variații: suma numerelor
pare, produsul primelor n numere. *De ce așa:* același algoritm în a treia reprezentare închide bucla
Scratch → pseudocod → C++; variațiile verifică înțelegerea, nu memorarea.

**Exercițiul 2 — Tabelul de execuție cu buclă** *(exercițiu dirijat)*
Pentru `n = 4`, tabelul valorilor `i` și `suma` la fiecare pas al buclei. *De ce așa:* tabelul de
execuție pe repetiții este **exact** formatul itemilor de urmărire de la evaluări; cu bucle scurte se
construiește deprinderea fără epuizare.

**Exercițiul 3 — „Numărătoarea de cifre"** *(problematizare cu `while`)*
Câte cifre are un număr citit? Elevii propun idei; se ajunge la tăierea ultimei cifre cu `/10`.
*De ce așa:* prima problemă în care numărul de repetări **nu se știe** — motivarea reală a lui `while`;
operațiile `%10` și `/10` (plantate la structura liniară) rodesc acum.

**Exercițiul 4 — „Desenul din stele"** *(exercițiu ludic, spre bucle imbricate)*
Afișarea a n rânduri cu câte n steluțe (`*`) — întâi un rând cu `for`, apoi n rânduri (un `for` în alt
`for`, doar ca deschidere). *De ce așa:* rezultatul vizual amintește de desenele Scratch; buclele
imbricate se **arată** fără a fi cerute la evaluare — sămânță pentru clasa a VIII-a–a IX-a.

## 3. Particularități

- **Sintaxa lui `for` sperie** (trei părți în paranteză!) — citirea lui ca propoziție („pornește…,
  cât timp…, după fiecare…") o domesticește; nu se cer variații exotice (pas 2, descrescător) decât
  după stăpânirea formei de bază.
- **Greșeala tipică:** `;` pus imediat după `for(...)` sau `while(...)` — bucla „goală"; programul
  merge, dar greșit. Intră explicit în exercițiile de depanare.
- **Contorul umblător:** modificarea lui `i` în interiorul lui `for` produce comportamente derutante —
  regula clasei: „pe `i` îl mișcă doar `for`-ul".
- **Evaluare potrivită:** tabel de execuție + o problemă cu `for` și una cu `while` (numărul de cifre
  sau înrudită) — exact nucleul pe care clasa a VIII-a și a IX-a vor construi.

## Legături

- Teoria de examen (instrucțiuni repetitive): [Limbaje de programare](/stiintific/02-limbaje-programare)
  și [Algoritmi](/stiintific/01-algoritmi).
- Versiunile Scratch: [repetitiva cu contor](/lectii/vi-05-structura-repetitiva-contor) și
  [repetitivele condiționate](/lectii/vi-06-repetitive-conditionate) (clasa a VI-a).
- Lecția anterioară: [Structura alternativă în C++](/lectii/vii-08-structura-alternativa-cpp) ·
  Continuarea: [clasa a VIII-a — șiruri de valori](/lectii/#clasa-a-viii-a).

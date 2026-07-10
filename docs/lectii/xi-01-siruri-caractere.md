# Șiruri de caractere

> **Clasa a XI-a · Informatică (matematică-informatică).** Textul devine dată: memorare, funcțiile de
> bibliotecă și prelucrările-tipar. Competențe specifice vizate: 1.3.

## 1. Lecția (teorie)

**Memorarea:** șirul stil C — `char s[100]`, caractere consecutive terminate cu **`'\0'`**
(terminatorul e cheia înțelegerii: lungimea „logică" ≠ capacitatea declarată). Alternativa modernă
`std::string` se prezintă în paralel — subiectele acceptă ambele.

**Citirea** — capcana clasică: `cin >> s` se oprește la **spațiu**; pentru rânduri întregi:
`cin.getline(s, 100)` / `getline(cin, s)`.

**Funcțiile de bibliotecă** (`<cstring>` pentru stil C) — setul de examen:

| Funcție | Rol |
|---|---|
| `strlen(s)` | lungimea (fără `'\0'`) |
| `strcpy(d, s)` / `strcat(d, s)` | copiere / concatenare |
| `strcmp(a, b)` | comparare lexicografică: **0 la egalitate!** |
| `strchr(s, c)` / `strstr(s, t)` | prima apariție a caracterului / subșirului |

Plus clasificarea caracterelor (`<cctype>`): `isdigit`, `isalpha`, `toupper`, `tolower` — și aritmetica
caracterelor (`'A' + 1`, `c - '0'`), cunoscută din clasa a VII-a.

**Prelucrările-tipar:** numărarea vocalelor; înlocuirea unui caracter; verificarea de palindrom (două
„degete" de la capete); **despărțirea în cuvinte** (strtok sau parcurgere manuală) — vedeta subiectelor.

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Anatomia șirului** *(desen + experiment)*
`char s[10]` cu „info" înăuntru, desenat celulă cu celulă (cu `'\0'`!); ce afișează `strlen`? ce se
întâmplă dacă suprascriem `s[2]` cu `'\0'`? (șirul „se scurtează" instant!). *De ce așa:* terminatorul
înțeles pe desen previne toată clasa de erori „șir neterminat"; experimentul cu scurtarea e memorabil.

**Exercițiul 2 — „strcmp minte?"** *(analiza erorii clasice)*
`if (strcmp(a, b))` folosit pentru egalitate — pare corect, e invers! Se testează și se corectează
(`== 0`). *De ce așa:* eroarea `strcmp` e într-un top 3 al erorilor de la bacalaureat; întâlnită
controlat, cu explicația convenției (<0, 0, >0), se imunizează.

**Exercițiul 3 — Palindromul de text** *(transfer de tehnică)*
Verificarea de palindrom cu doi indici de la capete — aceeași idee ca inversarea vectorului (clasa a
X-a). *De ce așa:* transferul explicit vector → șir arată că șirul **e** un vector de caractere;
tehnicile vechi se recablează, nu se reînvață.

**Exercițiul 4 — Despărțirea în cuvinte** *(exercițiu-tipar de examen)*
Dintr-o propoziție citită cu `getline`: numărul de cuvinte, cel mai lung cuvânt, inițialele. *De ce
așa:* prelucrarea pe cuvinte e formatul dominant al subiectelor cu șiruri; cele trei cerințe pe aceeași
parcurgere învață economia de cod.

## 3. Particularități

- **`cin >> s` vs. `getline`** — amestecarea lor (cu `\n` rămas în buffer) produce „citirea care sare";
  fenomenul se demonstrează și se dă rețeta (`cin.get()`/`cin.ignore()`), fără teoretizare excesivă.
- **Șirurile se copiază cu `strcpy`, nu cu `=`** (stil C) — eroarea de atribuire directă nu compilează
  sau face altceva; distincția valoare/adresă se plantează aici, înaintea pointerilor.
- **String C vs. std::string:** elevii care vin cu `std::string` de acasă nu se penalizează — dar
  subiectele clasice folosesc `char[]`, deci ambele se stăpânesc.
- **Evaluare potrivită:** o urmărire cu funcții de bibliotecă + o prelucrare pe cuvinte; itemul
  `strcmp` — nelipsit.

## Legături

- Teoria de examen, cu tabelele complete de funcții: [Algoritmi — §1.9](/stiintific/01-algoritmi) și
  [Limbaje de programare](/stiintific/02-limbaje-programare).
- Lecția următoare: [Structuri neomogene (struct)](/lectii/xi-02-struct) ·
  Seria clasei: [clasa a XI-a](/lectii/#clasa-a-xi-a).

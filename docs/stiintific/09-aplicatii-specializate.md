# 9. Aplicații și programe specializate

> Temă de TIC (birotică). Vizează aplicațiile de productivitate: procesoare de text, calcul tabelar și
> aplicații de prezentare. Sunt componente esențiale ale **competenței digitale**.

## 1. Teorie

### 9.1. Procesoare de text

Aplicații pentru crearea și formatarea documentelor (ex. **Microsoft Word**, **LibreOffice Writer**,
**Google Docs**).

**Funcționalități esențiale:**
- formatare **caracter** (font, dimensiune, stil bold/italic/subliniat, culoare);
- formatare **paragraf** (aliniere, spațiere, indentare, liste);
- formatare **pagină** (margini, orientare, antet/subsol, numerotare);
- **stiluri** și **cuprins** generat automat;
- inserare de **tabele**, **imagini**, **forme**, **caractere speciale**;
- **corectare ortografică**, căutare/înlocuire, **îmbinare corespondență** (mail merge).

### 9.2. Editoare de calcul tabelar

Aplicații pentru organizarea datelor în tabele și efectuarea de calcule (ex. **Microsoft Excel**,
**LibreOffice Calc**, **Google Sheets**).

- date organizate în **celule** (intersecție rând × coloană, ex. `B3`);
- **formule** (încep cu `=`) și **funcții** predefinite;
- **referințe**: relative (`A1`), absolute (`$A$1`), mixte (`$A1`, `A$1`);
- **grafice** (diagrame) pentru reprezentarea vizuală a datelor;
- sortare, filtrare, formatare condiționată.

| Funcție | Rol | Exemplu |
|---|---|---|
| `SUM` | sumă | `=SUM(A1:A10)` |
| `AVERAGE` | medie | `=AVERAGE(B1:B10)` |
| `MIN` / `MAX` | minim / maxim | `=MAX(C1:C10)` |
| `COUNT` | numărare | `=COUNT(A1:A10)` |
| `IF` | decizie | `=IF(D1>=5;"admis";"respins")` |

::: tip Referințe absolute vs. relative
La copierea unei formule, o referință **relativă** (`A1`) se ajustează, iar una **absolută** (`$A$1`)
rămâne fixă. Este una dintre cele mai utile (și mai greșite) noțiuni de la calcul tabelar.
:::

**Exemplu pas cu pas:** în `D2` scriem `=B2*$C$1` (prețul din `B2` înmulțit cu cursul valutar fixat în
`C1`), apoi copiem formula în jos pe coloană:

| Celulă | Formula după copiere | Ce s-a ajustat |
|---|---|---|
| `D2` | `=B2*$C$1` | formula originală |
| `D3` | `=B3*$C$1` | `B2` → `B3` (relativă); `$C$1` neschimbată (absolută) |
| `D4` | `=B4*$C$1` | la fel — cursul rămâne „ancorat" |

Fără `$`, formula copiată în `D3` ar fi devenit `=B3*C2` — eroarea clasică. Alte funcții utile, cu
**criteriu**: `=COUNTIF(D2:D30;">=5")` (câți elevi au cel puțin 5), `=SUMIF(A2:A30;"11A";D2:D30)`
(suma doar pentru clasa 11A). Decizia din `IF` se poate **imbrica**:
`=IF(D2>=9;"excelent";IF(D2>=5;"admis";"respins"))` — exact structura `if … else if … else` din C++.

### 9.3. Editoare de prezentări

Aplicații pentru crearea prezentărilor cu diapozitive (ex. **Microsoft PowerPoint**,
**LibreOffice Impress**, **Google Slides**).

- organizare pe **diapozitive (slide-uri)** cu **machete (layout)**;
- **teme** și **șabloane** vizuale unitare;
- **tranziții** între diapozitive și **animații** ale obiectelor;
- inserare de text, imagini, grafice, audio/video;
- mod **expunere** (prezentare) și note pentru vorbitor.

::: warning Reguli de bună prezentare
Puțin text per slide, idei-cheie (nu paragrafe), contrast bun text/fundal, animații cu măsură,
consecvență vizuală.
:::

## 2. Competențe vizate

- **crearea și formatarea documentelor** complexe (procesor de text);
- **prelucrarea datelor tabelare** cu formule, funcții și grafice;
- **realizarea de prezentări** clare și coerente;
- **utilizarea integrată** a aplicațiilor de birotică pentru sarcini reale (parte din competența digitală).

::: info Corelare cu programa școlară
- **Gimnaziu:** cl. VI — 1.1–1.2 + 3.1–3.2 (prezentări, animații grafice); cl. VII — 1.1 + 3.1
  (tehnoredactare documente); cl. VIII — 1.1 + 3.1 (calcul tabelar).
:::

## 3. Abordare metodică

**Metode:** demonstrarea la videoproiector, exercițiul aplicat (sarcini practice), **învățarea bazată pe
proiect** (un produs final: revistă, buget, prezentare), problematizarea.

**Tip de lecție** (formare de deprinderi — „formule în calcul tabelar"): pornind de la un catalog de note,
elevii calculează media cu `AVERAGE` și clasifică cu `IF`.

**Activități de învățare:** redactarea unui document cu cuprins automat; realizarea unui buget cu formule
și grafic; crearea unei prezentări pe o temă dată, respectând reguli de design.

**Itemi de evaluare:**
- *obiectiv:* „Cu ce caracter începe o formulă în calcul tabelar? (=)";
- *semiobiectiv:* „Ce face referința `$A$1` la copiere?";
- *subiectiv (practic):* „Realizați o foaie de calcul care afișează media și calificativul pentru 5 elevi."

::: warning Erori tipice
- formulă scrisă **fără `=`** (se interpretează ca text);
- confuzia **referință relativă** ↔ **absolută** la copierea formulelor;
- slide-uri **supraîncărcate** cu text;
- formatare manuală repetată în loc de **stiluri** (la procesorul de text).
:::

## Conexiuni cu alte teme

- `IF` din calcul tabelar este instrucțiunea de **decizie**, iar copierea unei formule pe o coloană
  aplică implicit o **structură repetitivă** — aceleași concepte de la
  [Algoritmi](/stiintific/01-algoritmi) și [C++](/stiintific/02-limbaje-programare); o foaie de calcul
  este, în fond, o **matrice**.
- Sortarea și filtrarea datelor din foile de calcul folosesc algoritmii de
  [sortare și căutare](/stiintific/01-algoritmi).
- **Îmbinarea corespondenței** (mail merge) unește un document cu o sursă de date tabelară — puntea
  directă spre [Baze de date](/stiintific/06-baze-de-date).
- Documentele colaborative (Google Docs/Sheets) sunt servicii web găzduite în cloud — vezi
  [Rețele de calculatoare](/stiintific/10-retele-de-calculatoare); folosirea lor la clasă este
  discutată la [Strategii didactice](/metodica/02-strategii-didactice).

## Recapitulare

- **Procesor de text** — documente formatate (caracter/paragraf/pagină, stiluri, cuprins).
- **Calcul tabelar** — celule, **formule** (`=`), **funcții** (`SUM`, `IF`...), referințe relative/absolute, grafice.
- **Prezentări** — diapozitive, teme, tranziții/animații; reguli de design.
- Toate susțin **competența digitală** și se predau prin sarcini **practice/aplicate**.

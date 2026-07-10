# Primul program C++ — mediul de dezvoltare și structura programului

> **Clasa a VII-a · domeniul Algoritmi · modulul 3 — lecția-prag a gimnaziului.** De la blocurile
> Scratch la **limbajul de programare**: sintaxă, compilare, erori. Momentul didactic cel mai delicat
> din gimnaziu. Competențe specifice vizate: 1.4, 3.3.

## 1. Lecția (teorie)

**De ce un limbaj de programare?** Discuție de deschidere cinstită: Scratch e minunat, dar programele
mari, jocurile reale, aplicațiile de pe telefon se scriu în limbaje-text. Blocurile aveau formele
potrivite — acum formele devin **cuvinte cu reguli stricte**.

**Mediul de dezvoltare (IDE)** — în practică: Code::Blocks sau un IDE online. Circuitul de lucru:

```text
scriu codul  →  COMPILEZ (traducerea în limbajul mașinii)  →  RULEZ  →  văd rezultatul
                     ↑                                             │
                     └────────── corectez erorile ←────────────────┘
```

**Primul program** — se tastează împreună, caracter cu caracter:

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Salut, clasa a VII-a!";
    return 0;
}
```

Ce înseamnă fiecare rând (la nivel de „rol", nu de detaliu): `#include` — aducem „trusa" de
citire/scriere; `main` — de aici începe execuția (ca steagul verde!); `cout <<` — afișează; fiecare
instrucțiune se termină cu `;`; acoladele `{ }` țin pașii împreună (ca blocul de sub steag).

**Erorile de compilare** — parte din lecție, nu accident: lipsă `;`, ghilimele neînchise, `Main` cu
majusculă. Compilatorul e un profesor foarte pedant care arată **linia** greșelii.

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Tastarea împreună** *(exercițiu dirijat, pas cu pas)*
Programul de salut, tastat sincron cu profesorul, compilat și rulat de fiecare. *De ce așa:* primul
succes trebuie garantat pentru **toți** — rularea reușită a primului program e momentul de care depinde
atitudinea față de programare; ritmul îl dă cel mai lent elev, nu cel mai rapid.

**Exercițiul 2 — „Strică și repară"** *(experiment dirijat cu erori)*
Elevii **strică** intenționat programul (șterg `;`, o acoladă, o ghilimea), citesc mesajul de eroare,
repară. *De ce așa:* eroarea provocată deliberat scoate frica din erori — devin informații, nu eșecuri;
citirea mesajului (linia!) e deprinderea de depanare numărul 1.

**Exercițiul 3 — Personalizarea** *(exercițiu individual)*
Programul afișează 3 rânduri despre autor (nume, pasiune, mesaj) — descoperă `endl`/`"\n"`.
*De ce așa:* variație mică pe schelet sigur; nevoia de „rând nou" apare natural și motivat.

**Exercițiul 4 — Paralela Scratch–C++** *(organizator grafic, temă de reflecție)*
Tabel completat împreună: steag verde ↔ `main`, bloc „spune" ↔ `cout`, stiva de blocuri ↔ `{ }`.
*De ce așa:* transferul explicit valorifică doi ani de Scratch și reduce noutatea percepută — mesajul:
„știți deja să programați; învățați doar o scriere nouă".

## 3. Particularități

- **Șocul sintaxei este real:** în Scratch nu exista „greșit scris". Primele ore, cantitate mică de
  cod + toleranță zero la frustrare („eroarea e normală, o citim împreună").
- **Tastarea** devine brusc importantă: caractere ca `{ } ; < > #` se găsesc greu pe tastatură —
  merită 5 minute explicite de „unde sunt tastele programatorului" (și combinația AltGr).
- **Copierea codului** (copy-paste de la colegi) apare imediat; antidotul la această vârstă:
  programele scurte se **tastează** — tastarea e parte din învățare, ca scrisul de mână la litere.
- **Diferențierea:** cei cu experiență (unii au făcut cursuri private) primesc provocări de explorare
  (afișează un desen din caractere), nu lecția următoare — clasa rămâne sincronă la fundamente.
- **Evaluare potrivită:** nicio notă la primele 2–3 ore de C++; succesul de etapă este „programul meu
  compilează și rulează". Prima evaluare — abia după citire/afișare.

## Legături

- Teoria de examen (structura programelor, mediul de programare):
  [Limbaje de programare](/stiintific/02-limbaje-programare).
- Metodica momentului de tranziție: [Strategii didactice](/metodica/02-strategii-didactice)
  (algoritmizarea, exercițiul, IAC).
- Lecția anterioară: [Aplicații colaborative](/lectii/vii-04-aplicatii-colaborative) ·
  Lecția următoare: [Date numerice; citirea și afișarea](/lectii/vii-06-date-citire-afisare).

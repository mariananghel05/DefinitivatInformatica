# Subprograme — definire, apel, transferul parametrilor

> **Clasa a XI-a · Informatică.** Programul se sparge în piese refolosibile: funcții, parametri,
> valoare vs. referință — tema cu cea mai mare pondere la subiectele III de bacalaureat.
> Competențe specifice vizate: 3.1–3.4.

## 1. Lecția (teorie)

**De ce subprograme?** Codul catalogului (clasa a X-a) repeta citirea/afișarea în trei locuri — orice
corecție se făcea de trei ori. Subprogramul: **scrie o dată, folosește oriunde**.

**Anatomia:**

```cpp
int maxim(int a, int b) {        // antet: tip returnat, nume, parametri formali
    if (a > b) return a;
    return b;
}
// apel:  int m = maxim(x, y);   // x, y = parametri efectivi (actuali)
```

**Transferul parametrilor** — inima lecției:

| Transfer | Sintaxă | Efect |
|---|---|---|
| **prin valoare** | `int x` | subprogramul primește o **copie**; originalul neatins |
| **prin referință** | `int &x` | subprogramul lucrează pe **original**; modificările rămân |

Regula de proiectare: date de **intrare** → valoare; date de **ieșire/modificate** → referință.
**Tablourile** se transmit prin adresă implicit — modificările se văd întotdeauna.

**Variabile locale vs. globale:** locala trăiește doar în subprogram; globala e vizibilă peste tot —
și periculoasă (oricine o modifică). Disciplina: parametri, nu globale (excepția școlară: vectorii
mari, tradițional globali în rezolvările de examen).

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Copie sau original?** *(experiment-cheie)*
`dubleaza(int x)` vs. `dubleaza(int &x)` — același apel, rezultate diferite, urmărite cu afișări.
*De ce așa:* diferența valoare/referință nu se ține minte din definiție, ci din experimentul văzut;
e distincția pe care subiectul III o testează invariabil.

**Exercițiul 2 — Refactorizarea catalogului** *(exercițiu de proiectare)*
Programul monolit al catalogului se sparge în subprograme: `citeste(...)`, `afiseaza(...)`,
`sorteaza(...)`, `cautaElev(...)` — cu decizia argumentată a parametrilor fiecăruia. *De ce așa:*
descompunerea unui program **propriu** în piese e proiectare modulară autentică; decizia
valoare/referință se ia de patru ori, în contexte diferite.

**Exercițiul 3 — Urmărirea cu apeluri** *(formatul de examen)*
Program cu 2–3 subprograme și apeluri imbricate: ce se afișează? — cu schema apelurilor desenată.
*De ce așa:* urmărirea execuției cu subprograme (cine pe cine cheamă, ce se întoarce) e itemul
standard; desenul „săgeților de apel" organizează gândirea.

**Exercițiul 4 — Antetul din enunț** *(tipar de subiect III)*
Din enunțuri de tip bacalaureat („subprogramul primește un vector și numărul lui de elemente și
returnează..."), elevii scriu **doar antetele** corecte, apoi implementează unul. *De ce așa:*
scrierea antetului conform cerinței e punctată separat la barem — și greșită frecvent (tipul returnat,
referința uitată).

## 3. Particularități

- **`&` uitat** la parametrii de ieșire — subprogramul „nu face nimic" deși e corect înăuntru; eroarea
  emblematică a temei, vânată în toate exercițiile de depanare.
- **`return` vs. parametru de ieșire:** un singur rezultat → `return`; mai multe → referințe;
  amestecarea lor haotică se corectează prin regula de proiectare.
- **Elevii de la intensiv** au deja funcții — pentru ei, provocarea e disciplina antetelor de barem și
  transmiterea corectă, nu conceptul.
- **Evaluare potrivită:** experimentul valoare/referință ca item de urmărire + un antet din enunț + o
  implementare completă; exact structura subiectului III.

## Legături

- Teoria de examen, cu exemplul „ce se întâmplă concret la apel":
  [Limbaje de programare — subprograme](/stiintific/02-limbaje-programare).
- Lecția anterioară: [Parcurgerile BFS și DFS](/lectii/xi-06-parcurgeri-bfs-dfs) ·
  Lecția următoare: [Recursivitatea](/lectii/xi-08-recursivitate).

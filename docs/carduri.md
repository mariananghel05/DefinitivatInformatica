# Carduri — exersează prin întrebări

> Joc de memorare cu carduri (flashcards). Răspunzi la întrebări, primești feedback imediat și îți
> urmărești scorul. Conținutul este aliniat la programa de examen și la paginile cursului.

## Cum funcționează

Sunt **trei moduri de dificultate**, fiecare îl include pe cel anterior:

| Mod | Conține | Cum se verifică |
|---|---|---|
| **1. Doar carduri** | întrebări grilă (alegere multiplă) | automat — alegi varianta și vezi imediat dacă e corectă |
| **2. Carduri + răspuns text** | + întrebări cu răspuns liber | local, pe **cuvinte-cheie** + **auto-evaluare** (compari cu răspunsul-model și te notezi) |
| **3. Carduri + cod** | + probleme de programare C++ | **compilare și rulare online** prin [Wandbox](https://wandbox.org), cu verificarea ieșirii |

::: tip De ce auto-evaluare la răspunsurile text
Un răspuns corect poate fi formulat în multe feluri. Verificarea automată caută ideile-cheie, dar
decizia finală îți aparține: după ce vezi răspunsul-model, te notezi singur (corect / parțial / greșit).
:::

::: info Filtrare pe temă
Pe ecranul de start poți alege o **temă** (de ex. **Competențe**, Algoritmi, Limbaj C++, Baze de date)
ca să exersezi țintit. Tema **Competențe** acoperă competențele generale și specifice din programele
școlare (gimnaziu și liceu), în format grilă și cu răspuns text. Lasă „Toate temele" pentru un mix.
:::

::: warning Necesită internet (modul 3)
Problemele de cod sunt trimise spre compilare către un serviciu extern gratuit (Wandbox). Dacă ești
offline sau serviciul nu răspunde, vei vedea un mesaj — poți rula codul și în propriul IDE.
Restul cursului funcționează complet local.
:::

<ClientOnly>
  <Flashcards />
</ClientOnly>

## Vrei să adaugi întrebări?

Bancul de întrebări este în `docs/.vitepress/theme/cards-data.js`, împărțit în trei liste: `grila`,
`text` și `cod`. Adaugă obiecte noi după modelul existent — componenta le preia automat, fără alte
modificări.

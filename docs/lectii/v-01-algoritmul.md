# Algoritmul — noțiune și proprietăți

> **Clasa a V-a · domeniul „Algoritmi" · de regulă în modulele 4–5** (după parcurgerea domeniilor TIC).
> Prima lecție de algoritmică din școală — aici se formează imaginea mentală pe care elevul o va purta
> până la bacalaureat. Competențe specifice vizate: 2.1, 2.2 (programa OMEN 3393/2017).

## 1. Lecția (teorie)

La clasa a V-a, algoritmul **nu se definește formal**, ci se **descoperă** din experiențe cunoscute:

> Un **algoritm** este o **listă de pași**, dați într-o **ordine precisă**, care ne duce de la ceea ce
> știm (datele de intrare) la ceea ce vrem să obținem (rezultatul).

**Exemple de pornire care funcționează la 10–11 ani:**
- *rețeta de clătite* — ingredientele sunt „datele de intrare", clătitele sunt „rezultatul", pașii
  rețetei sunt algoritmul;
- *drumul de acasă la școală* — o listă de instrucțiuni („mergi înainte până la intersecție, fă stânga…");
- *instrucțiunile unui joc* sau *montarea unei piese LEGO după plan*.

**Proprietățile algoritmilor** — la nivelul clasei a V-a se formulează pe exemple, nu abstract:

| Proprietate | Cum o formulezi pentru elevi | Contraexemplul care o fixează |
|---|---|---|
| **claritate** | „fiecare pas se înțelege exact la fel de oricine" | „adaugă niște făină" — cât înseamnă „niște"? |
| **finitudine** | „algoritmul se termină" | „mergi înainte" — la nesfârșit? |
| **generalitate** | „merge pentru orice caz de acest fel, nu doar pentru unul" | rețeta funcționează pentru 2 sau 20 de clătite |

**Datele algoritmului** (pregătesc lecția următoare): ce **primim** (intrare), ce **obținem** (ieșire).
Exemplu discutat: „media a două note" — intrări: cele două note; ieșire: media.

::: tip Legătura cu practica
La această vârstă algoritmii se descriu **în limbaj natural** (pași numerotați) și, în lecțiile
următoare, se **implementează în Scratch**. Nu se folosește pseudocod (apare la a VI-a) și în niciun
caz sintaxă C++ (apare la a VII-a).
:::

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — „Rețeta amestecată"** *(organizator grafic + joc didactic)*
Elevii primesc pașii unei rețete de ceai pe cartonașe amestecate și trebuie să îi așeze în ordinea
corectă. *De ce așa:* fixează ideea de **ordine precisă** fără nicio noțiune tehnică; lucrul cu obiecte
concrete se potrivește gândirii concrete a vârstei. Discuție de încheiere: „ce se întâmplă dacă punem
apa după pliculeț? dar dacă sărim un pas?"

**Exercițiul 2 — „Robotul"** *(joc de rol / dramatizare)*
Un elev este „robotul" (execută **exact** ce i se spune), colegii îi dau comenzi ca să traverseze clasa
și să ia o carte de pe catedră. Robotul interpretează literal orice comandă ambiguă („mergi înainte" —
merge până se lovește de perete). *De ce așa:* elevii **descoperă singuri** proprietatea de claritate;
este exercițiul-cheie al lecției, iar frustrarea amuzantă a comenzilor greșite este exact momentul de
învățare (problematizare prin joc).

**Exercițiul 3 — „Ce intră, ce iese?"** *(conversație euristică)*
Pentru situații date — „calculăm media a două note", „aflăm câți ani are fratele mai mic", „decidem ce
haine punem după vreme" — elevii identifică **datele de intrare** și **rezultatul**. *De ce așa:*
pregătește vocabularul lecțiilor următoare și obișnuiește elevii să analizeze problema **înainte** de a
căuta pașii.

**Exercițiul 4 — „Algoritmul meu"** *(muncă independentă + turul galeriei)*
Fiecare elev scrie un algoritm din viața lui (îngrijirea unui animal, pregătirea ghiozdanului), apoi
algoritmele se afișează și colegii caută pași ambigui sau lipsă. *De ce așa:* evaluare formativă prin
**interevaluare**; verifică toate cele trei proprietăți pe producții proprii.

## 3. Particularități

- **Gândirea este concretă**: toate exemplele vin din viața elevului; abstractizarea („o clasă de
  probleme") se atinge doar prin exemple multiple, nu prin definiții.
- **Greșeala tipică**: elevii scriu pași „telegrafici" care se bazează pe subînțeles („faci ceaiul") —
  se corectează prin jocul „Robotul", nu prin observații teoretice.
- **Capcană de predare**: a începe cu definiția și proprietățile ca listă de memorat. Ordinea corectă
  este **exemplu → descoperire → denumire**.
- **Fără formalism**: nicio schemă logică, niciun pseudocod încă; doar pași numerotați în limbaj natural.
- **Evaluare potrivită**: observarea sistematică în timpul jocurilor + fișă scurtă („ordonează pașii",
  „găsește pasul neclar"); nu teste de „definiții". Nota nu e miza — atitudinea pozitivă față de
  disciplină, da (este primul contact al elevului cu informatica „de gândit").

## Legături

- Teoria completă, la nivel de examen: [Algoritmi](/stiintific/01-algoritmi) (noțiune, proprietăți,
  reprezentări).
- Metodele folosite (joc didactic, problematizare, conversație euristică):
  [Strategii didactice](/metodica/02-strategii-didactice).
- Un proiect de lecție complet construit pe același tipar:
  [Proiectarea didactică](/metodica/01-proiectare-didactica).
- Locul lecției în an: [Lecții pe clase — clasa a V-a](/lectii/#clasa-a-v-a) ·
  [Programa clasei a V-a](/programa-clase#clasa-a-v-a).

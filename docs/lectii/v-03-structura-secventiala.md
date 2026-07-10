# Structura secvențială (liniară)

> **Clasa a V-a · domeniul „Algoritmi" · modulele 4–5.** Prima structură de programare — pași executați
> unul după altul — predată direct **în Scratch**, mediul grafic folosit în practică la această clasă.
> Competențe specifice vizate: 2.2, 2.3, 3.1.

## 1. Lecția (teorie)

**Structura secvențială** = pașii algoritmului se execută **în ordine, unul după altul, fiecare exact
o dată**. Este „scheletul" oricărui program; elevii o cunosc deja intuitiv din lecția despre algoritmi
(rețeta, drumul spre școală) — acum o **implementează**.

**Reprezentarea în mediul grafic (Scratch):** blocurile se îmbină **vertical**, ca piesele de puzzle,
iar ordinea de sus în jos este chiar ordinea de execuție:

```text
când se dă click pe steagul verde        ← evenimentul de pornire
mergi 50 de pași                          ┐
spune „Salut!" timp de 2 secunde          │  se execută în ordine,
rotește-te 90 de grade                    │  de sus în jos
spune „Am ajuns!"                         ┘
```

Elemente de vocabular Scratch introduse acum: **scena**, **personajul (sprite)**, **blocurile** grupate
pe categorii colorate (Mișcare, Aspect, Sunet, Evenimente), **steagul verde** (pornirea programului).

**Ideea centrală a lecției:** *ordinea blocurilor schimbă rezultatul*. Același set de blocuri, în ordini
diferite, produce comportamente diferite — exact proprietatea de „ordine precisă" de la algoritmi, acum
văzută pe ecran.

::: tip De ce merge atât de bine în Scratch
Blocurile **nu pot fi îmbinate greșit sintactic** — nu există erori de tastare, doar efecte vizibile.
Elevul primește feedback **imediat** (personajul se mișcă sau nu cum voia), deci ciclul
încearcă–observă–corectează durează secunde. Aceasta este exact rațiunea pentru care programa cere medii
grafice la V–VI.
:::

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — „Ce va face pisica?"** *(conversație euristică — citire de program)*
Profesorul arată un script de 4–5 blocuri; elevii **prezic** ce se va întâmpla, apoi scriptul se
rulează și predicția se verifică. *De ce așa:* citirea programului **înaintea** scrierii lui formează
deprinderea de urmărire a execuției; verificarea imediată pe ecran validează sau corectează predicția
fără intervenția profesorului.

**Exercițiul 2 — „Puzzle-ul de blocuri"** *(învățare prin descoperire)*
Elevii primesc un script cu blocurile date **în dezordine** și un scurt filmuleț/demonstrație cu
comportamentul dorit; trebuie să reconstituie ordinea. *De ce așa:* este varianta digitală a „rețetei
amestecate" din prima lecție — aceeași idee, nivel nou de abstractizare; diferențiabil ușor (mai multe
blocuri = nivel avansat).

**Exercițiul 3 — „Schimbă ordinea!"** *(experiment dirijat / problematizare)*
Pornind de la un script corect, elevii mută un bloc (de exemplu „spune «Am ajuns!»" înaintea mișcării)
și observă diferența. Întrebarea-cheie: *„în ce situații ordinea nu contează?"* (două blocuri „spune"
consecutive vs. mișcare + rotire). *De ce așa:* problematizarea transformă regula „ordinea contează"
dintr-o afirmație a profesorului într-o **concluzie a elevilor**.

**Exercițiul 4 — „Felicitarea animată"** *(mini-proiect individual)*
Fiecare elev construiește o felicitare animată: personajul se mișcă, salută, își schimbă costumul —
minimum 5 blocuri în secvență. *De ce așa:* prima **producție proprie** completă; sarcină deschisă
(conținutul e la alegere), dar cu cerințe verificabile (numărul și tipul blocurilor) — echilibrul
corect între creativitate și evaluabilitate.

## 3. Particularități

- **Nevoia de efect imediat**: la 11 ani, motivația vine din „se întâmplă ceva pe ecran". Lecția e
  construită astfel încât **fiecare elev rulează ceva în primele 10 minute** — teoria se strecoară în
  jurul practicii, nu invers.
- **Greșeală tipică**: scripturi fără **blocul de eveniment** („când se dă click pe steagul verde") —
  programul „nu pornește" și elevul conchide că „nu merge calculatorul". Merită tratată explicit, ca
  primă lecție de **depanare**: „ce îi spune programului să înceapă?"
- **Blocuri paralele**: unii elevi pun blocurile în **două stive separate** și sunt surprinși că ambele
  rulează deodată. La această lecție se cere **o singură stivă** — execuția paralelă se amână elegant
  pentru proiectele din lecția 5.
- **Gestionarea laboratorului**: lucrul în perechi la un calculator funcționează bine (unul „navighează",
  celălalt „pilotează", apoi schimbă) — practică frecventă în școli și utilă când stațiile nu ajung.
- **Evaluare potrivită**: verificarea mini-proiectului pe 2–3 criterii anunțate dinainte (pornește la
  steag? are minimum 5 blocuri în ordine logică? face ce și-a propus autorul?) — o **grilă simplă**, nu
  notă „din ochi".

## Legături

- Teoria de examen: [Algoritmi — programarea structurată](/stiintific/01-algoritmi) (structura
  secvențială este prima dintre cele trei structuri fundamentale).
- Metodele folosite (descoperire, experiment, mini-proiect):
  [Strategii didactice](/metodica/02-strategii-didactice).
- Lecția anterioară: [Date, variabile, expresii](/lectii/v-02-date-variabile-expresii) ·
  Lecția următoare: [Structura alternativă](/lectii/v-04-structura-alternativa).

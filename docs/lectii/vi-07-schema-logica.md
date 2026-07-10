# Reprezentarea algoritmilor: schema logică

> **Clasa a VI-a · domeniul Algoritmi · modulele 4–5.** Prima reprezentare **formală** a algoritmilor:
> desenul standardizat al pașilor. Competențe specifice vizate: 2.2, 2.3.

## 1. Lecția (teorie)

Până acum algoritmii au trăit în blocuri Scratch. **Schema logică** îi desenează într-un limbaj
universal, cu **blocuri standard** legate prin săgeți:

| Bloc | Formă | Rol |
|---|---|---|
| START / STOP | oval | începutul și sfârșitul algoritmului |
| citire / scriere | paralelogram | date de intrare / rezultate |
| calcul (atribuire) | dreptunghi | prelucrări |
| decizie | romb | întrebare cu două ieșiri: **Da** / **Nu** |

**Exemplu construit la tablă** — paritatea unui număr:

```text
   (START)
      │
  /citește n/
      │
   ◇ restul lui n la 2 = 0 ? ◇
    Da │            │ Nu
/scrie „par"/  /scrie „impar"/
      └─────┬──────┘
          (STOP)
```

**Structurile în schemă:** secvența = blocuri în lanț; decizia = romb cu două ramuri care **se reunesc**;
repetiția = săgeată care se **întoarce** deasupra rombului (bucla se vede cu ochiul liber!).

Regulile de corectitudine: orice drum de la START ajunge la STOP; rombul are exact două ieșiri
etichetate; săgețile nu „plutesc".

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Din Scratch în schemă** *(transfer de reprezentare)*
Un script Scratch cunoscut (par/impar din clasa a V-a) se „traduce" împreună în schemă logică.
*De ce așa:* legarea noului formalism de ceva stăpânit reduce noutatea la strictul necesar — se schimbă
doar **haina**, algoritmul e același; acesta e chiar mesajul lecției.

**Exercițiul 2 — „Ce face schema?"** *(citire de schemă)*
Fișă cu o schemă necunoscută (cu repetiție) — elevii o execută pas cu pas pentru o valoare dată și spun
ce calculează. *De ce așa:* execuția manuală pe schemă e strămoșul „urmăririi programului" de la
bacalaureat; săgeata care se întoarce face bucla vizibilă fizic.

**Exercițiul 3 — Puzzle de blocuri** *(reconstrucție pe grupe)*
Blocurile unei scheme, decupate, se așază și se leagă corect (algoritmul: maximul a două numere).
*De ce așa:* manipularea fizică a blocurilor mută atenția pe **structură** (ce leagă ce), nu pe desen;
verificarea între grupe stârnește argumentare.

**Exercițiul 4 — Schema mea** *(producție individuală)*
Elevii desenează schema pentru „media a două note" sau „cel mai mic dintre două numere".
*De ce așa:* producția proprie cu blocuri standard verifică toate regulile de corectitudine; problemele
sunt deja cunoscute algoritmic, deci efortul stă doar în reprezentare.

## 3. Particularități

- **Desenul îngrijit nu e scopul:** elevii pierd minute pe ovale perfecte; se lucrează cu schițe rapide
  și se evaluează **structura**, nu caligrafia.
- **Greșeala tipică:** ramurile deciziei care nu se mai reunesc, sau romb cu o singură ieșire — regula
  „orice drum ajunge la STOP" se verifică cu degetul pe schemă.
- **De ce învățăm asta dacă avem Scratch?** — întrebare legitimă; răspunsul onest: schema e limbajul
  comun al tuturor programatorilor, independent de instrument, și pregătește pseudocodul (lecția
  următoare) și liceul.
- **Evaluare potrivită:** o citire de schemă + o construcție simplă; ambele apar, la alt nivel, în
  subiectele de definitivat și bacalaureat — aici se pun bazele.

## Legături

- Teoria de examen (reprezentarea algoritmilor): [Algoritmi](/stiintific/01-algoritmi).
- Lecția anterioară: [Structuri repetitive condiționate](/lectii/vi-06-repetitive-conditionate) ·
  Lecția următoare: [Pseudocodul — reguli de notare](/lectii/vi-08-pseudocod).

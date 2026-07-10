# Aplicații practice și interdisciplinare

> **Clasa a X-a · Informatică · finalul anului.** Algoritmii fundamentali puși la lucru pe probleme
> „din viață" — și bilanțul instrumentarului înaintea clasei a XI-a. Competențe specifice vizate:
> 3.1, plus conexiunile informatică–societate din programă.

## 1. Lecția (teorie)

**Problemele aplicative din programă** — contexte în care algoritmii anului devin utili:

| Context (din programă) | Algoritmii folosiți |
|---|---|
| situația școlară a unui elev / clasament | vectori, sortare, căutare, medii |
| balanța de cheltuieli, cont bancar | parcurgeri, sume condiționate, min/max |
| prelucrări statistice (serii de date) | frecvențe, medie, sortare pentru mediană |
| combinatorică simplă, mărimi fizice | formule + generări |

**Anatomia unei aplicații complete** (diferă de exercițiu!): date **realiste** citite din fișier →
validarea lor (note în [1,10]?) → mai multe prelucrări pe aceleași date → afișare **formatată**,
lizibilă. Se predă ca structură de proiect, nu ca problemă izolată.

**Bilanțul anului** — harta instrumentelor: structuri de control, vectori, matrice, fișiere + cei trei
fundamentali (căutare, sortare, interclasare). Întrebarea de tranziție spre clasa a XI-a: „ce facem
când datele nu sunt numere simple?" (răspunsul: struct, șiruri de caractere — anul viitor).

## 2. Exerciții (cu metodica aplicabilă)

**Proiectul central — „Catalogul clasei"** *(învățare bazată pe proiect, 2–3 ore)*
Din `note.in` (nume prin coduri numerice + note): media fiecărui elev, clasamentul (sortare!), căutarea
unui elev (binară, după sortare!), statistici (câți sub 5, media clasei). *De ce așa:* toți algoritmii
fundamentali, motivați **de aceeași** aplicație — exact definiția „aplicării algoritmilor fundamentali"
din programă; proiectul e piesa de rezistență a portofoliului.

**Exercițiul 2 — Validarea datelor** *(atelier de robustețe)*
Ce face programul dacă în fișier apare nota 11? sau −3? Se adaugă validarea cu mesaje. *De ce așa:*
diferența dintre programul de școală și aplicația reală este tratarea datelor invalide — gândire
inginerească accesibilă la finalul clasei a X-a.

**Exercițiul 3 — Statistica de buzunar** *(mini-investigație)*
Pe date reale colectate de elevi (timpul zilnic pe telefon, o săptămână): media, maximul, sortarea,
ziua „mediană". *De ce așa:* datele proprii angajează; interpretarea rezultatelor („ce spune mediana
față de medie?") leagă informatica de matematică și de educația media.

**Exercițiul 4 — Recapitulare prin construcție de subiect** *(inversarea rolurilor)*
Pe grupe: fiecare grupă compune o problemă de tip bacalaureat (enunț + date de test + barem schiță) pe
un algoritm al anului; grupele își rezolvă reciproc subiectele. *De ce așa:* a compune o problemă cere
mai multă înțelegere decât a o rezolva; baremul schițat de elevi le arată cum gândește evaluatorul —
metacogniție înaintea anilor de examene.

## 3. Particularități

- **Proiectul lung cere jaloane:** termene intermediare (citirea+media / sortarea / căutarea+statistici)
  cu verificare la fiecare — altfel totul se face în ultima seară.
- **Formatarea ieșirii** (aliniere, două zecimale) pare cosmetică dar educă empatia pentru utilizator —
  și e cerută explicit în multe enunțuri.
- **Momentul de bilanț contează metodic:** harta instrumentelor desenată **de elevi** (nu primită)
  arată fiecăruia ce stăpânește și ce nu — autoevaluare autentică înainte de vacanță.
- **Evaluare potrivită:** proiectul pe grilă anunțată (funcționalități × corectitudine × robustețe ×
  lizibilitate) + subiectul compus de grupă; nota de proiect se argumentează pe grilă.

## Legături

- Teoria de examen: [Algoritmi](/stiintific/01-algoritmi) și
  [Limbaje de programare](/stiintific/02-limbaje-programare).
- Evaluarea prin proiect: [Evaluarea randamentului](/metodica/03-evaluare-randament); învățarea bazată
  pe proiect: [Strategii didactice](/metodica/02-strategii-didactice).
- Lecția anterioară: [Prelucrări specifice matricelor](/lectii/x-09-prelucrari-matrice) ·
  Continuarea: [clasa a XI-a — structuri de date și metode de programare](/lectii/#clasa-a-xi-a).

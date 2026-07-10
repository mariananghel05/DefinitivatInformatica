# Proiecte Scratch cu structuri repetitive

> **Clasa a VI-a · domeniul Algoritmi · finalul modulului 5.** Sinteza anului: un joc sau o animație
> complexă care folosește **toate** structurile — secvențială, alternativă, repetitive. Competențe
> specifice vizate: 2.3, 3.1–3.2.

## 1. Lecția (teorie)

Recapitulare activă a instrumentarului complet, acum privit ca **trusă de construcție**:

| Structura | Blocul Scratch | La ce folosește într-un joc |
|---|---|---|
| secvențială | blocuri înlănțuite | scenariul de început (poziționare, decor) |
| alternativă | „dacă … atunci (… altfel)" | reacții: coliziuni, punctaj, răspunsuri |
| repetitivă cu contor | „repetă de n ori" | efecte cu număr fix (3 vieți, 5 obstacole) |
| repetitivă condiționată | „repetă până când …" / „la nesfârșit" | bucla principală a jocului |
| variabile | `scor`, `vieți`, `timp` | starea jocului |

**Arhitectura tipică a unui joc simplu** (se desenează la tablă înainte de implementare):
1. pregătirea scenei (secvențial);
2. **bucla principală** („la nesfârșit"): mișcă, verifică coliziuni (decizii), actualizează scorul;
3. condiția de final (scor atins / vieți epuizate) → mesajul de sfârșit.

Proiecte care funcționează la această clasă: **labirintul** (personajul condus prin săgeți, pereții
resetează poziția), **prinde obiectele** (scor + vieți), **quiz cu cronometru**.

## 2. Exerciții (cu metodica aplicabilă)

**Proiectul central — „Labirintul"** *(învățare bazată pe proiect, 2 ore)*
Etape impuse: scenariu scris → implementare de bază (mișcare + pereți) → extindere (scor, sunet, al
doilea nivel) → testare încrucișată. *De ce așa:* proiectul cu etape obligatorii echilibrează libertatea
cu rigoarea; „al doilea nivel" e diferențierea naturală pentru avansați.

**Activitatea 2 — Testarea încrucișată** *(interevaluare tehnică)*
Fiecare pereche testează jocul altei perechi cu o fișă: „se poate trece prin perete? ce se întâmplă la
margine? scorul crește corect?" *De ce așa:* testarea sistematică a produsului altcuiva e gândire de
calitate (QA în miniatură) și oferă autorilor feedback concret de reparat.

**Activitatea 3 — Prezentarea proiectelor** *(comunicare + reflecție)*
Fiecare echipă arată jocul și explică **un bloc de care e mândră** și **o problemă pe care a rezolvat-o**.
*De ce așa:* verbalizarea soluției consolidează învățarea; formatul „mândrie + problemă" normalizează
dificultățile ca parte a programării.

## 3. Particularități

- **Ultimul an de Scratch:** la a VII-a se trece la C++. Proiectul final merită încheiat festiv
  (expoziție de jocuri, invitați din alte clase) — și folosit ca argument: „tot ce ați construit aici
  se va putea scrie, mai puternic, în limbaj de programare".
- **Scenariul rămâne obligatoriu** — la proiecte complexe, echipele fără plan se pierd în detalii
  vizuale; scenariul predat înainte de implementare e condiția de start.
- **Gestionarea echipelor:** roluri rotative (pilot/navigator) și cerința ca **fiecare** membru să
  poată explica orice bloc — altfel lucrează unul singur.
- **Evaluare potrivită:** grilă anunțată (funcționalitate de bază / structuri folosite corect /
  extindere / prezentare) + observarea colaborării; jocul intră în **portofoliul** elevului, alături
  de proiectele din clasa a V-a.

## Legături

- Evaluarea prin proiect și portofoliu: [Evaluarea randamentului](/metodica/03-evaluare-randament).
- Structurile fundamentale — teoria de examen: [Algoritmi](/stiintific/01-algoritmi).
- Lecția anterioară: [E-mail și netichetă](/lectii/vi-09-email-neticheta) ·
  Continuarea: [clasa a VII-a — trecerea la C++](/lectii/#clasa-a-vii-a).

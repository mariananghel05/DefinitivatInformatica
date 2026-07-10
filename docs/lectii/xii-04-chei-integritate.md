# Chei primare și externe. Reguli de integritate

> **Clasa a XII-a · Informatică · modulul „Baze de date".** Tabelele se leagă între ele: cheia străină,
> integritatea referențială și ce ne apără ele. Competențe specifice vizate: 2.1, 3.1.

## 1. Lecția (teorie)

**Cheia primară (PK)** = câmpul (sau combinația) care identifică **unic** fiecare înregistrare —
identificatorul unic din modelul conceptual, acum cu forță de lege: nu se repetă, nu e vid (NULL).

**Cheia externă/străină (FK)** = câmpul care **referă** cheia primară a altui tabel — implementarea
fizică a **relației**:

```text
Elevi(id_elev PK, nume, clasa)
Imprumuturi(id_imprumut PK, id_elev FK → Elevi, id_carte FK → Carti, data)
```

Relația 1:N „se citește" în FK: cheia străină stă **pe partea „mulți"** (împrumutul își știe elevul).

**Integritatea referențială** = regula-pază: o FK trebuie să refere o valoare **existentă** (sau NULL).
Consecințele practice, discutate pe scenarii:
- nu poți adăuga un împrumut pentru elevul 999 (nu există);
- nu poți șterge un elev **care are împrumuturi** (rămân „orfane") — decât cu politici explicite
  (interzicere / ștergere în cascadă — menționate);
- **constrângerile** (`NOT NULL`, `UNIQUE`, `CHECK`) — reguli pe care SGBD-ul le **impune automat**:
  baza de date se apără singură de date invalide.

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Detectivul de chei** *(fișă pe scheme date)*
Pentru trei perechi de tabele legate: identificați PK-urile, FK-urile și sensul relației. *De ce așa:*
citirea schemei (cine referă pe cine) e competența de bază pentru orice interogare cu JOIN — se
antrenează înaintea SQL-ului.

**Exercițiul 2 — „Sabotează baza!"** *(experiment de integritate — SGBD real)*
Elevii **încearcă** să strice: împrumut cu elev inexistent, ștergerea unui elev cu împrumuturi, două
înregistrări cu același PK — și citesc refuzurile SGBD-ului. *De ce așa:* integritatea se înțelege
văzând-o **apărându-se**; mesajele de eroare devin aliați, nu mistere; formatul „încearcă să strici"
e irezistibil didactic.

**Exercițiul 3 — De la relație la FK** *(transfer de model)*
Relațiile din diagramele lecției 1 (1:N, M:N rezolvat) se traduc în PK/FK pe tabele. *De ce așa:*
închide complet lanțul model → tabele → legături; regula „FK pe partea mulți" se aplică de trei ori,
în contexte diferite.

## 3. Particularități

- **PK ≠ FK e distincția de examen:** itemul „care e cheia primară / care e cea externă?" apare
  constant; formularea-ancoră: PK = „cine sunt eu", FK = „la cine mă refer".
- **NULL** merită un minut: „necunoscut/lipsă", diferit de 0 și de text vid — prima întâlnire cu
  logica valorilor lipsă.
- **Ștergerea în cascadă** se menționează, nu se aprofundează — dar întrebarea „ce-ar trebui să se
  întâmple cu împrumuturile la ștergerea elevului?" e o excelentă discuție de proiectare.
- **Evaluare potrivită:** identificarea PK/FK pe schemă nouă + un item de integritate („se poate
  această operație? de ce nu?") + traducerea unei relații în chei.

## Legături

- Teoria de examen: [Baze de date — chei, constrângeri, integritate](/stiintific/06-baze-de-date).
- Lecția anterioară: [Tabele](/lectii/xii-03-tabele) ·
  Lecția următoare: [SQL — interogări (SELECT)](/lectii/xii-05-sql-select).

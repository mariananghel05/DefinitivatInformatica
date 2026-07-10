# Etapele rezolvării unei probleme. Algoritmul

> **Clasa a IX-a · Informatică.** Fundamentul întregului liceu: drumul disciplinat de la enunț la
> soluție și definiția riguroasă a algoritmului. Competențe specifice vizate: 2.1, 2.2.

## 1. Lecția (teorie)

**Etapele rezolvării unei probleme** — metoda de lucru a întregului an:

1. **analiza problemei**: ce se **dă** (date de intrare), ce se **cere** (date de ieșire), ce condiții
   leagă intrarea de ieșire;
2. **elaborarea algoritmului** (pseudocod / schemă logică);
3. **implementarea** într-un limbaj de programare;
4. **testarea și depanarea** (inclusiv cazuri-limită!);
5. întreținerea/îmbunătățirea (menționată).

**Algoritmul — definiția de liceu:** succesiune **finită** și **ordonată** de operații **bine
definite**, care pornește de la datele de intrare și produce, în timp finit, datele de ieșire, pentru
**orice** instanță a unei clase de probleme.

**Caracteristicile** (acum se cer riguros, cu contraexemple): **claritate** (fiecare pas neambiguu),
**finitudine** (se termină), **generalitate** (o clasă de probleme, nu un caz), plus **eficiența** ca
criteriu de comparație între algoritmi corecți.

**Exemplu integral pe etape** — „cel mai mare dintre trei numere": analiză (intrare: a, b, c; ieșire:
maximul) → algoritm în cuvinte → observația că *există mai mulți algoritmi corecți* (comparări în
cascadă vs. campion actualizat) → care e „mai bun"? (numărul de comparații — prima discuție de eficiență).

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Analiza înainte de orice** *(exercițiu de disciplină intelectuală)*
Pentru 4 enunțuri date, elevii completează **doar** tabelul intrare/ieșire/condiții — fără să rezolve.
*De ce așa:* săritul analizei e boala cronică a începătorilor („scriu cod și văd eu"); antrenarea
separată a analizei o instalează ca pas obligatoriu.

**Exercițiul 2 — „Algoritm sau nu?"** *(analiza definiției pe contraexemple)*
Cinci „rețete" date: una ambiguă („adaugă sare după gust"), una infinită, una pentru un singur caz —
care e algoritm și ce proprietate încalcă restul? *De ce așa:* definiția devine instrument de
**verificare**, nu text de memorat; contraexemplele fixează exact cele trei caracteristici.

**Exercițiul 3 — Doi algoritmi, aceeași problemă** *(comparație dirijată)*
Maximul din trei numere pe două căi (cascadă de decizii vs. campion); se numără comparațiile în cel
mai rău caz. *De ce așa:* ideea „corect nu înseamnă unic, și nu toate soluțiile sunt la fel de bune"
plantează gândirea de eficiență care va culmina în lecția de analiză a algoritmilor.

**Exercițiul 4 — Etapele pe o problemă reală** *(muncă pe grupe)*
„Media semestrială a unui elev": fiecare grupă parcurge etapele 1–2 și prezintă; implementarea rămâne
temă pentru lecțiile de limbaj. *De ce așa:* parcurgerea completă a etapelor pe o problemă mică face
metoda concretă; amânarea implementării subliniază că algoritmul **precede** codul.

## 3. Particularități

- **Elevii cu gimnaziu „bun" se plictisesc** la re-definirea algoritmului: rigoarea nouă (contraexemple,
  eficiență) e cârligul pentru ei — definiția o știau, **verificarea** ei e nouă.
- **Analiza problemei se punctează** la bacalaureat implicit (înțelegerea enunțului) — argument de
  motivare pentru pasul care pare birocratic.
- **Capcană de predare:** etapele predate ca listă de memorat; ele trebuie **aplicate** pe o problemă în
  aceeași oră, altfel rămân teorie moartă.
- **Evaluare potrivită:** un item „algoritm sau nu + justificarea proprietății încălcate" și o analiză
  de problemă (tabelul intrare/ieșire); ambele revin ca formate tot anul.

## Legături

- Teoria de examen: [Algoritmi — noțiune, caracteristici](/stiintific/01-algoritmi).
- Versiunea de gimnaziu a acelorași idei: [clasa a V-a — Algoritmul](/lectii/v-01-algoritmul).
- Lecția anterioară: [Informatica și societatea](/lectii/ix-01-informatica-societate) ·
  Lecția următoare: [Date și operații](/lectii/ix-03-date-operatii).

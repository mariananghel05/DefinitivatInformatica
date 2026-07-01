# STRUCTURA CONȚINUTULUI

Acest document descrie arhitectura de conținut a site-ului și **șablonul unic** folosit pentru
fiecare temă, astfel încât materialul să fie consecvent și ușor de parcurs.

---

## 1. Maparea programei pe site

| Secțiune programă | Modul pe site | Fișiere |
|---|---|---|
| A. Notă de prezentare | Despre examen | `docs/despre-examen.md` |
| B. Competențe ale cadrului didactic | Competențele cadrului | `docs/competente-cadru.md` |
| C. Tematică științifică (10 teme) | Tematică științifică | `docs/stiintific/01..10-*.md` |
| D. Bibliografie științifică | Bibliografie | `docs/bibliografie.md` |
| E. Tematică metodică (3 teme) | Metodica predării | `docs/metodica/01..03-*.md` |
| F. Bibliografie metodică | Bibliografie | `docs/bibliografie.md` |
| *Bonus* | Modele de subiecte | `docs/subiecte/varianta-1..3.md` |

## 2. Cele 10 teme științifice (ordinea din programă)
1. Algoritmi
2. Limbaje de programare (C++)
3. Metode de programare
4. Alocarea dinamică a memoriei
5. Teoria grafurilor
6. Baze de date
7. Arhitectura generală a sistemelor de calcul
8. Sisteme de operare
9. Aplicații și programe specializate
10. Rețele de calculatoare

## 3. Cele 3 teme de metodică
1. Proiectarea, organizarea și desfășurarea activității didactice
2. Strategii didactice în predare–învățare–evaluare
3. Evaluarea randamentului școlar

---

## 4. Șablonul unic per temă științifică

Fiecare temă din `docs/stiintific/` respectă aceeași structură, care acoperă cele **trei planuri**
cerute (teorie, competențe/didactică, metodică):

```markdown
# <Titlul temei>

> Sinteză scurtă a temei + la ce nivel se studiază (gimnaziu/liceu).

## 1. Teorie
- Concepte, definiții (terminologie românească corectă)
- Exemple de cod C++ în blocuri evidențiate
- Complexitate (notația O) unde e relevant
- ::: tip / ::: warning — observații, greșeli conceptuale frecvente

## 2. Competențe vizate
- Competențe specifice formate prin temă (raportate la programele școlare în vigoare)
- Legătura cu competențele cadrului didactic (Secțiunea B)

## 3. Abordare metodică
- Metode didactice potrivite temei
- Tip de lecție și momentele lecției
- Activități de învățare concrete
- Exemple de itemi de evaluare
- Erori tipice ale elevilor + remedii

## Recapitulare
- Puncte-cheie (bullet-uri) pentru fixare rapidă
```

## 5. Componente VitePress folosite în conținut
- **Containere de notă**: `::: tip`, `::: warning`, `::: info`, `::: details` (pentru rezolvări „pliabile").
- **Blocuri de cod** cu evidențiere C++ și titlu opțional.
- **Tabele** Markdown pentru clasificări (tipuri de itemi, complexități, comenzi SQL etc.).
- **Linkuri interne** între teme (ex. „Algoritmi de sortare" ↔ „Metode de programare").

## 6. Convenții de stil
- Limbă: **română**, cu diacritice și termeni de specialitate.
- Ton: didactic, clar, orientat spre examen.
- Cod: `C++` modern, compilabil (`-std=c++17`); Pascal menționat doar contextual.
- Fiecare pagină se încheie cu o secțiune **Recapitulare**.

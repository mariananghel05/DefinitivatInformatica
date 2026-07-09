# 8. Sisteme de operare

> Temă de TIC. Sistemul de operare este programul fundamental care administrează resursele
> calculatorului și oferă interfața dintre utilizator și hardware.

## 1. Teorie

### 8.1. Concepte de bază

Un **sistem de operare (SO)** este un set de programe care gestionează resursele hardware și software și
asigură execuția aplicațiilor. Exemple: **Windows**, **Linux**, **macOS**, **Android**, **iOS**.

**Tipuri de sisteme de operare** (criterii uzuale):
- după numărul de utilizatori: **monoutilizator** / **multiutilizator**;
- după numărul de sarcini: **monotasking** / **multitasking**;
- după interfață: cu **interfață grafică (GUI)** / **linie de comandă (CLI)**;
- specializate: pentru **dispozitive mobile**, **timp real**, **servere**.

### 8.2. Funcțiile sistemului de operare

| Funcție | Descriere |
|---|---|
| **Gestiunea proceselor** | planifică și execută programele (procese, fire de execuție) |
| **Gestiunea memoriei** | alocă/eliberează RAM, memorie virtuală |
| **Gestiunea fișierelor** | organizează datele pe suporturile de stocare |
| **Gestiunea perifericelor** | comunică cu dispozitivele prin drivere |
| **Interfața cu utilizatorul** | GUI / CLI |
| **Securitate** | conturi, parole, drepturi de acces |

**Cum reușește un singur procesor să ruleze „simultan" zeci de programe?** Un **proces** este un program
în execuție (cod + memorie + resurse alocate). Sistemul de operare comută procesele pe procesor la
intervale de ordinul milisecundelor (**planificare** / *time-sharing*), astfel încât fiecare pare să
ruleze continuu — acesta este multitasking-ul. Un proces trece prin stări: **în execuție** (deține CPU),
**gata de execuție** (așteaptă CPU) și **în așteptare** (blocat — de exemplu până sosesc date de la disc).

### 8.3. Programe și accesorii livrate cu SO

- editoare de text simple, calculator, vizualizatoare de imagini;
- **editoare grafice**, aplicații de **animație** și **modele 3D**, aplicații de **prelucrare audio-video**;
- utilitare de sistem (administrarea discului, monitorul de activitate).

### 8.4. Organizarea logică a datelor (sistemul de fișiere)

- **Fișier** — colecție de date identificată printr-un **nume** și o **extensie** (ex. `.txt`, `.cpp`, `.jpg`).
- **Folder/director** — container ierarhic de fișiere și alte foldere.
- **Cale (path)** — localizarea unui fișier în ierarhie (absolută/relativă).
- **Operații specifice:** creare, copiere, mutare, redenumire, ștergere, căutare.

```
C:\
└── Scoala\
    ├── Informatica\
    │   ├── tema1.cpp
    │   └── tema2.cpp
    └── TIC\
        └── prezentare.pptx
```

Pe structura de mai sus: calea **absolută** a fișierului `tema1.cpp` este
`C:\Scoala\Informatica\tema1.cpp` (pornește din rădăcină); dacă ne aflăm deja în folderul `Scoala`,
calea **relativă** este `Informatica\tema1.cpp`. La căutare se folosesc **metacaracterele**: `*` (orice
succesiune de caractere — `*.cpp` înseamnă toate sursele C++) și `?` (exact un caracter — `tema?.cpp`).
Structura de foldere este un **arbore cu rădăcină** — aceeași noțiune de la
[Alocarea dinamică](/stiintific/04-alocare-dinamica).

### 8.5. Arhivarea fișierelor

Programe de **comprimare/arhivare** (ZIP, RAR, 7z) reduc dimensiunea fișierelor și grupează mai multe
fișiere/foldere într-o singură arhivă (util la transfer și backup).

### 8.6. Securitatea datelor

- **Viruși informatici** și alte programe malițioase (viermi, troieni, ransomware).
- **Programe antivirus** — detectează, blochează și elimină amenințările.
- Bune practici: parole sigure, actualizări, **copii de siguranță (backup)**, atenție la atașamente.

### 8.7. Drepturi de autor și licențe software

| Tip de licență | Caracteristică |
|---|---|
| **Comercială (proprietară)** | plătită, drepturi restrânse de utilizare |
| **Freeware** | gratuită, dar fără acces la codul sursă |
| **Open source / liberă** | cod sursă disponibil, poate fi modificat/distribuit |
| **Shareware / trial** | gratuită temporar/limitat |

Respectarea **drepturilor de autor** și a **licențelor** este obligatorie și pentru conținuturile digitale
(texte, imagini, muzică, software).

## 2. Competențe vizate

- **explicarea rolului și funcțiilor** unui sistem de operare;
- **organizarea datelor** în fișiere și foldere (operații specifice);
- **utilizarea programelor de arhivare** și a măsurilor de **securitate**;
- **respectarea normelor** privind drepturile de autor și licențele software.

::: info Corelare cu programa școlară
- **Gimnaziu, cl. a V-a:** 1.2 (utilizarea componentelor software — rolul sistemului de operare,
  organizarea datelor pe suport extern, operații cu fișiere și directoare).
:::

## 3. Abordare metodică

**Metode:** demonstrarea la calculator, exercițiul, învățarea prin descoperire, conversația.

**Tip de lecție** (formare de deprinderi — „organizarea fișierelor"): elevii creează o structură de
foldere pentru proiectele lor, copiază/mută/redenumesc fișiere.

**Activități de învățare:** crearea unei ierarhii de foldere; arhivarea/dezarhivarea unui set de fișiere;
discuție de caz despre un atac informatic; clasificarea tipurilor de licențe pe exemple reale.

**Itemi de evaluare:**
- *obiectiv:* „Care licență permite accesul la codul sursă? a) freeware b) open source";
- *semiobiectiv:* „Numiți trei funcții ale sistemului de operare.";
- *subiectiv:* „Descrieți măsuri de protecție împotriva virușilor informatici."

::: warning Erori tipice
- confuzia **freeware** (gratuit, fără sursă) ↔ **open source** (cu sursă);
- confuzia **fișier** ↔ **folder**;
- ideea că antivirusul oferă protecție 100% (esențiale rămân **backup-ul** și prudența).
:::

## Conexiuni cu alte teme

- Fișierele citite/scrise din [C++](/stiintific/02-limbaje-programare) (`ifstream`/`ofstream`) sunt
  gestionate de sistemul de fișiere descris aici; SO alocă fiecărui proces memoria (stivă + heap) de la
  [Alocarea dinamică](/stiintific/04-alocare-dinamica).
- SO rulează pe hardware-ul de la [Arhitectura sistemelor](/stiintific/07-arhitectura-sistemelor) și
  comunică cu perifericele prin **drivere**.
- Securitatea datelor se completează cu bunele practici online de la
  [Rețele](/stiintific/10-retele-de-calculatoare) (HTTPS, prudență la descărcări); licențele software
  privesc și [aplicațiile specializate](/stiintific/09-aplicatii-specializate).

## Recapitulare

- SO = gestionează **procese, memorie, fișiere, periferice**, oferă interfața și securitatea.
- Sistemul de fișiere: **fișiere + foldere**, organizare ierarhică, operații specifice.
- **Securitate**: viruși, antivirus, parole, backup.
- **Licențe**: comercială, freeware, open source, shareware; respectarea **drepturilor de autor**.

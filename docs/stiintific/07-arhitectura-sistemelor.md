# 7. Arhitectura generală a sistemelor de calcul

> Temă de TIC (gimnaziu și liceu). Descrie componentele fizice ale calculatorului și interacțiunea
> dintre ele.

## 1. Teorie

### 7.1. Tipuri de sisteme de calcul

De la **supercalculatoare** și **servere**, la **calculatoare personale** (desktop, laptop),
**dispozitive mobile** (smartphone, tabletă) și **sisteme încorporate** (embedded). Toate respectă, în
esență, modelul **von Neumann**: o unitate centrală care prelucrează date, lucrând cu o **memorie** ce
stochează atât **programul**, cât și **datele**.

### 7.2. Componentele unui sistem de calcul

```
            ┌─────────────────────────────────────┐
            │      Unitatea Centrală (UC / CPU)    │
   Intrare  │  ┌──────────┐      ┌──────────────┐  │  Ieșire
  ────────► │  │   UCC    │◄────►│     UAL      │  │ ────────►
 (tastatură)│  │ (control)│      │ (aritm.-log.)│  │ (monitor)
            │  └──────────┘      └──────────────┘  │
            └───────────────┬─────────────────────┘
                            │ (magistrale: date, adrese, control)
                    ┌───────▼────────┐
                    │ Memoria internă │
                    └────────────────┘
```

- **Unitatea de comandă și control (UCC)** — coordonează execuția instrucțiunilor.
- **Unitatea aritmetico-logică (UAL/ALU)** — efectuează operații aritmetice și logice.
- **Regiștrii** — memorii foarte rapide, interne procesorului.
- **Magistralele (bus)** — căi de comunicație: **de date**, **de adrese**, **de control**.

**Ciclul de execuție a unei instrucțiuni** (*fetch – decode – execute*) — ce repetă procesorul la nesfârșit:

1. **aducerea** instrucțiunii din memorie (*fetch*), de la adresa indicată de contorul de program;
2. **decodificarea** ei (*decode*) — UCC stabilește ce operație se cere și cu ce operanzi;
3. **execuția** (*execute*) — UAL efectuează operația; rezultatul ajunge în regiștri sau în memorie;
4. se trece la instrucțiunea următoare și ciclul se reia.

Frecvența procesorului (de ex. 3 GHz = 3 miliarde de cicluri pe secundă) dă ritmul acestor pași — de aici
vine estimarea „~10⁸ operații simple pe secundă" folosită la analiza complexității
([Algoritmi](/stiintific/01-algoritmi)).

### 7.3. Memoria

| Tip | Caracteristică |
|---|---|
| **Memorie internă (RAM)** | volatilă, acces rapid, conține programele în execuție |
| **Memorie ROM** | nevolatilă, conține firmware (ex. BIOS/UEFI) |
| **Memorie cache** | foarte rapidă, între CPU și RAM |
| **Memorie externă** | nevolatilă, capacitate mare: HDD, **SSD**, stick USB, DVD |

Ierarhia memoriei (de la rapid/scump/mic la lent/ieftin/mare): **regiștri → cache → RAM → memorie externă**.

**Unități de măsură a informației** (cerute frecvent la itemii obiectivi):

| Unitate | Echivalență |
|---|---|
| 1 **bit** (b) | cea mai mică unitate de informație: 0 sau 1 |
| 1 **octet / byte** (B) | 8 biți — memorează, de exemplu, un caracter |
| 1 **KB → MB → GB → TB** | fiecare treaptă = 1024 × precedenta (2¹⁰) |

*Exemplu de calcul:* un fișier de 4 MB = 4 × 1024 × 1024 = 4 194 304 octeți. În memorie totul este
**binar**: numărul 13 se reține ca `1101₂`, iar un `int` ocupă 4 octeți = 32 de biți — de aceea limita
lui este 2³¹ − 1 (vezi [Limbaje de programare](/stiintific/02-limbaje-programare)).

### 7.4. Dispozitive periferice

- **De intrare:** tastatură, mouse, scanner, microfon, cameră web.
- **De ieșire:** monitor, imprimantă, boxe, videoproiector.
- **De intrare/ieșire (mixte):** touchscreen, modem, placă de rețea, unități de stocare externe.

### 7.5. Ergonomie și sănătate

Organizarea **ergonomică** a postului de lucru: poziția corectă a monitorului (la nivelul ochilor),
scaun reglabil, iluminat adecvat, pauze regulate. **Măsuri de siguranță**: protecția la supratensiune,
evitarea suprasolicitării vizuale, cabluri organizate.

## 2. Competențe vizate

- **identificarea componentelor** unui sistem de calcul și a rolului lor;
- **explicarea interacțiunii** dintre CPU, memorie și periferice (modelul von Neumann);
- **compararea tipurilor de memorie** și înțelegerea ierarhiei lor;
- **aplicarea normelor de ergonomie și securitate** la utilizarea echipamentelor.

::: info Corelare cu programa școlară
- **Gimnaziu, cl. a V-a:** 1.1 (utilizarea eficientă și în siguranță a componentelor hardware).
- **Liceu (TIC):** *Identificarea componentelor hard și soft ale unui calculator personal* (comp. 1.1 —
  vezi secvența B din [Varianta 1 / 2024](/subiecte/varianta-1)).
:::

## 3. Abordare metodică

**Metode:** demonstrarea (cu componente reale sau imagini/animații), observarea, conversația euristică,
**învățarea prin descoperire** (dezasamblarea virtuală a unui PC).

**Tip de lecție** (predare — „componentele calculatorului"): se pornește de la întrebarea „ce se întâmplă
când apăsăm o tastă?" și se urmărește traseul datelor intrare → CPU → memorie → ieșire.

**Activități de învățare:** etichetarea componentelor pe o schemă; compararea HDD vs. SSD; realizarea
unei liste de reguli ergonomice pentru laboratorul de informatică.

**Itemi de evaluare:**
- *obiectiv:* „Care memorie este volatilă? a) ROM b) RAM";
- *semiobiectiv:* „Numiți cele trei magistrale ale unui sistem de calcul.";
- *subiectiv:* „Descrieți ierarhia memoriei și justificați ordinea după viteză."

::: warning Erori tipice
- confuzia **memorie (RAM)** ↔ **stocare (HDD/SSD)**;
- ideea că RAM-ul păstrează datele după oprire (este **volatilă**);
- confuzia **periferice de intrare** ↔ **de ieșire**.
:::

## Conexiuni cu alte teme

- **Stiva și heap-ul** de la [Alocarea dinamică](/stiintific/04-alocare-dinamica) sunt zone din RAM-ul
  descris aici, iar dimensiunile tipurilor din [C++](/stiintific/02-limbaje-programare) (int = 4 octeți)
  decurg din organizarea memoriei.
- [Sistemul de operare](/stiintific/08-sisteme-de-operare) este stratul software care administrează
  acest hardware: procese pe CPU, memorie, periferice prin drivere.
- Placa de rețea și modemul sunt periferice de intrare/ieșire — puntea spre
  [Rețele de calculatoare](/stiintific/10-retele-de-calculatoare).
- Ierarhia de memorie (cache mic și rapid ↔ RAM mare și mai lent) explică de ce numărul de operații —
  [complexitatea](/stiintific/01-algoritmi) — se traduce în timp real de execuție.

## Recapitulare

- Model **von Neumann**: CPU (UCC + UAL) + memorie + periferice, legate prin **magistrale**.
- Memorie: **RAM** (volatilă), **ROM** (nevolatilă), **cache**, **externă**; ierarhie după viteză.
- Periferice: **intrare**, **ieșire**, **mixte**.
- **Ergonomia** și **securitatea** postului de lucru sunt parte din programă.

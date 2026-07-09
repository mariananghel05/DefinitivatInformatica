# 10. Rețele de calculatoare

> Temă de TIC. Acoperă conceptele de rețea, funcționarea Internetului și elemente de creare a paginilor
> web (HTML).

## 1. Teorie

### 10.1. Concepte de bază

O **rețea de calculatoare** este un ansamblu de dispozitive interconectate care **comunică** și
**partajează resurse** (fișiere, imprimante, conexiune la Internet).

**Tipuri de rețele după arie:**

| Tip | Acoperire | Exemplu |
|---|---|---|
| **PAN** | personală (câțiva metri) | Bluetooth |
| **LAN** | locală (clădire) | rețeaua unui laborator |
| **MAN** | metropolitană (oraș) | rețea municipală |
| **WAN** | extinsă (țări/global) | **Internetul** |

**Funcții ale rețelelor:** partajarea resurselor, comunicare, acces la informație, lucru colaborativ.

### 10.2. Protocoale de rețea

Un **protocol** este un set de reguli pentru comunicarea în rețea. Familia fundamentală a Internetului
este **TCP/IP**.

| Protocol | Rol |
|---|---|
| **TCP/IP** | transportul și adresarea pachetelor |
| **HTTP / HTTPS** | transferul paginilor web (HTTPS = securizat) |
| **FTP** | transferul fișierelor |
| **SMTP / POP3 / IMAP** | trimiterea / primirea e-mailului |
| **DNS** | traduce nume de domeniu ↔ adresă IP |

### 10.3. Rețeaua Internet

- **Acces:** prin furnizor de servicii (ISP), cablu/fibră/mobil/Wi-Fi.
- **Adresare:** fiecare dispozitiv are o **adresă IP**; site-urile au **nume de domeniu** (ex. `edu.ro`),
  traduse de **DNS**.
- **URL** — adresa unei resurse web (ex. `https://www.edu.ro/index.html`).

**Servicii oferite de Internet:**
- **WWW** (World Wide Web) — pagini web legate prin hyperlink-uri;
- **e-mail** — poșta electronică;
- **transfer de fișiere** (FTP), **stocare în cloud**;
- **aplicații colaborative** — documente partajate, platforme de **e-learning**, videoconferință.

**Ce se întâmplă când tastezi `https://www.edu.ro` în browser?** — traseul complet, pas cu pas:

1. browserul întreabă serverul **DNS**: „ce adresă IP are `www.edu.ro`?" și primește adresa numerică;
2. se deschide o **conexiune TCP** cu serverul de la acea adresă (criptată **TLS**, fiindcă e HTTPS);
3. browserul trimite o **cerere HTTP** (`GET /index.html`);
4. serverul răspunde cu documentul **HTML**, apoi browserul cere și resursele legate (CSS, imagini);
5. browserul **construiește pagina** din structura HTML și o afișează.

Modelul este **client–server**: clientul (browserul) cere, serverul răspunde. Fiecare dispozitiv este
identificat printr-o **adresă IP** (IPv4: patru numere între 0 și 255, de ex. `192.168.1.10`; IPv6
extinde masiv spațiul de adrese).

### 10.4. Limbajul HTML și editarea paginilor web

**HTML** (HyperText Markup Language) descrie **structura** unei pagini web prin **etichete (taguri)**.

```html
<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <title>Prima mea pagină</title>
</head>
<body>
    <h1>Titlu principal</h1>
    <p>Un paragraf cu un <a href="https://edu.ro">link</a>.</p>
    <ul>
        <li>element listă 1</li>
        <li>element listă 2</li>
    </ul>
    <img src="poza.jpg" alt="descriere imagine">
</body>
</html>
```

| Etichetă | Rol |
|---|---|
| `<h1>`–`<h6>` | titluri (niveluri) |
| `<p>` | paragraf |
| `<a href="...">` | hyperlink |
| `<img src="..." alt="...">` | imagine |
| `<ul>` / `<ol>` / `<li>` | liste neordonate / ordonate / element |
| `<table>`, `<tr>`, `<td>` | tabel, rând, celulă |

> **HTML** definește **structura**, **CSS** definește **aspectul** (stilul), iar **JavaScript** adaugă
> **interactivitate**. La gimnaziu/liceu se introduce de regulă HTML de bază (eventual cu CSS simplu).

::: tip Documentul HTML este un arbore
Etichetele imbricate formează o ierarhie: `<html>` conține `<head>` și `<body>`, care conțin la rândul
lor alte elemente — exact structura de **arbore cu rădăcină** de la
[Alocarea dinamică](/stiintific/04-alocare-dinamica). De aceea o etichetă trebuie închisă **înăuntrul**
părintelui ei: `<p><b>text</b></p>` este corect, `<p><b>text</p></b>` nu.
:::

## 2. Competențe vizate

- **explicarea conceptelor de rețea** (tipuri, funcții, protocoale);
- **utilizarea serviciilor Internet** (web, e-mail, aplicații colaborative) responsabil și sigur;
- **înțelegerea adresării** (IP, domeniu, DNS, URL);
- **crearea de pagini web simple** în HTML.

::: info Corelare cu programa școlară
- **Gimnaziu:** cl. V — 1.3 (Internetul ca sursă de documentare); cl. VI — 1.3 (comunicare prin Internet);
  cl. VIII — 1.2 + 3.2 (realizarea/actualizarea de **pagini web** — HTML).
:::

## 3. Abordare metodică

**Metode:** demonstrarea, învățarea prin descoperire, **învățarea bazată pe proiect** (un mini-site),
exercițiul, conversația.

**Tip de lecție** (formare de deprinderi — „prima pagină HTML"): elevii scriu un document HTML minimal și
îl deschid în browser, observând legătura cod ↔ rezultat.

**Activități de învățare:** identificarea tipurilor de rețea din viața reală; „traseul" unui pachet de la
browser la server; construirea unei pagini web personale cu titlu, paragraf, listă, imagine și link.

**Itemi de evaluare:**
- *obiectiv:* „Ce protocol traduce numele de domeniu în adresă IP? (DNS)";
- *semiobiectiv:* „Ce etichetă HTML creează un hyperlink?";
- *subiectiv (practic):* „Creați o pagină HTML cu un titlu, un paragraf și o listă cu trei elemente."

::: warning Erori tipice
- etichete **neînchise** sau imbricate greșit în HTML;
- confuzia rolurilor **HTML** (structură) ↔ **CSS** (aspect);
- confuzia **LAN** ↔ **WAN**;
- ideea că „Internet" = „web" (web-ul este **doar un serviciu** al Internetului).
:::

## Conexiuni cu alte teme

- O rețea **este un graf**: dispozitive = noduri, legături = muchii; alegerea traseului unui pachet este
  o problemă de **drum de cost minim** (Dijkstra) — vezi
  [Teoria grafurilor](/stiintific/05-teoria-grafurilor).
- Numele de domenii formează o ierarhie (rădăcină → `.ro` → `edu.ro`) — un **arbore**; pagina HTML,
  la fel ([Alocarea dinamică](/stiintific/04-alocare-dinamica)).
- Placa de rețea și modemul sunt periferice de la
  [Arhitectura sistemelor](/stiintific/07-arhitectura-sistemelor), gestionate prin drivere de
  [sistemul de operare](/stiintific/08-sisteme-de-operare).
- Platformele de e-learning și documentele colaborative de la
  [Aplicații specializate](/stiintific/09-aplicatii-specializate) sunt servicii web — folosirea lor la
  clasă este tratată la [Strategii didactice](/metodica/02-strategii-didactice).

## Recapitulare

- Rețea = dispozitive interconectate; tipuri **PAN/LAN/MAN/WAN**; Internetul este un **WAN** global.
- Comunicarea se bazează pe **protocoale** (TCP/IP, HTTP/HTTPS, DNS, SMTP...).
- Internetul oferă **WWW, e-mail, transfer de fișiere, aplicații colaborative**.
- **HTML** descrie structura paginilor web prin **etichete**; CSS = aspect, JavaScript = interactivitate.

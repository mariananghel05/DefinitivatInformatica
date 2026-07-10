# Elemente de arhitectură a unui sistem de calcul

> **Clasa a V-a · domeniul TIC · modulele 1–2.** „Ce e înăuntrul calculatorului și cine ce face" —
> predat prin analogii, nu prin specificații tehnice. Competențe specifice vizate: 1.1.

## 1. Lecția (teorie)

**Schema generală** — se construiește la tablă pornind de la concluzia lecției anterioare:

```text
   INTRARE            PRELUCRARE                IEȘIRE
 (tastatură,   →   procesor + memorie de   →  (monitor,
  mouse …)          lucru + stocare             boxe …)
```

**Componentele principale și rolul lor** — cu analogia „bucătăriei" (care funcționează excelent la
această vârstă):

| Componentă | Rol | Analogia |
|---|---|---|
| **procesorul (CPU)** | execută instrucțiunile, face calculele | bucătarul |
| **memoria de lucru (RAM)** | ține datele **în timpul** lucrului; se golește la oprire | masa de lucru (blatul) |
| **stocarea (hard disk / SSD)** | păstrează fișierele **și după oprire** | dulapul cu rafturi |
| **placa de bază** | leagă toate componentele între ele | bucătăria însăși, cu instalațiile ei |
| **sursa de alimentare** | dă energie componentelor | — |

Consecința practică pe care elevii o pot verifica: un document **nesalvat** stă „pe masă" (RAM) —
dacă se ia curentul, dispare; **salvarea** îl pune „în dulap" (stocare).

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Unitatea centrală deschisă** *(demonstrare + observare)*
Profesorul deschide o unitate centrală veche (sau folosește o schemă mare/animație) și elevii identifică
componentele pe rând. *De ce așa:* la 11 ani, „a vedea și a atinge" bate orice planșă; o carcasă veche
de sacrificiu este un mijloc didactic de neînlocuit în laborator.

**Exercițiul 2 — „Povestea unei apăsări de tastă"** *(dramatizare în lanț)*
Cinci elevi joacă: tastatura → placa de bază → procesorul → memoria → monitorul; o „literă" (bilețel)
circulă prin lanț când cineva „tastează". *De ce așa:* traseul datelor devine acțiune fizică; aceeași
poveste, formalizată, este ciclul de prelucrare studiat la liceu — aici doar se plantează intuiția.

**Exercițiul 3 — „Masa sau dulapul?"** *(exercițiu de consolidare)*
Situații pe fișă: „scrii o compunere și nu ai salvat", „ai salvat poza din excursie", „s-a luat curentul
în timpul jocului" — elevii spun unde erau datele (RAM sau stocare) și ce se întâmplă cu ele.
*De ce așa:* fixează exact distincția pe care o vor greși ani de zile dacă nu e prinsă acum; situațiile
sunt din viața lor reală.

**Exercițiul 4 — Analogia mea** *(activitate de creativitate)*
Elevii propun propria analogie pentru calculator (o școală? un restaurant? un șantier?) și distribuie
rolurile componentelor. *De ce așa:* construirea unei analogii proprii dovedește înțelegerea reală a
rolurilor, nu memorarea analogiei profesorului.

## 3. Particularități

- **Confuzia fundamentală a vârstei (și nu numai): memorie ≠ stocare.** Mulți adulți spun „am 500 GB
  de memorie". Analogia masă/dulap + exercițiul 3 previn această confuzie mai eficient decât orice
  definiție; merită insistat.
- **Fără specificații tehnice:** GHz, numărul de nuclee, DDR — nu au ce căuta la a V-a; dacă elevii
  întreabă (unii sunt pasionați), răspunsul scurt și întoarcerea la roluri.
- **Componentele nu se memorează ca listă**, ci se leagă de rol — itemii de evaluare cer mereu
  „componenta care face X", nu enumerări.
- **Evaluare potrivită:** fișă de asociere componentă ↔ rol ↔ analogie; itemul-cheie rămâne
  „masa sau dulapul?".

## Legături

- Tema de examen, cu modelul von Neumann complet: [Arhitectura sistemelor](/stiintific/07-arhitectura-sistemelor).
- Distincția RAM/stocare revine la [Sisteme de operare](/stiintific/08-sisteme-de-operare) și, mult mai
  târziu, la stivă/heap în [Alocarea dinamică](/stiintific/04-alocare-dinamica).
- Lecția anterioară: [Tipuri de sisteme de calcul](/lectii/v-07-tipuri-sisteme-calcul) ·
  Lecția următoare: [Dispozitive și unități de măsură](/lectii/v-09-dispozitive-unitati-masura).

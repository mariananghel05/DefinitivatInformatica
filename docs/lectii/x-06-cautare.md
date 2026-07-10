# Căutarea secvențială și căutarea binară

> **Clasa a X-a · Informatică.** Primul algoritm fundamental pe tablouri — și prima mare lecție de
> eficiență: liniar vs. logaritmic. Competențe specifice vizate: 3.1.

## 1. Lecția (teorie)

**Căutarea secvențială** — pe orice vector: parcurge de la stânga la dreapta; găsit → poziția,
altfel → −1. Cost: până la **n** comparații.

**Căutarea binară** — DOAR pe vector **sortat**: compară cu mijlocul, elimină jumătatea imposibilă,
repetă pe jumătatea rămasă.

```cpp
int cautareBinara(int v[], int n, int x) {
    int st = 0, dr = n - 1;
    while (st <= dr) {
        int m = (st + dr) / 2;
        if (v[m] == x) return m;
        if (v[m] < x) st = m + 1;     // x poate fi doar în dreapta
        else          dr = m - 1;     // x poate fi doar în stânga
    }
    return -1;
}
```

**Compararea costurilor** — argumentul care vinde algoritmul: pe 1 000 000 de elemente, secvențial
= până la 1 000 000 de pași; binar = **20** (log₂). Jocul „ghicește numărul" din gimnaziu era chiar
căutarea binară — cercul se închide.

**Condiția esențială:** binară **numai pe date sortate** — pe date nesortate dă rezultate greșite fără
niciun avertisment.

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Dicționarul fizic** *(analogie activă)*
Un elev caută un cuvânt în dicționar și **verbalizează** strategia (deschid la mijloc, aleg jumătatea…).
*De ce așa:* toți folosesc deja căutarea binară fără să știe; conștientizarea strategiei proprii e cea
mai naturală introducere.

**Exercițiul 2 — Tabelul st/dr/m** *(urmărire de execuție — formatul de examen)*
Căutarea lui 21 în vectorul sortat dat, cu tabelul complet (`st`, `dr`, `m`, `v[m]`, decizia); apoi
căutarea unei valori **inexistente** (cum se oprește?). *De ce așa:* tabelul e itemul standard;
cazul „negăsit" (st depășește dr) e jumătatea uitată a înțelegerii.

**Exercițiul 3 — Sabotajul** *(experiment cu contraexemplu)*
Căutarea binară rulată pe un vector **nesortat** — găsește uneori, ratează alteori valori existente.
*De ce așa:* precondiția „sortat" trebuie văzută eșuând; „merge uneori" e mai periculos decât „nu merge
deloc" — lecție de precondiții valabilă toată cariera.

**Exercițiul 4 — Numărul de pași** *(exercițiu de eficiență)*
Câte comparații face binara, în cel mai rău caz, pe 100 / 1000 / 10⁶ elemente? (puterile lui 2!).
*De ce așa:* logaritmul se calculează „pe degete" (de câte ori înjumătățesc până la 1) — intuiția
logaritmică fără formalism; itemul apare la examene exact în această formă.

## 3. Particularități

- **`(st + dr) / 2`** poate depăși la valori mari — varianta `st + (dr - st) / 2` se menționează ca
  practică profesională (la nivel de barem școlar, ambele acceptate).
- **Buclele infinite din binară** (`st = m` în loc de `m + 1`) sunt eroarea tipică la implementare —
  regula: mijlocul verificat **se exclude** din intervalul următor.
- **„De ce nu sortăm mereu și căutăm binar?"** — întrebare bună de elev: sortarea costă mai mult decât
  o căutare secvențială; merită pentru căutări **repetate**. Discuția anticipează lecția de sortare.
- **Evaluare potrivită:** tabelul st/dr/m (găsit + negăsit) + numărul de pași + itemul-capcană „se
  poate aplica binara pe acest vector?" (verificarea precondiției).

## Legături

- Teoria de examen, cu exemplul pas cu pas: [Algoritmi — căutare](/stiintific/01-algoritmi);
  căutarea binară ca divide et impera: [Metode de programare](/stiintific/03-metode-programare).
- Proiectul de lecție complet pe această temă: [Proiectarea didactică](/metodica/01-proiectare-didactica).
- Lecția anterioară: [Fișiere text](/lectii/x-05-fisiere-text) ·
  Lecția următoare: [Metode de sortare](/lectii/x-07-sortare).

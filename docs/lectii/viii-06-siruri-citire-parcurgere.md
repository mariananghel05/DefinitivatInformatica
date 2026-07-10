# Șiruri de valori — citire și parcurgere

> **Clasa a VIII-a · domeniul Algoritmi · modulele 3–4.** Începe tema algoritmică a anului: prelucrarea
> unui **șir de valori citite pe rând** — fără tablouri! Particularitatea definitorie a programării de
> gimnaziu. Competențe specifice vizate: 2.1, 2.2.

## 1. Lecția (teorie)

**Șirul de valori** = o succesiune de numere care **sosesc pe rând** (de la tastatură). Ideea-cheie,
care organizează toată clasa a VIII-a:

> Nu păstrăm toate valorile! Fiecare valoare se citește, se **folosește pe loc**, apoi se pierde —
> ca apa care trece prin sită: reținem doar ce ne interesează (o sumă, un contor, un maxim).

**Tiparul fundamental de parcurgere** — cu numărul de valori cunoscut:

```cpp
int n;
cin >> n;                      // câte valori urmează
for (int i = 1; i <= n; i++) {
    int x;
    cin >> x;                  // citim valoarea curentă...
    // ... o prelucrăm AICI, cât timp o avem
}
```

Varianta cu **santinelă** (citim până la o valoare-semnal, de ex. 0): `while (cin >> x && x != 0)` —
sau forma școlară: citește, apoi `while (x != 0) { prelucrează; citește următorul; }`.

**Prima prelucrare — afișarea cu procesare minimă:** afișează doar valorile pare din șir (citește +
decizie + afișare, în interiorul buclei).

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — „Sita de numere"** *(joc didactic + analogie)*
Profesorul dictează 8 numere; elevii nu au voie să le noteze — doar să răspundă la final „câte au fost
pare?". Cum au reușit fără să le rețină? (numărând din mers!) *De ce așa:* experiența „nu pot ține minte
tot, dar pot număra din mers" **este** conceptul lecției, trăit înainte de a fi programat.

**Exercițiul 2 — Tiparul tastat împreună** *(exercițiu dirijat)*
Programul care citește n valori și le afișează pe cele pare, construit pas cu pas. *De ce așa:* tiparul
citește-în-buclă + prelucrează-pe-loc e scheletul tuturor lecțiilor următoare — se fixează dirijat,
fără variații, prima dată.

**Exercițiul 3 — Variații pe tipar** *(exercițiu gradat individual)*
1) afișează valorile mai mari decât 10; 2) afișează dublul fiecărei valori; 3) afișează valorile
divizibile cu 5 dintre cele n citite. *De ce așa:* aceeași schemă, altă condiție/prelucrare — elevii
descoperă că **tiparul rămâne**, se schimbă doar miezul.

**Exercițiul 4 — „De ce nu putem afișa în ordine inversă?"** *(problematizare-limită)*
Se cere afișarea șirului în ordinea inversă citirii — elevii încearcă și eșuează (valorile s-au
pierdut!). *De ce așa:* limita modelului „fără memorare" trebuie **simțită**: unele probleme chiar cer
păstrarea valorilor — acelea așteaptă vectorii, la liceu. Onestitatea despre limite motivează
continuarea.

## 3. Particularități

- **De ce fără tablouri?** Programa de gimnaziu le exclude deliberat: prelucrarea „pe flux" formează
  gândirea algoritmică fără povara indexării; profesorul care „sare" la vectori încarcă inutil și
  intră în conflict cu evaluările clasei.
- **Greșeala tipică #1:** declararea lui `x` și citirea lui **în afara** buclei — programul prelucrează
  aceeași valoare de n ori; tabelul de execuție o demască.
- **Confuzia n ↔ x:** „numărul de valori" vs. „valoarea curentă" — numele sugestive și fraza „n spune
  câte, x spune ce" ajută.
- **Evaluare potrivită:** o urmărire de execuție (șir dat → ce se afișează) + un program pe tipar cu
  altă condiție; ambele verifică poziția citirii în buclă.

## Legături

- Teoria de examen (prelucrarea secvențelor): [Algoritmi](/stiintific/01-algoritmi).
- Continuarea cu memorare (tablourile) vine la [clasa a X-a](/lectii/#clasa-a-x-a).
- Lecția anterioară: [Formatare și legături HTML](/lectii/viii-05-html-formatare-legaturi) ·
  Lecția următoare: [Numărare, sumă, produs](/lectii/viii-07-numarare-suma-produs).

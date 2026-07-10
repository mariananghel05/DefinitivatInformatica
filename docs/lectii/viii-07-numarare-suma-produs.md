# Algoritmi de numărare, sumă și produs

> **Clasa a VIII-a · domeniul Algoritmi · modulul 4.** Primele „unelte" clasice pe șiruri de valori:
> contorul și acumulatorul. Competențe specifice vizate: 2.1, 2.2.

## 1. Lecția (teorie)

Cele două personaje ale lecției, numite explicit:

- **contorul** — variabila care **numără**: pornește de la `0`, crește cu `1` la fiecare valoare care
  ne interesează (`contor++`);
- **acumulatorul** — variabila care **strânge**: pornește de la `0` pentru sumă (`suma += x`) și de la
  `1` pentru produs (`produs *= x`).

**Exemplul central** — dintr-un șir de n valori, câte sunt pare și ce sumă au:

```cpp
int n, contorPare = 0, sumaPare = 0;
cin >> n;
for (int i = 1; i <= n; i++) {
    int x;
    cin >> x;
    if (x % 2 == 0) {          // valoarea curentă ne interesează?
        contorPare++;          // o numărăm
        sumaPare += x;         // o adunăm
    }
}
cout << contorPare << " " << sumaPare;
```

**Regula de aur a inițializării:** contorul și suma pornesc de la **0**, produsul de la **1** — și toate
se inițializează **înainte** de buclă. De ce produsul de la 1? (0 ar „înghiți" totul — se demonstrează.)

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Contorul uman** *(joc didactic)*
Profesorul dictează numere; un elev ține „contorul parelor" pe degete, altul „suma" pe hârtie — apoi
clasa scrie programul care face același lucru. *De ce așa:* rolurile fizice separă limpede contorul de
acumulator **înainte** de cod; programul devine „ce am făcut noi, scris pentru calculator".

**Exercițiul 2 — „De ce dă 0?"** *(depanare țintită)*
Un program cu `produs` inițializat cu 0 și unul cu `suma` inițializată în interiorul buclei — elevii
explică rezultatele greșite. *De ce așa:* cele două erori de inițializare sunt **cele mai frecvente**
ale temei; întâlnite controlat, devin reflexe de verificare.

**Exercițiul 3 — Media notelor** *(exercițiu aplicativ)*
Se citesc note până la 0 (santinelă); se afișează media lor. Necesită sumă + contor + împărțire cu
zecimale la final. *De ce așa:* combină ambele personaje și capcana împărțirii întregi (clasa a VII-a);
santinela variază tiparul — nu tot ce numărăm are „n" anunțat.

**Exercițiul 4 — Serie scurtă de consolidare** *(muncă independentă diferențiată)*
1) suma valorilor impare; 2) câte valori sunt divizibile cu 3; 3) produsul valorilor pozitive (atenție
la inițializare!); avansații: numără valorile care au **exact două cifre**. *De ce așa:* variații
gradate pe tipar; ultima cere combinarea cu condiții compuse (`x >= 10 && x <= 99`).

## 3. Particularități

- **Inițializarea uitată** este eroarea temei: variabila neinițializată în C++ conține „gunoi" —
  programul dă alt rezultat la fiecare rulare, ceea ce derutează profund; merită arătat o dată acest
  comportament straniu ca motivare a regulii.
- **`+=` se introduce natural** aici (prescurtarea lui `suma = suma + x`) — dar forma lungă rămâne
  acceptată; important e sensul.
- **Media = capcană dublă:** împărțire întreagă + împărțirea la 0 când nu s-a citit nimic (santinelă
  imediată) — al doilea caz se discută ca „program care trebuie să nu crape".
- **Evaluare potrivită:** urmărire de execuție cu tabel (`contor`, `suma` la fiecare pas) + o problemă
  pe tipar; itemul de inițializare (produsul de la 1) apare obligatoriu.

## Legături

- Teoria de examen: [Algoritmi — prelucrarea secvențelor](/stiintific/01-algoritmi).
- Aceleași prelucrări, în Excel (SUM, COUNT): [clasa a VIII-a — funcții](/lectii/viii-02-excel-functii-sortare) —
  corelare intradisciplinară de menționat la clasă.
- Lecția anterioară: [Șiruri de valori — citire și parcurgere](/lectii/viii-06-siruri-citire-parcurgere) ·
  Lecția următoare: [Minim și maxim](/lectii/viii-08-minim-maxim).

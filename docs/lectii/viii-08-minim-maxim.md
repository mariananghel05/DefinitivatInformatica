# Determinarea minimului și a maximului

> **Clasa a VIII-a · domeniul Algoritmi · modulele 4–5.** „Campionul" șirului: cea mai mare / mică
> valoare dintr-un șir citit pe rând. Competențe specifice vizate: 2.1, 2.2.

## 1. Lecția (teorie)

**Ideea algoritmului** — formulată ca poveste înainte de cod: ținem minte **campionul de până acum**;
fiecare valoare nouă îl **provoacă**; dacă îl bate, devine noul campion.

```cpp
int n, x, maxim;
cin >> n;
cin >> x;              // prima valoare...
maxim = x;             // ...este campionul de start
for (int i = 2; i <= n; i++) {
    cin >> x;
    if (x > maxim)     // provocarea
        maxim = x;     // noul campion
}
cout << "Maximul este " << maxim;
```

**Punctul sensibil al lecției — inițializarea:** campionul de start este **prima valoare din șir**, nu
0! Contraexemplul care o demonstrează: șirul `-7 -3 -12` cu `maxim = 0` dă răspunsul greșit 0.
(Alternativa „valoare foarte mică" se menționează, dar prima valoare e soluția curată.)

**Extinderi discutate:** minimul (se întoarce comparația); **poziția** maximului (o a doua variabilă,
actualizată împreună cu campionul); maximul și minimul simultan, într-o singură parcurgere.

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — „Campionatul"** *(joc didactic)*
5 elevi spun pe rând un număr; un „arbitru" ține minte doar campionul curent și îl anunță după fiecare
provocare. *De ce așa:* algoritmul se joacă înainte de a se scrie — și arbitru chiar **nu poate** ține
minte toate numerele, deci strategia campionului e naturală, nu impusă.

**Exercițiul 2 — „De ce dă 0?"** *(analiza contraexemplului)*
Programul cu `maxim = 0` rulat pe șirul de numere negative — elevii explică eșecul și repară.
*De ce așa:* inițializarea greșită e **greșeala clasică** a acestui algoritm (inclusiv la bacalaureat);
contraexemplul concret o face de neuitat.

**Exercițiul 3 — Tabelul campionului** *(urmărire de execuție)*
Pentru șirul `4 9 2 9 7`: valorile lui `maxim` după fiecare pas. Întrebarea fină: la al doilea 9 se
schimbă campionul? (nu — `>` strict). *De ce așa:* tabelul fixează dinamica; discuția `>` vs. `>=`
deschide subiectul „prima sau ultima apariție a maximului" — precizie algoritmică autentică.

**Exercițiul 4 — Aplicații în context** *(muncă independentă)*
1) cea mai mică temperatură din n citite; 2) nota maximă **și poziția** elevului în catalog; 3) diferența
dintre cea mai mare și cea mai mică valoare (ambele într-o parcurgere). *De ce așa:* gradare pe același
schelet; poziția maximului pregătește sortarea prin selecție de la liceu.

## 3. Particularități

- **Inițializarea cu 0** este reflexul greșit adus de la sumă/contor — lecția anterioară „luptă"
  împotriva acesteia; distincția se verbalizează: „suma pornește de la nimic, campionul pornește de la
  **primul concurent**".
- **Prima citire separată** (înainte de buclă) derutează — schema „citește primul, apoi buclă de la 2"
  se desenează ca variantă a tiparului standard.
- **`>` vs. `>=`** nu e pedanterie: cu poziții, decide **care** apariție se reține — merită un minut,
  pentru că la liceu devine subiect de barem.
- **Evaluare potrivită:** urmărire cu tabel pe un șir cu maxim repetat + problema cu poziția; itemul
  „ce afișează pentru un șir de numere negative?" testează exact inițializarea.

## Legături

- Teoria de examen: [Algoritmi — prelucrarea secvențelor](/stiintific/01-algoritmi); poziția minimului
  revine la **sortarea prin selecție** ([clasa a X-a](/lectii/#clasa-a-x-a)).
- Aceleași prelucrări în Excel (MIN/MAX): [funcții și sortare](/lectii/viii-02-excel-functii-sortare).
- Lecția anterioară: [Numărare, sumă, produs](/lectii/viii-07-numarare-suma-produs) ·
  Lecția următoare: [Verificarea unei proprietăți](/lectii/viii-09-verificarea-proprietatii).

# Structura liniară — programe pas cu pas

> **Clasa a VII-a · domeniul Algoritmi · modulul 4.** Consolidarea tiparului fundamental al oricărui
> program: **citește → prelucrează → afișează**. Competențe specifice vizate: 2.2, 3.3.

## 1. Lecția (teorie)

**Structura liniară în C++** = instrucțiuni executate în ordine, o singură dată — vechea cunoștință din
Scratch (blocurile înlănțuite) și din schema logică (lanțul de dreptunghiuri).

**Tiparul universal al programelor simple**, numit explicit și afișat pe perete:

```text
1. CITEȘTE datele de intrare        (cin)
2. PRELUCREAZĂ (calculează)          (expresii, atribuiri)
3. AFIȘEAZĂ rezultatele              (cout)
```

**Exemplu lucrat — interschimbarea a două valori** (vechiul exercițiu cu paharele, acum în cod):

```cpp
int a, b;
cin >> a >> b;
int aux = a;      // paharul gol: punem deoparte valoarea lui a
a = b;            // a primește valoarea lui b
b = aux;          // b primește vechea valoare a lui a
cout << a << " " << b;
```

**Urmărirea execuției cu tabel** — instrumentul central al lecției: pentru intrarea `3 8`, ce valori au
`a`, `b`, `aux` după fiecare linie? (Tabelul de la pseudocod, clasa a VI-a, aplicat acum pe cod real.)

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Tabelul de execuție** *(exercițiu dirijat)*
Interschimbarea, urmărită în tabel pe două seturi de date, la tablă și în caiete. *De ce așa:*
„a executa programul în cap" este competența pe care se sprijină tot ce urmează (și itemii de
bacalaureat); interschimbarea e cel mai bun program mic pentru asta — scurt, dar cu subtilitate.

**Exercițiul 2 — „Merge și fără aux?"** *(problematizare)*
Elevii încearcă interschimbarea doar cu `a = b; b = a;` și urmăresc în tabel de ce eșuează (ambele
devin egale). *De ce așa:* eșecul urmărit pas cu pas arată **de ce** e nevoie de variabila auxiliară —
înțelegere, nu rețetă; leagă direct de „paharele" din clasa a V-a.

**Exercițiul 3 — Serie de programe liniare** *(exercițiu gradat, individual)*
1) perimetrul și aria dreptunghiului; 2) prețul cu TVA; 3) ultima cifră a unui număr (`n % 10`) și
numărul fără ultima cifră (`n / 10`). *De ce așa:* toate pe tiparul citește–prelucrează–afișează;
al treilea pregătește deliberat „cifrele numărului" — tema mare a clasei a IX-a începe cu aceste două
operații.

**Exercițiul 4 — „Programatorul și clientul"** *(joc de rol în perechi)*
Un elev „clientul" formulează o problemă simplă de calcul, celălalt o programează; clientul testează cu
3 seturi de date. *De ce așa:* formularea cerinței + testarea de către altcineva simulează dezvoltarea
reală; rolurile se schimbă la jumătatea timpului.

## 3. Particularități

- **Tiparul C-P-A** (citește–prelucrează–afișează) merită repetat până devine reflex — elevii care îl
  au nu se blochează la „nu știu de unde să încep".
- **Greșeala tipică:** citirea după prelucrare (folosesc variabila înainte de `cin`) — programul
  calculează cu valori „gunoi"; tabelul de execuție o face vizibilă.
- **Variabila auxiliară** are tendința să se numească oricum (`c`, `x`) — numele `aux` e o convenție
  care comunică intenția; disciplina numelor sugestive începe acum.
- **Evaluare potrivită:** un tabel de execuție (scris) + un program pe tiparul C-P-A (practic) —
  formatul standard de test la această clasă.

## Legături

- Teoria de examen: [Algoritmi — structura secvențială](/stiintific/01-algoritmi) și
  [Limbaje de programare](/stiintific/02-limbaje-programare).
- Interschimbarea revine la sortări ([clasa a X-a](/lectii/#clasa-a-x-a)).
- Lecția anterioară: [Date numerice; citire și afișare](/lectii/vii-06-date-citire-afisare) ·
  Lecția următoare: [Structura alternativă în C++](/lectii/vii-08-structura-alternativa-cpp).

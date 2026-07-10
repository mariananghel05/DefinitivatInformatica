# Prelucrarea cifrelor unui număr

> **Clasa a IX-a · Informatică.** Tema-emblemă a algoritmicii de liceu: tot ce se poate face cu
> cifrele unui număr, pe un singur mecanism. Competențe specifice vizate: 2.2, 3.2, 3.3.

## 1. Lecția (teorie)

**Mecanismul universal** — două operații, deja cunoscute, acum sistematizate:

- `n mod 10` — **ultima cifră** a lui n;
- `n div 10` — numărul **fără** ultima cifră.

**Tiparul de extragere a cifrelor** (de la ultima spre prima):

```text
┌cât timp n > 0 execută
│   c ← n mod 10          ▍cifra curentă
│   … prelucrează c …
│   n ← n div 10          ▍„taie" ultima cifră
└■
```

**Familia de probleme rezolvate cu acest tipar** (se construiește ca tabel de „variații pe temă"):
suma/produsul cifrelor · numărul de cifre · cifra maximă/minimă · aparițiile unei cifre date ·
**oglinditul** (răsturnatul) numărului · verificarea de **palindrom** (n = oglinditul său).

**Oglinditul** — bijuteria temei, construit pas cu pas:

```text
ogl ← 0
┌cât timp n > 0 execută
│   ogl ← ogl * 10 + n mod 10     ▍„împinge" cifrele în noul număr
│   n ← n div 10
└■
```

Urmărit pe n = 371: `ogl` devine 3 → 37 → 173. Formula `ogl * 10 + cifră` („fă loc, apoi adaugă") este
un idiom care revine ani de zile.

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Tabelul pe mecanism** *(exercițiu dirijat)*
Suma cifrelor pentru n = 274, cu tabelul (`n`, `c`, `suma`) la fiecare pas. *De ce așa:* mecanismul
mod/div trebuie văzut „cu încetinitorul" o dată complet; tabelul este și formatul de examen.

**Exercițiul 2 — Variații în lanț** *(exercițiu gradat, individual)*
Pornind de la suma cifrelor, elevii modifică **minimal** algoritmul pentru: numărul de cifre → cifra
maximă → de câte ori apare cifra 5. *De ce așa:* seria de mutații mici pe același schelet arată că
tema e **un** algoritm cu multe fețe — economie cognitivă maximă.

**Exercițiul 3 — Oglinditul descoperit** *(problematizare)*
„Cum construim 173 din cifrele 1, 7, 3 primite în această ordine?" — elevii propun; se ajunge la
`ogl * 10 + c`. *De ce așa:* formula „împinge și adaugă" merită descoperită, nu dictată — e momentul
de sclipire al temei; verificarea pe tabel confirmă.

**Exercițiul 4 — Palindromul și capcana lui** *(exercițiu cu subtilitate)*
Verificarea de palindrom: de ce trebuie **copiat** n înainte de distrugere? (mecanismul „consumă"
numărul!). *De ce așa:* prima întâlnire cu efectul distructiv al prelucrării — nevoia de copie
(`m ← n`) e o lecție de disciplină care revine la vectori și la subprograme.

## 3. Particularități

- **Tema este canonică la examene** (bacalaureat, admiteri, chiar definitivat): timpul investit aici
  se amortizează ca nicăieri altundeva; se predă lent și complet.
- **Greșeala tipică #1:** prelucrarea lui n fără copie — a doua întrebare din problemă („afișați și
  n") găsește numărul distrus.
- **Cazul n = 0** — capcana de barem: bucla `cât timp n > 0` nu se execută deloc, deci „0 are zero
  cifre"? Convenția (0 are o cifră) se tratează cu `repetă … până când` sau caz special — discuția e
  exact nivelul de rigoare cerut la barem.
- **Ordinea cifrelor:** mecanismul le dă de la **ultima** spre prima — problemele care cer „prima
  cifră" se rezolvă prin epuizarea numărului sau prin oglindit; conștientizarea ordinii previne
  confuzii.
- **Evaluare potrivită:** o urmărire cu tabel + o variație nouă pe mecanism + palindromul (integrator);
  itemul cu n = 0 separă înțelegerea completă.

## Legături

- Teoria de examen: [Algoritmi — algoritmi elementari](/stiintific/01-algoritmi) (suma cifrelor,
  exemplu rezolvat).
- Sămânța din gimnaziu: [clasa a VII-a — structuri repetitive](/lectii/vii-09-structuri-repetitive-cpp)
  (numărătoarea de cifre).
- Lecția anterioară: [Pseudocodul](/lectii/ix-04-pseudocod) ·
  Lecția următoare: [Divizibilitate; primalitate; cmmdc](/lectii/ix-06-divizibilitate-primalitate).

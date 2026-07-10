# Recursivitatea

> **Clasa a XI-a · Informatică.** Subprogramul care se apelează pe sine: mecanismul, stiva de apeluri
> și disciplina cazului de bază. Competențe specifice vizate: 3.5.

## 1. Lecția (teorie)

**Definiția de lucru:** un subprogram este **recursiv** dacă se apelează pe el însuși. Orice
recursivitate corectă are **două componente obligatorii**:

1. **cazul de bază** — situația rezolvabilă direct, fără autoapel (oprirea!);
2. **pasul recursiv** — reducerea problemei la o instanță **mai mică** a ei însăși.

```cpp
long long fact(int n) {
    if (n <= 1) return 1;        // cazul de bază
    return n * fact(n - 1);      // pasul: fact(n) redus la fact(n-1)
}
```

**Mecanismul — stiva de apeluri** (structura de la lecția de stivă „lucrează" aici!): fiecare apel se
**stivuiește** cu parametrii lui; la atingerea cazului de bază, apelurile se **închid în ordine
inversă**, calculând rezultatele la întoarcere. Desenul coborâre/urcare pentru `fact(4)` e piesa
centrală a lecției.

**Repertoriul școlar:** factorial, suma cifrelor recursiv, cmmdc recursiv (Euclid!), Fibonacci
(cu discuția de ineficiență — recalculează!), afișarea unui șir în ordine inversă (magia: afișarea
**după** apel), și — anticipare — DFS-ul deja văzut era recursiv.

**Echivalența recursiv ↔ iterativ:** orice recursivitate se poate rescrie iterativ și invers —
transformarea în ambele sensuri e cerință de examen.

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Matrioșka / oglinzile** *(analogie + desen)*
`fact(4)` desenat complet: săgețile coborârii (4→3→2→1) și ale întoarcerii cu rezultate (1→2→6→24).
*De ce așa:* recursivitatea se înțelege doar dacă mecanismul se **vede**; desenul coborâre/urcare este
instrumentul pe care elevii îl vor reproduce singuri la fiecare urmărire.

**Exercițiul 2 — „Înainte sau după apel?"** *(experimentul revelator)*
Două subprograme identice cu o singură diferență: `cout << n` **înainte** vs. **după** autoapel —
pentru n = 3: `3 2 1` vs. `1 2 3`. De ce? *De ce așa:* poziția prelucrării față de apel e subtilitatea
definitorie a recursivității (și itemul favorit de examen); contrastul minimal o izolează perfect.

**Exercițiul 3 — Urmărirea de barem** *(formatul de examen)*
Un subprogram recursiv necunoscut (de ex. afișează cifrele în ordine inversă / calculează ceva pe
cifre): ce returnează `f(destul)`? câte autoapeluri se fac? *De ce așa:* itemul standard al subiectului
de bacalaureat; strategia predată: tabelul apelurilor (parametru → ce întoarce), completat de la cazul
de bază în sus.

**Exercițiul 4 — Traducerea în ambele sensuri** *(exercițiu de echivalență)*
Suma cifrelor: din iterativ (clasa a IX-a) în recursiv; cmmdc: din recursiv în iterativ. *De ce așa:*
transformarea bidirecțională demonstrează că recursivitatea e **o formă**, nu o problemă nouă — și e
cerință explicită de programă.

## 3. Particularități

- **Fără caz de bază → stack overflow:** eroarea se provoacă deliberat o dată (recursivitate fără
  oprire) — programul „crapă" spectaculos și memorabil; diagnosticul „unde e cazul de bază?" devine
  prima întrebare la orice recursivitate.
- **Frica de recursivitate e frica de mecanism:** elevii care desenează stiva nu se tem; cei care
  „ghicesc" rezultatul se blochează la primul exemplu nestandard — desenul se cere obligatoriu în
  primele săptămâni.
- **Fibonacci recursiv** e capcana de eficiență: corect logic, exponențial practic — discuția onestă
  („frumos, dar lent; de ce?") plantează programarea dinamică (intensiv/facultate).
- **Evaluare potrivită:** o urmărire cu tabelul apelurilor + „înainte/după" ca item de predicție + o
  traducere iterativ↔recursiv.

## Legături

- Teoria de examen, cu desenul stivei pentru `fact(4)`:
  [Limbaje de programare — recursivitate](/stiintific/02-limbaje-programare); stiva de apeluri:
  [Alocarea dinamică](/stiintific/04-alocare-dinamica).
- Lecția anterioară: [Subprograme](/lectii/xi-07-subprograme) ·
  Lecția următoare: [Divide et Impera](/lectii/xi-09-divide-et-impera).

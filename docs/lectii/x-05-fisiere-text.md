# Fișiere text

> **Clasa a X-a · Informatică.** Programele scapă de tastatură: datele vin din fișiere și rezultatele
> rămân în fișiere — condiția de lucru la orice concurs și la bacalaureat.
> Competențe specifice vizate: 2.3.

## 1. Lecția (teorie)

**De ce fișiere?** Demonstrația-motivație: un program care cere 1000 de numere de la tastatură e
inutilizabil; aceleași date, **scrise o dată** într-un fișier, se refolosesc la fiecare rulare.

**Lucrul cu fișiere text în C++:**

```cpp
#include <fstream>
using namespace std;

int main() {
    ifstream fin("date.in");        // fișierul de intrare (există deja)
    ofstream fout("date.out");      // fișierul de ieșire (se creează)
    int x, suma = 0;
    while (fin >> x)                // citește CÂT TIMP mai sunt valori
        suma += x;
    fout << suma << "\n";
    fin.close();
    fout.close();
    return 0;
}
```

Punctele-cheie:
- `fin` și `fout` se comportă **exact** ca `cin`/`cout` — tot ce știu elevii se transferă;
- idiomul **`while (fin >> x)`** — citirea până la sfârșitul fișierului, fără să știm câte valori sunt
  (superputere nouă: la tastatură nu se putea!);
- fișierul de intrare stă **în folderul proiectului** (legătura cu căile relative — clasa a V-a/VIII-a);
- fișierul de ieșire **se suprascrie** la fiecare rulare.

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — Primul circuit complet** *(exercițiu dirijat)*
Se creează manual `date.in` (10 numere), se scrie programul de sumă, se verifică `date.out`.
*De ce așa:* circuitul fizic — văd fișierul, îl citesc, văd rezultatul scris — demistifică fișierele;
jumătate din „nu merge" e fișierul pus în folderul greșit, iar asta se învață doar făcând.

**Exercițiul 2 — „Câte valori sunt?"** *(problematizare pe idiom)*
Fișier cu număr necunoscut de valori: numărați-le și aflați maximul. *De ce așa:* `while (fin >> x)`
rezolvă natural o problemă **imposibilă** cu `cin >> n` — idiomul se fixează prin necesitate, nu prin
memorare.

**Exercițiul 3 — Transformarea de fișier** *(exercițiu-tipar)*
Din `numere.in`, scrieți în `pare.out` doar valorile pare, câte una pe linie. *De ce așa:* tiparul
citește–filtrează–scrie este forma standard a problemelor cu fișiere; separatorii de ieșire (spațiu vs.
linie nouă) devin subiect concret.

**Exercițiul 4 — Depanarea fișierelor** *(fișă de situații)*
Ce se întâmplă dacă: `date.in` nu există? are mai puține valori decât se citesc? `fout` se deschide dar
nu se scrie nimic? *De ce așa:* situațiile de eșec ale fișierelor sunt tăcute (programul nu „crapă",
doar tace) — recunoașterea lor economisește ore de frustrare.

## 3. Particularități

- **Folderul de lucru** e sursa a 80% din probleme la prima lecție: unde caută programul fișierul
  depinde de IDE — se clarifică pe laboratorul concret al școlii, o dată pentru totdeauna.
- **La bacalaureat, datele vin din fișier** — formatul enunțurilor („fișierul bac.txt conține...")
  se introduce de acum; toate problemele următoare ale anului folosesc fișiere, ca antrenament de
  formă.
- **Deprinderea de a construi fișiere de test proprii** (cazuri mici + cazuri-limită) este începutul
  culturii de testare — se cere explicit la teme.
- **Evaluare potrivită:** o problemă completă cu `date.in`/`date.out` dat de profesor (cu valori-limită
  în fișier!); criteriul: rezultatul corect **în fișier**, nu pe ecran.

## Legături

- Teoria de examen: [Limbaje de programare — fișiere text](/stiintific/02-limbaje-programare);
  gestiunea fișierelor de către SO: [Sisteme de operare](/stiintific/08-sisteme-de-operare).
- Lecția anterioară: [Tablouri bidimensionale](/lectii/x-04-tablouri-bidimensionale) ·
  Lecția următoare: [Căutarea secvențială și binară](/lectii/x-06-cautare).

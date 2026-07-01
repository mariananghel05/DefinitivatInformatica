/**
 * Banc de întrebări pentru pagina „Carduri".
 * Trei categorii, folosite pe cele trei moduri de dificultate:
 *   - grila : întrebare cu variante (alegere multiplă)  → modurile 1, 2, 3
 *   - text  : întrebare cu răspuns liber                 → modurile 2, 3
 *   - cod   : problemă de programare C++                 → modul 3
 *
 * Conținutul este aliniat la programa de examen (Informatică și TIC) și la
 * paginile cursului. Adaugă/șterge întrebări fără să modifici componenta.
 */

// ─────────────────────────────────────────────────────────────────────────────
// 1) ÎNTREBĂRI GRILĂ (alegere multiplă)
//    corect = indicele variantei corecte (0-based)
// ─────────────────────────────────────────────────────────────────────────────
export const grila = [
  // ── Recunoașterea algoritmului după cod (denumirea din variante) ───────────
  {
    intrebare: 'Ce algoritm implementează subprogramul de mai jos?',
    cod: `void sortare(int numere[], int n) {
    for (int i = 0; i < n - 1; ++i) {
        int pozMinim = i;
        for (int j = i + 1; j < n; ++j)
            if (numere[j] < numere[pozMinim]) pozMinim = j;
        swap(numere[i], numere[pozMinim]);
    }
}`,
    optiuni: [
      'Sortare prin selecție',
      'Sortare prin inserție',
      'Sortare prin metoda bulelor',
      'Sortare prin numărare',
    ],
    corect: 0,
    explicatie: 'Caută minimul din partea nesortată (pozMinim) și îl aduce pe prima poziție liberă — sortare prin selecție.',
    tema: 'Algoritmi',
  },
  {
    intrebare: 'Ce algoritm implementează subprogramul de mai jos?',
    cod: `void sortare(int numere[], int n) {
    for (int i = 0; i < n - 1; ++i)
        for (int j = 0; j < n - 1 - i; ++j)
            if (numere[j] > numere[j + 1])
                swap(numere[j], numere[j + 1]);
}`,
    optiuni: [
      'Sortare prin metoda bulelor',
      'Sortare prin selecție',
      'Sortare prin inserție',
      'Interclasare',
    ],
    corect: 0,
    explicatie: 'Compară perechi de elemente vecine și le interschimbă — metoda bulelor (bubble sort).',
    tema: 'Algoritmi',
  },
  {
    intrebare: 'Ce algoritm implementează subprogramul de mai jos?',
    cod: `void sortare(int numere[], int n) {
    for (int i = 1; i < n; ++i) {
        int curent = numere[i], j = i - 1;
        while (j >= 0 && numere[j] > curent) {
            numere[j + 1] = numere[j];
            --j;
        }
        numere[j + 1] = curent;
    }
}`,
    optiuni: [
      'Sortare prin inserție',
      'Sortare prin selecție',
      'Sortare prin metoda bulelor',
      'Căutare binară',
    ],
    corect: 0,
    explicatie: 'Inserează fiecare element nou la locul potrivit în partea deja sortată — sortare prin inserție.',
    tema: 'Algoritmi',
  },
  {
    intrebare: 'Ce algoritm implementează subprogramul de mai jos?',
    cod: `int cauta(int numere[], int n, int cautat) {
    int stanga = 0, dreapta = n - 1;
    while (stanga <= dreapta) {
        int mijloc = stanga + (dreapta - stanga) / 2;
        if (numere[mijloc] == cautat) return mijloc;
        if (numere[mijloc] < cautat) stanga = mijloc + 1;
        else dreapta = mijloc - 1;
    }
    return -1;
}`,
    optiuni: [
      'Căutare binară',
      'Căutare secvențială',
      'Sortare prin selecție',
      'Interclasare',
    ],
    corect: 0,
    explicatie: 'Înjumătățește repetat intervalul [stanga, dreapta] — căutare binară (doar pe șir sortat).',
    tema: 'Algoritmi',
  },
  {
    intrebare: 'Ce algoritm implementează subprogramul de mai jos?',
    cod: `int f(int numar1, int numar2) {
    while (numar2 != 0) {
        int rest = numar1 % numar2;
        numar1 = numar2;
        numar2 = rest;
    }
    return numar1;
}`,
    optiuni: [
      'Algoritmul lui Euclid (cmmdc)',
      'Cel mai mic multiplu comun (cmmmc)',
      'Ciurul lui Eratostene',
      'Descompunerea în factori primi',
    ],
    corect: 0,
    explicatie: 'Înlocuiește (a, b) cu (b, a % b) până când restul devine 0 — algoritmul lui Euclid pentru cmmdc.',
    tema: 'Algoritmi',
  },
  {
    intrebare: 'Ce calculează subprogramul de mai jos?',
    cod: `int f(int numar) {
    int rezultat = 0;
    while (numar > 0) {
        rezultat += numar % 10;
        numar /= 10;
    }
    return rezultat;
}`,
    optiuni: [
      'Suma cifrelor numărului',
      'Numărul de cifre',
      'Produsul cifrelor',
      'Inversul numărului',
    ],
    corect: 0,
    explicatie: 'Adună ultima cifră (numar % 10) și elimină cifra (numar /= 10) — suma cifrelor.',
    tema: 'Algoritmi',
  },
  {
    intrebare: 'Ce verifică subprogramul de mai jos?',
    cod: `bool f(int numar) {
    if (numar < 2) return false;
    for (int d = 2; (long long)d * d <= numar; ++d)
        if (numar % d == 0) return false;
    return true;
}`,
    optiuni: [
      'Dacă numărul este prim',
      'Dacă numărul este pătrat perfect',
      'Dacă numărul este par',
      'Dacă numărul este palindrom',
    ],
    corect: 0,
    explicatie: 'Testează divizorii până la √numar; dacă găsește unul, numărul nu e prim.',
    tema: 'Algoritmi',
  },
  {
    intrebare: 'Care algoritm de căutare funcționează DOAR pe un șir sortat?',
    optiuni: ['Căutarea secvențială', 'Căutarea binară', 'Căutarea liniară', 'Niciunul'],
    corect: 1,
    explicatie: 'Căutarea binară împarte repetat intervalul în două, deci presupune date sortate.',
    tema: 'Algoritmi',
  },
  {
    intrebare: 'Care este complexitatea căutării binare în cazul cel mai defavorabil?',
    optiuni: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
    corect: 2,
    explicatie: 'La fiecare pas se înjumătățește intervalul ⇒ O(log n).',
    tema: 'Algoritmi',
  },
  {
    intrebare: 'cmmdc(12, 18) = ?',
    optiuni: ['2', '3', '6', '36'],
    corect: 2,
    explicatie: 'Algoritmul lui Euclid: 18 % 12 = 6, 12 % 6 = 0 ⇒ cmmdc = 6.',
    tema: 'Algoritmi',
  },
  {
    intrebare: 'Câte structuri fundamentale folosește programarea structurată (teorema Böhm–Jacopini)?',
    optiuni: ['Două', 'Trei', 'Patru', 'Cinci'],
    corect: 1,
    explicatie: 'Secvențială, de decizie (alternativă) și repetitivă (ciclică).',
    tema: 'Algoritmi',
  },
  {
    intrebare: 'Sortarea prin numărare (counting sort) este eficientă mai ales pentru…',
    optiuni: [
      'orice tip de date',
      'valori întregi într-un interval mic',
      'date deja sortate',
      'numere reale oricât de mari',
    ],
    corect: 1,
    explicatie: 'Atinge O(n + valoareMax), deci are sens când intervalul valorilor e mic.',
    tema: 'Algoritmi',
  },
  {
    intrebare: 'Ce returnează strcmp(a, b) când cele două șiruri sunt identice?',
    optiuni: ['1', '0', '-1', 'true'],
    corect: 1,
    explicatie: 'strcmp întoarce 0 la egalitate, valoare <0 sau >0 în funcție de ordine.',
    tema: 'Limbaj C++',
  },
  {
    intrebare: 'La std::string, rezultatul lui find() pentru un subșir inexistent se compară cu…',
    optiuni: ['-1', '0', 'string::npos', 'nullptr'],
    corect: 2,
    explicatie: 'find() întoarce std::string::npos dacă subșirul nu există.',
    tema: 'Limbaj C++',
  },
  {
    intrebare: 'Complexitatea sortării bulelor (bubble sort) în cazul cel mai defavorabil este…',
    optiuni: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'],
    corect: 2,
    explicatie: 'Două bucle imbricate ⇒ O(n²).',
    tema: 'Algoritmi',
  },
  {
    intrebare: 'Interclasarea a doi vectori sortați, de lungimi n și m, are complexitatea…',
    optiuni: ['O(n · m)', 'O(n + m)', 'O(n²)', 'O(log(n + m))'],
    corect: 1,
    explicatie: 'Fiecare element este parcurs o singură dată ⇒ O(n + m).',
    tema: 'Algoritmi',
  },
  {
    intrebare: 'Care este nota minimă de promovare la examenul de definitivat?',
    optiuni: ['5', '7', '8', '10'],
    corect: 2,
    explicatie: 'Nota minimă de promovare este 8 (opt).',
    tema: 'Despre examen',
  },
  {
    intrebare: 'Care lege reglementează în prezent învățământul preuniversitar?',
    optiuni: [
      'Legea nr. 1/2011',
      'Legea nr. 198/2023',
      'Legea nr. 84/1995',
      'Legea nr. 199/2023',
    ],
    corect: 1,
    explicatie: 'Legea învățământului preuniversitar nr. 198/2023 (Legea 199/2023 e pentru învățământul superior).',
    tema: 'Despre examen',
  },
  {
    intrebare: 'Într-un graf neorientat, suma gradelor tuturor vârfurilor este egală cu…',
    optiuni: [
      'numărul de muchii',
      'de două ori numărul de muchii',
      'numărul de vârfuri',
      'numărul de vârfuri − 1',
    ],
    corect: 1,
    explicatie: 'Lema strângerii de mână: fiecare muchie contribuie cu 2 la suma gradelor.',
    tema: 'Grafuri',
  },
  {
    intrebare: 'Ce rol are cheia primară (PK) într-o tabelă relațională?',
    optiuni: [
      'Stochează parola tabelei',
      'Identifică unic fiecare înregistrare',
      'Leagă două baze de date diferite',
      'Sortează automat datele',
    ],
    corect: 1,
    explicatie: 'Cheia primară identifică unic fiecare rând (înregistrare) din tabelă.',
    tema: 'Baze de date',
  },
  {
    intrebare: 'Ce valoare returnează apelul atoi("2026")?',
    optiuni: ['Șirul "2026"', 'Numărul întreg 2026', 'Caracterul \'2\'', '0'],
    corect: 1,
    explicatie: 'atoi convertește un șir stil C într-un int ⇒ 2026.',
    tema: 'Limbaj C++',
  },
  {
    intrebare: 'Un subprogram recursiv trebuie să aibă obligatoriu…',
    optiuni: [
      'o variabilă globală',
      'un caz de bază (condiție de oprire)',
      'un parametru transmis prin referință',
      'minimum doi parametri',
    ],
    corect: 1,
    explicatie: 'Fără caz de bază, recursivitatea nu se oprește ⇒ stack overflow.',
    tema: 'Limbaj C++',
  },
  {
    intrebare: 'Prin ce act normativ este aprobată metodologia-cadru a examenului de definitivat?',
    optiuni: ['OMEC nr. 5434/2020', 'OMEN nr. 3393/2017', 'Ordinul nr. 5731/2025', 'OMECI nr. 5099/2009'],
    corect: 0,
    explicatie: 'Metodologia-cadru: OMEC 5434/2020 (3393/2017 = programa de gimnaziu; 5731/2025 = calendarul 2026).',
    tema: 'Despre examen',
  },

  // ── Competențe din programele școlare (grilă) ──────────────────────────────
  {
    intrebare: 'Câte competențe generale are programa de Informatică și TIC pentru gimnaziu (clasele V–VIII)?',
    optiuni: ['2', '3', '4', '5'],
    corect: 1,
    explicatie: 'Trei competențe generale, stabile pe tot gimnaziul: tehnica de calcul; algoritmi; produse informatice.',
    tema: 'Competențe',
  },
  {
    intrebare: 'Câte competențe generale are ciclul inferior al liceului (clasele IX–X, OMECI 5099/2009)?',
    optiuni: ['3', '4', '5', '6'],
    corect: 2,
    explicatie: 'Cinci competențe generale (de la conexiunile cu societatea până la implementarea algoritmilor).',
    tema: 'Competențe',
  },
  {
    intrebare: 'Câte competențe generale are ciclul superior al liceului (clasele XI–XII)?',
    optiuni: ['2', '3', '4', '5'],
    corect: 1,
    explicatie: 'Trei competențe generale, comune claselor XI și XII.',
    tema: 'Competențe',
  },
  {
    intrebare: 'În codul unei competențe specifice (ex. 2.3), ce reprezintă primul număr?',
    optiuni: [
      'Competența generală (grupul) din care derivă',
      'Clasa la care se predă',
      'Numărul lecției',
      'Anul de studiu',
    ],
    corect: 0,
    explicatie: 'Codul X.Y: X = competența generală (grupul), Y = competența specifică derivată din el.',
    tema: 'Competențe',
  },
  {
    intrebare: 'Care dintre acestea NU este o competență generală la gimnaziu?',
    optiuni: [
      'Utilizarea responsabilă și eficientă a tehnicii de calcul și de comunicații',
      'Rezolvarea unor probleme elementare prin construirea unor algoritmi de prelucrare a informației',
      'Implementarea algoritmilor într-un limbaj de programare',
      'Elaborarea creativă de produse informatice',
    ],
    corect: 2,
    explicatie: '„Implementarea algoritmilor într-un limbaj de programare" este competență generală de liceu, nu de gimnaziu.',
    tema: 'Competențe',
  },
  {
    intrebare: 'La gimnaziu, competența generală 2 se referă la:',
    optiuni: [
      'Algoritmi de prelucrare a informației',
      'Tehnica de calcul și de comunicații',
      'Produse informatice',
      'Rețele de calculatoare',
    ],
    corect: 0,
    explicatie: 'CG1 = tehnica de calcul, CG2 = algoritmi de prelucrare a informației, CG3 = produse informatice.',
    tema: 'Competențe',
  },
  {
    intrebare: 'Care este competența generală 1 a ciclului inferior al liceului (IX–X)?',
    optiuni: [
      'Identificarea conexiunilor dintre informatică și societate',
      'Implementarea algoritmilor într-un limbaj de programare',
      'Elaborarea algoritmilor de rezolvare a problemelor',
      'Aplicarea algoritmilor fundamentali în prelucrarea datelor',
    ],
    corect: 0,
    explicatie: 'La IX–X: CG1 = conexiunile informatică–societate; implementarea (CG5) e ultima.',
    tema: 'Competențe',
  },
  {
    intrebare: 'La clasa a X-a, grupul 1 al competențelor (primul număr) corespunde competenței generale:',
    optiuni: [
      'Implementarea algoritmilor într-un limbaj de programare',
      'Identificarea conexiunilor dintre informatică și societate',
      'Elaborarea algoritmilor de rezolvare a problemelor',
      'Identificarea datelor care intervin într-o problemă',
    ],
    corect: 0,
    explicatie: 'Atenție: la clasa a X-a ordinea grupurilor diferă de a IX-a — grupul 1 = Implementarea algoritmilor.',
    tema: 'Competențe',
  },
  {
    intrebare:
      'Competența „Descrierea coerentă a unei succesiuni de operații prin care se obțin, din datele de intrare, datele de ieșire" are codul 2.3 la:',
    optiuni: [
      'Informatică, clasa a IX-a',
      'Informatică, clasa a XI-a',
      'Informatică și TIC, clasa a V-a',
      'TIC, clasa a X-a',
    ],
    corect: 0,
    explicatie: 'Este competența 2.3 din programa clasei a IX-a (OMECI 5099/2009) — citată în modelul oficial 2024.',
    tema: 'Competențe',
  },
  // Întrebările „La clasa a __, competența specifică X.Y este:" (una pentru fiecare
  // competență specifică, toate clasele V–XII) sunt generate automat la finalul fișierului.
  {
    intrebare: 'Competențele specifice de la clasa a XII-a se concentrează mai ales pe conținuturi de tip:',
    optiuni: [
      'Baze de date, SQL și dezvoltarea aplicațiilor',
      'Grafuri și metode de programare',
      'Algoritmi elementari și sortări',
      'Arhitectura sistemelor de calcul',
    ],
    corect: 0,
    explicatie: 'Clasa a XII-a: baze de date (model conceptual, normalizare, SQL), aplicații, programare web.',
    tema: 'Competențe',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// 2) ÎNTREBĂRI CU RĂSPUNS TEXT
//    cuvinteCheie = listă de GRUPURI; răspunsul e considerat „probabil corect"
//    dacă atinge cel puțin un sinonim din fiecare grup. Oricum se afișează
//    răspunsul-model și utilizatorul își acordă singur nota (auto-evaluare).
// ─────────────────────────────────────────────────────────────────────────────
export const text = [
  {
    intrebare: 'Ce este un algoritm? Numește două caracteristici esențiale.',
    raspunsModel:
      'Un algoritm este o succesiune finită și ordonată de pași bine definiți care, pornind de la datele de intrare, conduce în timp finit la rezultate. Caracteristici: finitudine, claritate (precizie), determinism, generalitate, eficiență.',
    cuvinteCheie: [
      ['succesiune', 'secventa', 'sir de pasi', 'pasi'],
      ['finit', 'finita', 'finitudine'],
      ['rezultat', 'iesire', 'rezolva', 'problema'],
    ],
    tema: 'Algoritmi',
  },
  {
    intrebare: 'Enumeră cele trei structuri fundamentale ale programării structurate.',
    raspunsModel: 'Structura secvențială, structura de decizie (alternativă) și structura repetitivă (ciclică).',
    cuvinteCheie: [
      ['secventiala', 'secventa'],
      ['decizie', 'alternativa', 'alternativ', 'daca'],
      ['repetitiva', 'ciclica', 'repetitiv', 'ciclu'],
    ],
    tema: 'Algoritmi',
  },
  {
    intrebare: 'În ce condiție funcționează corect căutarea binară?',
    raspunsModel: 'Doar pe un șir (vector) sortat. Pe date nesortate rezultatul este nedefinit.',
    cuvinteCheie: [['sortat', 'sortata', 'ordonat', 'ordonata']],
    tema: 'Algoritmi',
  },
  {
    intrebare: 'Ce face funcția strncpy și prin ce diferă de strcpy?',
    raspunsModel:
      'strncpy copiază în destinație cel mult n caractere din sursă, spre deosebire de strcpy care copiază tot șirul. Este mai sigură împotriva depășirii bufferului, dar nu pune întotdeauna terminatorul \'\\0\', care trebuie adăugat manual.',
    cuvinteCheie: [
      ['copiaza', 'copiere', 'copy'],
      ['n caractere', 'cel mult', 'limita', 'numar de caractere', 'maxim'],
    ],
    tema: 'Limbaj C++',
  },
  {
    intrebare: 'Care sunt cele patru principii ale programării orientate pe obiecte (POO)?',
    raspunsModel: 'Abstractizare, încapsulare, moștenire și polimorfism.',
    cuvinteCheie: [
      ['abstractizare', 'abstract'],
      ['incapsulare', 'incapsul'],
      ['mostenire', 'derivare'],
      ['polimorfism'],
    ],
    tema: 'Limbaj C++',
  },
  {
    intrebare: 'Descrie pe scurt algoritmul lui Euclid pentru cmmdc (cel mai mare divizor comun).',
    raspunsModel:
      'Cât timp al doilea număr este nenul, se înlocuiește perechea (a, b) cu (b, a % b), adică se calculează restul împărțirii. Când restul devine 0, cmmdc este ultimul rest nenul (valoarea rămasă în a).',
    cuvinteCheie: [
      ['rest', 'modulo', 'impartire', '%'],
      ['cat timp', 'repeta', 'pana cand', 'repetitiv', 'zero', '0'],
    ],
    tema: 'Algoritmi',
  },
  {
    intrebare:
      'Ce condiție trebuie să îndeplinească media notelor de la inspecții și portofoliu pentru a te înscrie la proba scrisă de la definitivat?',
    raspunsModel:
      'Media aritmetică a notelor de la cele două inspecții la clasă și de la evaluarea portofoliului trebuie să fie cel puțin 8, fără ca vreuna dintre note să fie sub 7.',
    cuvinteCheie: [
      ['8', 'opt'],
      ['7', 'sapte'],
    ],
    tema: 'Despre examen',
  },
  {
    intrebare: 'Ce înseamnă că un algoritm are complexitatea O(n log n)? Dă un exemplu de algoritm.',
    raspunsModel:
      'Numărul de operații crește proporțional cu n·log n. Exemple: sortarea prin interclasare (merge sort) și quicksort (în caz mediu).',
    cuvinteCheie: [
      ['operatii', 'timp', 'pasi', 'creste', 'proportional'],
      ['interclasare', 'merge', 'quicksort', 'sortare'],
    ],
    tema: 'Algoritmi',
  },

  // ── Competențe din programele școlare (răspuns text) ───────────────────────
  {
    intrebare: 'Enumeră cele trei competențe generale de la gimnaziu (Informatică și TIC).',
    raspunsModel:
      '1) Utilizarea responsabilă și eficientă a tehnicii de calcul și de comunicații; 2) Rezolvarea unor probleme elementare prin construirea unor algoritmi de prelucrare a informației; 3) Elaborarea creativă de produse informatice care valorifică conexiunile dintre Informatică și TIC și societate.',
    cuvinteCheie: [
      ['tehnic', 'calcul', 'comunicatii'],
      ['algoritm', 'problem', 'prelucrare'],
      ['produse informatice', 'produs', 'creativ'],
    ],
    tema: 'Competențe',
  },
  {
    intrebare: 'Care sunt cele cinci competențe generale ale ciclului inferior al liceului (clasele IX–X)?',
    raspunsModel:
      '1) Identificarea conexiunilor dintre informatică și societate; 2) Identificarea datelor care intervin într-o problemă și a relațiilor dintre acestea; 3) Elaborarea algoritmilor de rezolvare a problemelor; 4) Aplicarea algoritmilor fundamentali în prelucrarea datelor; 5) Implementarea algoritmilor într-un limbaj de programare.',
    cuvinteCheie: [
      ['conexiuni', 'societate'],
      ['date', 'relat'],
      ['elaborarea', 'algoritm'],
      ['aplicarea', 'fundamentali'],
      ['implementarea', 'limbaj'],
    ],
    tema: 'Competențe',
  },
  {
    intrebare: 'Care sunt cele trei competențe generale ale ciclului superior al liceului (clasele XI–XII)?',
    raspunsModel:
      '1) Identificarea datelor care intervin într-o problemă și aplicarea algoritmilor fundamentali de prelucrare a acestora; 2) Elaborarea algoritmilor de rezolvare a problemelor; 3) Implementarea algoritmilor într-un limbaj de programare.',
    cuvinteCheie: [
      ['date', 'fundamentali'],
      ['elaborarea', 'algoritm'],
      ['implementarea', 'limbaj'],
    ],
    tema: 'Competențe',
  },
  {
    intrebare: 'Ce reprezintă cele două numere din codul unei competențe specifice (ex. 2.3)?',
    raspunsModel:
      'Primul număr (X) este competența generală — grupul din care derivă; al doilea număr (Y) este competența specifică derivată din acel grup. Ex.: 2.3 = a treia competență specifică din grupul 2.',
    cuvinteCheie: [
      ['generala', 'grup'],
      ['specifica', 'derivat'],
    ],
    tema: 'Competențe',
  },
  {
    intrebare: 'La gimnaziu, ce vizează competența generală 2?',
    raspunsModel:
      'Rezolvarea unor probleme elementare prin construirea unor algoritmi de prelucrare a informației.',
    cuvinteCheie: [
      ['algoritm'],
      ['prelucrare', 'informat', 'problem'],
    ],
    tema: 'Competențe',
  },
  {
    intrebare: 'Enumeră competențele specifice ale grupului 2 (Algoritmi de prelucrare a informației) la clasa a V-a.',
    raspunsModel:
      '2.1 Descrierea în limbaj natural a unor algoritmi; 2.2 Identificarea datelor cu care lucrează algoritmii; 2.3 Construirea algoritmilor cu ajutorul structurii secvențiale; 2.4 Construirea algoritmilor care conțin structura alternativă (decizii).',
    cuvinteCheie: [
      ['limbaj natural', 'descriere'],
      ['date'],
      ['secvential'],
      ['alternativ', 'decizi'],
    ],
    tema: 'Competențe',
  },
  {
    intrebare: 'La clasa a IX-a, dă două competențe specifice din grupul 3 „Elaborarea algoritmilor de rezolvare a problemelor".',
    raspunsModel:
      '3.1 Analizarea enunțului unei probleme și stabilirea pașilor de rezolvare; 3.2 Reprezentarea algoritmilor în pseudocod; 3.3 Respectarea principiilor programării structurate.',
    cuvinteCheie: [
      ['pseudocod'],
      ['structurat', 'principii', 'analiz', 'enunt'],
    ],
    tema: 'Competențe',
  },
  {
    intrebare: 'De ce, la liceu, ordinea grupurilor de competențe (primul număr) poate diferi de la o clasă la alta?',
    raspunsModel:
      'Pentru că la liceu competențele generale sunt numerotate în ordinea din tabelul fiecărei clase, iar gruparea poate fi reordonată (ex.: la clasa a X-a grupul 1 = „Implementarea algoritmilor"). De aceea, la examen textul exact al competenței este întotdeauna dat în secvența din subiect.',
    cuvinteCheie: [
      ['reordon', 'ordine', 'difer'],
      ['clasa', 'tabel', 'fiecare', 'subiect'],
    ],
    tema: 'Competențe',
  },
  {
    intrebare: 'Ce conținuturi acoperă competențele specifice de la clasa a XII-a?',
    raspunsModel:
      'Baze de date (model conceptual, entități, normalizare FN1–FN3, model relațional, SQL), dezvoltarea aplicațiilor și programare web.',
    cuvinteCheie: [
      ['baze de date', 'sql'],
      ['aplicat', 'web'],
    ],
    tema: 'Competențe',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// 3) PROBLEME DE COD (C++) — verificate prin compilare + rulare (Wandbox)
//    asteptat = ieșirea EXACTĂ (se compară fără spațiile de la final).
//    stdin    = ce se trimite programului la intrare (poate fi '').
// ─────────────────────────────────────────────────────────────────────────────
export const cod = [
  {
    enunt:
      'Citește două numere întregi de la tastatură și afișează suma lor.\nIntrare: 3 4 → Ieșire: 7',
    stdin: '3 4',
    asteptat: '7',
    indiciu: 'Folosește cin >> a >> b; și cout << a + b;',
    schelet:
      '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    // TODO: afișează suma\n    return 0;\n}\n',
  },
  {
    enunt:
      'Citește un număr natural și afișează SUMA CIFRELOR lui.\nIntrare: 1234 → Ieșire: 10',
    stdin: '1234',
    asteptat: '10',
    indiciu: 'Cât timp numarul > 0: adună numar % 10 la sumă și fă numar /= 10.',
    schelet:
      '#include <iostream>\nusing namespace std;\n\nint main() {\n    int numar;\n    cin >> numar;\n    int suma = 0;\n    // TODO: calculează suma cifrelor\n    cout << suma;\n    return 0;\n}\n',
  },
  {
    enunt:
      'Citește două numere naturale și afișează cmmdc-ul lor (algoritmul lui Euclid).\nIntrare: 12 18 → Ieșire: 6',
    stdin: '12 18',
    asteptat: '6',
    indiciu: 'Cât timp b != 0: rest = a % b; a = b; b = rest. Răspunsul e a.',
    schelet:
      '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    // TODO: aplică algoritmul lui Euclid\n    cout << a;\n    return 0;\n}\n',
  },
  {
    enunt:
      'Citește un număr natural și afișează "DA" dacă este prim, altfel "NU".\nIntrare: 13 → Ieșire: DA',
    stdin: '13',
    asteptat: 'DA',
    indiciu: 'Testează divizorii de la 2 până la √numar. Atenție la numerele < 2.',
    schelet:
      '#include <iostream>\nusing namespace std;\n\nint main() {\n    int numar;\n    cin >> numar;\n    bool prim = numar >= 2;\n    // TODO: verifică primalitatea\n    cout << (prim ? "DA" : "NU");\n    return 0;\n}\n',
  },
  {
    enunt:
      'Citește n, apoi n numere întregi, și afișează-le sortate crescător, separate prin câte un spațiu.\nIntrare:\n5\n5 2 9 1 3\nIeșire: 1 2 3 5 9',
    stdin: '5\n5 2 9 1 3',
    asteptat: '1 2 3 5 9',
    indiciu: 'Citește în vector, folosește sort(v.begin(), v.end()), apoi afișează cu spațiu între elemente.',
    schelet:
      '#include <iostream>\n#include <algorithm>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    vector<int> v(n);\n    for (int i = 0; i < n; ++i) cin >> v[i];\n    // TODO: sortează și afișează\n    return 0;\n}\n',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// GENERARE AUTOMATĂ: „La clasa a __, competența specifică X.Y este:"
// Câte o întrebare grilă pentru FIECARE competență specifică din programele
// școlare (gimnaziu V–VIII, liceu IX–XII). Distractorii sunt alte competențe
// reale din ACEEAȘI clasă; textul competențelor este cel oficial.
// ─────────────────────────────────────────────────────────────────────────────
const competenteSpecifice = {
  'a V-a': {
    '1.1': 'Utilizarea eficientă și în condiții de siguranță a componentelor hardware',
    '1.2': 'Utilizarea eficientă a unor componente software',
    '1.3': 'Utilizarea eficientă și în siguranță a Internetului ca sursă de documentare',
    '2.1': 'Descrierea în limbaj natural a unor algoritmi pentru rezolvarea unor situații din viața cotidiană',
    '2.2': 'Identificarea datelor cu care lucrează algoritmii în scopul utilizării acestora în prelucrări',
    '2.3': 'Construirea algoritmilor cu ajutorul structurii secvențiale pentru rezolvarea unor probleme simple',
    '2.4': 'Construirea algoritmilor care conțin structura alternativă pentru probleme care necesită decizii',
    '3.1': 'Aplicarea operațiilor specifice editoarelor grafice în vederea realizării unor produse informatice',
    '3.2': 'Implementarea unui algoritm cu structură secvențială și/sau alternativă într-un mediu grafic interactiv',
    '3.3': 'Manifestarea creativă prin utilizarea unor aplicații simple de construire a unor jocuri digitale',
  },
  'a VI-a': {
    '1.1': 'Utilizarea eficientă a instrumentelor specializate în scopul realizării unei prezentări',
    '1.2': 'Utilizarea eficientă a instrumentelor specializate în scopul realizării unei animații grafice',
    '1.3': 'Aplicarea operațiilor specifice pentru comunicarea prin Internet',
    '2.1': 'Utilizarea unui mediu grafic-interactiv pentru exersarea algoritmilor',
    '2.2': 'Aplicarea etapelor de rezolvare pentru cerințe simple, corespunzătoare unor situații familiare',
    '2.3': 'Reprezentarea algoritmilor de prelucrare a informației pentru rezolvarea unor situații problemă',
    '3.1': 'Elaborarea de prezentări folosind operații specifice, pentru a ilustra diverse teme',
    '3.2': 'Elaborarea de animații grafice folosind operații specifice pentru a ilustra dinamic diverse teme',
    '3.3': 'Utilizarea unor instrumente specializate pentru obținerea unor produse utile',
  },
  'a VII-a': {
    '1.1': 'Editarea/tehnoredactarea de documente utilizând aplicații specializate',
    '1.2': 'Documentarea pe diferite teme prin utilizarea aplicațiilor audio respectiv audio-video',
    '1.3': 'Utilizarea aplicațiilor colaborative în scopul dezvoltării în echipă a unui produs informatic',
    '1.4': 'Utilizarea unui mediu de programare pentru implementarea algoritmilor',
    '2.1': 'Analizarea enunțului unei probleme simple în vederea rezolvării ei printr-un algoritm',
    '2.2': 'Construirea unor algoritmi elementari care combină structurile fundamentale de control (secvențiale, alternative, repetitive) și reprezentarea lor în pseudocod',
    '3.1': 'Elaborarea unor documente utile în situații cotidiene folosind aplicațiile studiate',
    '3.2': 'Elaborarea unor produse audio respectiv audio-video pentru a ilustra o temă dată',
    '3.3': 'Implementarea algoritmilor într-un mediu de programare în scopul rezolvării unor probleme',
  },
  'a VIII-a': {
    '1.1': 'Utilizarea foilor de calcul tabelar în vederea rezolvării unor situații problemă simple',
    '1.2': 'Utilizarea unui editor dedicat pentru realizarea unor pagini web cu diverse teme',
    '2.1': 'Identificarea șirurilor de valori în diferite contexte de prelucrare în vederea construirii algoritmilor',
    '2.2': 'Rezolvarea unor probleme simple prin construirea unor algoritmi de prelucrare a șirurilor de valori',
    '3.1': 'Elaborarea de produse informatice utilizând aplicații de calcul tabelar',
    '3.2': 'Elaborarea/actualizarea de pagini web conform unor specificații date',
    '3.3': 'Implementarea algoritmilor într-un mediu de programare',
  },
  'a IX-a': {
    '1.1': 'Identificarea aplicațiilor informaticii în viața socială',
    '1.2': 'Recunoașterea situațiilor în care este necesară prelucrarea algoritmică a informațiilor',
    '2.1': 'Descompunerea rezolvării unei probleme în pași',
    '2.2': 'Identificarea tipurilor de date necesare (de intrare, de ieșire, de manevră)',
    '2.3': 'Descrierea coerentă a unei succesiuni de operații prin care se obțin, din datele de intrare, datele de ieșire',
    '3.1': 'Analizarea enunțului unei probleme (date de intrare/ieșire, tipuri, relații) și stabilirea pașilor de rezolvare',
    '3.2': 'Reprezentarea algoritmilor în pseudocod',
    '3.3': 'Respectarea principiilor programării structurate în elaborarea algoritmilor',
    '4.1': 'Elaborarea unui algoritm de rezolvare a unor probleme din aria curriculară a specializării',
    '4.2': 'Alegerea unui algoritm eficient de rezolvare a unei probleme',
    '5.1': 'Identificarea într-un program a structurilor de control învățate',
  },
  'a X-a': {
    '1.1': 'Implementarea algoritmilor reprezentați în pseudocod în limbaj de programare',
    '1.2': 'Utilizarea unui mediu de programare (Pascal sau C/C++)',
    '2.1': 'Identificarea necesității structurării datelor în tablouri',
    '2.2': 'Prelucrarea datelor structurate în tablouri',
    '2.3': 'Utilizarea fișierelor text pentru introducerea datelor și extragerea rezultatelor',
    '3.1': 'Prelucrarea datelor structurate în tablouri (algoritmi fundamentali: căutare, sortare, interclasare)',
    '4.1': 'Elaborarea unui algoritm de rezolvare a unor probleme din aria curriculară a specializării',
    '4.2': 'Alegerea unui algoritm eficient de rezolvare a unei probleme',
  },
  'a XI-a': {
    '1.1': 'Analizarea unei probleme în scopul identificării datelor necesare și alegerea modalităților de structurare a datelor',
    '1.2': 'Identificarea avantajelor utilizării diferitelor metode de structurare a datelor',
    '1.3': 'Utilizarea șirurilor de caractere și a structurilor de date neomogene în modelarea unor situații problemă',
    '1.4': 'Implementarea unor algoritmi de prelucrare a șirurilor de caractere și a structurilor neomogene',
    '1.5': 'Transpunerea unei probleme din limbaj natural în limbaj de grafuri, folosind corect terminologia specifică',
    '1.6': 'Descrierea unor algoritmi simpli de verificare a unor proprietăți specifice grafurilor',
    '2.1': 'Analiza problemei în scopul identificării metodei de programare adecvate',
    '2.2': 'Construirea unor soluții pentru probleme simple care se rezolvă cu ajutorul metodelor de programare',
    '2.3': 'Aplicarea creativă a metodelor de programare pentru rezolvarea unor probleme intradisciplinare/interdisciplinare',
    '3.1': 'Recunoașterea situațiilor în care este necesară utilizarea unor subprograme',
    '3.2': 'Analiza problemei în scopul identificării subproblemelor acesteia',
    '3.3': 'Utilizarea corectă a subprogramelor predefinite și a celor definite de utilizator',
    '3.4': 'Descrierea și aplicarea mecanismului recursivității',
    '3.5': 'Identificarea avantajelor și a dezavantajelor aplicării tehnicii recursive',
  },
  'a XII-a': {
    '1.1': 'Analizarea unei probleme în scopul identificării și clasificării datelor necesare',
    '1.2': 'Identificarea relațiilor dintre date',
    '1.3': 'Identificarea modalităților adecvate de structurare a datelor care intervin într-o problemă',
    '1.4': 'Utilizarea funcțiilor specifice de prelucrare a datelor structurate',
    '2.1': 'Identificarea tehnicilor de programare adecvate rezolvării unei probleme și aplicarea lor creativă',
    '2.2': 'Elaborarea strategiei de rezolvare a unei probleme',
    '2.3': 'Analizarea comparativă a eficienței diferitelor tehnici și alegerea celei mai eficiente variante',
    '3.1': 'Utilizarea instrumentelor de dezvoltare a unei aplicații',
    '3.2': 'Elaborarea și realizarea unei aplicații, folosind un mediu de programare specific',
    '3.3': 'Prezentarea unei aplicații',
  },
}

function amestecaVariante(arr) {
  const copie = arr.slice()
  for (let i = copie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copie[i], copie[j]] = [copie[j], copie[i]]
  }
  return copie
}

for (const clasa of Object.keys(competenteSpecifice)) {
  const coduri = competenteSpecifice[clasa]
  const listaCoduri = Object.keys(coduri)
  for (const codComp of listaCoduri) {
    const corectText = coduri[codComp]
    const distractori = amestecaVariante(
      listaCoduri.filter((c) => c !== codComp).map((c) => coduri[c])
    ).slice(0, 3)
    const optiuni = amestecaVariante([corectText, ...distractori])
    grila.push({
      intrebare: `La clasa ${clasa}, competența specifică ${codComp} este:`,
      optiuni,
      corect: optiuni.indexOf(corectText),
      explicatie: `Competența specifică ${codComp} din programa clasei ${clasa}.`,
      tema: 'Competențe',
    })
  }
}

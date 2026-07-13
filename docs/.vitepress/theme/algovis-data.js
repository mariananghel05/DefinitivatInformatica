// Datele animatorului de algoritmi (componenta AlgoVis.vue).
// Pentru fiecare algoritm: titlul, codul afișat (linii) și generatorul pașilor de execuție.
// Un pas = {
//   line:   indexul liniei de cod evidențiate (animația 1 — „cum se execută codul")
//   note:   explicația pasului, în cuvinte
//   cells:  vectorul principal, ca celule { v, cls } (animația 2 — „cum avansează datele")
//   cells2: al doilea vector (opțional — la interclasare)
//   out:    vectorul-rezultat (opțional — la interclasare)
//   labels / labels2: { index: 'nume' } — săgețile/indicatorii de sub celule (i, j, st, dr, m…)
//   vars:   valorile variabilelor, afișate ca „jetoane"
// }
// Clase de celule: '' normal · cur (element curent) · compare (se compară) ·
//                  swap (se interschimbă) · done (la locul final) · dim (în afara zonei) · found (găsit)

function mk(arr, clsMap = {}) {
  return arr.map((v, i) => ({ v, cls: clsMap[i] || '' }))
}

// unește etichetele care cad pe același index: {0:'st', 0:'dr'} -> '0: st,dr'
function lbl(pairs) {
  const out = {}
  for (const [name, idx] of pairs) {
    if (idx === null || idx === undefined) continue
    out[idx] = out[idx] ? out[idx] + ',' + name : name
  }
  return out
}

/* ============================== CĂUTAREA SECVENȚIALĂ ============================== */
const codSecventiala = [
  'int cautare(vector<int>& v, int x) {',
  '    for (int i = 0; i < v.size(); i++)',
  '        if (v[i] == x)',
  '            return i;        // găsit!',
  '    return -1;               // negăsit',
  '}',
]
function stepsSecventiala() {
  const v = [4, 8, 1, 9, 5], x = 9
  const s = []
  s.push({ line: 0, note: `Căutăm valoarea ${x}, element cu element, de la stânga la dreapta.`, cells: mk(v), labels: {}, vars: { x } })
  for (let i = 0; i < v.length; i++) {
    s.push({ line: 1, note: `i = ${i} — avansăm la elementul următor.`, cells: mk(v, { [i]: 'cur' }), labels: lbl([['i', i]]), vars: { x, i } })
    const eq = v[i] === x
    s.push({ line: 2, note: `Comparăm: v[${i}] = ${v[i]} ${eq ? '= ' + x + ' ✓' : '≠ ' + x}.`, cells: mk(v, { [i]: eq ? 'found' : 'compare' }), labels: lbl([['i', i]]), vars: { x, i } })
    if (eq) {
      s.push({ line: 3, note: `GĂSIT pe poziția ${i} — o returnăm. În cel mai rău caz am fi parcurs tot vectorul: O(n).`, cells: mk(v, { [i]: 'found' }), labels: lbl([['i', i]]), vars: { x, i, rezultat: i } })
      return s
    }
  }
  s.push({ line: 4, note: 'Am parcurs tot vectorul fără succes — returnăm -1.', cells: mk(v), labels: {}, vars: { x, rezultat: -1 } })
  return s
}

/* ================================ CĂUTAREA BINARĂ ================================ */
const codBinara = [
  'int cautareBinara(vector<int>& v, int x) {',
  '    int st = 0, dr = v.size() - 1;',
  '    while (st <= dr) {',
  '        int m = (st + dr) / 2;',
  '        if (v[m] == x) return m;   // găsit',
  '        if (v[m] < x) st = m + 1;  // dreapta',
  '        else          dr = m - 1;  // stânga',
  '    }',
  '    return -1;',
  '}',
]
function stepsBinara() {
  const v = [3, 7, 10, 14, 21, 25, 32], x = 21
  const s = []
  let st = 0, dr = v.length - 1
  const win = (extra = {}) => {
    const m = {}
    for (let k = 0; k < v.length; k++) if (k < st || k > dr) m[k] = 'dim'
    return Object.assign(m, extra)
  }
  s.push({ line: 1, note: `Vectorul e SORTAT (precondiția!). Intervalul de căutare: [${st}, ${dr}].`, cells: mk(v, win()), labels: lbl([['st', st], ['dr', dr]]), vars: { x, st, dr } })
  while (st <= dr) {
    const m = Math.floor((st + dr) / 2)
    s.push({ line: 3, note: `Mijlocul: m = (${st} + ${dr}) / 2 = ${m}.`, cells: mk(v, win({ [m]: 'cur' })), labels: lbl([['st', st], ['dr', dr], ['m', m]]), vars: { x, st, dr, m } })
    if (v[m] === x) {
      s.push({ line: 4, note: `v[${m}] = ${v[m]} = ${x} — GĂSIT! Doar ${s.filter(p => p.line === 3).length} comparații cu mijlocul (log₂ n).`, cells: mk(v, win({ [m]: 'found' })), labels: lbl([['m', m]]), vars: { x, st, dr, m, rezultat: m } })
      return s
    }
    s.push({ line: 4, note: `v[${m}] = ${v[m]} ≠ ${x} — nu e mijlocul.`, cells: mk(v, win({ [m]: 'compare' })), labels: lbl([['st', st], ['dr', dr], ['m', m]]), vars: { x, st, dr, m } })
    if (v[m] < x) {
      st = m + 1
      s.push({ line: 5, note: `${v[m]} < ${x} ⇒ ${x} poate fi doar în DREAPTA. Aruncăm jumătatea stângă: st = ${st}.`, cells: mk(v, win()), labels: lbl([['st', st], ['dr', dr]]), vars: { x, st, dr } })
    } else {
      dr = m - 1
      s.push({ line: 6, note: `${v[m]} > ${x} ⇒ ${x} poate fi doar în STÂNGA. Aruncăm jumătatea dreaptă: dr = ${dr}.`, cells: mk(v, win()), labels: lbl([['st', st], ['dr', dr]]), vars: { x, st, dr } })
    }
  }
  s.push({ line: 8, note: 'Intervalul s-a golit (st > dr) — valoarea nu există: returnăm -1.', cells: mk(v, win()), labels: {}, vars: { x, rezultat: -1 } })
  return s
}

/* ================================ METODA BULELOR ================================ */
const codBule = [
  'void bubbleSort(vector<int>& v) {',
  '    int n = v.size();',
  '    bool schimbat = true;',
  '    for (int i = 0; i < n-1 && schimbat; i++) {',
  '        schimbat = false;',
  '        for (int j = 0; j < n-1-i; j++)',
  '            if (v[j] > v[j+1]) {',
  '                swap(v[j], v[j+1]);',
  '                schimbat = true;',
  '            }',
  '    }',
  '}',
]
function stepsBule() {
  const v = [5, 1, 4, 2]
  const n = v.length
  const s = []
  const doneFrom = (i) => {
    const m = {}
    for (let k = n - i; k < n; k++) m[k] = 'done'
    return m
  }
  s.push({ line: 1, note: 'Comparăm mereu VECINI; cel mai mare „urcă" spre capăt ca o bulă.', cells: mk(v), labels: {}, vars: { n } })
  let schimbat = true
  for (let i = 0; i < n - 1 && schimbat; i++) {
    schimbat = false
    s.push({ line: 4, note: `Trecerea ${i + 1}: presupunem că e deja sortat (schimbat = false).`, cells: mk(v, doneFrom(i)), labels: {}, vars: { i, schimbat } })
    for (let j = 0; j < n - 1 - i; j++) {
      const bad = v[j] > v[j + 1]
      s.push({ line: 6, note: `Comparăm vecinii v[${j}] = ${v[j]} și v[${j + 1}] = ${v[j + 1]}: ${bad ? 'ordine GREȘITĂ' : 'ordine bună'}.`, cells: mk(v, Object.assign(doneFrom(i), { [j]: 'compare', [j + 1]: 'compare' })), labels: lbl([['j', j]]), vars: { i, j, schimbat } })
      if (bad) {
        ;[v[j], v[j + 1]] = [v[j + 1], v[j]]
        schimbat = true
        s.push({ line: 7, note: `Interschimbăm: ${v[j + 1]} ↔ ${v[j]}. Bula mai mare urcă un pas.`, cells: mk(v, Object.assign(doneFrom(i), { [j]: 'swap', [j + 1]: 'swap' })), labels: lbl([['j', j]]), vars: { i, j, schimbat } })
      }
    }
    s.push({ line: 3, note: `Sfârșitul trecerii ${i + 1}: cel mai mare din zona activă e la locul lui definitiv.`, cells: mk(v, doneFrom(i + 1)), labels: {}, vars: { i, schimbat } })
  }
  s.push({ line: 11, note: 'Nicio interschimbare la ultima trecere ⇒ vectorul e sortat. Total: O(n²) în cel mai rău caz.', cells: mk(v, mk(v).reduce((a, _, k) => (a[k] = 'done', a), {})), labels: {}, vars: {} })
  return s
}

/* ============================== SORTAREA PRIN INSERȚIE ============================== */
const codInsertie = [
  'void insertionSort(vector<int>& v) {',
  '    for (int i = 1; i < v.size(); i++) {',
  '        int curent = v[i];   // de inserat',
  '        int j = i - 1;',
  '        while (j >= 0 && v[j] > curent) {',
  '            v[j+1] = v[j];   // mutăm la dreapta',
  '            j--;',
  '        }',
  '        v[j+1] = curent;     // locul potrivit',
  '    }',
  '}',
]
function stepsInsertie() {
  const v = [5, 2, 4, 1]
  const s = []
  const sortedTo = (i, extra = {}) => {
    const m = {}
    for (let k = 0; k <= i; k++) m[k] = 'done'
    return Object.assign(m, extra)
  }
  s.push({ line: 1, note: 'Ca la cărțile de joc: fiecare element nou se INSEREAZĂ la locul lui în partea deja sortată (stânga).', cells: mk(v, { 0: 'done' }), labels: {}, vars: {} })
  for (let i = 1; i < v.length; i++) {
    const curent = v[i]
    s.push({ line: 2, note: `Elementul de inserat: curent = v[${i}] = ${curent}. Zona verde (stânga) e deja sortată.`, cells: mk(v, sortedTo(i - 1, { [i]: 'cur' })), labels: lbl([['i', i]]), vars: { i, curent } })
    let j = i - 1
    while (j >= 0 && v[j] > curent) {
      s.push({ line: 4, note: `v[${j}] = ${v[j]} > ${curent} — trebuie să-i facem loc lui ${curent}.`, cells: mk(v, sortedTo(i - 1, { [j]: 'compare', [i]: 'cur' })), labels: lbl([['j', j]]), vars: { i, j, curent } })
      v[j + 1] = v[j]
      s.push({ line: 5, note: `Mutăm ${v[j + 1]} un pas la dreapta.`, cells: mk(v, sortedTo(i, { [j + 1]: 'swap' })), labels: lbl([['j', j]]), vars: { i, j, curent } })
      j--
    }
    if (j >= 0) {
      s.push({ line: 4, note: `v[${j}] = ${v[j]} ≤ ${curent} — ne oprim: am găsit locul.`, cells: mk(v, sortedTo(i, { [j]: 'compare' })), labels: lbl([['j', j]]), vars: { i, j, curent } })
    }
    v[j + 1] = curent
    s.push({ line: 8, note: `Așezăm curent = ${curent} pe poziția ${j + 1}. Primele ${i + 1} elemente sunt sortate între ele (invariantul!).`, cells: mk(v, sortedTo(i, { [j + 1]: 'found' })), labels: {}, vars: { i, curent } })
  }
  s.push({ line: 10, note: 'Gata: O(n²) în cel mai rău caz, dar aproape liniar pe date deja aproape sortate.', cells: mk(v, sortedTo(v.length - 1)), labels: {}, vars: {} })
  return s
}

/* ============================== SORTAREA PRIN SELECȚIE ============================== */
const codSelectie = [
  'void selectionSort(vector<int>& v) {',
  '    for (int i = 0; i < v.size() - 1; i++) {',
  '        int pozMin = i;      // presupunem minimul',
  '        for (int j = i + 1; j < v.size(); j++)',
  '            if (v[j] < v[pozMin])',
  '                pozMin = j;  // campion nou',
  '        swap(v[i], v[pozMin]);',
  '    }',
  '}',
]
function stepsSelectie() {
  const v = [5, 2, 8, 1]
  const s = []
  const sortedTo = (i, extra = {}) => {
    const m = {}
    for (let k = 0; k < i; k++) m[k] = 'done'
    return Object.assign(m, extra)
  }
  s.push({ line: 1, note: 'La fiecare pas: CĂUTĂM minimul zonei nesortate și îl aducem pe prima poziție liberă.', cells: mk(v), labels: {}, vars: {} })
  for (let i = 0; i < v.length - 1; i++) {
    let pozMin = i
    s.push({ line: 2, note: `Pasul ${i + 1}: presupunem că minimul e v[${i}] = ${v[i]}.`, cells: mk(v, sortedTo(i, { [i]: 'cur' })), labels: lbl([['i', i], ['min', pozMin]]), vars: { i, pozMin } })
    for (let j = i + 1; j < v.length; j++) {
      const better = v[j] < v[pozMin]
      s.push({ line: 4, note: `v[${j}] = ${v[j]} ${better ? '< ' + v[pozMin] + ' — campion nou!' : '≥ ' + v[pozMin] + ' — rămâne vechiul minim.'}`, cells: mk(v, sortedTo(i, { [pozMin]: 'cur', [j]: 'compare' })), labels: lbl([['i', i], ['j', j], ['min', pozMin]]), vars: { i, j, pozMin } })
      if (better) {
        pozMin = j
        s.push({ line: 5, note: `pozMin = ${j}.`, cells: mk(v, sortedTo(i, { [pozMin]: 'cur' })), labels: lbl([['i', i], ['min', pozMin]]), vars: { i, j, pozMin } })
      }
    }
    ;[v[i], v[pozMin]] = [v[pozMin], v[i]]
    s.push({ line: 6, note: `Interschimbăm v[${i}] ↔ v[${pozMin}]: minimul ajunge la locul lui DEFINITIV.`, cells: mk(v, sortedTo(i + 1, { [i]: 'swap', [pozMin]: i === pozMin ? 'swap' : 'swap' })), labels: lbl([['i', i]]), vars: { i, pozMin } })
  }
  s.push({ line: 7, note: 'Primele i poziții conțin mereu cele mai mici valori, în ordine (invariantul selecției). Total: O(n²).', cells: mk(v, v.reduce((a, _, k) => (a[k] = 'done', a), {})), labels: {}, vars: {} })
  return s
}

/* ================================= INTERCLASAREA ================================= */
const codInterclasare = [
  'vector<int> interclasare(vector<int>& a,',
  '                         vector<int>& b) {',
  '    vector<int> c;',
  '    int i = 0, j = 0;',
  '    while (i < a.size() && j < b.size())',
  '        if (a[i] <= b[j]) c.push_back(a[i++]);',
  '        else              c.push_back(b[j++]);',
  '    while (i < a.size()) c.push_back(a[i++]);',
  '    while (j < b.size()) c.push_back(b[j++]);',
  '    return c;',
  '}',
]
function stepsInterclasare() {
  const a = [1, 4, 9], b = [2, 3, 7]
  const c = []
  const s = []
  let i = 0, j = 0
  const snap = (clsA = {}, clsB = {}) => ({
    cells: mk(a, clsA), cells2: mk(b, clsB), out: mk(c.slice()),
    labels: lbl([['i', i < a.length ? i : null]]), labels2: lbl([['j', j < b.length ? j : null]]),
  })
  s.push({ line: 3, note: 'Doi „candidați": cel mai mic element neplasat e mereu în fruntea unuia dintre vectorii SORTAȚI.', ...snap({ [0]: 'cur' }, { [0]: 'cur' }), vars: { i, j } })
  while (i < a.length && j < b.length) {
    const takeA = a[i] <= b[j]
    s.push({ line: 4, note: `Comparăm candidații: a[${i}] = ${a[i]} și b[${j}] = ${b[j]}.`, ...snap({ [i]: 'compare' }, { [j]: 'compare' }), vars: { i, j } })
    if (takeA) {
      c.push(a[i]); i++
      s.push({ line: 5, note: `${a[i - 1]} ≤ ${b[j]} — trece în rezultat elementul din A; i avansează.`, ...snap({ [i - 1]: 'dim' }, {}), vars: { i, j } })
    } else {
      c.push(b[j]); j++
      s.push({ line: 6, note: `${b[j - 1]} < ${a[i]} — trece în rezultat elementul din B; j avansează.`, ...snap({}, { [j - 1]: 'dim' }), vars: { i, j } })
    }
  }
  while (i < a.length) {
    c.push(a[i]); i++
    s.push({ line: 7, note: 'B s-a epuizat — restul lui A trece direct (e deja sortat).', ...snap(), vars: { i, j } })
  }
  while (j < b.length) {
    c.push(b[j]); j++
    s.push({ line: 8, note: 'A s-a epuizat — restul lui B trece direct.', ...snap(), vars: { i, j } })
  }
  s.push({ line: 9, note: 'Fiecare element s-a mutat O SINGURĂ dată ⇒ O(n + m). Rezultatul e sortat prin construcție.', cells: mk(a, { 0: 'dim', 1: 'dim', 2: 'dim' }), cells2: mk(b, { 0: 'dim', 1: 'dim', 2: 'dim' }), out: mk(c, c.reduce((x, _, k) => (x[k] = 'done', x), {})), labels: {}, labels2: {}, vars: {} })
  return s
}

/* ============================== ALGORITMUL LUI EUCLID ============================== */
const codEuclid = [
  'int cmmdc(int a, int b) {',
  '    while (b != 0) {',
  '        int r = a % b;   // restul',
  '        a = b;',
  '        b = r;',
  '    }',
  '    return a;',
  '}',
]
function stepsEuclid() {
  let a = 48, b = 18
  const s = []
  const box = (r, cls = {}) => mk([a, b, r === undefined ? '—' : r], cls)
  const L = { 0: 'a', 1: 'b', 2: 'r' }
  s.push({ line: 0, note: 'cmmdc(48, 18): perechea (a, b) păstrează mereu ACEIAȘI divizori comuni (lema lui Euclid).', cells: box(), labels: L, vars: { a, b } })
  while (b !== 0) {
    s.push({ line: 1, note: `b = ${b} ≠ 0 — mai avem de lucru.`, cells: box(undefined, { 1: 'compare' }), labels: L, vars: { a, b } })
    const r = a % b
    s.push({ line: 2, note: `Restul împărțirii: ${a} mod ${b} = ${r}.`, cells: box(r, { 2: 'cur' }), labels: L, vars: { a, b, r } })
    a = b
    s.push({ line: 3, note: `a preia valoarea lui b: a = ${a}.`, cells: box(r, { 0: 'swap' }), labels: L, vars: { a, b, r } })
    b = r
    s.push({ line: 4, note: `b preia restul: b = ${b}. Perechea a devenit mai mică — de aceea algoritmul se TERMINĂ.`, cells: box(r, { 1: 'swap' }), labels: L, vars: { a, b, r } })
  }
  s.push({ line: 6, note: `b = 0 ⇒ răspunsul e a = ${a}. Verificare: divizorii comuni ai lui (48, 18) sunt {1, 2, 3, 6}.`, cells: box(undefined, { 0: 'found' }), labels: L, vars: { a, b, rezultat: a } })
  return s
}

export const ALGORITHMS = {
  secventiala: { title: 'Căutarea secvențială — O(n)', input: 'v = [4, 8, 1, 9, 5], căutăm x = 9', code: codSecventiala, makeSteps: stepsSecventiala },
  binara: { title: 'Căutarea binară — O(log n)', input: 'v = [3, 7, 10, 14, 21, 25, 32] (sortat), căutăm x = 21', code: codBinara, makeSteps: stepsBinara },
  bule: { title: 'Sortarea prin metoda bulelor — O(n²)', input: 'v = [5, 1, 4, 2]', code: codBule, makeSteps: stepsBule },
  insertie: { title: 'Sortarea prin inserție — O(n²)', input: 'v = [5, 2, 4, 1]', code: codInsertie, makeSteps: stepsInsertie },
  selectie: { title: 'Sortarea prin selecție — O(n²)', input: 'v = [5, 2, 8, 1]', code: codSelectie, makeSteps: stepsSelectie },
  interclasare: { title: 'Interclasarea — O(n + m)', input: 'A = [1, 4, 9], B = [2, 3, 7] (ambele sortate)', code: codInterclasare, makeSteps: stepsInterclasare, twoArrays: true },
  euclid: { title: 'Algoritmul lui Euclid (cmmdc) — O(log min(a, b))', input: 'a = 48, b = 18', code: codEuclid, makeSteps: stepsEuclid },
}

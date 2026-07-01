<script setup>
import { ref, computed } from 'vue'
import { grila, text, cod } from '../cards-data.js'

// ── Configurare compilator extern (gratuit, fără cheie, cu CORS) ──────────────
const WANDBOX_URL = 'https://wandbox.org/api/compile.json'
const WANDBOX_COMPILER = 'gcc-13.2.0'

// ── Modurile de dificultate ──────────────────────────────────────────────────
const moduri = [
  { id: 1, titlu: 'Doar carduri', desc: 'Întrebări grilă cu alegere multiplă.' },
  { id: 2, titlu: 'Carduri + răspuns text', desc: 'Se adaugă întrebări cu răspuns liber (auto-evaluare).' },
  { id: 3, titlu: 'Carduri + cod', desc: 'Se adaugă probleme C++ rulate pe un compilator online.' },
]

// ── Filtrarea pe temă ────────────────────────────────────────────────────────
const teme = computed(() => {
  const set = new Set()
  for (const q of [...grila, ...text, ...cod]) if (q.tema) set.add(q.tema)
  return ['Toate temele', ...Array.from(set).sort((a, b) => a.localeCompare(b, 'ro'))]
})
const temaAleasa = ref('Toate temele')

// câte întrebări sunt disponibile pe tema aleasă, în funcție de mod
function nrPentru(id) {
  let n = grila.length
  if (id >= 2) n += text.length
  if (id >= 3) n += cod.length
  if (temaAleasa.value === 'Toate temele') return n
  let lista = grila.slice()
  if (id >= 2) lista = lista.concat(text)
  if (id >= 3) lista = lista.concat(cod.map((q) => ({ ...q, tema: q.tema || 'Algoritmi' })))
  return lista.filter((q) => q.tema === temaAleasa.value).length
}

// ── Stare generală ───────────────────────────────────────────────────────────
const mod = ref(null)        // null = ecranul de start
const pachet = ref([])       // întrebările amestecate pentru sesiunea curentă
const pozitie = ref(0)
const puncte = ref(0)
const contorizate = ref(0)
const contat = ref(false)    // întrebarea curentă a fost deja punctată?
const terminat = ref(false)

// ── Stare pe tip de întrebare ────────────────────────────────────────────────
const alesGrila = ref(null)
const confirmatGrila = ref(false)

const raspunsText = ref('')
const verificatText = ref(false)
const acoperireText = ref({ atinse: 0, total: 0 })

const codSursa = ref('')
const statusCod = ref('idle') // idle | ruleaza | corect | gresit | eroare | retea
const iesireCod = ref('')
const mesajCod = ref('')

const intrebarea = computed(() => pachet.value[pozitie.value] || null)

// ── Pornirea unei sesiuni ────────────────────────────────────────────────────
function amesteca(arr) {
  const copie = arr.slice()
  for (let i = copie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copie[i], copie[j]] = [copie[j], copie[i]]
  }
  return copie
}

function startMod(id) {
  let lista = grila.map((q) => ({ ...q, tip: 'grila' }))
  if (id >= 2) lista = lista.concat(text.map((q) => ({ ...q, tip: 'text' })))
  if (id >= 3) lista = lista.concat(cod.map((q) => ({ ...q, tip: 'cod', tema: q.tema || 'Algoritmi' })))
  if (temaAleasa.value !== 'Toate temele') lista = lista.filter((q) => q.tema === temaAleasa.value)
  if (lista.length === 0) return // nicio întrebare pe această combinație temă/mod
  pachet.value = amesteca(lista)
  mod.value = id
  pozitie.value = 0
  puncte.value = 0
  contorizate.value = 0
  terminat.value = false
  pregateste()
}

function pregateste() {
  contat.value = false
  alesGrila.value = null
  confirmatGrila.value = false
  raspunsText.value = ''
  verificatText.value = false
  acoperireText.value = { atinse: 0, total: 0 }
  statusCod.value = 'idle'
  iesireCod.value = ''
  mesajCod.value = ''
  codSursa.value = intrebarea.value && intrebarea.value.tip === 'cod' ? intrebarea.value.schelet : ''
}

function contorizeaza(p) {
  if (contat.value) return
  puncte.value += p
  contorizate.value += 1
  contat.value = true
}

function urmatoarea() {
  if (!contat.value) contorizeaza(0) // întrebare sărită = 0 puncte
  if (pozitie.value + 1 >= pachet.value.length) {
    terminat.value = true
  } else {
    pozitie.value += 1
    pregateste()
  }
}

function reia() {
  mod.value = null
  terminat.value = false
}

// ── GRILĂ ────────────────────────────────────────────────────────────────────
function alegeGrila(i) {
  if (confirmatGrila.value) return
  alesGrila.value = i
}
function confirmaGrila() {
  if (alesGrila.value === null || confirmatGrila.value) return
  confirmatGrila.value = true
  contorizeaza(alesGrila.value === intrebarea.value.corect ? 1 : 0)
}

// ── TEXT (verificare offline + auto-evaluare) ────────────────────────────────
function normalizeaza(s) {
  return (s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // elimină diacriticele (semne combinatorii)
    .replace(/[^a-z0-9% ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}
function verificaText() {
  const raspuns = normalizeaza(raspunsText.value)
  const grupuri = intrebarea.value.cuvinteCheie || []
  let atinse = 0
  for (const grup of grupuri) {
    if (grup.some((sinonim) => raspuns.includes(normalizeaza(sinonim)))) atinse++
  }
  acoperireText.value = { atinse, total: grupuri.length }
  verificatText.value = true
}
function noteazaText(p) {
  contorizeaza(p)
}

// ── COD (compilare + rulare prin Wandbox) ────────────────────────────────────
function normalizeazaIesire(s) {
  return (s || '').replace(/\r\n/g, '\n').replace(/[ \t]+\n/g, '\n').replace(/\s+$/, '')
}
async function ruleazaCod() {
  statusCod.value = 'ruleaza'
  iesireCod.value = ''
  mesajCod.value = ''
  try {
    const resp = await fetch(WANDBOX_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        code: codSursa.value,
        compiler: WANDBOX_COMPILER,
        options: 'warning,gnu++17',
        stdin: intrebarea.value.stdin || '',
        'compiler-option-raw': '-std=c++17',
      }),
    })
    if (!resp.ok) throw new Error('HTTP ' + resp.status)
    const data = await resp.json()
    if (data.compiler_error && !data.program_output && data.status !== '0') {
      statusCod.value = 'eroare'
      mesajCod.value = data.compiler_error
      return
    }
    iesireCod.value = data.program_output || '(fără ieșire)'
    const obtinut = normalizeazaIesire(data.program_output)
    const asteptat = normalizeazaIesire(intrebarea.value.asteptat)
    if (obtinut === asteptat) {
      statusCod.value = 'corect'
      contorizeaza(1)
    } else {
      statusCod.value = 'gresit'
      if (data.program_error) mesajCod.value = data.program_error
    }
  } catch (e) {
    statusCod.value = 'retea'
    mesajCod.value =
      'Nu am putut contacta compilatorul online (' + String(e) + '). Verifică conexiunea la internet ' +
      'sau scrie/rulează codul în propriul IDE.'
  }
}

const procent = computed(() =>
  contorizate.value ? Math.round((puncte.value / contorizate.value) * 100) : 0
)
</script>

<template>
  <div class="fc">
    <!-- ECRAN START: alegerea modului -->
    <div v-if="mod === null" class="fc-start">
      <h3>Alege tema și modul de exersare</h3>

      <div class="fc-teme">
        <span class="fc-teme-eticheta">Temă:</span>
        <button
          v-for="t in teme"
          :key="t"
          class="fc-chip"
          :class="{ activ: temaAleasa === t }"
          @click="temaAleasa = t"
        >
          {{ t }}
        </button>
      </div>

      <div class="fc-moduri">
        <button
          v-for="m in moduri"
          :key="m.id"
          class="fc-mod"
          :disabled="nrPentru(m.id) === 0"
          @click="startMod(m.id)"
        >
          <span class="fc-mod-nr">{{ m.id }}</span>
          <span class="fc-mod-titlu">{{ m.titlu }}</span>
          <span class="fc-mod-desc">{{ m.desc }}</span>
          <span class="fc-mod-count">{{ nrPentru(m.id) }} întrebări</span>
        </button>
      </div>
      <p class="fc-nota">
        Modurile 2 și 3 folosesc resurse externe gratuite: verificarea răspunsurilor text se face
        local (pe cuvinte-cheie + auto-evaluare), iar problemele de cod sunt compilate online prin
        <a href="https://wandbox.org" target="_blank" rel="noreferrer">Wandbox</a> (necesită internet).
      </p>
    </div>

    <!-- ECRAN FINAL -->
    <div v-else-if="terminat" class="fc-final">
      <h3>Sesiune încheiată 🎉</h3>
      <p class="fc-scor-final">Scor: <strong>{{ puncte }}</strong> / {{ contorizate }} ({{ procent }}%)</p>
      <button class="fc-btn fc-btn-primar" @click="reia">Reia cu alt mod</button>
    </div>

    <!-- ECRAN ÎNTREBARE -->
    <div v-else class="fc-card">
      <div class="fc-bara">
        <span class="fc-progres">Întrebarea {{ pozitie + 1 }} / {{ pachet.length }}</span>
        <span class="fc-tip" :class="'fc-tip-' + intrebarea.tip">
          {{ intrebarea.tip === 'grila' ? 'Grilă' : intrebarea.tip === 'text' ? 'Răspuns text' : 'Cod C++' }}
        </span>
        <span class="fc-scor">Scor: {{ puncte }} / {{ contorizate }}</span>
      </div>
      <div class="fc-tema" v-if="intrebarea.tema">{{ intrebarea.tema }}</div>

      <!-- TIP: GRILĂ -->
      <template v-if="intrebarea.tip === 'grila'">
        <p class="fc-intrebare">{{ intrebarea.intrebare }}</p>
        <pre v-if="intrebarea.cod" class="fc-cod-view"><code>{{ intrebarea.cod }}</code></pre>
        <div class="fc-optiuni">
          <button
            v-for="(opt, i) in intrebarea.optiuni"
            :key="i"
            class="fc-optiune"
            :class="{
              ales: alesGrila === i && !confirmatGrila,
              corecta: confirmatGrila && i === intrebarea.corect,
              gresita: confirmatGrila && alesGrila === i && i !== intrebarea.corect,
            }"
            :disabled="confirmatGrila"
            @click="alegeGrila(i)"
          >
            <span class="fc-litera">{{ String.fromCharCode(97 + i) }}</span> {{ opt }}
          </button>
        </div>
        <div class="fc-actiuni">
          <button v-if="!confirmatGrila" class="fc-btn fc-btn-primar" :disabled="alesGrila === null" @click="confirmaGrila">
            Verifică
          </button>
          <button v-else class="fc-btn fc-btn-primar" @click="urmatoarea">Următoarea →</button>
        </div>
        <div v-if="confirmatGrila" class="fc-feedback" :class="alesGrila === intrebarea.corect ? 'ok' : 'nu'">
          <strong>{{ alesGrila === intrebarea.corect ? 'Corect!' : 'Greșit.' }}</strong>
          {{ intrebarea.explicatie }}
        </div>
      </template>

      <!-- TIP: TEXT -->
      <template v-else-if="intrebarea.tip === 'text'">
        <p class="fc-intrebare">{{ intrebarea.intrebare }}</p>
        <textarea
          v-model="raspunsText"
          class="fc-textarea"
          rows="4"
          placeholder="Scrie răspunsul tău aici…"
          :disabled="verificatText"
        ></textarea>
        <div class="fc-actiuni">
          <button v-if="!verificatText" class="fc-btn fc-btn-primar" :disabled="!raspunsText.trim()" @click="verificaText">
            Verifică
          </button>
        </div>

        <div v-if="verificatText" class="fc-feedback" :class="acoperireText.atinse === acoperireText.total ? 'ok' : 'partial'">
          <p>
            <strong>Indicii-cheie atinse: {{ acoperireText.atinse }} / {{ acoperireText.total }}.</strong>
            {{ acoperireText.atinse === acoperireText.total
              ? 'Răspunsul tău pare să acopere ideile principale.'
              : 'Compară cu răspunsul-model și notează-te corect.' }}
          </p>
          <details open>
            <summary>Răspuns-model</summary>
            <p class="fc-model">{{ intrebarea.raspunsModel }}</p>
          </details>
          <p class="fc-autonota" v-if="!contat">Cum te-ai descurcat?</p>
          <div class="fc-actiuni" v-if="!contat">
            <button class="fc-btn fc-btn-ok" @click="noteazaText(1)">Corect (+1)</button>
            <button class="fc-btn fc-btn-partial" @click="noteazaText(0.5)">Parțial (+0,5)</button>
            <button class="fc-btn fc-btn-nu" @click="noteazaText(0)">Greșit (0)</button>
          </div>
          <div class="fc-actiuni" v-else>
            <button class="fc-btn fc-btn-primar" @click="urmatoarea">Următoarea →</button>
          </div>
        </div>
      </template>

      <!-- TIP: COD -->
      <template v-else-if="intrebarea.tip === 'cod'">
        <p class="fc-intrebare fc-enunt">{{ intrebarea.enunt }}</p>
        <textarea v-model="codSursa" class="fc-cod" rows="14" spellcheck="false"></textarea>
        <div class="fc-actiuni">
          <button class="fc-btn fc-btn-primar" :disabled="statusCod === 'ruleaza'" @click="ruleazaCod">
            {{ statusCod === 'ruleaza' ? 'Se compilează…' : '▶ Rulează și verifică' }}
          </button>
          <button class="fc-btn" @click="urmatoarea">Sări / Următoarea →</button>
        </div>

        <p class="fc-indiciu" v-if="intrebarea.indiciu">💡 {{ intrebarea.indiciu }}</p>

        <div v-if="iesireCod" class="fc-iesire">
          <div class="fc-iesire-titlu">Ieșirea programului:</div>
          <pre>{{ iesireCod }}</pre>
        </div>

        <div v-if="statusCod === 'corect'" class="fc-feedback ok">
          <strong>Corect!</strong> Ieșirea coincide cu cea așteptată (<code>{{ intrebarea.asteptat }}</code>).
          <div class="fc-actiuni"><button class="fc-btn fc-btn-primar" @click="urmatoarea">Următoarea →</button></div>
        </div>
        <div v-else-if="statusCod === 'gresit'" class="fc-feedback nu">
          <strong>Aproape.</strong> Așteptat: <code>{{ intrebarea.asteptat }}</code>. Mai încearcă.
          <pre v-if="mesajCod" class="fc-eroare">{{ mesajCod }}</pre>
        </div>
        <div v-else-if="statusCod === 'eroare'" class="fc-feedback nu">
          <strong>Eroare de compilare:</strong>
          <pre class="fc-eroare">{{ mesajCod }}</pre>
        </div>
        <div v-else-if="statusCod === 'retea'" class="fc-feedback partial">
          {{ mesajCod }}
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.fc {
  border: 1px solid var(--vp-c-border);
  border-radius: 14px;
  padding: 1.4rem;
  background: var(--vp-c-bg-soft);
  margin: 1.5rem 0;
}

/* START */
.fc-start h3 { margin-top: 0; }
.fc-teme { display: flex; flex-wrap: wrap; align-items: center; gap: 0.4rem; margin-bottom: 1.1rem; }
.fc-teme-eticheta { font-size: 0.85rem; color: var(--vp-c-text-2); margin-right: 0.2rem; }
.fc-chip {
  padding: 0.3rem 0.8rem; border-radius: 999px; cursor: pointer; font-size: 0.85rem; font-weight: 600;
  border: 1px solid var(--vp-c-border); background: var(--vp-c-bg); color: var(--vp-c-text-1); transition: all 0.15s;
}
.fc-chip:hover { border-color: var(--vp-c-brand-1); }
.fc-chip.activ { background: var(--vp-c-brand-1); border-color: var(--vp-c-brand-1); color: #fff; }
.fc-moduri { display: grid; gap: 0.8rem; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }
.fc-mod:disabled { opacity: 0.45; cursor: not-allowed; }
.fc-mod:disabled:hover { border-color: var(--vp-c-border); transform: none; }
.fc-mod-count { margin-top: 0.2rem; font-size: 0.78rem; font-weight: 600; color: var(--vp-c-brand-1); }
.fc-mod {
  display: flex; flex-direction: column; align-items: flex-start; gap: 0.3rem;
  text-align: left; padding: 1rem; border-radius: 12px; cursor: pointer;
  border: 1px solid var(--vp-c-border); background: var(--vp-c-bg);
  transition: border-color 0.2s, transform 0.1s;
}
.fc-mod:hover { border-color: var(--vp-c-brand-1); transform: translateY(-2px); }
.fc-mod-nr {
  display: inline-grid; place-items: center; width: 1.7rem; height: 1.7rem; border-radius: 50%;
  background: var(--vp-c-brand-soft); color: var(--vp-c-brand-1); font-weight: 700;
}
.fc-mod-titlu { font-weight: 700; }
.fc-mod-desc { font-size: 0.85rem; color: var(--vp-c-text-2); }
.fc-nota { font-size: 0.85rem; color: var(--vp-c-text-2); margin-top: 1rem; }

/* BARĂ */
.fc-bara {
  display: flex; justify-content: space-between; align-items: center; gap: 0.5rem;
  font-size: 0.85rem; color: var(--vp-c-text-2); flex-wrap: wrap;
}
.fc-tip { padding: 0.1rem 0.6rem; border-radius: 999px; font-weight: 600; background: var(--vp-c-brand-soft); color: var(--vp-c-brand-1); }
.fc-scor { font-variant-numeric: tabular-nums; }
.fc-tema { display: inline-block; margin: 0.6rem 0 0.2rem; font-size: 0.78rem; color: var(--vp-c-text-3); text-transform: uppercase; letter-spacing: 0.04em; }
.fc-intrebare { font-size: 1.12rem; font-weight: 600; margin: 0.4rem 0 1rem; }
.fc-enunt { white-space: pre-line; font-weight: 500; }
.fc-cod-view {
  background: var(--vp-c-bg-alt); border: 1px solid var(--vp-c-border); border-radius: 8px;
  padding: 0.8rem 1rem; overflow-x: auto; margin: 0 0 1rem;
  font-family: var(--vp-font-family-mono); font-size: 0.84rem; line-height: 1.5; tab-size: 4;
}

/* OPȚIUNI GRILĂ */
.fc-optiuni { display: grid; gap: 0.55rem; }
.fc-optiune {
  text-align: left; padding: 0.7rem 0.9rem; border-radius: 10px; cursor: pointer;
  border: 1px solid var(--vp-c-border); background: var(--vp-c-bg); transition: all 0.15s;
}
.fc-optiune:hover:not(:disabled) { border-color: var(--vp-c-brand-1); }
.fc-optiune.ales { border-color: var(--vp-c-brand-1); background: var(--vp-c-brand-soft); }
.fc-optiune.corecta { border-color: #16a34a; background: rgba(22, 163, 74, 0.14); }
.fc-optiune.gresita { border-color: #dc2626; background: rgba(220, 38, 38, 0.12); }
.fc-litera { font-weight: 700; color: var(--vp-c-brand-1); margin-right: 0.3rem; }

/* ACȚIUNI / BUTOANE */
.fc-actiuni { display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: 1rem; }
.fc-btn {
  padding: 0.55rem 1.1rem; border-radius: 9px; cursor: pointer; font-weight: 600;
  border: 1px solid var(--vp-c-border); background: var(--vp-c-bg); color: var(--vp-c-text-1);
}
.fc-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.fc-btn-primar { background: var(--vp-c-brand-1); border-color: var(--vp-c-brand-1); color: #fff; }
.fc-btn-ok { border-color: #16a34a; color: #16a34a; }
.fc-btn-partial { border-color: #d97706; color: #d97706; }
.fc-btn-nu { border-color: #dc2626; color: #dc2626; }

/* FEEDBACK */
.fc-feedback { margin-top: 1rem; padding: 0.8rem 1rem; border-radius: 10px; font-size: 0.95rem; border: 1px solid var(--vp-c-border); }
.fc-feedback.ok { background: rgba(22, 163, 74, 0.12); border-color: rgba(22, 163, 74, 0.4); }
.fc-feedback.nu { background: rgba(220, 38, 38, 0.1); border-color: rgba(220, 38, 38, 0.35); }
.fc-feedback.partial { background: rgba(217, 119, 6, 0.1); border-color: rgba(217, 119, 6, 0.35); }
.fc-model { font-style: italic; margin: 0.4rem 0 0; }
.fc-autonota { margin: 0.8rem 0 0.2rem; font-weight: 600; }

/* TEXT / COD */
.fc-textarea, .fc-cod {
  width: 100%; box-sizing: border-box; padding: 0.7rem 0.9rem; border-radius: 10px;
  border: 1px solid var(--vp-c-border); background: var(--vp-c-bg); color: var(--vp-c-text-1);
  font-size: 0.95rem; resize: vertical;
}
.fc-cod { font-family: var(--vp-font-family-mono); font-size: 0.86rem; line-height: 1.5; tab-size: 4; }
.fc-indiciu { font-size: 0.86rem; color: var(--vp-c-text-2); margin-top: 0.7rem; }
.fc-iesire { margin-top: 1rem; }
.fc-iesire-titlu { font-size: 0.82rem; color: var(--vp-c-text-2); margin-bottom: 0.2rem; }
.fc-iesire pre, .fc-eroare {
  background: var(--vp-c-bg-alt); border: 1px solid var(--vp-c-border); border-radius: 8px;
  padding: 0.6rem 0.8rem; overflow-x: auto; font-size: 0.85rem; margin: 0;
}
.fc-eroare { margin-top: 0.5rem; white-space: pre-wrap; }

/* FINAL */
.fc-final { text-align: center; padding: 1rem 0; }
.fc-scor-final { font-size: 1.2rem; margin: 0.6rem 0 1.2rem; }
</style>

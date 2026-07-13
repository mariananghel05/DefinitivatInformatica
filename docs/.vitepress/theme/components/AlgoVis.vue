<script setup>
import { ref, computed, onUnmounted } from 'vue'
import { ALGORITHMS } from '../algovis-data.js'

const props = defineProps({
  algo: { type: String, required: true },
})

const def = ALGORITHMS[props.algo]
const steps = def ? def.makeSteps() : []
const idx = ref(0)
const playing = ref(false)
const speed = ref(1200) // ms per pas
let timer = null

const step = computed(() => steps[idx.value] || { line: -1, note: '', cells: [], vars: {} })
const codeLines = computed(() => (def ? def.code : []))

function stop() {
  playing.value = false
  if (timer) { clearInterval(timer); timer = null }
}
function play() {
  if (playing.value) { stop(); return }
  if (idx.value >= steps.length - 1) idx.value = 0
  playing.value = true
  timer = setInterval(() => {
    if (idx.value < steps.length - 1) idx.value++
    else stop()
  }, speed.value)
}
function next() { stop(); if (idx.value < steps.length - 1) idx.value++ }
function prev() { stop(); if (idx.value > 0) idx.value-- }
function reset() { stop(); idx.value = 0 }
function setSpeed(e) {
  speed.value = Number(e.target.value)
  if (playing.value) { stop(); play() }
}
onUnmounted(stop)
</script>

<template>
  <div class="algovis" v-if="def">
    <div class="av-head">
      <strong>{{ def.title }}</strong>
      <span class="av-input">{{ def.input }}</span>
    </div>

    <div class="av-body">
      <!-- Animația 1: execuția codului -->
      <pre class="av-code"><code><span
        v-for="(l, k) in codeLines" :key="k"
        class="av-line" :class="{ hot: k === step.line }">{{ l || ' ' }}</span></code></pre>

      <!-- Animația 2: evoluția datelor -->
      <div class="av-data">
        <div class="av-row" v-if="step.cells && step.cells.length">
          <span class="av-rowname" v-if="def.twoArrays">A</span>
          <div class="av-cellwrap" v-for="(c, k) in step.cells" :key="'a' + k">
            <div class="av-cell" :class="c.cls">{{ c.v }}</div>
            <div class="av-idx">{{ k }}</div>
            <div class="av-ptr">{{ (step.labels && step.labels[k]) || ' ' }}</div>
          </div>
        </div>
        <div class="av-row" v-if="step.cells2">
          <span class="av-rowname">B</span>
          <div class="av-cellwrap" v-for="(c, k) in step.cells2" :key="'b' + k">
            <div class="av-cell" :class="c.cls">{{ c.v }}</div>
            <div class="av-idx">{{ k }}</div>
            <div class="av-ptr">{{ (step.labels2 && step.labels2[k]) || ' ' }}</div>
          </div>
        </div>
        <div class="av-row" v-if="step.out">
          <span class="av-rowname">C</span>
          <div class="av-cellwrap" v-for="(c, k) in step.out" :key="'c' + k">
            <div class="av-cell" :class="c.cls">{{ c.v }}</div>
            <div class="av-idx">{{ k }}</div>
          </div>
          <span class="av-rowhint" v-if="!step.out.length">rezultatul se construiește aici…</span>
        </div>

        <div class="av-vars" v-if="step.vars">
          <span class="av-var" v-for="(val, name) in step.vars" :key="name">{{ name }} = {{ val }}</span>
        </div>

        <div class="av-note">{{ step.note }}</div>
      </div>
    </div>

    <div class="av-controls">
      <button class="av-btn" @click="reset" title="De la început">⏮</button>
      <button class="av-btn" @click="prev" title="Pas înapoi">◀</button>
      <button class="av-btn av-play" @click="play">{{ playing ? '⏸ Pauză' : '▶ Rulează' }}</button>
      <button class="av-btn" @click="next" title="Pas înainte">▶</button>
      <span class="av-progress">pasul {{ idx + 1 }} / {{ steps.length }}</span>
      <label class="av-speed">
        viteză
        <input type="range" min="300" max="2500" step="100" :value="speed" @input="setSpeed"
               style="direction: rtl" />
      </label>
    </div>
  </div>
  <div v-else class="algovis av-missing">Algoritm necunoscut: {{ props.algo }}</div>
</template>

<style scoped>
.algovis {
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  margin: 20px 0;
  background: var(--vp-c-bg-soft);
  overflow: hidden;
}
.av-head {
  display: flex; flex-wrap: wrap; gap: 4px 14px; align-items: baseline;
  padding: 10px 16px;
  border-bottom: 1px solid var(--vp-c-divider);
}
.av-input { font-size: 0.85em; color: var(--vp-c-text-2); }
.av-body { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); }
@media (max-width: 640px) { .av-body { grid-template-columns: 1fr; } }
.av-code {
  margin: 0; padding: 12px 0; font-size: 0.78em; line-height: 1.5;
  background: var(--vp-code-block-bg, var(--vp-c-bg-alt));
  overflow-x: auto;
}
.av-line { display: block; padding: 0 14px; white-space: pre; color: var(--vp-c-text-2); transition: background 0.15s; }
.av-line.hot { background: var(--vp-c-brand-soft); color: var(--vp-c-text-1); font-weight: 600; }
.av-data { padding: 14px 16px; display: flex; flex-direction: column; gap: 8px; min-height: 180px; }
.av-row { display: flex; align-items: flex-start; gap: 4px; flex-wrap: wrap; }
.av-rowname { font-size: 0.8em; font-weight: 700; color: var(--vp-c-text-2); margin: 8px 6px 0 0; width: 14px; }
.av-rowhint { font-size: 0.8em; color: var(--vp-c-text-3); margin-top: 10px; }
.av-cellwrap { display: flex; flex-direction: column; align-items: center; width: 42px; }
.av-cell {
  width: 38px; height: 38px; display: flex; align-items: center; justify-content: center;
  border: 1.5px solid var(--vp-c-divider); border-radius: 6px;
  font-weight: 600; font-variant-numeric: tabular-nums;
  background: var(--vp-c-bg); color: var(--vp-c-text-1);
  transition: background 0.2s, border-color 0.2s, opacity 0.2s, transform 0.2s;
}
.av-cell.cur     { border-color: var(--vp-c-brand-1); background: var(--vp-c-brand-soft); }
.av-cell.compare { border-color: #d29922; background: rgba(210, 153, 34, 0.18); }
.av-cell.swap    { border-color: #e5534b; background: rgba(229, 83, 75, 0.18); transform: translateY(-3px); }
.av-cell.done    { border-color: #57ab5a; background: rgba(87, 171, 90, 0.15); }
.av-cell.found   { border-color: #57ab5a; background: rgba(87, 171, 90, 0.35); transform: scale(1.08); }
.av-cell.dim     { opacity: 0.3; }
.av-idx { font-size: 0.65em; color: var(--vp-c-text-3); margin-top: 2px; }
.av-ptr { font-size: 0.7em; font-weight: 700; color: var(--vp-c-brand-1); min-height: 1em; }
.av-vars { display: flex; flex-wrap: wrap; gap: 6px; }
.av-var {
  font-size: 0.75em; font-family: var(--vp-font-family-mono);
  padding: 1px 8px; border-radius: 10px;
  background: var(--vp-c-default-soft); color: var(--vp-c-text-1);
}
.av-note {
  font-size: 0.85em; line-height: 1.45; color: var(--vp-c-text-1);
  border-left: 3px solid var(--vp-c-brand-1);
  padding: 4px 10px; background: var(--vp-c-bg); border-radius: 0 6px 6px 0;
  min-height: 44px;
}
.av-controls {
  display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
  padding: 10px 16px; border-top: 1px solid var(--vp-c-divider);
}
.av-btn {
  border: 1px solid var(--vp-c-divider); border-radius: 6px;
  padding: 4px 10px; font-size: 0.85em; cursor: pointer;
  background: var(--vp-c-bg); color: var(--vp-c-text-1);
}
.av-btn:hover { border-color: var(--vp-c-brand-1); color: var(--vp-c-brand-1); }
.av-play { font-weight: 600; min-width: 96px; }
.av-progress { font-size: 0.8em; color: var(--vp-c-text-2); margin-left: auto; }
.av-speed { font-size: 0.8em; color: var(--vp-c-text-2); display: flex; align-items: center; gap: 6px; }
.av-speed input { width: 90px; }
.av-missing { padding: 16px; color: var(--vp-c-danger-1, #e5534b); }
</style>

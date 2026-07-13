import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Flashcards from './components/Flashcards.vue'
import AlgoVis from './components/AlgoVis.vue'

// Extinde tema default VitePress (dark/light, sidebar responsive, căutare locală)
// fără a rescrie mecanismele existente — doar identitate vizuală în custom.css,
// componenta interactivă de carduri (pagina „Carduri") și animatorul de algoritmi
// (pagina „Algoritmii — implementări și animații").
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Flashcards', Flashcards)
    app.component('AlgoVis', AlgoVis)
  },
}

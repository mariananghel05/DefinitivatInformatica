import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Flashcards from './components/Flashcards.vue'

// Extinde tema default VitePress (dark/light, sidebar responsive, căutare locală)
// fără a rescrie mecanismele existente — doar identitate vizuală în custom.css
// și componenta interactivă de carduri (pagina „Carduri").
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Flashcards', Flashcards)
  },
}

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ro-RO',
  title: 'Definitivat Informatică & TIC',
  description:
    'Curs complet pentru examenul național de definitivare în învățământ — disciplina Informatică și Tehnologia Informației. Teorie, competențe, metodică și modele de subiecte rezolvate.',

  // Calea de bază pentru găzduire. Local = „/"; pe GitHub Pages (proiect) devine
  // „/nume-repo/", setată automat din CI prin variabila DOCS_BASE (vezi workflow).
  base: process.env.DOCS_BASE || '/',

  // URL-uri „curate" și compatibile cu găzduirea statică
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['meta', { name: 'theme-color', content: '#2563eb' }],
    ['meta', { name: 'author', content: 'Curs Definitivat Informatică și TIC' }],
  ],

  themeConfig: {
    // Bara de sus
    nav: [
      { text: 'Acasă', link: '/' },
      { text: 'Despre examen', link: '/despre-examen' },
      { text: 'Programa', link: '/harta-materiei' },
      {
        text: 'Tematică științifică',
        link: '/stiintific/',
        activeMatch: '/stiintific/',
      },
      {
        text: 'Metodică',
        link: '/metodica/',
        activeMatch: '/metodica/',
      },
      {
        text: 'Competențe',
        items: [
          { text: 'Din programele școlare', link: '/competente-scolare' },
          { text: 'Ale cadrului didactic', link: '/competente-cadru' },
        ],
      },
      {
        text: 'Subiecte',
        link: '/subiecte/',
        activeMatch: '/subiecte/',
      },
      { text: 'Carduri', link: '/carduri' },
      { text: 'Bibliografie', link: '/bibliografie' },
    ],

    sidebar: {
      '/stiintific/': [
        {
          text: 'Tematică științifică',
          items: [
            { text: 'Prezentare modul', link: '/stiintific/' },
            { text: '1. Algoritmi', link: '/stiintific/01-algoritmi' },
            { text: '2. Limbaje de programare (C++)', link: '/stiintific/02-limbaje-programare' },
            { text: '3. Metode de programare', link: '/stiintific/03-metode-programare' },
            { text: '4. Alocarea dinamică a memoriei', link: '/stiintific/04-alocare-dinamica' },
            { text: '5. Teoria grafurilor', link: '/stiintific/05-teoria-grafurilor' },
            { text: '6. Baze de date', link: '/stiintific/06-baze-de-date' },
            { text: '7. Arhitectura sistemelor de calcul', link: '/stiintific/07-arhitectura-sistemelor' },
            { text: '8. Sisteme de operare', link: '/stiintific/08-sisteme-de-operare' },
            { text: '9. Aplicații și programe specializate', link: '/stiintific/09-aplicatii-specializate' },
            { text: '10. Rețele de calculatoare', link: '/stiintific/10-retele-de-calculatoare' },
          ],
        },
      ],
      '/metodica/': [
        {
          text: 'Metodica predării',
          items: [
            { text: 'Prezentare modul', link: '/metodica/' },
            { text: '1. Proiectarea didactică', link: '/metodica/01-proiectare-didactica' },
            { text: '2. Strategii didactice', link: '/metodica/02-strategii-didactice' },
            { text: '3. Evaluarea randamentului școlar', link: '/metodica/03-evaluare-randament' },
          ],
        },
      ],
      '/subiecte/': [
        {
          text: 'Modele de subiecte',
          items: [
            { text: 'Prezentare', link: '/subiecte/' },
            { text: 'Varianta 1 — Model 2024 (oficial)', link: '/subiecte/varianta-1' },
            { text: 'Varianta 2 — 2025 (oficial)', link: '/subiecte/varianta-2' },
            { text: 'Varianta 3 — antrenament', link: '/subiecte/varianta-3' },
          ],
        },
      ],
    },

    // Căutare locală, fără servicii externe
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Caută',
            buttonAriaLabel: 'Caută în curs',
          },
          modal: {
            displayDetails: 'Afișează detalii',
            resetButtonTitle: 'Resetează căutarea',
            backButtonTitle: 'Închide căutarea',
            noResultsText: 'Niciun rezultat pentru',
            footer: {
              selectText: 'pentru a selecta',
              navigateText: 'pentru a naviga',
              closeText: 'pentru a închide',
            },
          },
        },
      },
    },

    // Etichete UI în limba română
    outline: { label: 'Pe această pagină', level: [2, 3] },
    docFooter: { prev: 'Pagina anterioară', next: 'Pagina următoare' },
    darkModeSwitchLabel: 'Temă',
    lightModeSwitchTitle: 'Comută pe tema deschisă',
    darkModeSwitchTitle: 'Comută pe tema întunecată',
    sidebarMenuLabel: 'Meniu',
    returnToTopLabel: 'Sus',
    langMenuLabel: 'Limbă',
    lastUpdated: {
      text: 'Ultima actualizare',
    },

    footer: {
      message:
        'Material de pregătire neoficial. Verificați întotdeauna metodologia și calendarul în vigoare pe edu.ro.',
      copyright: 'Curs Definitivat — Informatică și Tehnologia Informației',
    },
  },
})

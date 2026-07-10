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
      {
        text: 'Programa',
        items: [
          { text: 'Harta materiei', link: '/harta-materiei' },
          { text: 'Conținuturi pe clase (V–XII)', link: '/programa-clase' },
          { text: 'Lecții în practică (V–XII)', link: '/lectii/' },
        ],
      },
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
      '/lectii/': [
        {
          text: 'Lecții pe clase — în practică',
          items: [
            { text: 'Catalogul lecțiilor (V–XII)', link: '/lectii/' },
          ],
        },
        {
          text: 'Clasa a V-a — Algoritmi',
          collapsed: false,
          items: [
            { text: '1. Algoritmul — noțiune și proprietăți', link: '/lectii/v-01-algoritmul' },
            { text: '2. Date, variabile, expresii', link: '/lectii/v-02-date-variabile-expresii' },
            { text: '3. Structura secvențială', link: '/lectii/v-03-structura-secventiala' },
            { text: '4. Structura alternativă', link: '/lectii/v-04-structura-alternativa' },
            { text: '5. Proiecte în Scratch', link: '/lectii/v-05-medii-grafice-scratch' },
          ],
        },
        {
          text: 'Clasa a V-a — TIC',
          collapsed: true,
          items: [
            { text: '1. Norme de ergonomie și siguranță', link: '/lectii/v-06-norme-ergonomie-siguranta' },
            { text: '2. Tipuri de sisteme de calcul', link: '/lectii/v-07-tipuri-sisteme-calcul' },
            { text: '3. Arhitectura unui sistem de calcul', link: '/lectii/v-08-arhitectura-sistem-calcul' },
            { text: '4. Dispozitive; unități de măsură', link: '/lectii/v-09-dispozitive-unitati-masura' },
            { text: '5. Sistemul de operare; fișiere', link: '/lectii/v-10-sistem-operare-fisiere' },
            { text: '6. Internet: căutare, siguranță', link: '/lectii/v-11-internet-siguranta' },
            { text: '7. Editoare grafice', link: '/lectii/v-12-editoare-grafice' },
          ],
        },
        {
          text: 'Clasa a VI-a',
          collapsed: true,
          items: [
            { text: '1. Prezentări — interfață', link: '/lectii/vi-01-prezentari-interfata' },
            { text: '2. Obiecte în prezentări', link: '/lectii/vi-02-prezentari-obiecte' },
            { text: '3. Animații, tranziții, estetică', link: '/lectii/vi-03-prezentari-animatii-estetica' },
            { text: '4. Animații grafice', link: '/lectii/vi-04-animatii-grafice' },
            { text: '5. Repetitiva cu contor', link: '/lectii/vi-05-structura-repetitiva-contor' },
            { text: '6. Repetitive condiționate', link: '/lectii/vi-06-repetitive-conditionate' },
            { text: '7. Schema logică', link: '/lectii/vi-07-schema-logica' },
            { text: '8. Pseudocodul', link: '/lectii/vi-08-pseudocod' },
            { text: '9. E-mail și netichetă', link: '/lectii/vi-09-email-neticheta' },
            { text: '10. Proiecte Scratch cu repetiții', link: '/lectii/vi-10-proiecte-scratch-repetitii' },
          ],
        },
        {
          text: 'Clasa a VII-a',
          collapsed: true,
          items: [
            { text: '1. Editorul de texte — formatare', link: '/lectii/vii-01-word-document' },
            { text: '2. Obiecte în document', link: '/lectii/vii-02-word-obiecte' },
            { text: '3. Prelucrare audio-video', link: '/lectii/vii-03-audio-video' },
            { text: '4. Aplicații colaborative', link: '/lectii/vii-04-aplicatii-colaborative' },
            { text: '5. Primul program C++', link: '/lectii/vii-05-primul-program-cpp' },
            { text: '6. Date numerice; citire/afișare', link: '/lectii/vii-06-date-citire-afisare' },
            { text: '7. Structura liniară', link: '/lectii/vii-07-structura-liniara' },
            { text: '8. Structura alternativă (if/else)', link: '/lectii/vii-08-structura-alternativa-cpp' },
            { text: '9. Repetitive (while, for)', link: '/lectii/vii-09-structuri-repetitive-cpp' },
          ],
        },
        {
          text: 'Clasa a VIII-a',
          collapsed: true,
          items: [
            { text: '1. Excel — registru și formule', link: '/lectii/viii-01-excel-interfata-formule' },
            { text: '2. Excel — funcții și sortare', link: '/lectii/viii-02-excel-functii-sortare' },
            { text: '3. Excel — grafice', link: '/lectii/viii-03-excel-grafice' },
            { text: '4. HTML — structura paginii', link: '/lectii/viii-04-html-structura' },
            { text: '5. HTML — formatare, legături', link: '/lectii/viii-05-html-formatare-legaturi' },
            { text: '6. Șiruri de valori — parcurgere', link: '/lectii/viii-06-siruri-citire-parcurgere' },
            { text: '7. Numărare, sumă, produs', link: '/lectii/viii-07-numarare-suma-produs' },
            { text: '8. Minim și maxim', link: '/lectii/viii-08-minim-maxim' },
            { text: '9. Verificarea unei proprietăți', link: '/lectii/viii-09-verificarea-proprietatii' },
          ],
        },
        {
          text: 'Clasa a IX-a',
          collapsed: true,
          items: [
            { text: '1. Informatica și societatea', link: '/lectii/ix-01-informatica-societate' },
            { text: '2. Etapele rezolvării; algoritmul', link: '/lectii/ix-02-etapele-rezolvarii-algoritmul' },
            { text: '3. Date și operații', link: '/lectii/ix-03-date-operatii' },
            { text: '4. Pseudocodul', link: '/lectii/ix-04-pseudocod' },
            { text: '5. Cifrele unui număr', link: '/lectii/ix-05-cifrele-unui-numar' },
            { text: '6. Divizibilitate; primalitate', link: '/lectii/ix-06-divizibilitate-primalitate' },
            { text: '7. Secvențe de valori', link: '/lectii/ix-07-secvente-valori' },
            { text: '8. Șiruri recurente (Fibonacci)', link: '/lectii/ix-08-siruri-recurente' },
            { text: '9. Eficiență; aplicații', link: '/lectii/ix-09-eficienta-aplicatii' },
          ],
        },
        {
          text: 'Clasa a X-a',
          collapsed: true,
          items: [
            { text: '1. C++ — elemente de bază', link: '/lectii/x-01-cpp-elemente-baza' },
            { text: '2. Structuri de control', link: '/lectii/x-02-structuri-control' },
            { text: '3. Tablouri unidimensionale', link: '/lectii/x-03-tablouri-unidimensionale' },
            { text: '4. Tablouri bidimensionale', link: '/lectii/x-04-tablouri-bidimensionale' },
            { text: '5. Fișiere text', link: '/lectii/x-05-fisiere-text' },
            { text: '6. Căutarea secvențială și binară', link: '/lectii/x-06-cautare' },
            { text: '7. Metode de sortare', link: '/lectii/x-07-sortare' },
            { text: '8. Interclasarea', link: '/lectii/x-08-interclasare' },
            { text: '9. Prelucrări pe matrice', link: '/lectii/x-09-prelucrari-matrice' },
            { text: '10. Aplicații practice', link: '/lectii/x-10-aplicatii-practice' },
          ],
        },
        {
          text: 'Clasa a XI-a',
          collapsed: true,
          items: [
            { text: '1. Șiruri de caractere', link: '/lectii/xi-01-siruri-caractere' },
            { text: '2. Struct', link: '/lectii/xi-02-struct' },
            { text: '3. Liste; stiva și coada', link: '/lectii/xi-03-liste-stiva-coada' },
            { text: '4. Grafuri — terminologie', link: '/lectii/xi-04-grafuri-terminologie' },
            { text: '5. Reprezentarea grafurilor', link: '/lectii/xi-05-reprezentarea-grafurilor' },
            { text: '6. Parcurgeri BFS și DFS', link: '/lectii/xi-06-parcurgeri-bfs-dfs' },
            { text: '7. Subprograme', link: '/lectii/xi-07-subprograme' },
            { text: '8. Recursivitatea', link: '/lectii/xi-08-recursivitate' },
            { text: '9. Divide et Impera', link: '/lectii/xi-09-divide-et-impera' },
            { text: '10. Backtracking', link: '/lectii/xi-10-backtracking' },
          ],
        },
        {
          text: 'Clasa a XII-a',
          collapsed: true,
          items: [
            { text: '1. Entități, atribute, relații', link: '/lectii/xii-01-entitati-relatii' },
            { text: '2. Normalizarea (FN1–FN3)', link: '/lectii/xii-02-normalizare' },
            { text: '3. Tabele — structură, operații', link: '/lectii/xii-03-tabele' },
            { text: '4. Chei și integritate', link: '/lectii/xii-04-chei-integritate' },
            { text: '5. SQL — SELECT', link: '/lectii/xii-05-sql-select' },
            { text: '6. SQL — DML și DDL', link: '/lectii/xii-06-sql-dml-ddl' },
            { text: '7. Dezvoltarea profesională', link: '/lectii/xii-07-dezvoltare-profesionala' },
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

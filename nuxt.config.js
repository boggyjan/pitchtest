export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  server: {
    port: 5678,
    host: '0.0.0.0' // default: localhost
  },
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    'nuxt-i18n'
  ],
  /*
  ** serverMiddleware
  */
  serverMiddleware: [
    { path: '/api/token', handler: '~/middleware/token.js' },
    { path: '/api/score', handler: '~/middleware/score.js' }
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** i18n module configuration
  ** See https://i18n.nuxtjs.org/
  */
  i18n: {
    locales: [
      { code: 'tw', name: '繁體中文', shortName: '繁', iso: 'zh-Hant', file: 'tw.js' },
      { code: 'en', name: 'English', shortName: 'EN', iso: 'en', file: 'en.js' },
      { code: 'jp', name: '日本語', shortName: '日', iso: 'ja', file: 'jp.js' }
    ],
    lazy: true,
    langDir: './i18n/',
    defaultLocale: 'tw',
    vueI18n: {
      fallbackLocale: 'tw'
      // dateTimeFormats,
      // numberFormats
    },
    // vuex: {
    //   moduleName: 'i18n',
    //   syncLocale: true
    // },
    // detectBrowserLanguage: false
    // strategy: 'no_prefix',
    // detectBrowserLanguage: {
    //   useCookie: false,
    //   alwaysRedirect: true
    // },
    seo: true,
    baseUrl: 'https://app.boggy.tw/pitchtest'
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extend (config, { isDev }) {
      config.node = {
        fs: 'empty'
      }
    }
  }
}

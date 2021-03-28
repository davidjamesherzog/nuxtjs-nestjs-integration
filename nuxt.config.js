import bootstrap from './.nest/nest.js';

const isDev = process.env.NODE_ENV === 'development';

const config = async () => ({
  srcDir: 'client/',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtjs-nestjs-integration',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  serverMiddleware: isDev ? [] : [{ path: '/api', handler: await bootstrap() }],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: isDev ? 'http://localhost:4000/api' : 'http://localhost:3000/api'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
});

export default config;

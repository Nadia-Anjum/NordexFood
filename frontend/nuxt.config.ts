// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  components: [
    { path: '~/components', pathPrefix: false },
  ],
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    "@nuxt/image",
    "nuxt-proxy",
    '@formkit/auto-animate'
  ],  
  pinia: {
    storesDirs: ['./stores/**'],
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      bodyAttrs: {
        class: '',
      },
    }
  },
  proxy: {
    options: {
      target: process.env.API_BASE_URL || 'http://localhost:3000',
      changeOrigin: true,
      pathRewrite: { 
        '^/umbraco': '/umbraco' 
      },
      pathFilter: [
        '/umbraco'
      ]
    }
  },
  image: {
    domains: [process.env.IMAGE_BASE_URL != undefined ? process.env.IMAGE_BASE_URL : ''],
    format: ['webp'],
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
    quality: 100,
  },
  runtimeConfig: {
    public: {
      imageBaseUrl: process.env.IMAGE_BASE_URL,
      baseUrl: process.env.BASE_URL,
      apiBaseUrl: process.env.API_BASE,
      isDev: process.env.IS_DEV
    }
  }
})
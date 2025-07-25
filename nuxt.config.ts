// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  components: true,

  icon: {
    customCollections: [
      {
        prefix: 'homework',
        dir: './assets/images/icons',
      },
    ],
  },

  fonts: {
    defaults: {
      weights: [300, 400, 500, 600, 700],
    }
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/icon'
  ]
})
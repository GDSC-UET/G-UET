// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'DM Sans': [400, 700]
        }
      }
    ],
    '@nuxt/eslint',
    '@nuxt/image'
  ],
  colorMode: {
    preference: 'light'
  },
  devtools: { enabled: true },
  srcDir: 'src',
  css: ['~/assets/css/global.css', '~/assets/css/variables.css'],
  compatibilityDate: '2024-07-28'
})

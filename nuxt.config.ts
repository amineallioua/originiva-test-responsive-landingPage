export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon',  '@nuxt/image',],
  plugins: [
    '~/plugins/fontawesome.js' , '~/plugins/swiper.js'
  ],
  image: {
    // Options
    // The default is 'static', you can also set other providers here if needed
    dir: 'assets/images'
  },
  css: [
    '@fortawesome/fontawesome-free/css/all.css'
  ]
})
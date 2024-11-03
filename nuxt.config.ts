




export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image'
  ],
  plugins: [
    '~/plugins/fontawesome.js',
    '~/plugins/swiper.js'
  ],
  
  image: {
    // Set the directory for local images if using the default provider
    dir: 'assets/images'
  },
  
  css: [
    '@fortawesome/fontawesome-free/css/all.css'
  ],
  
  googleFonts: {
    families: {
      Varta: [400, 700],
      Merriweather: [300, 400, 700],
      Karla: [700],
    },
  },
});

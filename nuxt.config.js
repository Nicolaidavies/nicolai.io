module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nicolai Davies',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nicolai Davies, I am a software developer' },
      { name: 'google-site-verification', content: 'huDKm3IBMy5SiMUWAqhzqsgUMd59PO--GFMcN3gd8Dw'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/fonts/font-awesome.css', defer: true}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#333' },
  modules: [
    '@nuxtjs/pwa',
    ['@nuxtjs/google-analytics', {
      id: 'UA-120569763-1'
    }],
    ['nuxt-robots-module', {
      UserAgent: '*',
      Disallow: ''
    }]
  ],
  plugins: [
    { src: '~/plugins/localStorage.js', ssr: false }, 
    { src: '~/plugins/console.js', ssr: false }
  ],
  manifest: {
    name: 'Nicolai Davies',
    lang: 'en'
  }
}

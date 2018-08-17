module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nicolai Davies',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#333' },
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
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
  },
  sitemap: {
    hostname: 'https://nicolai.io',
    generate: true,
    routes: [
      '/projects/fairstart',
      '/projects/waterford',
      '/projects/emoyeni',
      '/projects/momentjs'
    ]
  }
}

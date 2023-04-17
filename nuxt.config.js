const projects = require('./projects.json')
const routes = projects.map(p => `/projects/${p.name}`)

module.exports = {
  css: ['@/static/main.css'],
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
    ],
    script: [
      { src: "https://beamanalytics.b-cdn.net/beam.min.js", "data-token": "2e471d58-aec0-4a7c-a32c-be4b305582c9", async: true }
    ] 
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#333' },
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    ['nuxt-robots-module', {
      UserAgent: '*',
      Disallow: ''
    }],
    ['@nuxtjs/moment', ['ss']]
  ],
  plugins: [
    { src: '~/plugins/localStorage.js', ssr: false }, 
    { src: '~/plugins/console.js', ssr: false }
  ],
  manifest: {
    name: 'Nicolai Davies',
    short_name: 'Nicolai',
    lang: 'en'
  },
  sitemap: {
    hostname: 'https://nicolai.io',
    generate: true,
    routes
  },
  generate: {
    routes
  }
}

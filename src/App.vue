<template>
  <div id="app">
    <Navigation />

    <router-view />

    <Footer />
  </div>
</template>

<script>
  import Navigation from './components/Navigation.vue'
  import Footer from './components/Footer.vue'
  export default {
    name: 'app',
    components: {Navigation, Footer}
  }
</script>

<style>
  #app {
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
  }
</style>

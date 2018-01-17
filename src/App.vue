<template>
  <div id="app">
    <Navigation />

    <router-view />

    <PageFooter />
  </div>
</template>

<script>
  import Navigation from './components/Navigation.vue'
  import PageFooter from './components/Footer.vue'
  export default {
    name: 'app',
    components: {Navigation, PageFooter}
  }
</script>

<style>
  #app {
    font-family: -apple-system, "SF Pro Display", BlinkMacSystemFont, "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
  }


  h1 {
    letter-spacing: .008em;
    color: #333;
  }

  h3 {
    letter-spacing: .008em;
    color: #333;
    margin-bottom: 1em;
  }

  p {
    color: #333;
    line-height: 1.52947;
  }
</style>

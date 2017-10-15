<template>
  <div id="app">
    <Navigation />

    <router-view/>
  </div>
</template>

<script>
  import Navigation from './components/Navigation.vue'
  export default {
    name: 'app',
    components: {Navigation}
  }
</script>

<style>
  #app {
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
  }
</style>

<template>
  <div id="app">
    <Navigation  />

    <nuxt class="main"  />

    <PageFooter  />
  </div>
</template>

<script>
  import Navigation from '../components/Navigation.vue'
  import PageFooter from '../components/Footer.vue'
  export default {
    name: 'app',
    components: {Navigation, PageFooter}
  }
</script>

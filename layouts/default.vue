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

<style>
  #app {
    font-family: -apple-system, "SF Pro Display", BlinkMacSystemFont, "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .main {
    flex-grow: 1;
  }

  html {
    font-size: 16px;
  }

  body {
    margin: 0;
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

  a,
  a:link,
  a:visited,
  a:focus,
  a:active {
    color: #43c3e7;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  ::selection {
    background-color: lightgray;
  }
</style>

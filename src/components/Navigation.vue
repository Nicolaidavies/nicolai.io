<template>
  <nav>
    <router-link to="projects">Projects</router-link>
    <router-link to="/">Home</router-link>
    <router-link to="resume">Resume</router-link>
  </nav>
</template>

<script>
  //import { mapState, mapActions, mapMutations } from 'vuex'

  export default {
    name: 'Navigation'
  }
</script>

<style scoped>
  nav {
    padding: 1em 0;
    text-align: center;
    /* Side scrolling menu */
    white-space: nowrap;
    overflow-x: scroll;
  }

  a {
    display: inline;
    padding: 0 1em;
    color: #9E9E9E;
    text-decoration: none;
    font-size: 1em;
  }

  a:hover {
    color: #424242;
    text-decoration: underline;
  }
</style>

<style>
  .router-link-exact-active {
    color: black !important;
    font-size: 34px !important;
  }

  .router-link-exact-active:hover {
    text-decoration: none !important;
  }
</style>
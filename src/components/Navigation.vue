<template>
  <nav>
    <a v-for="link in links" :href="link.url">{{link.title}}</a>
  </nav>
</template>

<script>
  //import { mapState, mapActions, mapMutations } from 'vuex'

  export default {
    name: 'Navigation',
    data() {
      return {
        links: [
          {
            title: "Home",
            url: "/"
          },
          {
            title: "Projects",
            url: "/projects"
          },
          {
            title: "Contact",
            url: "/"
          }
        ]
      }
    },
    methods: {}
  }
</script>

<style scoped>
  nav {
    padding: 1em 0;
    text-align: center;
    padding-left: 0;
    overflow-x: scroll;
  }

  a {
    display: inline;
    padding: 0 1em;
    color: #9E9E9E;
    text-decoration: none;
  }

  a:hover {
    color: #424242;
    text-decoration: underline;
  }
</style>
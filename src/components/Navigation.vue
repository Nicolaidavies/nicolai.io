<template>
  <nav class="navigation">
    <router-link to="/projects" active-class="active">
      Projects
    </router-link>

    <router-link to="/" exact active-class="active">
      <i class="fa fa-home" aria-hidden="true"></i>
    </router-link>

    <router-link  to="/resume" active-class="active">
      Resume
    </router-link>
  </nav>
</template>

<script>
  export default {
    name: 'Navigation'
  }
</script>

<style scoped>
  nav {
    padding: 2em 0;
    text-align: center;
  }

  .active {
    color: black !important;
  }

  a {
    display: inline;
    padding: 0 1em;
    color: #9E9E9E;
    text-decoration: none;
    font-size: 1.5em;
  }

  a:hover {
    color: #424242;
    text-decoration: underline;
  }
</style>
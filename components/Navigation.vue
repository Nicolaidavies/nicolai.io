<template>
  <nav class="navigation">
    <router-link to="/projects" class="link" active-class="active">
      Projects
    </router-link>

    <router-link to="/" exact class="link" active-class="active">
      <i class="fa fa-home" aria-hidden="true"></i>
    </router-link>

    <router-link  to="/resume" class="link" active-class="active">
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
  .navigation {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;

    padding: 2em 0;
    text-align: center;
  }

  .link {
    flex: 1;
    color: #9E9E9E;
    text-decoration: none;
    font-size: 1.5em;
  }

  .link:hover, .link.active {
    color: #424242;
    text-decoration: underline;
  }

  @media (max-width: 300px) {
    .navigation {
      flex-direction: column;
      padding: 1em 0;
    }

    .link {
      padding: 0.25em 0;
    }
  }
</style>
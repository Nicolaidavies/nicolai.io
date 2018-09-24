<template>
  <nav class="navigation">
      
    <router-link to="/" class="icon" title="About">
      <img style="width: 25px" src="/icon_small.png" alt="Nicolai Davies' Icon">
    </router-link>

    <div class="links">
      <router-link to="/" exact class="link" active-class="active" title="About">
        About
      </router-link>

      <router-link to="/projects" class="link" active-class="active">
        Projects
      </router-link>

      <router-link  to="/resume" class="link" active-class="active">
        Resume
      </router-link>

      <router-link  to="/contact" class="link" active-class="active">
        Contact
      </router-link>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Navigation'
  }
</script>

<style scoped>
  .navigation {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    
    padding: 1em 0;
    box-shadow: 0 2px 0 0 #f5f5f5;

    display: flex;
    justify-content: space-between;
  }

  .icon {
    padding: 0 1em;
  }

  .links {
    padding-top: 0.2em;
  }

  .link {
    color: black;
    text-decoration: none;
    font-size: 1.2em;
    margin: 0 1em;
  }

  .link:hover, 
  .link.active {
    color: #43c3e7;
  }
  
  .link:hover {
    text-decoration: underline;
  }

  @media (max-width: 500px) {
    .links {
      width: 100%;
      text-align: center;
    }

    .link {
      font-size: 1em; 
    }

    .icon {
      display: none;
    }
  }
</style>
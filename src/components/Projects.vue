<template>
  <div>
    <h1 class="title">Projects</h1>
    <div class="projects">

      <div class="project">
        <img class="project-logo" src="/static/projects/emoyeni/logo.png">
        <h3 class="project-title">Emoyeni</h3>
        <p class="project-description">Send airtime, recharge data, use mobile banking and much much more in the new Emoyeni.</p>
      </div>

      <div class="project">
        <img class="project-logo" src="/static/projects/emoyeni/logo.png">
        <h3 class="project-title">Emoyeni</h3>
        <p class="project-description">Send airtime, recharge data, use mobile banking and much much more in the new Emoyeni.</p>
      </div>

      <div class="project">
        <img class="project-logo" src="/static/projects/emoyeni/logo.png">
        <h3 class="project-title">Emoyeni</h3>
        <p class="project-description">Send airtime, recharge data, use mobile banking and much much more in the new Emoyeni.</p>
      </div>

      <div class="project">
        <img class="project-logo" src="/static/projects/emoyeni/logo.png">
        <h3 class="project-title">Emoyeni</h3>
        <p class="project-description">Send airtime, recharge data, use mobile banking and much much more in the new Emoyeni.</p>
      </div>

      <div class="project">
        <img class="project-logo" src="/static/projects/emoyeni/logo.png">
        <h3 class="project-title">Emoyeni</h3>
        <p class="project-description">Send airtime, recharge data, use mobile banking and much much more in the new Emoyeni.</p>
      </div>

    </div>
  </div>
</template>

<script>
  //import { mapState, mapActions, mapMutations } from 'vuex'

  export default {
    name: 'Projects.vue',
    mounted() {
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
  .title {
    text-align: center;
  }

  .projects {
    max-width: 800px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
  }

  .project {
    flex: 1;

    margin: 15px;
    padding: 1em 2em;
    max-width: 300px;

    text-align: center;

    box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
    border-radius: 10px;
  }

  .project-logo {
    width: 200px;
  }
</style>
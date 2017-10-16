<template>
  <div>
    <div class="projects">

      <div class="project">
        <div class="project-background" style="background-image: url(/static/projects/emoyeni/logo.png);"></div>
        <h3 class="project-title">Emoyeni</h3>
        <p class="project-description">Send airtime, recharge data, use mobile banking and much much more in the new Emoyeni.</p>
      </div>

      <div class="project">
        <div class="project-background" style="background-image: url(/static/projects/waterford/site.png);"></div>
        <h3 class="project-title">Waterford.sz</h3>
        <p class="project-description">The official website for Waterford Kamhlaba UWCSA</p>
      </div>

      <div class="project">
        <div class="project-background" style="background-image: url(/static/projects/emoyeni/logo.png);"></div>
        <h3 class="project-title">Emoyeni</h3>
        <p class="project-description">Send airtime, recharge data, use mobile banking and much much more in the new Emoyeni.</p>
      </div>

      <div class="project">
        <div class="project-background" style="background-image: url(/static/projects/waterford/site.png);"></div>
        <h3 class="project-title">Waterford.sz</h3>
        <p class="project-description">The official website for Waterford Kamhlaba UWCSA</p>
      </div>

      <div class="project">
        <div class="project-background" style="background-image: url(/static/projects/emoyeni/logo.png);"></div>
        <h3 class="project-title">Emoyeni</h3>
        <p class="project-description">Send airtime, recharge data, use mobile banking and much much more in the new Emoyeni.</p>
      </div>


    </div>
  </div>
</template>

<script>
  //import { mapState, mapActions, mapMutations } from 'vuex'

  export default {
    name: 'Projects',
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
    max-width: 400px;

    text-align: center;

    box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
    border-radius: 3px;
  }

  .project-background {
    transition: background-size 200ms ease-in-out;
    min-width: 280px;
    background-size: 100%;
    background-position: center center;
    height: 200px;
  }

  .project-background:hover {
    background-size: 115%;
  }

  .project-logo {
    width: 200px;
  }

  .project-title {
    padding: 0 1em;
    text-align: left;
  }

  .project-description {
    padding: 0 1em;
    text-align: left;
  }
</style>
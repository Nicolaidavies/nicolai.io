<template>
  <div>


    <Carousel :perPage="1" :autoplay="true">
      <Slide v-for="image in project.images" :key="image">
        <div class="project-image" :style="{'background-image': `url(/static/projects/${project.name}/${image})`}"></div>
      </Slide>
    </Carousel>

    <div class="project">
      <h2>{{project.title}}</h2>
      <div class="project-description" v-html="project.description"></div>

      <router-link to="/projects" active-class="nothing">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
        <span>Back</span>
      </router-link>

    </div>



  </div>
</template>

<script>
  import {Carousel, Slide} from 'vue-carousel'

  export default {
    name: 'project',
    props: ['project_name'],
    components: {
      Carousel,
      Slide
    },
    head: {
      title() {
        return {
          inner: `${this.project.title}`
        }
      }
    },
    computed: {
      project() {
        return this.$store.state.projects.find(project => project.name === this.project_name)
      }
    },
    methods: {
      back() {
        this.$router.push({name: 'projects'})
      }
    }
  }
</script>

<style scoped>
  .project {
    max-width: 800px;
    margin: 0 auto;
    padding: 1em 1em;
    text-align: center;
  }

  .project-image {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% center;
    height: 70vh;
  }

  .project-description {
    text-align: justify;
  }

  .back {
    display: block;
    color: black;
    padding: 2em 0;
    text-decoration: none;
  }

  .back:hover {
    color: #424242;
    text-decoration: underline;
  }
</style>
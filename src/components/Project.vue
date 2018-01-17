<template>
  <div>

    <Carousel :perPage="1" :autoplay="true">
      <Slide v-for="image in project.images" :key="image">
        <img class="project-image" :src="`/static/projects/${project.name}/${image}`">
      </Slide>
    </Carousel>

    <div class="project">
      <h1>{{project.title}}</h1>
      <div class="project-description" v-html="project.description"></div>

      <router-link to="/projects" class="back" active-class="nothing">
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
    width: 100%;
    margin: 0 auto;
    display: block;
  }

  .project-description {
    text-align: justify;
  }

  .back {
    display: block;
    padding: 2em 0;
  }
</style>
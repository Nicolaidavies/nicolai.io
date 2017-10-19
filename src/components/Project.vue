<template>
  <div>
    <Carousel :perPage="1" :autoplay="true">
      <Slide v-for="image in project.images" :key="image">
        <div class="carousel-image" :style="{'background-image': `url(/static/projects/${project.name}/${image})`}"></div>
      </Slide>
    </Carousel>

    <div>
      <h2>{{project.title}}</h2>
    </div>

  </div>
</template>

<script>
  //import { mapState, mapActions, mapMutations } from 'vuex'
  import {Carousel, Slide} from 'vue-carousel'

  export default {
    name: 'project',
    props: ['project_name'],
    components: {
      Carousel,
      Slide
    },
    computed: {
      project() {
        return this.$store.state.projects.find(project => project.name === this.project_name)
      }
    }
  }
</script>

<style scoped>
  .carousel-image {
    background-size: cover;
    background-position: center center;
    height: 70vh;
  }
</style>
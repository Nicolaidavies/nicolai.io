<template>
  <div>
    <no-ssr>
      <Carousel :perPage="1" :autoplay="true">
        <Slide v-for="image in project.images" :key="image">
          <img class="project-image" :src="`/images/${project.name}/${image}`">
        </Slide>
      </Carousel>
    </no-ssr>

    <div class="project">
      <h1>{{project.title}}</h1>
      <div class="project-description" v-html="project.description"></div>

      <a href="javascript:history.go(-1)" class="back" active-class="nothing">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
        <span>Back</span>
      </a>

    </div>

  </div>
</template>

<script>
  import {Carousel, Slide} from 'vue-carousel'

  export default {
    name: 'project',
    props: ['project'],
    components: {
      Carousel,
      Slide
    },
    head() {
      return {
        title: this.project.title
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
    /* text-align: justify; */
    text-align: center;
  }

  .back {
    display: block;
    padding: 2em 0;
  }
</style>
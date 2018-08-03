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
  components: {
      Carousel,
      Slide
    },
  head() {
    return {
      title: `${this.project.title} - Nicolai Davies`
    };
  },
  computed: {
    project() {
      return this.$store.state.projects.find(
        p => p.name === this.$route.params.project_id
      );
    }
  }
};
</script>

<style scoped>
  .project {
    max-width: 800px;
    margin: 0 auto;
    padding: 1em 1em;
    text-align: center;
  }

  .project-image {
    width: 60%;
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

  @media screen and (max-width: 900px) {
    .project-image {
      width: 100%;
    }
  }
</style>
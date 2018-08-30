<template>
  <div>
    <no-ssr>
      <Carousel :perPage="1" :autoplay="true" :autoplayTimeout="4000" class="carousel">
        <Slide v-for="image in project.images" :key="image">
          <img class="project-image" :src="`/images/${project.name}/${image}`" :alt="`Image of ${project.name}`">
        </Slide>
      </Carousel>
    </no-ssr>

    <div class="project">
      <h1 class="project-title">{{project.title}}</h1>
      <div class="project-description" v-html="project.description"></div>

      <router-link to="/projects" class="back" active-class="nothing">
        <span>Back</span>
      </router-link>

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
      title: `${this.project.title}`,
      meta: [
        { hid: 'description', name: 'description', content: this.project.short_description }
      ]
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
  .carousel {
    margin-top: 1em;
  }

  .project {
    padding: 1em 1em;
  }

  .project-title {
    text-align: center;
  }

  .project-image {
    width: 60%;
    margin: 0 auto;
    display: block;
  }

  .project-description {
    max-width: 600px;
    margin: 0 auto;
    font-size: 1.1em;
  }

  .back {
    text-align: center;
    display: block;
    padding: 2em 0;
    font-size: 1.2em;
  }

  @media screen and (max-width: 900px) {
    .project-image {
      width: 100%;
    }
  }
</style>
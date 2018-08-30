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

      <div class="project-container">

        <div class="project-meta">
          <p>
            <b>Client:</b> 
            {{project.client}}
          </p>
          <p>
            <b>My role:</b>
            {{project.role}}
          </p>
          <p>
            <b>Tools:</b> 
            {{project.tools}}
          </p>
          <p>
            <b>Year:</b> 
            {{project.year}}
          </p>
        </div>

        <div class="project-description" v-html="project.description"></div>
      </div>

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
    max-height: 800px;
    margin: 0 auto;
    display: block;
  }

  .project-container {
    max-width: 1000px;
    margin: 2em auto;
    display: flex;
    flex-direction: row;
  }

  .project-meta {
    max-width: 320px;
  }

  .project-description {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    font-size: 1.1em;
  }

  .project-description p:first-child {
    margin-top: 0;
  }

  .back {
    text-align: center;
    display: block;
    padding: 2em 0;
    font-size: 1.2em;
  }

  @media screen and (max-width: 900px) {
    .project-container {
      flex-direction: column;
    }

    .project-meta {
      max-width: 600px;
      width: 100%;
      margin: 0 auto;
    }

    .project-image {
      width: 100%;
    }
  }
</style>
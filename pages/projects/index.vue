<template>
  <div>

    <div class="projects">

      <div v-for="(project, index) in projects"
        :key="index"
        class="project"
        @click="view_project(project.name)">

        <div class="project-container">
          <img class="project-image" :src="`/images/${project.name}/${project.image}`">

          <h1>{{project.title}}</h1>

          <p class="project-description">{{project.short_description}}</p>

          <router-link :to="`/projects/${project.name}`" class="link" active-class="nothing">
            <span>Read more</span>
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </router-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Projects",
  computed: {
    ...mapState({
      projects: state => state.projects
    })
  },
  head() {
    return {
      title: "Projects - Nicolai Davies"
    };
  },
  methods: {
    view_project(project_name) {
      this.$router.push(`/projects/${project_name}`);
    }
  }
};
</script>

<style scoped>
.projects {
  display: flex;
  flex-direction: column;
  padding-top: 1em;
}

.project {
  flex: 1;
  text-align: center;
}

.project-container {
  padding: 4em 0;
  max-width: 800px;
  margin: 0 auto;
}

.project-image {
  width: 100%;
  margin: 0 auto;
  display: block;
}

.project-background {
  overflow: hidden;
}

.project-description {
  padding: 0 1em;
}

.link {
  color: #43c3e7;
  padding-bottom: 1em;
}

.projects {
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
}

.project {
  background-color: white !important;
  min-width: 50%;
}

.project-image {
  height: 300px;
  width: auto;
}

@media screen and (max-width: 900px) {
  .project {
    min-width: 100%;
  }

  .project-image {
    height: auto;
    width: 100%;
  }
}
</style>
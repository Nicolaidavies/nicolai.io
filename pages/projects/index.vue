<template>
  <div>

    <div class="projects">

      <div v-for="(project, index) in projects"
        v-if="!project.draft"
        :key="index"
        class="project"
        @click="view_project(project.name)">

        <div class="project-container">
          <router-link :to="`/projects/${project.name}`" class="link" active-class="nothing">
          <img class="project-image" :src="`/images/${project.name}/${project.image}`" :alt="`Image of ${project.name}`">

          <h1 class="project-title">{{project.title}}</h1>

          <p class="project-description">{{project.short_description}}</p>

            <!-- <span>Read more</span> -->
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
      title: "Projects",
      meta: [
        { hid: 'description', name: 'description', content: "Take a look at the projects I've been working on." }
      ]
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
  padding: 1em 0;
  max-width: 800px;
  margin: 2em auto;
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
  font-size: 1.1em;
}

.project-title {
  transition: all .15s ease;
}

.project-container:hover .project-title {
  color: #43c3e7;
}

.project-container:hover .link {
  color: #43c3e7;
}

.link {
  color: black;
}

.link:hover {
  text-decoration: none;
}

.projects {
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
}

.project {
  background-color: white;
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

  .project-container {
    margin: 1em auto;
  }

  .project-image {
    height: auto;
    width: 100%;
  }
}

@media (prefers-color-scheme: dark) {
  .project {
    background-color: #444;
    color: #e4e4e4;
  }
}

</style>

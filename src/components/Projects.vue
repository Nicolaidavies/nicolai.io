<template>
  <div>
    <div class="projects">

      <div v-for="(project, index) in projects" :class="{project: true, 'project-grey-background': index % 2 === 1 }"  @click="view_project(project.name)">
        <div class="project-container">
          <div class="project-background">
            <img class="project-image" :src="`/static/projects/${project.name}/${project.image}`">
          </div>
          <h2>{{project.title}}</h2>

          <p class="project-description">{{project.short_description}}</p>

          <router-link :to="`/projects/${project.name}`" class="back" active-class="nothing">
            <span>Read more</span>
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </router-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Projects',
    computed: {
      ...mapState({
        projects: (state) => state.projects
      })
    },
    head: {
      title() {
        return {
          inner: `Projects`
        }
      }
    },
    methods: {
      view_project(project_name) {
        this.$router.push({name: 'project', params: {project_name}})
      }
    }
  }
</script>

<style scoped>
  .projects {
    display: flex;
    flex-direction: column;
  }

  .project {
    flex: 1;
    padding: 1em 0;
    text-align: center;
  }

  .project-container {
    max-width: 800px;
    margin: 15px auto;
  }

  .project-image {
    width: 100%;
    margin: 0 auto;
    display: block;
  }

  .project-background {
    overflow: hidden;
  }

  .project-grey-background {
    background-color: #fafafa;
  }

  .project-title {
    margin-bottom: 0.5em;
    padding: 0 1em;
    /*text-align: left;*/
  }

  .project-description {
    padding: 0 1em;
    /*text-align: left;*/
  }
</style>
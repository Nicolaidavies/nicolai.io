<template>
  <div>
    <div class="projects">

      <div v-for="(project, index) in projects"
           :class="{project: true, 'project-grey-background': index % 2 === 1 }"
           @click="view_project(project.name)">

        <div class="project-container">
          <img class="project-image" :src="`/images/${project.name}/${project.image}`">

          <h1>{{project.title}}</h1>

          <p class="project-description">{{project.short_description}}</p>

          <router-link :to="`/project/${project.name}`" class="link" active-class="nothing">
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
//      ...mapState({
//        projects: (state) => state.projects
//      })
      projects() {
        return this.$store.state.projects
      }
    },
    head() {
      return {
        title: 'Projects'
      }
    },
    methods: {
      view_project(project_name) {
        // TODO: Fix this
        // this.$router.push({name: 'project', params: {project_name}})
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
    text-align: center;
  }

  .project-container {
    padding: 4em 0;
    /*padding-top: 2em;*/
    /*padding-bottom: 2em;*/
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

  .project-grey-background {
    background-color: #fafafa;
  }

  .project-description {
    padding: 0 1em;
    /*text-align: left;*/
  }

  .link {
    padding-bottom: 1em;
  }
</style>
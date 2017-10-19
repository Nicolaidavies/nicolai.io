<template>
  <div>
    <div class="projects">

      <div class="project" v-for="project in projects" @click="view_project(project.name)">
        <div class="project-background" :style="{'background-image': `url(/static/projects/${project.name}/${project.image})`}"></div>
        <h3 class="project-title">{{project.title}}</h3>
        <div class="project-tags">
          <span class="project-tag" v-for="tag in project.tags" :key="tag">{{tag}}</span>
        </div>
        <p class="project-description">{{project.short_description}}</p>
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
    methods: {
      view_project(project_name) {
        this.$router.push({name: 'project', params: {project_name}})
      }
    }
  }
</script>

<style scoped>
  .title {
    text-align: center;
  }

  .projects {
    max-width: 800px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
  }

  .project {
    flex: 1;

    margin: 15px;
    /*max-width: 400px;*/

    text-align: center;

    transition: box-shadow 200ms ease-in-out;
    box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
    border-radius: 3px;
  }

  .project:hover {
    box-shadow: 0 3px 3px rgba(10,10,10,.1), 0 3px 9px 6px rgba(10,10,10,.1);
  }

  .project-background {
    transition: background-size 200ms ease-in-out;
    min-width: 280px;
    background-size: 100%;
    background-position: center center;
    height: 200px;
  }

  .project-background:hover {
    background-size: 105%;
  }

  .project-tags {
    padding: 0 1.1em;
    text-align: left;
  }

  .project-tag {
    color: white;
    background-color: grey;
    border-radius: 5px;
    padding: 0.25em;
    text-align: left;
    font-size: 12px;
  }

  .project-title {
    margin-bottom: 0.5em;
    padding: 0 1em;
    text-align: left;
  }

  .project-description {
    padding: 0 1em;
    text-align: left;
  }
</style>
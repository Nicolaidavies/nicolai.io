<template>
  <div :class="{'box-layout': box_layout}">

    <div class="layout-selector" @click="box_layout = !box_layout">
      <span class="layout-selector-icon" :class="{'layout-selector-icon-selected': box_layout}">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </span>

      <span class="layout-selector-icon" :class="{'layout-selector-icon-selected': !box_layout}">
        <i class="fa fa-th-large" aria-hidden="true"></i>
      </span>
    </div>

    <!-- <button  >Toggle box layout</button> -->

    <div class="projects">

      <div v-for="(project, index) in projects"
        :key="index"
        :class="{project: true, 'project-grey-background': index % 2 === 1 }"
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
  import { mapState } from 'vuex'

  export default {
    name: 'Projects',
    data() {
      return {
        box_layout: false
      }
    },
    computed: {
     ...mapState({
       projects: (state) => state.projects
     })
    },
    head() {
      return {
        title: 'Projects'
      }
    },
    methods: {
      view_project(project_name) {
        this.$router.push(`/projects/${project_name}`)
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

  .box-layout .projects {
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
  }

  .box-layout .project {
    background-color: white !important;
    min-width: 50%;
  }

  .box-layout .project-image {
    height: 300px;
    width: auto;
  }

  .layout-selector {
    text-align: center;
  }

  .layout-selector-icon {
    color: black;
    font-size: 1.5em;
    margin: 0.5em;
  }

  .layout-selector-icon:hover {
    cursor: pointer;
  }

  .layout-selector-icon-selected {
    color: grey;
  }

  @media screen and (max-width: 900px) {
    .layout-selector {
      display: none;
    }

    .box-layout .project {
      min-width: 100%;
    }

    .box-layout .project-image {
      height: auto;
      width: 100%;
    }
  }
  
</style>
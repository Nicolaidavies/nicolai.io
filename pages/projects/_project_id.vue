<template>
  <Project :project="project"/>
</template>

<script>
  import Project from '../../components/Project.vue'
  export default {
    components: {Project},
    computed: {
      project() {
        return this.$store.state.projects.find(p => p.name === this.$route.params.project_id)
      }
    }
  }
</script>

<style scoped>

</style>
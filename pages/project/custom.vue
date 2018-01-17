<template>
  <div>
    <h1 style="text-align: center">I am an example of a completely custom page</h1>
  </div>
</template>

<script>
  export default {
    name: 'waterford',
    components: {Project},
    data() {
      return {}
    },
    mounted() {
      console.log('rendering custom comp')
    }
  }
</script>

<style scoped>

</style>
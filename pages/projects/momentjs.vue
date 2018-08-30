<template>
  <div class="project">
    <h1>moment.js siSwati Translation</h1>
    
    <div class="project-description">
      TODO: Add a toggle for switching between English and siSwati locale
      <br>
      TODO: Add a link to the exact translation file & github repo
    </div>

    <a href="javascript:history.go(-1)" class="back" active-class="nothing">
      <i class="fa fa-chevron-left" aria-hidden="true"></i>
      <span>Back</span>
    </a>

  </div>
</template>

<script>
  export default {
    name: 'momentjs',
    head() {
      return {
        title: `Momentjs siSwati translation`,
        meta: [
          { hid: 'description', name: 'description', content: 'A siSwati translation for the popular open source library moment.js.' }
        ]
      };
    },
    data() {
      return {}
    },
    mounted() {
      console.log('rendering custom comp')
    }
  }
</script>

<style scoped>
  .project {
    max-width: 800px;
    margin: 0 auto;
    padding: 1em 1em;
    text-align: center;
  }

  .project-image {
    width: 100%;
    margin: 0 auto;
    display: block;
  }

  .project-description {
    text-align: justify;
  }

  .back {
    display: block;
    padding: 2em 0;
  }
</style>
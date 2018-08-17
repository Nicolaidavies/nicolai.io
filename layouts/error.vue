<template>
    <div class="error">

      <span v-if="error.statusCode === 404">
        <h1 class="header">404</h1>
        <p>There doesn't seem to be anything here.</p>
      </span>

      <span v-else>
        <h1 class="header">{{error.statusCode}}</h1>
        <p>An error occured.</p>
      </span>
      
      <p>
        <a href="/">Return to the frontpage</a>
      </p>
    </div>
</template>

<script>
  export default {
    props: ['error'],
    name: 'error'
  }
</script>
<style>
  .error {
    text-align: center;
    padding: 1em;
  }

  .header {
    font-size: 3em;
  }
</style>
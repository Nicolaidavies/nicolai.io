<template>
  <div>
    <header class="header">
      <img class="avatar" src="/static/profile.png">
      <h1 class="title">Nicolai Davies</h1>
      <h2 class="subtitle">Software creator</h2>
      <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias error iure pariatur sunt voluptates? Debitis delectus deleniti dicta ducimus hic, illum iusto, maxime, nemo officia porro quae quo repellat voluptas.</p>
    </header>
    <div class="media-links">
      <a class="media-link" href="https://github.com/Nicolaidavies">
        <span>
          <i class="fa fa-github" aria-hidden="true"></i>
        </span>
        <span>
          Github
        </span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>
  .header {
    text-align: center;
    padding: 2em;
  }

  .title {
    margin-bottom: 0.5em;
  }

  .subtitle {
    margin-top: 0;
    margin-bottom: 1.5em;
    font-size: 20px;
    font-weight: 400;
  }

  .paragraph {
    max-width: 450px;
    margin: 0 auto;
  }

  .avatar {
    border-radius: 50%;
    width: 200px;
  }

  .media-links {
    padding-top: 2em;
    text-align: center;
  }

  .media-link {
    font-size: 30px;
    text-decoration: none;
    color: black;
    padding: 1em;
  }
</style>

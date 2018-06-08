<template>
  <div>
    <header class="header">
      <img class="avatar" src="/profile.png" alt="Picture of Nicolai Davies">

      <h1 class="title">Nicolai Davies</h1>

      <p class="paragraph">
        I'm a software developer.
      </p>

      <p class="paragraph email-paragraph">
        You can reach me on email:
      <br>
      
      <p class="email">
        <a href="mailto:mail@nicolai.io">mail@nicolai.io</a>
      </p>
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

      <a class="media-link" href="https://www.linkedin.com/in/nicolaidavies">
        <span>
          <i class="fa fa-linkedin" aria-hidden="true"></i>
        </span>
        <span>
          LinkedIn
        </span>
      </a>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomePage',
    head() {
      return {
        title: 'Nicolai Davies'
      }
    }
  }
</script>

<style scoped>
  .header {
    text-align: center;
    padding: 2em;
    padding-bottom: 0;
  }

  .title {
    margin-bottom: 0.5em;
  }

  .paragraph {
    max-width: 450px;
    margin: 0 auto;
  }

  .email-paragraph {
    margin-top: 1em;
  }

  .email {
    margin: 0;
    margin-top: 0.5em;
  }

  .email a {
    color: black;
  }

  .avatar {
    border-radius: 50%;
    width: 200px;
  }

  .media-links {
    max-width: 600px;
    margin: 2em auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  
    text-align: center;
    padding-bottom: 2em;
  }

  .media-link {
    flex: 1;
    font-size: 30px;
    color: black;
    padding: 1em;
  }

  .media-link:hover, .email a:hover {
    color: #424242;
    text-decoration: underline;
  }

  @media screen and (max-width: 600px) {
    .media-links {
      flex-direction: column;
    }

    .media-link {
      padding: 0.5em 1em;
    }
  }
</style>

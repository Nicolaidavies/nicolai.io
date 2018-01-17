<template>
  <div>
    <header class="header">
      <img class="avatar" src="/static/profile.png">
      <h1 class="title">Nicolai Davies</h1>
      <!--<h2 class="subtitle">Software developer</h2>-->
      <p class="paragraph">
        I'm a software developer that develops for anything with a screen.
      </p>
      <p>
      <p class="paragraph email-paragraph" data-clipboard-text="mail@nicolai.io">
        You can reach me on email:
        <span class="email">mail@nicolai.io</span>
        <span class="clipboard-button">
          <i class="fa fa-clipboard" aria-hidden="true"></i>
        </span>
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
  import clipboard from 'clipboard'
  export default {
    name: 'HomePage',
    mounted() {
      new clipboard('.email-paragraph')
    },
    head: {
      title() {
        return {
          inner: `Home`
        }
      }
    }
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
    /*font-size: 20px;*/
    font-weight: 400;
  }

  .paragraph {
    max-width: 450px;
    margin: 0 auto;
  }

  .clipboard-button {
    transition: opacity 200ms linear;
    opacity: 0;
  }

  .email-paragraph:hover .clipboard-button {
    opacity: 1;
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

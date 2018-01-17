<template>
  <div>
    <header class="header">
      <img class="avatar" src="/profile.png" alt="Picture of Nicolai Davies">
      <h1 class="title">Nicolai Davies</h1>
      <!--<h2 class="subtitle">Software developer</h2>-->
      <p class="paragraph">
        I'm a software developer that develops for anything with a screen.
      </p>
      <p>
      <p class="paragraph email-paragraph" data-clipboard-text="mail@nicolai.io" @click="handle_copy">
        You can reach me on email:
      <br>
        <span class="email">mail@nicolai.io</span>
        <span class="clipboard-button" >
          <i class="fa fa-clipboard" aria-hidden="true"></i>
        </span>
      <br>
        <span :class="{copied: true, 'show-copied': show_copied}">
          copied!
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
    data() {
      return {
        show_copied: false
      }
    },
    head() {
      return {
        title: 'Home'
      }
    },
    methods: {
      handle_copy() {
        this.show_copied = true
        setTimeout(() => {
          this.show_copied = false
        }, 1000)
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

  .clipboard-button {
    transition: opacity 200ms linear;
    opacity: 0;
  }

  .email-paragraph {
    position: relative;
  }

  .copied {
    transition: opacity 200ms linear;
    opacity: 0;

    padding-left: 5px;
  }

  .show-copied {
    opacity: 1;
  }

  .email-paragraph:hover .clipboard-button {
    opacity: 1;
  }

  .avatar {
    border-radius: 50%;
    width: 200px;
  }

  .media-links {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    text-align: center;
    padding-bottom: 2em;
  }

  .media-link {
    flex: 1;
    font-size: 30px;
    text-decoration: none;
    color: black;
    padding: 1em;
  }
</style>

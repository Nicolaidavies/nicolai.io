<template>
  <div>
    <header class="header">
      <img class="avatar" src="/profile.png" alt="Picture of Nicolai Davies">

      <p class="paragraph title">
        I'm <b>Nicolai Davies</b>, a software developer working mostly with mobile and web applications. 
      </p>

      <p class="paragraph title">
        
        Get in touch by writing to: <a class="link" href="mailto:hi@nicolai.io"><b>hi@nicolai.io</b></a>
        
        or have a look at my <a class="link" href="https://github.com/nicolaidavies"><b>Github</b></a> page.

      </p>

    </header>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  head() {
    return {
      title: "Nicolai Davies"
    };
  }
};
</script>
<style>
/** Global CSS **/

::selection {
  background-color: lightgray;
}

</style>

<style scoped>
.header {
  text-align: center;
  padding: 2em;
  padding-bottom: 0;
}

.paragraph {
  max-width: 450px;
  margin: 1em auto;
  font-size: 1.5em;
}

.link {
  color: #424242;
}

.link:hover {
  color: black;
  text-decoration: underline;
}

.avatar {
  border-radius: 50%;
  width: 200px;
}
</style>

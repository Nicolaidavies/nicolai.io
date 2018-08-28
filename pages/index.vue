<template>
  <div>
    <main class="main">

      <div class="avatar-container">
        <img class="avatar" src="/profile.png" alt="Picture of Nicolai Davies">
      </div>

      <p class="paragraph">
        I'm <b>Nicolai Davies</b>, a software developer specialising in mobile and web applications.
        
        <br><br>

        Right now I'm working on <a href="/projects/disarm"><b>DiSARM</b></a>, a spatial intelligence tool for fighting malaria that is being used in Southern Africa.

        <br><br>

        Have a project you would like me to work on? Or just want to say hi? Write to me on: <a href="mailto:hi@nicolai.io"><b>hi@nicolai.io</b></a>
      </p>

    </main>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  head() {
    return {
      title: "Nicolai Davies",
      meta: [
        { hid: 'description', name: 'description', content: "I'm Nicolai Davies, a software developer specialising in mobile and web applications." }
      ]
    };
  }
};
</script>
<style scoped>

.main {
  padding-top: 4em;
  max-width: 1000px;
  margin: 0 auto;
}

.paragraph {
  max-width: 700px;
  font-size: 1.5em;
  margin: 2em auto;
  padding: 0 1em;
}

.avatar-container {
  text-align: center;
}

.avatar {
  border-radius: 50%;
  width: 250px;
}
</style>

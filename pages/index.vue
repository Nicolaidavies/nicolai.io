<template>
  <div>
    <main class="main">

      <div class="avatar-container">
        <img class="avatar" src="/profile.png" alt="Picture of Nicolai Davies">
      </div>

      <p class="paragraph">
        I'm <b>Nicolai Davies</b>, a full stack software developer with a strong interest in building digital products.
        <br><br>
        I am currently working on EV charging infrastructure at <a href="https://www.ok.dk/"><b>OK a.m.b.a.</b></a>
        <br><br>
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
        { hid: 'description', name: 'description', content: "I'm Nicolai Davies, a full stack software developer with a strong interest in building digital products." }
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

@media screen and (max-width: 900px) {
  .main {
    padding-top: 1em;
  }
}
</style>

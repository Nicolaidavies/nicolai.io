<template>
  <div class="main">
    <h1>Contact</h1>
    <p class="paragraph">
      Have a project you would like me to work on? Or just want to say hi? Write to me on: 
      <no-ssr>
        <a href="mailto:hi@nicolai.io"><b>hi@nicolai.io</b></a>
      </no-ssr>
    </p>
  </div>
</template>

<script>
export default {
  name: "Contact",
  head() {
    return {
      title: "Contact",
      meta: [
        { hid: 'description', name: 'description', content: "Reach out to me." }
      ]
    };
  },
};
</script>

<style scoped>
.main {
  max-width: 600px;
  margin: 0 auto;
  padding: 4em 1em;
}

.paragraph {
  font-size: 1.5em;
  margin: 1em auto;
}

@media screen and (max-width: 900px) {
  .main {
    padding-top: 1em;
  }
}
</style>
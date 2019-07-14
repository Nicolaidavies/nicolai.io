<template>
  <div>
    <main class="main">
      <h1>About me</h1>
      <p>
        I'm half Danish half British self-taught developer currently residing in Aarhus, Denmark. 
        I lived in Swaziland in Southern Africa from 2015-18. 
        The first two years at Waterford Kamhlaba, an international school that's part of United World Colleges studying the IB Programme.

        The last two years I started a software company and made mobile and web apps. 
      </p>

      <p>
        I'm completely self-taught, I believe that gives me an advantage when it comes to learning new technologies quickly. 
        I'm very proficient in the front-end technologies: I eat JavaScript for breakfast, lunch and dinner. 
        I've worked with the most popular front-end technologies: Angular, React and Vue. 
      </p>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis modi quas magni possimus fugiat, fugit quaerat consectetur placeat inventore quasi eos ad provident quam ratione neque earum dicta. Eligendi, esse!
      </p>
    </main>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  head() {
    return {
      title: "About",
      meta: [
        { hid: 'description', name: 'description', content: "Read more about who I am and what I like to do." }
      ]
    };
  }
};
</script>
<style scoped>

.main {
  padding: 1em;
  padding-top: 4em;
  max-width: 800px;
  margin: 0 auto;
}

.paragraph {
  max-width: 700px;
  font-size: 1.5em;
  margin: 2em auto;
  padding: 0 1em;
}

@media screen and (max-width: 900px) {
  .main {
    padding-top: 1em;
  }
}
</style>

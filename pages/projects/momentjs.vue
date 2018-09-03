<template>
  <div>
    <div class="custom-content">
      <p class="toggle">
        <span :class="{active: lang === 'ss', option: true}" @click="lang = 'ss'"> siSwati </span>
        <span :class="{active: lang === 'en', option: true}" @click="lang = 'en'"> English </span>
      </p>

      <h1 class="time">
        <span v-if="lang === 'en'">{{en_time}}</span>
        <span v-if="lang === 'ss'">{{ss_time}}</span>
      </h1>
    </div>

    <div class="project">
      <h1 class="project-title">{{project.title}}</h1>

      <div class="project-container">

        <div class="project-meta">
          <p>
            <b>Client:</b> 
            {{project.client}}
          </p>
          <p>
            <b>My role:</b>
            {{project.role}}
          </p>
          <p>
            <b>Tools:</b> 
            {{project.tools}}
          </p>
          <p>
            <b>Year:</b> 
            {{project.year}}
          </p>
        </div>

        <div class="project-description" v-html="project.description"></div>
      </div>

      <router-link to="/projects" class="back" active-class="nothing">
        <span>Back</span>
      </router-link>

    </div>

  </div>
</template>

<script>
import moment from 'moment'

export default {
  head() {
    return {
      title: `${this.project.title}`,
      meta: [
        { hid: 'description', name: 'description', content: this.project.short_description }
      ]
    };
  },
  data() {
    return {
      interval: null,
      lang: 'ss',
      ss_time: '',
      en_time: ''
    }
  },
  created() {
    const set_time = () => {
      const ss_local = moment()
      ss_local.locale('ss')
      this.ss_time = ss_local.format('dddd, MMMM Do YYYY, h:mm:ss a')

      const en_local = moment()
      en_local.locale('en')
      this.en_time = en_local.format('dddd, MMMM Do YYYY, h:mm:ss a')
    }

    set_time()

    this.interval = setInterval(set_time, 1000)
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  computed: {
    project() {
      return this.$store.state.projects.find(
        p => p.name === 'momentjs'
      )
    }
  }
};
</script>

<style scoped>
  .custom-content {
    padding: 3em;
    margin-top: 1em;
    max-width: 800px;
    margin: 0 auto;
  }

  .toggle {
    text-align: center;
  }
  
  .active {
    color: #43c3e7;
  }

  .option {
    font-size: 1.1em;
    margin: 0 1em;
  }

  .option:hover {
    cursor: pointer;
    color: #43c3e7;
    text-decoration: underline;
  }

  .time {
    font-weight: 400;
    text-align: center;
    margin-top: 2em;
  }

  .project {
    padding: 1em 1em;
  }

  .project-title {
    text-align: center;
  }

  .project-container {
    max-width: 1000px;
    margin: 2em auto;
    display: flex;
    flex-direction: row;
  }

  .project-meta {
    max-width: 320px;
  }

  .project-description {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    font-size: 1.1em;
  }

  .project-description p:first-child {
    margin-top: 0;
  }

  .back {
    text-align: center;
    display: block;
    padding: 2em 0;
    font-size: 1.2em;
  }

  @media screen and (max-width: 900px) {
    .custom-content {
      padding: 3em 1em;
    }

    .project-container {
      flex-direction: column;
    }

    .project-meta {
      max-width: 600px;
      width: 100%;
      margin: 0 auto;
    }
  }
</style>
<template>
  <Project :project="project"/>
</template>

<script>
  //import { mapState, mapActions, mapMutations } from 'vuex'
  import Project from '../../components/Project.vue'
  export default {
    name: 'waterford',
    components: {Project},
    data() {
      return {
        project: {
          "name": "waterford",
          "title": "Waterford Kamhlaba",
          "short_description": "The official website for Waterford Kamhlaba UWCSA",
          "image": "1.png",
          "images": [
            "1.png",
            "2.png",
            "3.png"
          ],
          "description": "<p>Leverage social media hackathon mass market responsive web design hypotheses. Market buyer iPhone niche market long tail partnership strategy. Virality low hanging fruit social proof leverage. </p><p>IPad strategy analytics niche market iPhone android leverage agile development hypotheses supply chain rockstar. Advisor agile development virality investor bootstrapping value proposition. </p><p>Partnership network effects interaction design holy grail hackathon founders business model canvas accelerator market non-disclosure agreement. Business-to-business facebook ownership partner network stealth sales incubator backing direct mailing lean startup. Low hanging fruit leverage ramen twitter assets beta stealth research & development deployment innovator direct mailing pivot disruptive churn rate. Creative advisor pivot. User experience buzz seed money backing iPad.</p>"
        }
      }
    }
  }
</script>

<style scoped>

</style>
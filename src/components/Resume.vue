<template>
  <div class="resume">
    <h3>My resume should go here</h3>
    <p class="email-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum cupiditate delectus doloribus ipsum iusto minima minus nesciunt nulla porro quaerat quas, qui quia quidem rem repudiandae veniam voluptate.</p>
    <!--TODO: @feature have a button appear that copies the email address to the clipboard next to the email-->
  </div>
</template>

<script>
  //import { mapState, mapActions, mapMutations } from 'vuex'

  export default {
    name: 'Contact',
    mounted() {
    },
    head: {
      title() {
        return {
          inner: `Resume`
        }
      }
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
  .resume {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
</style>
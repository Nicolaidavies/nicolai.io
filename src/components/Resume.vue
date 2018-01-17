<template>
  <div class="resume">

    <h1>Work Experience</h1>

    <div class="block">
    <h3>Self Employed <br> (January 2018 - Today)</h3>
    <p>
      Creating websites, mobile applications and desktop applications. Also available as a consultant.
    </p>
    </div>

    <div class="block">
    <h3>CTO & Co-founder at Tipho TaKamhlaba <br> (December 2015 - December 2017)</h3>
    <p>
      Delivering mobile application solutions in Swaziland.
    </p>
    </div>

    <div class="block">
    <h3>Online Marketing at Proshop.dk <br> (August 2013 - December 2013)</h3>
    <p>
      Working with online marketing for Expert Denmark. Work included making newsletters, banners and online
      papers with iPaper for Expert.dk, Punkt1.dk and Lysmesteren.dk.
    </p>
    </div>

    <div class="block">
    <h3>Online Marketing at Proshop.dk <br> (November 2011 - August 2013)</h3>
    <p>
      Updating products with new descriptions and pictures. Work also included making of banner ads for online
      use and other graphical tasks.
    </p>
    </div>


    <h1>Education</h1>

    <div class="block">
    <h3>Waterford Kamhlaba, Swaziland</h3>
    <p>2014 - 2015</p>
    <p>
      Studied the rigorous International Baccalaureate Diploma Programme (IB) at Waterford.
    </p>
    </div>

    <div class="block">
    <h3>Aarhus Købmandsskole, Denmark</h3>
    <p>2012 - 2013</p>
    <p>
      Studied IT and business management for a year before leaving for Waterford Kamhlaba.
    </p>
    </div>

    <div class="block">
    <h3>Interskolen, Denmark</h3>
    <p>2007 - 2012</p>
    <p>
      Private school with a strong focus on languages including French, German and English.
      The class of 2012 finished with the highest national average.
    </p>
    </div>


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
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
    padding: 0 1em;
  }

  .block {
    margin-bottom: 4em;
  }

</style>
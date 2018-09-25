<template>
  <div class="resume">
    <div class="container">

      <div class="section first-section">
        <h1>Work Experience</h1>

        <div class="block">
          <h3>Self Employed</h3>
          <p class="date">January 2018 - Today</p>
          <p>
            Creating websites, mobile applications and desktop applications. Also available as a consultant.
          </p>
        </div>

        <div class="block">
          <h3>CTO &amp; Co-founder at Tipho TaKamhlaba</h3>
          <p class="date">December 2015 - December 2017</p>
          <p>
            Delivering mobile application solutions in Swaziland.
          </p>
        </div>

        <div class="block">
          <h3>Online Marketing at Proshop.dk</h3>
          <p class="date">August 2013 - December 2013</p>
          <p>
            Working with online marketing for Expert Denmark. Work included making newsletters, banners and online
            papers with iPaper for Expert.dk, Punkt1.dk and Lysmesteren.dk.
          </p>
        </div>

        <div class="block">
          <h3>Online Marketing Assistant at Proshop.dk</h3>
          <p class="date">November 2011 - August 2013</p>
          <p>
            Updating products with new descriptions and pictures. Work also included making of banner ads for online
            use and other graphical tasks.
          </p>
        </div>
      </div>

      <div class="section">
        <h1>Education</h1>

        <div class="block">
          <h3>Waterford Kamhlaba UWCSA, Swaziland</h3>
          <p class="date">January 2014 - November 2015</p>
          <p>
            Studied the rigorous International Baccalaureate Diploma Programme (IB) at Waterford as part of a <a href="https://uwc.org">United World Colleges</a> scholarship.
          </p>
        </div>

        <div class="block">
          <h3>Aarhus Købmandsskole, Denmark</h3>
          <p class="date">August 2012 - July 2013</p>
          <p>
            Studied IT and business management for a year before leaving for Waterford Kamhlaba.
          </p>
        </div>

        <div class="block">
          <h3>Interskolen, Denmark</h3>
          <p class="date">August 2007 - July 2012</p>
          <p>
            Private school with a strong focus on languages including French, German and English.
          </p>
        </div>
      </div>


    </div>
    <div class="container">

      


      <div class="section first-section">
        <h1>Technologies</h1>

        <div class="block">
          <h3>Front-end</h3>
          <p>
            React + Redux, Vue + Vuex and Angular + ngrx-store.
          </p>
        </div>

        <div class="block">
          <h3>Back-end</h3>
          <p>
            NodeJS, Mongo. I am currently learning Ruby on Rails.
          </p>
        </div>

        <div class="block">
          <h3>Mobile</h3>
          <p>
            React Native, Ionic and Cordova. 
          </p>
        </div>

        <div class="block">
          <h3>Miscellaneous</h3>
          <p>
            Electron.
          </p>
        </div>
      </div>

      <div class="section first-section">
        <h1>Languages</h1>

        <div class="block">
          <p>
            I am bilingual Danish-English. I have also studied German, French and siSwati, the local language in Swaziland, at school.
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Resume",
  mounted() {},
  head() {
    return {
      title: "Resume",
      meta: [
        { hid: 'description', name: 'description', content: "My resume contains a list of my working experience and education." }
      ]
    };
  }
};
</script>

<style scoped>
.resume {
  padding: 3em 1em;
  max-width: 1200px;
  margin: 0 auto;
}

.container {
  
  display: flex;
}

.section {
  padding: 0 3em;
  flex: 1;
}

.first-section {
  margin-left: 2em;
}

.block {
  margin-bottom: 4em;
}

.date {
  font-style: italic;
}

p {
  font-size: 1.1em;
}

@media screen and (max-width: 900px) {
  .container {
    flex-direction: column;
  }

  .section {
    padding: 0 1em;
  }

  .first-section {
    margin-left: 0;
  }
}
</style>
import Vue from 'vue'
import VueHead from 'vue-head'
import App from './App.vue'
import router from './router.js'
import store from './store.js'

Vue.use(VueHead)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

store.dispatch('get_projects')

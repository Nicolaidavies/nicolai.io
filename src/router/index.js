import Vue from 'vue'
import Router from 'vue-router'
import HomePage from 'components/HomePage'
import Projects from 'components/Projects'
import Resume from 'components/Resume'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      component: HomePage
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    }
  ]
})

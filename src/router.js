import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './components/FrontPage'
import Projects from './components/Projects'
import Project from './components/Project'
import Resume from './components/Resume'

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
      path: '/projects/:project_name',
      props: true,
      name: 'project',
      component: Project,
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    }
  ]
})

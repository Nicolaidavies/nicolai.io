import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import projects from '../projects.json'

const plugins = []

if (process.env.VUE_ENV === 'client') {
  plugins.push(createPersistedState())
}

const createStore = () => {
  return new Vuex.Store({
    plugins,
    state: {
      projects: projects
    },
    mutations: {
      'set_projects': (state, projects) => {
        state.projects = projects
      }
    },
    actions: {
      'get_projects': async (context) => {
        const res = await fetch('/static/projects/projects.json')
        const projects_json = await res.json()
        context.commit('set_projects', projects_json)
      }
    }
  })
}

export default createStore
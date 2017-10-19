import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    projects: []
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
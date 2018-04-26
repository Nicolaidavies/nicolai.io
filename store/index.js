import Vuex from 'vuex'
import projects from '../projects.json'

export const state = () => ({ 
  projects: projects, 
  box_layout: false 
})

export const mutations = {
  set_projects: (state, projects) => {
    state.projects = projects;
  },
  set_box_layout: (state, box_layout) => {
    state.box_layout = box_layout;
  }
}

// TODO: Decide whether to keep or not
export const actions = {
  get_projects: async context => {
    const res = await fetch("/static/projects/projects.json");
    const projects_json = await res.json();
    context.commit("set_projects", projects_json);
  }
}
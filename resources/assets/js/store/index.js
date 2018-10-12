import Vue from 'vue'
import Vuex from 'vuex'

// The modules
import web from './web'
import auth from './auth'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loading: false
  },
  getters: {
    loading (state) {
      return state.loading
    }
  },
  mutations: {
    loading (state, shouldLoad) {
      state.loading = shouldLoad
    }
  },
  modules: {
    web,
    auth
  }
})

export default store

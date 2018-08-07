import Vue from 'vue'
import Vuex from 'vuex'

// The modules
import web from './web'
import auth from './auth'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        web,
        auth
    }
})

export default store

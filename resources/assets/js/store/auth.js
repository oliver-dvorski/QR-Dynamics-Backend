import axios from 'axios'

export default {
    namespaced: true,
    state: {
        user: false
    },
    getters: {
        user (state) {
            return state.user
        }
    },
    mutations: {
        SET_USER (state, user) {
            state.user = user
        }
    },
    actions: {
        fetchUser (state) {
            console.log('running')
            axios.get('/api/user').then(response => {
                if (response.data == 'Not logged in') {
                    return false
                }
                this.commit('auth/SET_USER', response.data)
            })
        }
    }
}

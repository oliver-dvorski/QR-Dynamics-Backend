import axios from 'axios'

export default {
    state: {
        user: false
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
                this.commit('SET_USER', response.data)
            })
        }
    }
}

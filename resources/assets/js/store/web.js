import axios from 'axios'

export default {
    namespaced: true,
    state: {
        dynamicCodes: [],
        dynamicLink: ''
    },
    mutations: {
        setDynamicLink (state, link) {
            state.dynamicLink = link
        }
    },
    actions: {
        createCodeLink (context, user) {
            axios.get(`/api/user/${user.email}/new-code`).then(response => {
                context.setDynamicLink(response.data)
            }).catch( response => {
                if (window.debug) {
                    console.log(response)
                }
            })
        }
    }
}

import axios from 'axios'

export default {
    namespaced: true,
    state: {
        codeList: [
            {
                link: 'oliverdvorski.com',
                name: 'Personal website',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum iste quis accusamus, molestiae quasi quia. Id '
            },
            {
                link: 'google.com',
                name: 'Google\'s search page',
                description: 'Lorem ipsum dolor sit amet, Ducimus dolor error nemo adipisci non, veritatis delectus vel eaque accusamus exercitationem nam quasi ipsam incidunt sunt ut nisi. Maxime, dolor itaque!'
            },
            {
                link: 'oliverdvorski.com',
                name: 'Personal website'
            }
        ],
        dynamicLink: ''
    },
    getters: {
        dyanmicCodeList (state) {
            return state.codeList
        }
    },
    mutations: {
        setDynamicLink (state, link) {
            state.dynamicLink = link
        },
        addCode (state, code) {
            state.codeList.unshift(code)
        },
        updateCode (state, code) {
            state.codeList[code.index] = code
        },
        deleteCode (state, index) {
            state.codeList.splice(index, 1)
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

import axios from 'axios'
import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        codeList: [],
        dynamicLink: ''
    },
    getters: {
        dyanmicCodeList (state) {
            return state.codeList
        }
    },
    mutations: {
        loadCodes (state, codes) {
            state.codeList = codes
        },
        setDynamicLink (state, link) {
            state.dynamicLink = link
        },
        new (state, code) {
            state.codeList.unshift(code)
        },
        update (state, code) {
            let targetIndex = state.codeList.findIndex(element => element.id === code.id)
            Vue.set(state.codeList, targetIndex, code)
        },
        delete (state, code) {
            let targetIndex = state.codeList.findIndex(element => element.id === code.id)
            state.codeList.splice(targetIndex, 1)
        }
    },
    actions: {
        async fetchCodeList (context) {
            await context.dispatch('auth/fetchUser', {}, { root: true })
            if (context.rootGetters['auth/user'] === false) {
                return
            }
            context.commit('loading', true, { root: true })

            let user = await context.dispatch('auth/fetchUser', {}, { root: true })
            let route = `/api/codes`
            let response = await axios.get(route)
            context.commit('loadCodes', response.data.reverse())

            context.commit('loading', false, { root: true })
        },

        async new (context, code) {
            context.commit('loading', true, { root: true })

            let route = `/api/codes`
            let response = await axios.post(route, code)
            context.commit('new', response.data)

            context.commit('loading', false, { root: true })
        },

        async update (context, code) {
            context.commit('loading', true, { root: true })

            let route = `/api/codes/${code.id}`
            let response = await axios.patch(route, code)
            context.commit('update', response.data)

            context.commit('loading', false, { root: true })
        },

        async delete (context, code) {
            context.commit('loading', true, { root: true })

            let route = `/api/codes/${code.id}`
            let response = await axios.delete(route, code)
            context.commit('delete', response.data)

            context.commit('loading', false, { root: true })
        }
    }
}

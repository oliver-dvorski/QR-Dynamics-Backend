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
            let user = await context.dispatch('auth/fetchUser', {}, { root: true })
            let route = `/api/user/${user.id}/codes`
            let response = await axios.get(route)
            context.commit('loadCodes', response.data.reverse())
        },

        async new (context, code) {
            let route = `/api/user/${context.rootGetters['auth/user'].id}/new-code`
            let response = await axios.post(route, code)
            context.commit('new', response.data)
        },

        async update (context, code) {
            let route = `/api/user/${context.rootGetters['auth/user'].id}/codes/${code.id}`
            let response = await axios.patch(route, code)
            context.commit('update', response.data)
        },

        async delete (context, code) {
            let route = `/api/user/${context.rootGetters['auth/user'].id}/codes/${code.id}`
            let response = await axios.delete(route, code)
            context.commit('delete', response.data)
        }
    }
}

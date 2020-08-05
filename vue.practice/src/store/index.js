import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        name: 'dukang'
    },
    mutations: {
        changeName(state, value) {
            state.name = value
        }
    }
})

export default store
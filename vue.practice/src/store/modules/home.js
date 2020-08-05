export default {
    state: {
        homeUser: '杜康'
    },
    mutations: {
        changeHomeUser(state, value) {
            state.homeUser = value
        }
    }
}
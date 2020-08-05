export default {
    state: {
        user: '用户',
        password: '密码'
    },
    mutations: {
        changeUser(state, newVal) {
            state.user = newVal
        },
        changePwd(state, newVal) {
            state.password = newVal
        }
    }
}
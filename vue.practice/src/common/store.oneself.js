import vue from 'vue';

let state = vue.observable({
    count: 0,
});
let mutations = {
    notifyCount(newVal) {
        state.count += newVal
    }
}

export { state, mutations }
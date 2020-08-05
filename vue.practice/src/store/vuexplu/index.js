const vuexPlugins = {
    install: function (vue) {
        vue.mixin({
            created: function () {
                const options = this.$options; // vue template | VNode
                if (options.isVuex) {
                    const _name = options.name.toLowerCase();
                    import('../modules/' + _name).then((res) => {
                        this.$store.registerModule(_name, res.default);
                    });
                    // 错误的写法，import中只能说字面量，不可是一个变量
                    // const _path = '../store/modules/' + name;
                    // import(_path).then(()=>{})
                }
            }
        })
    }
}

export default vuexPlugins
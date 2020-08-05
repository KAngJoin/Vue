// 获取组件上下文模块
const contextModule = require.context(
    // 组件目录的相对路径
    '.',
    // 查询子目录
    true,
    // 文件名匹配
    /\.vue$/)

// 驼峰命名（首字母大写）
function changeStr(str) { return str.charAt(0).toUpperCase() + str.slice(1) }
const install = (Vue) => {
    contextModule.keys().forEach(key => {
        // 获取组件配置
        let componentConfig = contextModule(key);
        //获取到高频组件的 PascalCase 命名
        let componentName = changeStr(key.substring(key.lastIndexOf('/') + 1).replace(/\.\w+$/, ''))
        Vue.component(componentName,
            // 当组件选项通过 `export default` 导出，优先使用 `.default` ,否则回退到使用模块的根。 
            componentConfig.default || componentConfig)
    });
}

// 必须导出 `install` 命名或匿名函数，因为 `Vue.use()` 自动调用install方法或将匿名函数当作install
export default { install }
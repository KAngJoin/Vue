module.exports = {
    configureWebpack: {
        resolve: {
            // 配置路径别名 使用@是因为node_modules\@vue\cli-service\lib\config\base.js中已经配置好了@的解析路径
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'views': '@/views',
            }
        }
    },
    devServer: {
        proxy: {
            "/api": {
                target: 'http://server:3000', // 需要跨域的目标url
                changeOrigin: true, // 将基于名称的虚拟托管网址的选项，不配置请求会报错
                ws: true,
                pathRewrite: {
                    "^/api": ''
                }
            }
        }
    }
}
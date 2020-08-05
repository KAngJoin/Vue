import axios from 'axios';
// add hostDomain
const hostDomain = 'http://localhost:8888/api';
const AUTH_TOKEN = localStorage.getItem('token')
const instance = axios.create({
    // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
    // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
    baseURL: hostDomain,
    //timeout: 3000
    //headers: {'X-Custom-Header': 'foobar'}
})
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
instance.defaults.headers.common['Authorization'] = 'Bearer ' + AUTH_TOKEN;

//在请求或响应被 then 或 catch 处理前拦截它们。
// 请求拦截
instance.interceptors.request.use(function (config) {
    console.log(config);
    // do somethingb
    return config
}, function (error) {
    return Promise.reject(error)
})

// 响应拦截
instance.interceptors.response.use(function (res) {
    console.log(res);
    // do something
    return res
}, function (error) {
    return Promise.reject(error)
})

class Ajax {
    static Get(url) {
        return new Promise((resolve, reject) => {
            instance.get(url).then(function (response) {
                const _data = response.data;
                if (_data.code === 0 || _data.code === '0') {
                    // 与后端协商的成功处理
                    // 判断code ，做一些响应处理，如 提示
                    resolve(_data)
                } else {
                    // 不符合业务规则的处理逻辑
                    reject(response)
                }
            }).catch(function (error) {
                reject(error)
            })
        })
    }
    static Post(url, params) {
        return new Promise((resolve, reject) => {
            instance.post(url, params).then(function (response) {
                const _data = response.data;
                if (_data.code === 0 || _data.code === '0') {
                    // 与后端协商的成功处理
                    resolve(_data)
                } else {
                    // 不符合业务规则的处理逻辑
                    reject(response)
                }
            }).catch(function (error) {
                reject(error)
            })
        })
    }
}

export default Ajax

/*
 * @Descripttion: 路由配置文件
 * @version: 
 * @Author: Duk
 * @Date: 2020-03-27 16:12:00
 * @LastEditors: Duk
 * @LastEditTime: 2020-07-22 23:31:24
 */
import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter)

const routerList = [];

function importAll(req) {
    req.keys().forEach((key) => {
        routerList.push(req(key).default)
        // 这里的default就是export default的default
    });
}
importAll(require.context('./route', true, /\.routes\.js$/))

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/ajax',
        name: 'Ajax',
        component: () => import('@/views/axios/Ajax.vue')
    },
    ...routerList,
]

export const router = new vueRouter({ routes: routes })
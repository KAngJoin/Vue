/*
 * @Descripttion: 入口文件
 * @version: 
 * @Author: Duk
 * @Date: 2020-03-27 11:43:26
 * @LastEditors: Duk
 * @LastEditTime: 2020-07-22 23:22:06
 */
import Vue from 'vue'
import App from './App.vue'
import store from "./store";
import { router } from './router/index';

// element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 全局组件注册
import globalTemplate from '@/components/util'
Vue.use(globalTemplate)

import vuexPlugins from './store/vuexplu/index.js';
Vue.use(vuexPlugins)

// ajax
import Ajax from './axios/index'
Vue.prototype.ajax = Ajax

// common
Vue.prototype.bus = new Vue();
Vue.config.productionTip = false;

// auto add global directive
(function (context) {
  context.keys().forEach(key => {
    const directive = key.substring(key.lastIndexOf('/') + 1).replace(/\.\w+$/, '')
    Vue.directive(directive, context(key).default)
  });
})(require.context('./directive', false, /.js$/))

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
})


import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
Vue.prototype.axios = axios;

//全局配置过滤器
Vue.filter('setWH', (url, arg) => {
  return url.replace(/W\.h/,arg);
})

Vue.config.productionTip = false
//把跟新加载的组件注册成全局的组件
import Scroller from './components/Scroller'
Vue.component('Scroller', Scroller)

import Loading from './components/Loading'
Vue.component('Loading', Loading)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

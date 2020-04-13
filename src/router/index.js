import Vue from 'vue'
import VueRouter from 'vue-router'
//导入路由
import movieRouter from './movie'
import fileproRouter from './filepro'
import cinemaRouter from './cinema'

import detailRouter from './Detail'
Vue.use(VueRouter)

  const routes = [
    movieRouter,
    fileproRouter,
    cinemaRouter,
    detailRouter,
    {
      path: '',
      redirect: '/movie' 
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

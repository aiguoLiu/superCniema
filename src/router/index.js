import Vue from 'vue'
import VueRouter from 'vue-router'
//导入路由
import movieRouter from './movie'
import fileproRouter from './filepro'
import cinemaRouter from './cinema'
import cityRouter from './city'
import seachRouter from './Seach'
import actorRouter from './ActorMessage'

Vue.use(VueRouter)

  const routes = [
    movieRouter,
    fileproRouter,
    cinemaRouter,
    cityRouter,
    seachRouter,
    actorRouter,
    // 默认路由
    {
      path: '',
      redirect: '/movie' 
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  // base: super_cinema,
  routes
})

export default router

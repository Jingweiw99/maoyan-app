import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '../views/Film.vue'
import Cinema from '../views/Cinema.vue'
import Center from '../views/Center.vue'
import Detail from '../views/Detail.vue'
import City from '../views/City.vue'

import Nowplaying from '../views/film/Nowplaying'
import Comingsoon from '../views/film/Comingsoon'

Vue.use(VueRouter) // 注册模块，已经创建了全局组件router-view

const routes = [
  {
    path: '/film',
    component: Film,
    children: [
      {
        path: 'nowplaying', // 简写不能有/
        component: Nowplaying
      },
      {
        path: '/film/comingsoon',
        component: Comingsoon
      },
      {
        path: '',
        redirect: '/film/nowplaying'
      }
    ]
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '/center',
    component: Center
  },

  {
    path: '/detail/:myid',
    component: Detail,
    name: 'myDetail'
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  // 重定向  
  {
    path: '/',
    redirect: '/film'
  },
  {
    path: '*',
    redirect: '/film'
  }

]

const router = new VueRouter({
  mode: 'hash', // hash模式或者是history模式
  // base: process.env.BASE_URL,
  routes
})
// to是到那里去，from从哪里来，next是放行。
router.beforeEach((to, from, next) => {
  // console.log(to)
  const auth = ['/center', 'order', '/money']
  if (auth.includes(to.fullPath)) {
    // console.log('验证token')
    if (!localStorage.getItem('token')) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})
export default router

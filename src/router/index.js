import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Data from '../components/pages/Data.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,

    },
    {
      path: '/',
      name: 'home',
      components: {
        default:Home,
      },
      children:[
        {
          path:"/",
          name:"data",
          components: {
            home: Data,
          },
        }
      ],
    },
  ]
})

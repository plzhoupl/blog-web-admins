import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['../components/Login.vue'], resolve),
    },
    {
      path: '/',
      name: 'home',
      components: {
        default:resolve => require(['../components/Home.vue'], resolve),
      },
      children:[
        {
          path:"/data",
          name:"data",
          components: {
            home: resolve => require(['../components/pages/Data.vue'], resolve),
          },
        },
        {
          path:"/blog",
          name:"blog",
          components: {
            home: resolve => require(['../components/pages/Blog.vue'], resolve),
          },
        }
      ],

    },
  ]
})

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import user from './js/User'

  export default {
    name: 'app',
    methods: {
      login () {
        user.checkLogin()
      },
    },
    mounted () {
      this.login()
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'login'
    }
  }
</script>

<style>
  #app {
    font-family: Hiragino Sans GB, serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #F5F4F5;
    height: 100%;
  }
</style>

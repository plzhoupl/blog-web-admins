<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import user from './api/User';

  export default {
  name: 'app',
  methods: {
    login() {
      user.checkLogin();
    },
  },
  mounted () {
   this.login();
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    "$route": "login"
  }
}
</script>

<style>
#app {
  font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>

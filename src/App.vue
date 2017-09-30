<template>
  <div id="app">
    <router-view ></router-view>
  </div>
</template>

<script>
  import user from './api/User';

  export default {
  name: 'app',
  methods: {
    login() {
      console.log(user.loadUser());
      user.checkLogin();
    },
  },
  mounted () {
//   this.login();
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
//    "$route": "login"
  }
}
</script>

<style>
#app {
  font-family: Hiragino Sans GB;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #F5F4F5;
  height: 100%;
}
</style>

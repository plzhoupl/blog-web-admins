<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>

<template>
  <div id="app">
    <input v-model="name" placeholder="请输入用户名"/>
    <input v-model="pwd" placeholder="请输入密码"/>
    <button @click="login">登录</button>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        name: '',
        pwd: '',
      }
    }, methods: {
      login () {
        this.$ajax({
          method: 'PUT',
          url: 'http://zhoupeili.cn:8080/api/login',
          responseType: 'json',
          data: {
            'username': this.name,
            'pwd': this.pwd,
          }
        }).then((response) => {
          console.log(response)
        })
      }
    }
  }
</script>


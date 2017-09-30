<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
  #login {
    background-image: linear-gradient(to right top, #0AE3A7 0%,#41C3E3  100%);
    width: 100%;
    height: 100%;
    padding: 10% 20% 10% 20%;
  }

  .demo-grid {
    background-color: #F3FDFF;
    border-radius: 5px;
  }

  .demo-grid div[class*="col-"] {
    text-align: center;
    color: #000;
    padding: 8px;
    margin-bottom: 8px;
  }

  .title{
    width: 50%;
    margin-left: 20px;
    font-size: 25px;
  }
  .demo-grid {
    padding-bottom: 5%;
  }
  .input-div{
    margin: 20px;
    border-radius: 5px;
    width: 50%;
    left: 25%;
    height: 50px;
    text-align: center;
    border: 1px outset #444444;
    background: #F3FDFF;
    position: relative;
  }
  .input{
    background: #F3FDFF;
    outline: none;
    border: none;
    height: 100%;
    text-align: center;
    width: 80%;
  }
  .button{
    background-image: linear-gradient(to right top, #0AE3A7 0%,#41C3E3  100%);
    width: 30%;
    height: 40px;
    left: 20px;
    border-radius: 10px;
    color: white;
    box-shadow: 0px 10px 20px 2px #b5b0b6;
    text-align: center;
    font-size: 18px;
  }
  .content{
    margin: 20px;
    line-height: 50px;
  }

</style>

<template>
  <div id="login">
    <mu-paper class="demo-grid demo-paper" :zDepth="5">
      <mu-row gutter>
        <mu-col width="100" tablet="100" desktop="100">
          <h3 class="top">欢迎来到我的博客！</h3>
          <mu-divider></mu-divider>
        </mu-col>
      </mu-row>

      <div>
        <mu-row gutter>
          <span class="title"> 登录</span>
        </mu-row>

        <div>
          <mu-row gutter>
            <mu-col width="100" tablet="50" desktop="50" v-if="activeTab === 'tab1'">
              <div class="input-div"> <input class="input" placeholder="Email Address"></div>
              <div class="input-div"> <input class="input" placeholder="Password"></div>
              <br/>
              <mu-raised-button  @click="Login" label="登录" class="button" /><br/>
              <span class="content">还没账户?注册一个</span>
            </mu-col>
            <mu-col v-if="activeTab === 'tab2'" width="100" tablet="50" desktop="50">
              <mu-auto-complete inputClass="text" labelFocusClass="text" underlineFocusClass="bg" label="设置用户名" :maxSearchResults="5" labelFloat :dataSource="colors" filter="noFilter"/>
              <br/>
              <mu-auto-complete inputClass="text" labelFocusClass="text" underlineFocusClass="bg" label="设置邮箱" :maxSearchResults="5" labelFloat :dataSource="colors" filter="noFilter"/>
              <br/>
              <mu-auto-complete inputClass="text" labelFocusClass="text" underlineFocusClass="bg" label="设置密码" :maxSearchResults="5" labelFloat :dataSource="colors" filter="noFilter"/>
              <br/>
              <mu-auto-complete inputClass="text" labelFocusClass="text" underlineFocusClass="bg" label="确认密码" :maxSearchResults="5" labelFloat :dataSource="colors" filter="noFilter"/>
              <br/>
              <mu-raised-button  label="注册" class="demo-raised-button bg" />
            </mu-col>
            <mu-col width="100" tablet="50" desktop="50">
              <img src="../assets/assign.png" width="100%"/>
            </mu-col>
          </mu-row>
        </div>
      </div>
    </mu-paper>
  </div>
</template>


<script>
  export default {
    name: 'Login',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        name: '',
        pwd: '',
        activeTab: 'tab1'
      }
    },
    methods: {
      handleChange (val) {
        this.activeTab = val
      },
      login () {
        this.$ajax({
          method: 'PUT',
          url: 'http://zhoupeili.cn:8080/api/login',
          responseType: 'json',
          data: {
            'username': this.name,
            'pwd': this.pwd
          }
        }).then((response) => {
          console.log(response)
        })
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
  #login {
    background-image: linear-gradient(to right top, #0AE3A7 0%, #41C3E3 100%);
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

  .title {
    width: 50%;
    font-size: 25px;
  }

  .demo-grid {
    padding-bottom: 5%;
  }

  .button {
    background-image: linear-gradient(to right top, #0AE3A7 0%, #41C3E3 100%);
    width: 50%;
    height: 35px;
    border-radius: 10px;
    color: white;
    box-shadow: 0 10px 20px 2px #b5b0b6;
    text-align: center;
    font-size: 18px;
    margin-top: 30px;
  }

  .content {
    cursor: pointer;
    margin: 20px;
  }

  .code {
    border-radius: 10px;
    background-image: linear-gradient(to right top, #0AE3A7 0%, #41C3E3 100%);
    margin-top: -60px;
    position: absolute;
    margin-right: -30px;
    color: white;
  }

  .edit {
    width: 100%;
  }
</style>

<template>
  <div id="login">
    <loading v-show="loading"></loading>
    <mu-paper class="demo-grid demo-paper" :zDepth="5">
      <mu-row gutter>
        <mu-col width="100" tablet="100" desktop="100">
          <h3 class="top">欢迎博客！</h3>
          <mu-divider></mu-divider>
        </mu-col>
      </mu-row>
      <div>
        <div>
          <mu-row gutter>
            <mu-col width="100" tablet="50" desktop="50" v-if="this.login">
              <span class="title"> 登录</span><br/>
              <mu-text-field inputClass="text" labelFocusClass="text" underlineFocusClass="bg" label="用户名或邮箱"
                             :maxSearchResults="5" labelFloat :dataSource="colors"
                             v-model="name"
                             filter="noFilter"></mu-text-field>
              <br/>

              <mu-text-field inputClass="text" labelFocusClass="text" underlineFocusClass="bg" label="密码"
                             :maxSearchResults="5" labelFloat :dataSource="colors"
                             v-model="pwd"
                             type="password"
                             filter="noFilter"></mu-text-field>
              <br/>
              <mu-raised-button @click="loginAdmin()" label="登录" class="demo-raised-button button"></mu-raised-button>
              <br/>
              <div class="content" @click="handleChange">还没账户?注册一个</div>
            </mu-col>
            <mu-col v-if="!this.login" width="100" tablet="50" desktop="50">
              <span class="title"> 注册 </span><br/>
              <mu-auto-complete class="edit" inputClass="text" labelFocusClass="text" underlineFocusClass="bg"
                                label="设置用户名"
                                v-model="register.username"
                                labelFloat></mu-auto-complete>
              <br/>
              <mu-auto-complete class="edit" inputClass="text" labelFocusClass="text" underlineFocusClass="bg"
                                label="设置邮箱"
                                :disabled="showEmail"
                                v-model="register.email"
                                labelFloat></mu-auto-complete>

              <mu-auto-complete class="edit" inputClass="text" labelFocusClass="text" underlineFocusClass="bg"
                                label="验证码"
                                v-model="register.code"
                                labelFloat></mu-auto-complete>
              <mu-raised-button :label="code.text" class="demo-raised-button code" @click="sendCode()"
                                :disabled="code.clickAble"></mu-raised-button>
              <br/>
              <mu-auto-complete class="edit" inputClass="text" labelFocusClass="text" underlineFocusClass="bg"
                                label="设置密码"
                                v-model="register.pwd"
                                labelFloat></mu-auto-complete>
              <br/>
              <mu-auto-complete class="edit" inputClass="text" labelFocusClass="text" underlineFocusClass="bg"
                                label="确认密码"
                                v-model="register.rePwd"
                                labelFloat></mu-auto-complete>
              <br/>
              <mu-raised-button @click="registerAdmin()" label="注册" class="button"></mu-raised-button>
              <div class="content" @click="handleChange">返回登录</div>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="50">
              <img src="../assets/assign.png" width="100%"/>
            </mu-col>
          </mu-row>
        </div>
      </div>
    </mu-paper>
    <div>
      <mu-dialog :open="dialog.show" :title="dialog.title" @close="close">
        {{ dialog.content }}
        <mu-flat-button slot="actions" primary @click="close" label="确定"></mu-flat-button>
      </mu-dialog>
    </div>
  </div>
</template>


<script>
  import Api from '../js/api/AdminApi'
  import user from '../js/User'

  export default {
    name: 'Login',
    data () {
      return {
        name: '',
        pwd: '',
        login: true,
        loading: false,
        code: {text: '发送验证码', time: 60, clickAble: false},
        showEmail: false,
        dialog: {show: false, title: '标题', content: '内容'},
        register: {username: '', email: '', code: '', pwd: '', rePwd: ''}
      }
    },
    mounted () {
      if (user.isLogin()) {
        this.$router.push({name: 'data'})
      }
    },
    methods: {
      handleChange () {
        this.login = !this.login
      },
      sendCode () {
        if (this.register.email.length === 0 || !this.isEmail()) {
          this.dialog = {show: true, title: '输入提示', content: '请输入正确的邮箱格式'}
          return
        }
        let params = {}
        params.mail = this.register.email
        this.loading = true
        Api.sendEmail(params, (response) => {
          this.loading = false
          switch (response.status) {
            case 407:
              this.dialog = {show: true, title: '邮箱格式不正确', content: '请输入正确的邮箱格式'}
              break
            case 410:
              this.dialog = {show: true, title: '邮箱服务器异常', content: '请稍后重试'}
              break
            case 201:
              this.showEmail = true
              this.run()
              this.code.clickAble = true
              break
          }
        })

      },
      loginAdmin () {
        const params = {}
        if (this.name.length === 0 || this.pwd.length === 0) {
          this.dialog = {show: true, title: '输入提示', content: '请输入用户名和密码'}
          return
        }
        params.username = this.name
        params.pwd = this.pwd
        this.loading = true
        Api.login(params, (response) => {
          this.loading = false
          switch (response.status) {
            case 404:
              this.dialog = {show: true, title: '登录失败', content: '用户不存在,请注册'}
              break
            case 401:
              this.dialog = {show: true, title: '登录失败', content: '密码错误'}
              break
            case 200:
              user.saveUser(response.data.data)
              this.$router.push({name: 'data'})
              break
          }
        })
      },
      registerAdmin () {
        const params = this.register
        if (params.username.length === 0 || params.pwd.length === 0 || params.email.length === 0 || params.code === 0) {
          this.dialog = {show: true, title: '输入提示', content: '请填写完整'}
          return
        }
        if (params.pwd !== params.rePwd) {
          this.dialog = {show: true, title: '输入提示', content: '两次密码不一致'}
          return
        }
        this.loading = true
        Api.register(params, (response) => {
          this.loading = false
          switch (response.status) {
            case 401:
              this.dialog = {show: true, title: '注册失败', content: '验证码错误'}
              break
            case 409:
              this.dialog = {show: true, title: '注册失败', content: '用户名或邮箱已存在,请登陆'}
              break
            case 201:
              user.saveUser(response.data.data)
              this.$router.push({name: 'data'})
              break
          }
        })
      },
      close () {
        this.dialog.show = false
      },
      isEmail () {
        let reg = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+(([.-])[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
        return reg.test(this.register.email)
      },
      run () {
        this.code.time = 60
        this.timer()
      },
      timer () {
        if (this.code.time > 0) {
          this.code.time--
          this.code.text = this.code.time + '秒后重试'
          setTimeout(this.timer, 1000)
        } else {
          this.code.text = '重新发送'
          this.code.clickAble = false
        }
      }
    }
  }
</script>


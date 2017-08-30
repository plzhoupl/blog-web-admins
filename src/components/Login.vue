<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
  #login {
    background-image: linear-gradient(to bottom, #BEF5FF 0%, #19E7FF 100%);
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

  .top, .mu-card-text {
    height: 46px;
    color: #115985;
    font-size: 16px;
    font-weight: bold;
  }

  .mu-card-text {
    text-align: left;
    margin-left: 8%;
  }

  .assign {
    width: 50%;
    display: block;
  }

  .mu-text-field {
    width: 50%;
  }

  .mu-raised-button.mu-raised-button-inverse {
    margin-top: 20px;
  }

  .mu-card-media {
    width: 70%
  }

  .demo-grid {
    padding-bottom: 5%;
  }
</style>

<template>
  <div id="login">
    <mu-paper  class="demo-grid demo-paper" :zDepth="5">
      <mu-row gutter>
        <mu-col width="100" tablet="100" desktop="100">
          <h3 class="top">欢迎来到我的博客！</h3>
          <mu-divider></mu-divider>
        </mu-col>
      </mu-row>


      <div>
        <mu-row gutter>
          <mu-col style="text-align: center" width="100" tablet="50" desktop="50">
            <mu-paper >
              <mu-bottom-nav :value="activeTab" shift @change="handleChange">
                <mu-bottom-nav-item value="tab1" title="登录" icon="account_circle"/>
                <mu-bottom-nav-item value="tab2" title="注册" icon="note_add"/>
              </mu-bottom-nav>
            </mu-paper>
            <!--<mu-paper style="max-width: 376px; background: blue ">-->
            <!--<mu-bottom-nav :value="activeTab" @change="handleTabChange">-->

            <!--</mu-bottom-nav>-->
            <!--</mu-paper>-->
          </mu-col>

          <mu-col width="100" tablet="50" desktop="50">
          </mu-col>
        </mu-row>

        <div v-if="activeTab === 'tab1'">
          <mu-row gutter>
            <mu-col width="100" tablet="50" desktop="50">
              <mu-auto-complete v-model="name"  label="邮箱/用户名" :maxSearchResults="5" labelFloat :dataSource="colors" filter="noFilter"/><br/>
              <mu-auto-complete v-model="pwd"  label="登录密码" :maxSearchResults="5" labelFloat :dataSource="colors" filter="noFilter"/><br/>
              <mu-raised-button @click="Login" label="登录" class="demo-raised-button" backgroundColor="#76CBE7"/>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="50">
                <img src="../assets/assign.png" width="100%"/>
            </mu-col>
          </mu-row>
        </div>
        <div v-if="activeTab === 'tab2'">
          <mu-row gutter>
            <mu-col width="100" tablet="50" desktop="50">
              <mu-auto-complete  label="设置用户名" :maxSearchResults="5" labelFloat :dataSource="colors" filter="noFilter"/><br/>
              <mu-auto-complete  label="设置邮箱" :maxSearchResults="5" labelFloat :dataSource="colors" filter="noFilter"/><br/>
              <mu-auto-complete  label="设置密码" :maxSearchResults="5" labelFloat :dataSource="colors" filter="noFilter"/><br/>
              <mu-auto-complete  label="确认密码" :maxSearchResults="5" labelFloat :dataSource="colors" filter="noFilter"/><br/>
              <mu-raised-button label="注册" class="demo-raised-button" backgroundColor="#76CBE7"/>
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
    }, methods: {
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
            'pwd': this.pwd,
          }
        }).then((response) => {
          console.log(response)
        })
      }
    }
  }
</script>


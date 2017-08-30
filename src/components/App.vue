<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
  html,body{
    margin:0;
    height: 100%;
  }
  #app{
    background-image: linear-gradient(to bottom, #BEF5FF 0%, #19E7FF 100%);
    width: 100%;
    height: 100%;
    padding: 5%;
  }
  .demo-grid{
    background-color: #F3FDFF;
    border-radius: 5px;
  }
  .demo-grid div[class*="col-"] {
    text-align: center;
    color: #000;
    padding: 8px;
    margin-bottom: 8px;
  }

  .top,.mu-card-text{
    height: 46px;
    color: #115985;
    font-size: 16px;
    font-weight: bold;
  }
  .mu-card-text {
    text-align: left;
    margin-left: 8%;
  }
  .assign{
    width: 50%;
    display: block;
  }
  .mu-text-field{
    width: 50%;
  }
  .mu-raised-button.mu-raised-button-inverse{
    margin-top: 20px;
  }
  .mu-card-media{width: 70%}
  .demo-grid{
    padding-bottom: 5%;
  }
</style>

<template>
  <div id="app">
    <div class="demo-grid">
      <mu-row gutter>
        <mu-col width="100" tablet="100" desktop="100">
          <h3 class="top">欢迎来到我的博客！</h3>
          <mu-divider></mu-divider>
        </mu-col>
      </mu-row>
      <div>
        <mu-row gutter>
          <mu-col width="100" tablet="50" desktop="50">
            <mu-tabs :value="activeTab" @change="handleTabChange">
              <mu-tab value="tab1" title="登录"/>
              <mu-tab value="tab2" title="注册"/>
            </mu-tabs>
          </mu-col>
          <mu-col width="100" tablet="50" desktop="50">

          </mu-col>
        </mu-row>

        <div v-if="activeTab === 'tab1'">
          <mu-row gutter>
            <mu-col width="100" tablet="50" desktop="50">
              <mu-text-field v-model="name" hintText="邮箱/用户名" label="邮箱/用户名"/>
              <br>
              <mu-text-field v-model="pwd" label="登录密码" hintText="请输入密码" type="password"/>
              <br>
              <mu-raised-button @click="login" label="登录" class="demo-raised-button" backgroundColor="#76CBE7" />
            </mu-col>
            <mu-col width="100" tablet="50" desktop="50">
                <mu-card-media>
                  <img src="../assets/assign.png" />
                </mu-card-media>
                <mu-card-text>
                  Find freelance projects and grow your business.
                </mu-card-text>
            </mu-col>
          </mu-row>
        </div>
        <div v-if="activeTab === 'tab2'">
          <mu-row gutter>
            <mu-col width="100" tablet="50" desktop="50">
              <mu-text-field hintText="设置用户名" label="设置用户名"/>
              <br>
              <mu-text-field hintText="设置邮箱" label="设置邮箱"/>
              <br>
              <mu-text-field label="设置密码" hintText="设置您的密码" type="password"/>
              <br>
              <mu-text-field label="确认密码" hintText="请再次输入您的密码" type="password"/>
              <br>
              <mu-raised-button label="注册" class="demo-raised-button" backgroundColor="#76CBE7" />
            </mu-col>
            <mu-col width="100" tablet="50" desktop="50">
              <mu-card-media>
                <img src="../assets/assign.png" />
              </mu-card-media>
              <mu-card-text>
                Find freelance projects and grow your business.
              </mu-card-text>
            </mu-col>
          </mu-row>
        </div>
      </div>
    </div>
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
        activeTab: 'tab1'
      }
    }, methods: {
      handleTabChange (val) {
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


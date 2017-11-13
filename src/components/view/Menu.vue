<style scoped>
  .menu {
    background-image: linear-gradient(to bottom, #0AE3A7 0%, #41C3E3 100%);
    color: white;
    min-height: 200px;
  }

  .mu-avatar {
    width: 100px;
    height: 100px;
    margin-top: 40px;
  }

  .name {
    font-size: 20px;
    font-family: Hiragino Sans GB;
  }

  .login-out {
    margin-top: 10px;
    border-radius: 50px;
    height: 30px;
  }

  .item-icon {
    height: 80px;
    width: 80px;
    margin-top: 15px;
  }

  .item-title {
    line-height: 35px;
    font-size: 20px;
    color: white;
  }

  .select-item {
    background-color: rgba(0, 0, 0, .1);
    border: outset transparent;
    border-left-color: #00ff53;
    border-width: 0 0 0 5px;
  }
  .close{
    width: 200px;
    height: 50px;
    border-radius: 50px;
  }


</style>
<template>
  <div id="menu">
    <mu-drawer :open="open" :docked="docked" :overlay="docked" class="menu" :zDepth="1">
      <div style="height: 30%">
        <img class="mu-avatar" src="../../assets/avatar.jpg"/><br/>
        <span class="name">陈圣宇</span><br/>
        <mu-raised-button  @click="toReLogin()" label="切换账户" class="demo-raised-button login-out" secondary/>
      </div>
      <mu-list style="height: 60%;overflow: hidden" @change="handleListChange" :value="activeList">
        <mu-list-item v-for="item in list" :class="activeList==item? 'select-item item':'item'" :value="item">
          <div>
            <svg class="icon item-icon" aria-hidden="true">
              <use :xlink:href="item.icon"></use>
            </svg>
            <br/>
            <span class="item-title">{{ item.title }}</span>
          </div>
        </mu-list-item>
      </mu-list>
      <mu-raised-button @click="close" label="CLOSE" class="demo-raised-button close" secondary/>
    </mu-drawer>

  </div>
</template>
<script>
  import MuIconButton from '../../../node_modules/muse-ui/src/iconButton/iconButton.vue'
  import user from '../../js/User'

  export default {
    components: {MuIconButton},
    props: {
      open: {
        type: Boolean,
        default: true
      },
      docked: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        list: [
          {'title': '博客数据', 'icon': '#icon-menu-data'},
          {'title': '博文管理', 'icon': '#icon-menu-blog'},
          {'title': '好友管理', 'icon': '#icon-menu-friends'},
        ],
        activeList: '',
      }
    },
    methods: {
      handleListChange (val) {
        if (this.activeList !== val) {
          this.activeList = val
          this.$emit('change', val.title)
          switch (val) {
            case this.list[0]:
              this.$router.push({name: 'data'})
              break
            case this.list[1]:
              this.$router.push({name: 'blog'})
              break
            case this.list[2]:
              this.$router.push({name: 'data'})
              break
          }
        }

      },
      close(){
        this.open = false;
        this.$emit('close',false)
      },
      toReLogin(){
    user.reLogin();
      }
    },
    mounted () {
      switch (this.$route.name) {
        case 'data':
          this.activeList = this.list[0];
          break;
        case 'blog':
          this.activeList = this.list[1];
          break;
        case 'game':
          this.activeList = this.list[2];
          break;
      }
    }
  }

</script>

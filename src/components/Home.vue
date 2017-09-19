<style scoped lang="less">
  #home{
    background-color: #E8ECEF;
    height: 100%;
    width: 100%;

  }
  .example-appbar {
    position: fixed;
    left: 256px;
    right: 0;
    top: 0;
    color: #cccccc;
    width: auto;
    transition: all .2s;
    background-color: #ffffff;
    &.nav-hide {
      left: 0;
    }
  }
  .pages{
    color: black;
    left: 256px;
    top:60px;
    padding: 20px;
    position: absolute;
    &.nav-hide {
      left: 0;
    }
  }
</style>
<template>
  <div id="home">
    <admin-menu :open="open" @change="handleMenuChange"></admin-menu>
    <mu-appbar :title="title" class="example-appbar" :class="{'nav-hide': !open}">
      <mu-icon-button @click="toggleNav" icon="menu" slot="left"/>
      <mu-icon-button slot="right" href="https://github.com/lovexiaobei">
        <svg class="icon item-icon" aria-hidden="true">
          <use xlink:href="#icon-home"></use>
        </svg>
      </mu-icon-button>
    </mu-appbar><br/>
    <router-view name="home"  class="pages" :class="{'nav-hide': !open}">
    </router-view>
  </div>
</template>
<script>
  import AdminMenu from './view/Menu.vue'

  export default {
    data () {
      return {
        open: true,
        title:'',
      }
    },
    methods: {
      toggleNav () {
        this.open = !this.open
      },
      handleMenuChange (path) {
        this.title=path;
      },
    },
    components: {
      AdminMenu,
    }
  }
</script>

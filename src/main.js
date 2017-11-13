// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-light.css' // 使用 carbon 主题
import Loading from './components/view/loading.vue'
Vue.use(MuseUI)
Vue.component('Loading', Loading)
require('./main.css')
Vue.config.productionTip = false
window.axios = require('axios')
window.router = router;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }

})

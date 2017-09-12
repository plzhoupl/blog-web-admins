// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-light.css' // 使用 carbon 主题

Vue.use(MuseUI)
require('./main.css')

Vue.config.productionTip = false
Vue.prototype.$ajax = axios

import User from './api/User';

window.User = User;
window.router = router;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }

})

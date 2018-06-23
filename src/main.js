// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Icon } from 'vant' 
// import BScroll from 'better-scroll'
Vue.component('Icon',Icon)
Vue.config.productionTip = false
// Vue.use(BScroll)
// Vue.component('Button',Button)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

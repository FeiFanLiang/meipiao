// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Icon,Lazyload } from 'vant' 


Vue.use(Lazyload,{
  loading:require('./assets/lazy.jpg')
})
Vue.component('Icon',Icon)
Vue.config.productionTip = false

Vue.config.devtools = true
// Vue.use(BScroll)
// Vue.component('Button',Button)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

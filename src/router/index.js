import Vue from 'vue'
import Router from 'vue-router'
import index from 'pages/index/index'
import hotel from 'pages/hotel/index'
import search from 'pages/search/index'
Vue.use(Router)
const views =  Vue.component('views',{template:'<router-view></router-view>'})
export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index',
       component:views
    },
    {
      path:'/index',
      name:'首页',
      component:index,
      redirect:'/index/hotel',
      children:[{
        name:'酒店搜索页',
        path:'hotel',
        component:hotel
      },
      
      
      ]
    },
    {
      path:'/search',
      name:'搜索结果页',
      component:search
    }
    
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import { resolve } from 'url';


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
      component:resolve => require(['pages/hotel/hotel-index/index'],resolve),
      redirect:'/index/hotel',
      children:[{
        name:'酒店搜索页',
        path:'hotel',
      component:resolve => require(['pages/hotel/index-search/index-search'],resolve),
      },
      
      
      ]
    },
    {
      path:'/search',
      name:'搜索结果页',
      component:resolve => require(['pages/hotel/hotel-search/search'],resolve)
    },
    {
      path:'/hotel/:id',
      name:'酒店详情页',
      component:resolve => require(['pages/hotel/hotel-room/hotel'],resolve),
      
    },
    {
      path:'/sonRoom/:id',
      name:'酒店子房型详情页',
      component:resolve => require(['pages/hotel/hotel-sonroom/hotel-room'],resolve),
     
    },
    {
      path:'/pay',
      name:'订单支付页面',
      component:resolve => require(['pages/pay/pay'],resolve)
    }
    
  ]
})

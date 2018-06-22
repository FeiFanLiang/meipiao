<template>
    
    <div class="aside-container">
        <div class="header-menu" @click="show = true">
            <i class="menu-border2x"></i>
            <i class="menu-border"></i>
        </div>
        <Popup v-model="show" :overlay="true" :close-on-click-overlay="true" position="left" >
            <div class="menu-wrap">
               <div class="main-log"></div>
               <div class="menu-list" v-if="login">
                   <ul>
                       <li class="list-item">
                           <div class="username">
                            <i class="icon-user icon-menu"></i> <span>张三</span>   
                           </div>  
                       </li>
                       <li class="list-item">
                           <div class="order">
                            <i class="icon-order icon-menu"></i> <span>订单</span>   
                           </div>  
                       </li>
                       <li class="list-item">
                           <div class="msg">
                            <i class="icon-msg icon-menu"></i> <span>通知</span>   
                           </div>  
                       </li>
                       <li class="list-item">
                           <div class="service">
                            <i class="icon-service icon-menu"></i> <span>客服</span>   
                           </div>  
                       </li>
                       <li class="list-item">
                           <div class="logout">
                            <i class="icon-logout icon-menu"></i> <span>退出</span>   
                           </div>  
                       </li>
                   </ul>
               </div>
               <div class="menu-list no-login" v-else>
                   <div class="log-status">
                       <span>未登录</span>
                   </div>
                   <div class="log-text">
                       <p>立即登录</p>
                       <p>享受特价优惠</p>
                   </div>
                   <div class="log-link">
                       <span>点击登录</span>
                   </div>
               </div>
            </div>
        </Popup>
    </div>
</template>
<script>
import { Popup } from 'vant'
export default {
   
    components:{
        Popup
    },
    data(){
        return{
            login:false,
            show:false
        }
    }
}
</script>
<style>
.header-menu{
  position:absolute;
  top: 0.35rem;
  left: 0.32rem;
  width: 0.4rem;
  height: 0.4rem;
  box-sizing: border-box;
  border-top: 0.03rem solid #fff;
  
}
.header-menu i {
  display: block;
  height: 0.2rem;
  box-sizing: border-box;
  border-bottom: 0.03rem solid #fff;
}
.menu-border2x{
   width: 0.28rem;
   
  
}
.menu-border{
  width: 0.2rem;
  
}
.menu-wrap{
    position: relative;
    width: 100%;
    height: 100%;
    
  
}
.aside-container .van-popup--left{
    width: 41.8%;
    height: 100%;
    background: linear-gradient(160deg,#ff5400 ,#ff9c00);
    
}
.main-log{
    position: absolute;
    left: 50%;
    margin-left: -0.6rem;
    top: 0.55rem;
    width: 1.2rem;
    height: 1.08rem;
    background: url('./aside-log.png') no-repeat;
}
.menu-list{
    padding-top: 2.35rem;
    padding-left: 15.2%;

}
.menu-list .list-item{
    margin-bottom: 0.58rem;
}

.list-item>div{
    display: flex;
    align-items: center;

}
.icon-menu{
    width: 0.41rem;
    height: 0.38rem;
    background-repeat: no-repeat;
    background-position: center center;
    margin-right: 0.26rem;
}
.icon-user{
    background-image: url('./data.png');
    
}
.icon-order{
    background-image: url('./drafts.png');
}
.icon-msg{
    background-image: url('./message.png');
}
.icon-service{
    background-image: url('./call.png');
}
.icon-logout{
    background-image: url('./exit.png');
}
.no-login{
    padding-right: 15%;
}
.no-login>div{
    display: flex;
    align-items: center;
    justify-content: center;
}

.log-status span{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.33rem;
    height: 0.65rem;
    font-size: 0.26rem;
    color: #ff5400;
    background-color: #fff;
    border-radius: 0.04rem;
   
    
}
.log-status{
    margin-bottom: 0.45rem;
}
.no-login .log-text{
    flex-direction: column;
    font-size: 0.2rem;
    line-height: 0.2rem;
    height: 0.55rem;
    justify-content: space-between;
}
.log-text{
    margin-bottom: 0.24rem;
}
.log-link{
    font-size: 0.25rem;
    color: #7b2901;
    height: 0.65rem;

}
</style>



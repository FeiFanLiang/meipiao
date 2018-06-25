<template>
    <div class="container sonroom">
        <div class="sonroom-slider">
            <Slider></Slider>
        </div>
        <div class="sonroom-intro">
            <div class="sonroom-content">
                <div class="sonroom-title">
                    <span>豪华海景房</span>
                </div>
                <div class="sonroom-policy">
                    <span>大床 无早 2人入住</span>
                </div>
                <div class="sonroom-add">
                    <span>免费WIFI等</span>
                </div>
                <div class="sonroom-price">
                    <span class="price-symbol">¥</span>
                    <span class="price-num">800</span>
                </div>
                <div class="sonroom-order">
                    <OrderBtn></OrderBtn>
                </div>
            </div>
        </div>
        <div class="sonroom-detail">
           <span class="detail-link" @click="showPop">查看房间详情</span>
        </div>
        <div class="sonroom-list-wrap">
            <SonRoomList></SonRoomList>
        </div>
        <div class="loading-more">
            <span>查看更多客房类型</span>
        </div>
        <PopPage @hide="hide" v-show="popShow" class="sonroom-pop">
            <template slot="title">
                豪华海景房
            </template>
            <template slot="content">
                <div class="pop-content">
                    <div class="genera">2张双人床 或 1张特大床房间面积40平方米,可欣赏海景</div>
                    <div class="detail-list">
                        <ul>
                            <li>
                                <span class="list-title">网络:</span>免费WIFI
                            </li>
                            <li>
                                <span class="list-title">网络:</span>免费WIFI
                            </li>
                        </ul>
                    </div>
            </div>
            </template>
        </PopPage>
    </div>
</template>

<script>
import Slider from '@/components/common/slider/slider'
import OrderBtn from '@/components/common/order-btn/order-btn'
import SonRoomList from '@/components/room-list/sonRoom-list'
import PopPage from 'pages/hotel/hotel-pop/detail-pop'
export default {
    components:{
        Slider,
        OrderBtn,
        SonRoomList,
        PopPage

    },
    data(){
        return{
            popShow:false
        }
    },
    methods:{
        
        showPop(){
            this.popShow = true
        },
        hide(value){
            this.popShow = value
        }
    }
}
</script>
<style>
    .sonroom-slider{
        position: relative;
        height: 3.67rem;
        background-color:greenyellow;
    }
    .sonroom-intro{
        position: relative;
        height: 1.88rem;
        box-sizing: border-box;
        padding: 0.34rem 0 0 0.32rem;
        font-size: 0.2rem;
        line-height: 0.2rem;
        
    }
    .sonroom-title{
        font-size: 0.3rem;
        line-height: 0.3rem;
        color: #2d2a2a;
        margin-bottom: 0.25rem;
    }
    .sonroom-intro .sonroom-policy{
        
        color: #606060;
        margin-bottom: 0.26rem;
    }
    .sonroom-intro .sonroom-add{
        color: #00a517;

    }
    .sonroom-intro .sonroom-price{
        position: absolute;
        right: 0.39rem;
        top: 0.4rem;
        font-size: 0.5rem;
        line-height: 0.5rem;
        font-family: Arial;
        color: #cb0000;
    }
    .sonroom-intro .sonroom-order{
        position: absolute;
        right:0.36rem ;
        bottom: 0.3rem;
    }
    .sonroom-detail{
        display: flex;
        justify-content: center;
        height: 0.54rem;
        border-width: 0.01rem 0;
        border-style: solid;
        border-color: #e6e6e6;
        

    }
   .sonroom-detail .detail-link{
       height: 100%;
       display: flex;
       align-items: center;
       font-size: 0.2rem;
       color: #0068d2;
   }
   .sonroom-list-wrap{
       padding:0.14rem 0.15rem 0;
       background-color: #f6f6f6;
   }
   .loading-more{
       position: fixed;
       bottom: 0;
       left: 0;
       background: #cb0000;
       height: 0.86rem;
       width: 100%;
        display: flex;
        justify-content: center;
        
   }
   .loading-more span{
       display: inline-flex;
       align-items: center;
       height: 100%;
       font-size: 0.24rem;
       color: #fff;
   }
   /* 浮层样式 */
   .sonroom-pop .pop-content{
        padding: 0.48rem 0 0 0.44rem;
        font-size: 0.2rem;
        line-height: 0.275rem;
        color: #4a4949;
    }
    .sonroom-pop .pop-content{
        padding: 0.48rem 0 0 0.44rem;
        font-size: 0.2rem;
        line-height: 0.275rem;
        color: #4a4949;
    }
    .pop-content .genera{
        width: 2.84rem;
        margin-bottom: 0.5rem;
    }
    .detail-list .list-title{
        color: #ff5400;
        font-size: 0.2rem;
    }
    .detail-list ul li{
        margin-bottom: 0.15rem;
    }
</style>


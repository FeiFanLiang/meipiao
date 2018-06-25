<template>
    <div class="sonroom-list">
        <div class="list-item">
            <div class="item-left">
                <span class="sonroom-title">豪华海景房</span>
                <span class="sonroom-add">双床 双早 2人入住</span>
            </div>
            <div class="item-center">
                <span class="sonroom-policy">
                    免费WIFI等
                </span>
            </div>
            <div class="item-right">
                <div class="sonroom-price">
                    <span>¥</span><span> 820</span>
                </div>
                <div class="sonroom-order">
                    <OrderBtn class="order-btn"></OrderBtn>
                </div>
            </div>
        </div>
         <div class="list-item">
            <div class="item-left">
                <span class="sonroom-title">豪华海景房</span>
                <span class="sonroom-add">双床 双早 2人入住</span>
            </div>
            <div class="item-center">
                <span class="sonroom-policy">
                    免费WIFI等
                </span>
            </div>
            <div class="item-right">
                <div class="sonroom-price">
                    <span>¥</span><span> 820</span>
                </div>
                <div class="sonroom-order">
                    <OrderBtn class="order-btn"></OrderBtn>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import OrderBtn from '@/components/common/order-btn/order-btn'
export default {
    components:{
        OrderBtn
    },
    methods:{
       
    }
}
</script>


<style>
    .sonroom-list .list-item{
        display: flex;
        margin-bottom: 0.14rem;
        border: 0.01rem solid #e6e6e6;
        height: 1.25rem;


    }
    .item-left{
        display: flex;
        box-sizing: border-box;
        width: 2.1rem;
        flex-direction: column;
        padding: 0.34rem  0 0 0.28rem;
    }
    .item-center{
        flex: 1;
        display: flex;
        justify-content: center;
        
    }
    .item-right{
        box-sizing: border-box;
        width: 1.7rem;
        padding: 0.3rem 0.25rem 0 0;
    }
   .item-left .sonroom-title{
       font-size: 0.25rem;
       margin-bottom: 0.19rem;
   }
   .item-left .sonroom-add{
       font-size: 0.18rem;
       color: #4a4949;
   }
   .item-center .sonroom-policy{
       display: flex;
       align-items: center;
       color: #00a517;
       font-size: 0.2rem;
       
   }
   .item-right .order-btn{
       width: 1.32rem;
       height: 0.35rem;
       font-size: 0.17rem;
       line-height: 0.35rem;
   }
   .item-right .sonroom-price{
       font-size: 0.4rem;
       font-family: Arial;
       line-height: 0.31rem;
       margin-bottom: 0.15rem;
       color: #cb0000;
   }
</style>


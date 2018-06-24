<template>
    <div class="from-container">
        <div class="order-detail-wrap">
            <OrderDetail></OrderDetail>
        </div>
        <div class="order-from">
            <OrderFrom></OrderFrom>
        </div>
         <div class="order-remark">
            <span>房间预订成功后将为您整晚保留</span>
        </div>
        <SubmitBar :price="240000" label="实付" button-text="去支付"
  ></SubmitBar>
    </div>
    
</template>
<script>
import OrderDetail from '@/components/order-detail/order-detail'
import OrderFrom from '@/components/order-from/order-from'
import { SubmitBar } from 'vant'
export default {
    components:{
        OrderDetail,
        OrderFrom,
        SubmitBar
    }
}
</script>
<style>
    .order-detail-wrap{
        padding-bottom: 0.24rem;
    }
    .order-from{
        padding: 0 0.29rem;
    }
     .order-remark{
        border-top: 0.01rem solid #e6e6e6;
        padding:0.28rem 0 0 0.37rem;
    }
    .from-container .van-submit-bar__bar{
        height: 0.79rem;
        font-size: 0.21rem;
    }
    .from-container .van-submit-bar__price{
        padding-left: 0.3rem;
        text-align: left;
        color: #474747;
    }
    .from-container .van-submit-bar__price-integer{
        margin-left: 0.2rem;
    }
    .from-container .van-submit-bar__price-integer,.van-submit-bar__price-decimal{
        font-size: 0.3rem;
        color: #e71f19;
    }
    .from-container .van-submit-bar .van-button{
        width: 2.27rem;
        font-size: 0.26rem;
        line-height: 0.79rem;
    }
</style>


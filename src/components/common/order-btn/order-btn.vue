<template>
    <button class="order-btn" @click="goPay">预 订</button>
</template>
<script>
export default {
    methods:{
        goPay(){
            this.$router.push({name:"订单支付页面"})
        }
    }
}
</script>
<style>
  .order-btn{
        width: 1.82rem;
        height: 0.48rem;
        line-height: 0.48rem;
        font-size: 0.24rem;
        text-align: center;
        background: linear-gradient(160deg, #ff5400 ,#ff9c00);
        border-radius: 0.06rem;
        color: #fff;
    }
</style>



<template>
    <div class="from-wrap">
        <div class="from-item">
            <InputCell label="住客" placeholder="请填写您的姓名" v-model="fromData.name">
                <Icon name="info-o" slot="button" color="#116ece"></Icon>
            </InputCell>
        </div>
        <div class="from-item">
            <InputCell label="联系方式" placeholder="请填写您的电话" v-model="fromData.phoneNum"></InputCell>
        </div>
        <div class="from-item">
            <InputCell label="其他备注" v-model="fromData.remark"></InputCell>
        </div>
        <div class="from-item">
            <coupon-cell :coupons="coupons"  :chosen-coupon="chosenCoupon"  @click="showList = true" title="优惠券"/>
            <popup v-model="showList" position="bottom">
                <coupon-list  :coupons="coupons"    :chosen-coupon="chosenCoupon"    :disabled-coupons="disabledCoupons"    @change="onChange"    @exchange="onExchange"/>
            </popup>
            <van-cell title="发票" is-link >
                
                <VanSwit slot="right-icon" v-model="fromData.bill"></VanSwit>
            </van-cell>
        </div>
       
        
    </div>
</template>
<script>
import { Cell, CellGroup,Field,Switch,CouponCell, CouponList,Popup,Icon } from 'vant'
const coupon = {
  available: 1,
  discount: 0,
  denominations: 150,
  origin_condition: 0,
  reason: '',
  value: 150,
  name: '优惠券名称',
  start_at: 1489104000,
  end_at: 1514592000
};

export default {
    components:{
        InputCell:Field,
        VanCell:Cell,
        VanSwit:Switch,
        Popup,
        CouponCell,
        CouponList,
        Icon
    },
    data() {
    return {
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList:false,
      title:'优惠券',
      fromData:{
          name:'',
          phoneNum:'',
          remark:'',
          coupon:'',
          bill:false
      }
    }
  },

  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    }
  }
}
</script>
<style>
.from-wrap .van-cell{
        border-bottom: 0.01rem solid #e6e6e6; 
        height: 0.68rem;  
        line-height: 0.24rem;
        padding: 0.23rem 0 0.20rem 0.13rem;
        font-size: 0.24rem;
        align-items: center;
    }
   .from-wrap .van-cell__title{
        padding-left: 0.11rem
    }
  .from-wrap  .van-cell__right-icon{
        width: 0.18rem;
        height: 0.22rem;
        line-height: 0.22rem;
        /* font-size: 0.22rem; */
    }
  .from-wrap  .van-icon-arrow::before{
       
        font-size: 0.22rem;
        line-height: 0.22rem;
    }
   .from-wrap .from-item:nth-child(4){
        margin:0.5rem 0 0.28rem 0;
    }
 
  .from-wrap .van-field__control{
     height: 100%;
     color: #3d3d3d;
     font-size: 0.24rem;
     line-height: normal;
 }
 .from-wrap .van-field .van-cell__title{
    max-width: 1.2rem;
 }
</style>



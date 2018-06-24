<template>
    <div class="hotel-list">
        <div class="list-item">
            <div class="hotel-img"></div>
            <div class="hotel-detail">
                <div class="item-title">
                    <span>青岛海景花园大酒店(Qingdao Seaview Graden Hotel)</span>
                </div>
                <div class="item-main">
                    <Rate :size="18" v-model="num" :count="5" color="#ff8a00" void-color="#ceefe8" class="item-rate"></Rate>
                    <div class="item-price">
                        <span class="price-symbol">¥</span>
                        <span class="price-num">800</span>
                        <span class="price-add">起</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="list-item">
            <div class="hotel-img"></div>
            <div class="hotel-detail">
                <div class="item-title">
                    <span>青岛海景花园大酒店(Qingdao Seaview Graden Hotel)</span>
                </div>
                <div class="item-main">
                    <Rate :size="18" v-model="num" :count="5" color="#ff8a00" void-color="#ceefe8" class="item-rate"></Rate>
                    <div class="item-price">
                        <span class="price-symbol">¥</span>
                        <span class="price-num">800</span>
                        <span class="price-add">起</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="list-item">
            <div class="hotel-img"></div>
            <div class="hotel-detail">
                <div class="item-title">
                    <span>青岛海景花园大酒店(Qingdao Seaview Graden Hotel)</span>
                </div>
                <div class="item-main">
                    <Rate :size="18" v-model="num" :count="5" color="#ff8a00" void-color="#ceefe8" class="item-rate"></Rate>
                    <div class="item-price">
                        <span class="price-symbol">¥</span>
                        <span class="price-num">800</span>
                        <span class="price-add">起</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="list-item">
            <div class="hotel-img"></div>
            <div class="hotel-detail">
                <div class="item-title">
                    <span>青岛海景花园大酒店(Qingdao Seaview Graden Hotel)</span>
                </div>
                <div class="item-main">
                    <Rate :size="18" v-model="num" :count="5" color="#ff8a00" void-color="#ceefe8" class="item-rate"></Rate>
                    <div class="item-price">
                        <span class="price-symbol">¥</span>
                        <span class="price-num">800</span>
                        <span class="price-add">起</span>
                    </div>
                </div>
            </div>
        </div>
         <div class="list-item">
            <div class="hotel-img"></div>
            <div class="hotel-detail">
                <div class="item-title">
                    <span>青岛海景花园大酒店(Qingdao Seaview Graden Hotel)</span>
                </div>
                <div class="item-main">
                    <Rate :size="18" v-model="num" :count="5" color="#ff8a00" void-color="#ceefe8" class="item-rate"></Rate>
                    <div class="item-price">
                        <span class="price-symbol">¥</span>
                        <span class="price-num">800</span>
                        <span class="price-add">起</span>
                    </div>
                </div>
            </div>
        </div>
         <div class="list-item">
            <div class="hotel-img"></div>
            <div class="hotel-detail">
                <div class="item-title">
                    <span>青岛海景花园大酒店(Qingdao Seaview Graden Hotel)</span>
                </div>
                <div class="item-main">
                    <Rate :size="18" v-model="num" :count="5" color="#ff8a00" void-color="#ceefe8" class="item-rate"></Rate>
                    <div class="item-price">
                        <span class="price-symbol">¥</span>
                        <span class="price-num">800</span>
                        <span class="price-add">起</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="pull-update">
            <span>加载更多...</span>
        </div>
    </div>
</template>
<script>
import { Rate } from 'vant'
export default {
    components:{
        Rate
    },
    data(){
        return{
            num:5
        }
    }
}
</script>
<style>
.hotel-list{
    
    background-color: #f4f4f4;
    padding: 0.15rem 0.14rem 0 0.13rem;
}
.list-item{
    display: flex;
    border: 0.01rem solid #e6e6e6;
    margin-bottom: 0.14rem;
}
.hotel-img{
    
    width: 1.5rem;
    height: 1.5rem;
    
    background-color: blue;
}
.hotel-list .hotel-detail{
    position: relative;
    flex: 1;
    box-sizing: border-box;
    height: 1.5rem;
    padding: 0.24rem 0 0 0.25rem;
}
.hotel-list .item-rate{ 
    position: absolute;
    bottom: 0.22rem;
    left: 0.27rem;

    

}
.hotel-list .item-price{
    position: absolute;
    right: 0.26rem;
    bottom: 0.16rem;
    color: #c60000;
    font-family: Arial;
    
}
.hotel-list .item-title{
    width: 3.53rem;
    margin-bottom:0.37rem;
}
.hotel-list .price-symbol{
    font-size: 0.25rem;
    line-height: 0.25rem;
}
.hotel-list .price-num{
    font-size: 0.35rem;
    line-height: 0.35rem;
    font-weight: bold;
}
.hotel-list .price-add{
    color: #3f3b3a;
    font-size: 0.18rem;
    line-height: 0.18rem;
    font-family: '微软雅黑','Microsoft YaHei';
}
.pull-update{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.16rem;
    color: #3f3b3a;
}

</style>



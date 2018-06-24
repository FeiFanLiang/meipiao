<template>
    <div class="container">
        <div class="top-slider">
            <Swipe>
                <SwipeItem></SwipeItem>
                <SwipeItem></SwipeItem>
                <SwipeItem></SwipeItem>
                <SwipeItem></SwipeItem>
            </Swipe>
            <div class="slider-index">
                <span class="current-index">1</span>/<span class="total-num">30</span>
            </div>
        </div>
        <div class="hotel-detail">
            <h2 class="hotel-name">青岛海景花园大酒店(Qingdao Seaview Garden Hotel)</h2>
            <div class="hotel-location">
                <i class="icon-location"></i>
                <span>青岛市市南区彰化路2号</span>
                <span class="location-map">地图 >></span>
            </div>
            <div class="order-time">
                <span>10月10日周二至10月11日周三</span>
                <div class="edit-button">
                    <button class="edit-btn">编 辑</button>
                </div>
            </div>
            <div class="minimum-price">
                <div class="item-price">
                        <span class="price-symbol">¥</span>
                        <span class="price-num">&nbsp;800</span>
                        <span class="price-add">最低</span>
                </div>

            </div>
            <div class="order-button">
                <button class="order-btn">预 订</button>
            </div>
        </div>
        <div class="detail-more">
            <span class="detail-link">查看酒店详情</span>
        </div>
        <div class="hotel-room">
            <div class="list-title">
                <span>其他房型</span>
            </div>
            <RoomList></RoomList>
        </div>
        <div class="pull-update">
             <span>加载更多...</span>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import { Swipe, SwipeItem } from 'vant'
import RoomList from '@/components/room-list/room-list'
export default {
    components:{
        Swipe,
        SwipeItem,
        RoomList
    }
}
</script>
<style>
    .top-slider{
        position: relative;
        height: 3.67rem;
        background-color: aqua;

    }
    /* .slider-index{
        position: absolute;
        display: flex;
        bottom: 0.13rem;
        right: 0.2rem;
        width: 0.7rem;
        height: 0.31rem;
        background-color:#000000;
        border-radius: 0.06rem;
        justify-content: center;
        align-items: center;
        font-family: arial;
        font-size: 0.21rem;
        color: #fff;
        line-height: 0.21rem;
    } */
    .hotel-detail{
        position: relative;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 0.24rem 0 0 0.32rem;
        height: 2.98rem;
        
    }
    .hotel-name{
        width: 67.5%;
        font-weight: normal;
        font-size: 0.3rem;
        line-height: 0.36rem;
        color: #2d2a2a;
        margin-bottom: 0.25rem;
    }
    .hotel-location{
        display: flex;
        font-size: 0.2rem;
        line-height: 0.2rem;
        color: #494949;
        margin-bottom: 0.22rem;
    }
    .icon-location{
        display: inline-block;
        width: 0.18rem;
        height: 0.23rem;
        margin-right: 0.15rem;
    }
    .location-map{
        margin-left: 0.27rem;
        color: #0060c0;
    }
    .order-time{
        display: flex;
        font-size: 0.16rem;
        line-height: 0.23rem;
        color: #757575;
    }
    .edit-button{
        margin-left: 0.15rem;
    }
    .edit-btn{
        width: 0.53rem;
        height: 0.23rem;
        border: 0.01rem solid #ff5400;
        border-radius: 0.06rem;
        font-size: 0.14rem;
        line-height: 0.14rem;
        color: #ff5400;
    }
    .item-price{
        display: flex;
        align-items: baseline;
        line-height: 0.5rem;
        font-size: 0.5rem;
        color: #cb0000;
    }
    
    .price-add{
        margin-left: 0.2rem;
        font-size: 0.2rem;
        line-height: 0.2rem;
        color: #0064ca;
    }
    .minimum-price{
        position: absolute;
        left: 0.33rem;
        bottom: 0.35rem;
    }
    .order-button{
        position: absolute;
        right:0.3rem ;
        bottom: 0.29rem;
    }
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
    .detail-more{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 0.63rem;
        border-width: 0.01rem 0;
        border-style: solid;
        border-color:  #e6e6e6;
    }
    .detail-link{
        display: inline-flex;
        align-items: center;
        font-size: 0.2rem;
        color: #0060c0;
        
        height: 100%;

    }
    .hotel-room{
        padding: 0 0.14rem 0 0.13rem;
        background-color: #f6f6f6;
    }
    .list-title{
        height: 0.72rem;
        margin-left: 0.12rem;
        font-size: 0.24rem;
        line-height: 0.72rem;
        color: #292929;
    }
    .pull-update{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.16rem;
    color: #3f3b3a;
}
</style>


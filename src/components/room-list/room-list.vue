<template>
    <div class="room-list">
        <div class="list-item" @click="goRoomPages">
            <div class="room-img"></div>
            <div class="room-detail">
                <div class="room-name">豪华家庭房</div>
                <div class="room-policy">大床 双早</div>
                <div class="room-disp">免费WIFI</div>
                <div class="room-price">
                    <span class="price-symbol">¥</span><span class="price-num"> 980</span>
                </div>
            </div>
        </div>
         <div class="list-item">
            <div class="room-img"></div>
            <div class="room-detail">
                <div class="room-name">豪华家庭房</div>
                <div class="room-policy">大床 双早</div>
                <div class="room-disp">免费WIFI</div>
                <div class="room-price">
                    <span class="price-symbol">¥</span><span class="price-num"> 980</span>
                </div>
            </div>
        </div>
         <div class="list-item">
            <div class="room-img"></div>
            <div class="room-detail">
                <div class="room-name">豪华家庭房</div>
                <div class="room-policy">大床 双早</div>
                <div class="room-disp">免费WIFI</div>
                <div class="room-price">
                    <span class="price-symbol">¥</span><span class="price-num"> 980</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        goRoomPages(){
            this.$router.push({path:'/sonRoom/:12341'})
        }
    }
}
</script>
<style>
.room-list{
    padding: 0 0.14rem 0 0.13rem;
}
.room-list .list-item{
    display: flex;
    height: 1.5rem;
    margin-bottom: 0.4rem;
    border: 0.01rem solid #e6e6e6;
}
    .room-img{
        width: 1.94rem;
        height: 1.5rem;
        background-color: aqua;

    }
    .room-detail{
        position: relative;
        flex: 1;
        display: flex;
        flex-direction: column;
        font-size: 0.18rem;
        line-height: 0.18rem;
        padding: 0.22rem 0 0.20rem 0.29rem;

    }
    .room-name{
        margin-bottom: 0.23rem;
        font-size: 0.25rem;
        line-height: 0.25rem;
        color: #303030;
    }
    .room-policy{
        color: #505050;
        margin-bottom: 0.23rem;
    }
    .room-disp{
        color: #0c9306;
        line-height: 0.19rem;
    }
    .room-detail .room-price{
        position: absolute;
        right:0.47rem ;
        bottom: 0.54rem;
        color: #c60000;
        font-family: Arial;
    }
    .room-detail .price-symbol{
        font-size: 0.25rem;
        line-height: 0.25rem;
    }
    .room-detail .price-num{
        font-size: 0.35rem;
        line-height: 0.35rem;
        font-weight: bold;
    }
</style>


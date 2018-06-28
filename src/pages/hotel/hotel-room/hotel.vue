<template>
    <div class="hotel-container">
        <div class="slider-wrap">
        <Slider  v-if="sliderImg.length>0" :imgList="sliderImg"></Slider>
        <div class="load-background" v-if="!sliderImg.length"></div>
        </div>
        <div class="hotel-detail">
            <h2 class="hotel-name">{{baseData.HotelName}}({{baseData.HotelName_En}})</h2>
            <div class="hotel-location">
                
                <Icon name="location" color="#b70500" class="icon-location"/>
                <span>{{baseData.Address}}</span>
                <span class="location-map">地图 >></span>
            </div>
            <div class="order-time">
                <span>10月10日周二至10月11日周三</span>
                <div class="edit-button">
                    <button class="edit-btn" @click="editFiter">编 辑</button>
                </div>
            </div>
            <div class="minimum-price">
                <div class="item-price">
                        <span class="price-symbol">¥</span>
                        <span class="price-num">&nbsp;{{baseData.HotelPrice}}</span>
                        <span class="price-add">最低</span>
                </div>

            </div>
            <div class="order-button">
                <button class="order-btn" @click="goPay">预 订</button>
            </div>
        </div>
        <div class="detail-more">
            <span class="detail-link" @click="showPop">查看酒店详情</span>
        </div>
        <div class="hotel-room">
            <div class="list-title">
                <span>其他房型</span>
            </div>
            <div class="scroll-wrap">
            <div class="scroll" ref="scrollWrap">
            <RoomList :list="baseData.HotelRooms" v-if="baseData.HotelRooms"></RoomList>
            </div>
            </div>
        </div>
       
        <PopPage class="popup-container" v-show="popShow" @hide="hide">
            <template slot="title">
                酒店详情
            </template>
            <template slot="content">
                <div class="detail-content">
                    <tabs v-model="active" :lineWidth= 0.1 :duration=0>
                        <tab title="酒店设施">
                            <div slot="title">
                                <span class="tab-item">酒店设施</span>
                            </div>
                            <div class="content-wrap">
                                <div class="content-item">
                                <span class="content-title">主要设施</span>
                                <div class="content-desc">
                                    <template v-for="item in PopData.BaseInstallation.Facility">
                                        {{item.Name }}
                                    </template>
                                    </div> 
                                </div>
                                <div class="content-item">
                                <span class="content-title">饮食选择</span>
                                <div class="content-desc">
                                    <template v-for="item in PopData.BaseInstallation.Dinner">
                                        {{item.Name }}
                                    </template>
                                    
                                    </div> 
                                </div>
                                 <div class="content-item">
                                <span class="content-title">娱乐设施</span>
                                <div class="content-desc">
                                    <template v-for="item in PopData.BaseInstallation.recreation">
                                        {{item.Name }}
                                    </template>
                                    
                                    </div> 
                                </div>
                            </div>
                        </tab>
                        <tab title="客房设施">
                            <div slot="title">
                                <span class="tab-item">客房设施</span>
                            </div>
                            <div class="content-wrap">
                                 <div class="content-item">
                                <span class="content-title">娱乐设施</span>
                                <div class="content-desc">
                                    <template v-for="item in PopData.RoomInstallation.Facility">
                                        {{item.Name }}
                                </template> 
                                    
                                    </div> 
                                </div>
                                 <div class="content-item">
                                <span class="content-title">客房服务</span>
                                <div class="content-desc">
                                    <template v-for="item in PopData.RoomInstallation.Service">
                                        {{item.Name }}
                                </template> 
                                    
                                    </div> 
                                </div>  
                            </div>
                        </tab>
                        <tab title="关键咨询">
                            <div slot="title">
                                <span class="tab-item">关键资讯</span>
                            </div>
                            <div class="content-wrap">
                                 <div class="content-item">
                                <span class="content-title">资讯事项</span>
                                <div class="content-desc">
                                    <template v-for="item in PopData.Notify.list">
                                        {{item.Name }}
                                </template> 
                                    
                                    </div> 
                                </div>  
                            </div>
                        </tab>
                        <tab title="注意事项">
                            <div slot="title">
                                <span class="tab-item">注意事项</span>
                            </div>
                            <div class="content-wrap">
                                  <div class="content-item">
                                <span class="content-title">特别注意</span>
                                <div class="content-desc">
                                    <template v-for="item in PopData.Notice.list">
                                        {{item.Name }}
                                </template> 
                                    
                                    </div> 
                                </div>  
                            </div>
                        </tab>
                    </tabs>
                </div>
            </template>
        </PopPage>
    </div>
</template>
<script>
import Slider from '@/components/common/slider/slider'
import BScroll from 'better-scroll'
import RoomList from '@/components/room-list/room-list'
import PopPage from 'pages/hotel/hotel-pop/detail-pop'
import {hotelBase} from 'api'
import{Tab,Tabs} from 'vant'

export default {
    components:{
        RoomList,
        PopPage,
        Slider,
        Tab,
        Tabs
        
    },
    data(){
        return{
            popShow:false,
            active: 0,
            width:0,
            baseData:'',
            sliderImg:'',
            PopData:''
            
        }
    },
    created(){
        this.getData()
    },
    mounted(){
        
        // setTimeout(() => {
        //     this.scroll = new BScroll(this.$refs.scrollWrap,{
        //         click:true
        //     })
        // }, 300);
        
        
    },
    methods:{
        showPop(){
            this.popShow = true
           
        },
        hide(value){
            this.popShow = value
            
        },
        editFiter(){
             this.$router.push({name:'酒店搜索页'})
            
        },
        goPay(){
            this.$router.push({name:'订单支付页面'})
        },
        async getData(){
            const params = this.$route.params
            const res =  await hotelBase.hotelDetail(params)
            if(res.status == 200 && res.data.data.data){
                const data = res.data.data.data
                this.baseData = data
                this.sliderImg = data.HotelImg.list
                this.PopData = data.Facilities
            }
        }
    }
}
</script>
<style>
.load-background{
    padding-top: 57.81%;
    position: relative;
    background: url('./slider-lazy.jpg')
}

.hotel-room .scroll-wrap{
   
}
.scroll-wrap .scroll{
    height: 100%;
    overflow: hidden;
}
    .top-slider{
        position: relative;
        height: 3.67rem;
        background-color: aqua;

    }   
    
    .slider-index{
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
    }
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
        font-size: 0.23rem;
        line-height: 0.23rem;
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
    .hotel-container .list-title{
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
/* 浮层样式 */
.popup-title{
        font-size: 0.3rem;
        line-height: 0.3rem;
        color: #fff;
    }
    .detail-content .van-tabs--line{
        padding-top: 0.86rem;
    }
    .detail-content .van-tab--active{
        color: #ff5400;
    }
    .detail-content .van-tab--active .tab-item{
         border-bottom: 0.03rem solid #ff5400;
    }
    .detail-content .van-tabs--line .van-tabs__wrap{
        height: 0.86rem;
        border-bottom: 0.01rem solid #e6e6e6;
    }
    .detail-content .van-tab{
        font-size: 0.2rem;
        padding: 0;
    }
    .van-tab{
        line-height: 0;
    }
    .van-tabs__nav--line{
        padding-bottom: 0.2rem;
    }
    .van-tab .tab-item{
        width: 0.92rem;
        
        padding-bottom: 0.14rem;
        line-height: 0.2rem;
       
        margin: 0.3rem auto 0;
    }
    
    .content-wrap{
        display: flex;
        flex-direction: column;
        margin-top: 0.09rem;
        border-top: 0.01rem solid #e6e6e6;
        padding: 0.34rem 0 0 0.44rem;
        
    }
    
    .content-item{
        display: flex;
        flex-direction: column;
        margin-bottom: 0.36rem;

    }
    .content-title{
        font-size: 0.2rem;
        color: #4a4949;
        margin-bottom: 0.3rem;
    }
    .content-desc{
        width: 72.31%;
        font-size: 0.18rem;
        color: #828282;
    }
</style>


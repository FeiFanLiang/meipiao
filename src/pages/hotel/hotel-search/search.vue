<template>
    <div class="container">
        
            
            <div class="search-details-wrap">
                <div class="search-details">
                    <div class="details-text">
                        <span class="details-title">青岛,中国</span>
                        <span class="details-date">入住：10月10日周二 离店：10月11日周三</span>
                        <span class="deatils-num">人数：5人 房间：3间</span>
                    </div>
                    <div class="edit-button">
                        <button class="edit-btn" @click="back">编 辑</button>
                    </div>
                </div>
                
            </div>
            <div class="hotel-filt">
                    <div class="hotel-input">
                        <Search placeholder="请输入酒店名称"></Search>
                    </div>
                    <div class="filt-more" @click="show">
                        <span>更多条件筛选>></span>                    
                    </div>
            </div>
            <div class="hotel-list-wrap">
                <div class="scroll-wrap" ref="scrollWrap">
                <HotelList></HotelList>
                </div>
            </div>
            <Fiter :popshow="fiterShow" @hide="hide"></Fiter>
            <Loading v-if="loading"></Loading>
            </div>
    
</template>
<script>
import { Search, ImagePreview } from 'vant'
import HotelList from '@/components/hotel-list/hotel-list'
import Fiter from 'pages/hotel/hotel-search/search-fiter'
import Loading from '@/components/common/loading/loading'
import BScroll from 'better-scroll'
import {hotelBase} from 'api'
export default {
    components:{
        Search,
        HotelList,
        Fiter,
        Loading,
        // LoadMore

    },
    data(){
        return{
            fiterShow:false,
            loading:false,
          
        }
    },
    created(){
        console.log(this.$route.query)
    },
    mounted(){
        setTimeout(() => {
            this.scroll = new BScroll(this.$refs.scrollWrap,{
                click:true
            })
        }, 20);
    },
    methods:{
        back(){
            this.$router.push({name:'酒店搜索页'})
        },
        show(){
            this.fiterShow = true
        },
        hide(value){
            this.fiterShow = value 
        }
        
    }
    }
   

     


</script>
<style>
/* .scroll-container{
    position: fixed;
    top: 1rem;
    bottom: 0;
    left: 0;
    right: 0;
}
    .scroll-wrap{
        height: 100%;
        overflow: hidden;
    } */
    .hotel-list-wrap{
        position: fixed;
        top: 3.15rem;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .hotel-list-wrap .scroll-wrap{
        height: 100%;
       
        overflow: hidden;
    }
    /* 头部搜索条件 */
    .search-details-wrap{
        
        height: 1.4rem;
        padding: 0 0.16rem;
        font-size: 0.18rem;
        line-height: 0.18rem;
    }
    .search-details{
        display: flex;
        padding: 0.25rem 0 0.21rem 0.13rem;
        border-bottom: 0.01rem solid #e6e6e6;
    }
    .details-text{
        display: flex;
        flex: 1;
        flex-direction: column;
        /* align-items: center; */
        /* margin-right: 1.1rem; */
    }
    .edit-button{
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: flex-start;
        width: 0.93rem;
       

    }
    .details-title{
        font-size: 0.2rem;
        color:#333333;
        margin-bottom: 0.17rem;
        line-height: 0.2rem;
    }
    .details-date{
        margin-bottom: 0.19rem;
        line-height: 0.18rem;
        color: #3d3d3d;
    }
    .deatils-num{
        
        color: #282828;
    }
    .edit-btn{
        width: 0.8rem;
        height: 0.36rem;
        line-height: 0.36rem;
        font-size: 0.16rem;
        
        color: #ff8a00;
        border: 0.01rem solid #ff8a00;
        border-radius: 0.08rem;
    }
    /* 条件筛选框 */
    .hotel-filt{
        display: flex;
        align-items: center;
        padding: 0 0.29rem 0 0.26rem;
        height: 0.75rem;
        border-bottom: 0.01rem solid #e9e9e9;
    }
    .hotel-input{
        flex: 1;

    }
    .hotel-filt .filt-more{
        height: 100%;
        display: inline-flex;
        align-items: center;
       margin-left: 0.27rem;
       font-size: 0.14rem;
       
       color: #0879e3;

    }
    .van-search{
       background: #ffffff !important;
       padding: 0.09rem 0.11rem;
       border: 0.01rem solid #e6e6e6;
    }
    .van-search .van-icon-search{
        left: 0.11rem;
    }
    .van-field__control{
        font-size: 0.16rem;
        color: #a9a9a9;
    }
</style>



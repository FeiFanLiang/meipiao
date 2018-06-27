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
                <div class="scroll-wrap" ref="scrollWrap" v-if="demoList.length>0">
                <HotelList :list="demoList" :loadText="loadText"></HotelList>
                </div>
            </div>
            <Fiter :popshow="fiterShow" @hide="hide" @submit="seekHotelList"></Fiter>
            
            <Loadtrans v-if="loading"></Loadtrans>
            </div>
    
</template>
<script>
import { Search, ImagePreview } from 'vant'
import HotelList from '@/components/hotel-list/hotel-list'
import Fiter from 'pages/hotel/hotel-search/search-fiter'
import Loadtrans from '@/components/common/loading/loading'
import BScroll from 'better-scroll'
import {hotelBase} from 'api'
export default {
    components:{
        Search,
        HotelList,
        Fiter,
        Loadtrans,
       
    },
    data(){
        return{
            fiterShow:false,
            loading:false,
            hotelList:'',
            demoList:[],//上拉加载使用的demo数据,
            pageIndex:1,//当前页码
            pageCount:10,//当前页数量
            query:{},
            loadText:false
        }
    },
    created(){
        this.initList()
    },
    mounted(){
      this.initScroll()
       
    },
    methods:{
        initScroll(){
            setTimeout(() => {
                if(!this.$refs.scrollWrap){
                    return
                }
                this.scroll = new BScroll(this.$refs.scrollWrap,{
                    click:true,
                    momentum:false,
                    pullUpLoad:{
                        threshold:-150,
                        stop:-20
                    }
                })
                this.scroll.on('pullingUp', () => {
                    if(this.loadText == true){
                        return
                    }
                    this.loadText = true
                    this.loadMore().then(()=>{
                         this.scroll.finishPullUp()
                        this.loadText = false
                        this.$nextTick(()=>{
                            this.scroll.refresh()
                        })
                        
                       
                    
                    }) 
                //     clearTimeout(timer)
                //    var timer = null
                //    timer = setTimeout(() => {
                //        this.loadText = true
                       
                //       this.loadMore().then(()=>{
                //         this.scroll.refresh()
                //         this.loadText = false
                    
                //     }) 
                //    }, 300);
                    

    })
            
            }, 20);
        },
       
        back(){
            this.$router.push({name:'酒店搜索页'})
        },
        show(){
            this.fiterShow = true
        },
        hide(value){
            this.fiterShow = value 
        },
        async getHotelList(query){
            
            const res = await hotelBase.getList(query)
            
            if(res.status == 200 && res.data.data.Data){
                // this.hotelList = res.data.data.Data
                const listArr = res.data.data.Data
                this.demoList = this.demoList.concat(listArr.slice(this.pageIndex,this.pageCount))
                // console.log(this.demoList)
            }
            
              
        },
        initList(){
            this.query = this.$route.query
            this.loading = true    
            this.getHotelList(this.query).then(()=>{
            this.loading = false  
            })
            
            
            
        },
        async loadMore(){
            this.pageIndex++
            await this.getHotelList(this.query)
            
            
        },
        async seekHotelList(radio){
            const query = Object.assign(this.query,radio)
            this.loading = true
            await this.getHotelList(query)
            this.loading = false

        }
        
    },
    watch:{
         demoList(){
            if(!this.scroll){
                this.initScroll()
                return
            }
            
            this.scroll.refresh()
         }
    }
    }
   

     


</script>
<style>

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
       
        box-sizing: border-box;
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
       padding: 0.08rem 0.11rem;
       
    }
    .van-search .van-icon-search{
        left: 0.20rem;
        font-size: 0.2rem;
    }
    .van-field__control{
        font-size: 0.16rem;
        color: #3d3d3d;
    }
    .van-search .van-cell{
        border: 0.01rem solid #e9e9e9;
        padding: 0.05rem 0.2rem 0.05rem 0.46rem;
    }
    ::-webkit-input-placeholder { 
    color:   #a9a9a9;
}
:-moz-placeholder { 
    color:    #a9a9a9;
}
::-moz-placeholder { 
    color:    #a9a9a9;
}
:-ms-input-placeholder { 
    color:    #a9a9a9;
}
</style>



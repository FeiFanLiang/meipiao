<template>
    <div class="slider">
        
             <Swipe :show-indicators="false" @change="change">
                <SwipeItem v-for="(item,index) in imgList" :key="index">
                        <div class="slider-img-wrap">
                            <img v-lazy="item.imgUrl">  
                        </div>
                      
                    
                    
                    
                </SwipeItem>
               
        </Swipe>
            <div class="slider-index">
                <span class="current-index">1</span>/<span class="total-num">30</span>
            </div>
       
    </div>
</template>
<script>
import { Swipe, SwipeItem } from 'vant'
export default {
    components:{
        Swipe,
        SwipeItem
    },
    props:{
        imgList:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            list:[]
        }
    },
    mounted(){
        // console.log(this.imglist)
    },
    methods:{
        change(index){
            // console.log(index)
        }
    }
}
</script>
<style>
.slider-img-wrap{
    position: relative;
    padding-top: 57.81%;
}
.slider-img-wrap img{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
        .slider{
          position: relative;
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
    
    /* .van-swipe img{
        width: 100%;
        height: 3.7rem;
    } */
</style>



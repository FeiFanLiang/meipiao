<template>
     <div class="hotel-search">

            <div class="search-group">
            <div class="search-item" @click="datePickshow(beginTime)">
                    
                    <div class="item-text">
                        <i class="icon-corner"></i>
                        <span class="item-title">入住</span>
                        <span class="item-middle">{{beginDateText}}</span>
                        <span class="item-footer">{{beginWeekText}}</span>
                    </div>
                    
            </div>
            <div class="search-item"  @click="datePickshow(endTime)" >
                    <div class="item-text">
                        <i class="icon-corner"></i>
                        <span class="item-title">离店</span>
                        <span class="item-middle">{{endDateText}}</span>
                        <span class="item-footer">{{endWeekText}}</span>
                    </div>
                </div>
            <div class="search-item" @click="openNumpick(0)">
                    <div class="item-text">
                        <i class="icon-corner"></i>
                        <span class="item-title">人数</span>
                        <span class="item-num">{{peopleCount}}人</span>
                       
                    </div>
                </div>
            <div class="search-item" @click="openNumpick(1)">
                    <div class="item-text">
                         <i class="icon-corner"></i>
                        <span class="item-title">房间</span>
                        <span class="item-num">{{roomCount}}间</span>
                    </div>
                </div>
            </div>
            <div class="search-link">
            <div class="link-button" @click="searchRoute">搜 索 ></div>
            
        </div>
        <div class="bottom-pop" v-show="popShow">
            <DatetimePicker  type="date" cancel-button-text=" " v-model="beginTime.Date" @confirm="closePicker"  :item-height="88" :min-date="beginTime.minDate" :max-date="beginTime.maxDate" v-show="beginTime.show"></DatetimePicker>
            <DatetimePicker type="date" cancel-button-text=" " v-model="endTime.Date" @confirm="closePicker" :item-height="88" :min-date="endTime.minDate" :max-date="endTime.maxDate" v-show="endTime.show"></DatetimePicker>
            <Picker show-toolbar  :columns="numList"  @confirm="pickNum" v-show="numPickershow" cancel-button-text=" "/>
           
        </div>
        
        </div>
</template>
<script>
import { DatetimePicker, Picker } from 'vant'
import {formatDate,getWeek} from 'commonjs/common.js'
const currentDay = new Date()
export default {
    components:{
        DatetimePicker,
        Picker
    },
    data(){
        return{
            beginTime:{
                Date:currentDay,
                minDate:currentDay,
                maxDate:new Date(currentDay.getFullYear()+1,currentDay.getMonth(),currentDay.getDate()),
                show:false
            },
            endTime:{
                Date:new Date(currentDay.getFullYear(),currentDay.getMonth(),currentDay.getDate()+1),
                minDate:new Date(currentDay.getFullYear(),currentDay.getMonth(),currentDay.getDate()+1),
                maxDate:new Date(currentDay.getFullYear()+1,currentDay.getMonth(),currentDay.getDate()),
                show:false
            },
            numList:[1,2,3,4,5,6,7,8,9],
            peopleCount:1,
            peopleCountcheck:false,
            roomCount:1,
            roomCountcheck:false,
            popShow:false,
            numPickershow:false,
        }
    },
    computed:{
        beginDateText:function(){
         return formatDate(this.beginTime.Date) 
        },
        beginWeekText:function(){
        return formatDate(this.beginTime.Date)
        },
        endDateText:function(){
            return formatDate(this.endTime.Date)
        },
        endWeekText:function(){
            return formatDate(this.endTime.Date)
        }
       
    },
    methods:{
        searchRoute(){
            this.$router.push({name:'搜索结果页'})
        },
        datePickshow(dateObj){
            dateObj.show = true
            this.popShow = true 
        },
        
       
        closePicker(){
            this.beginTime.show = false
            this.endTime.show = false
            this.popShow = false
        },
        openNumpick(num){
            this.popShow = true
            this.numPickershow = true
            if(num == 0){
                this.peopleCountcheck = true
                this.roomCountcheck = false
                return
            }
            this.roomCountcheck = true
            this.peopleCountcheck = false
        },
        pickNum(value){
            this.popShow = false
            this.numPickershow = false
            if(this.peopleCountcheck){
                this.peopleCount = value
                return
            }
            this.roomCount = value
        }

    }
}
</script>
<style>
.hotel-search{
    width: 100%;
   color: #fff;
    
}
.search-group{
    display: flex;

 
    width: 84.37%;
    margin: 0.34rem auto 0;
   
    flex-wrap: wrap;
}


.search-item{
    position: relative;
    width: 46.29%;
    padding-top: 46.29%;
    /* height: 2.5rem; */
    
}
/* 条件框样式 */
.search-item:nth-child(1),.search-item:nth-child(3){
    margin-right: 0.4rem;
}
.search-item:nth-child(1),.search-item:nth-child(2){
    margin-bottom: 0.3rem;
}
.search-item:nth-child(1),.search-item:nth-child(4){
    background:linear-gradient(160deg,#ff5400 ,#ff9c00 );
}
.search-item:nth-child(2) .item-title,.search-item:nth-child(3) .item-title{
    color: #474747;
}
.search-item:nth-child(2),.search-item:nth-child(3){
    color: #ff6600;
}
.search-item:nth-child(2) .icon-corner,.search-item:nth-child(3) .icon-corner{
    border-color: #ff6600;
}
.item-text{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    font-size: 0.4rem;
    padding: 0.28rem 0 0 0.22rem;
   
}
.item-title{
    margin-bottom: 0.37rem;
}
.item-middle{
    margin-bottom: 0.33rem;
}
.item-text .item-footer{
    font-size: 0.25rem;
}
.item-text i {
    position: absolute;
    bottom: 0.13rem;
    right: 0.12rem;
    width: 0.19rem;
    height: 0.19rem;
    box-sizing: border-box;
}
.item-text .item-num{
    padding-left: 32%;
}
.icon-corner{   
    border-width: 0 0.05rem 0.05rem 0;
    border-style: solid;
    border-color: #fff;
}
.search-link{
    display: flex;
    justify-content: center;
    padding-top: 1rem;
    
}
.link-button{
    
    font-size: 0.3rem;
    color: #ff6600;
    text-decoration: underline;
}
.bottom-pop{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 4rem;
}
/* 选择器样式 */
.hotel-search .van-picker__toolbar{
    height: 0.8rem;
    line-height: 0.8rem;
} 

.van-picker-column{
    font-size: 0.32rem;
}
</style>


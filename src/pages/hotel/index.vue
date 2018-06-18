<template>
     <div class="hotel-search">

            <div class="search-group">
            <div class="search-item">
                    
                    <div class="item-text">
                        <i class="icon-corner"></i>
                        <span class="item-title">入住</span>
                        <span class="item-middle">2018.10.10</span>
                        <span class="item-footer">周二</span>
                    </div>
                </div>
            <div class="search-item">
                    <div class="item-text">
                        <i class="icon-corner"></i>
                        <span class="item-title">离店</span>
                        <span class="item-middle">2018.10.11</span>
                        <span class="item-footer">周三</span>
                    </div>
                </div>
            <div class="search-item">
                    <div class="item-text">

                    </div>
                </div>
            <div class="search-item">
                    <div class="item-text">

                    </div>
                </div>
            </div>
            <div class="search-link">
            <div class="link-button" @click="searchRoute">搜 索 ></div>
            <!-- <router-view></router-view> -->
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
        searchRoute(){
            this.$router.push({name:'搜索结果页'})
        }
    }
}
</script>
<style>
.hotel-search{
    width: 100%;
   
    
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
</style>


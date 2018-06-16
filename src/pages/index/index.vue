<template>
    <div class="container">
        <div class="nav-warp">
            <div class="nav">
                <div class="nav-panels">
                    <router-link tag="div" class="nav-items" to="./">
                        <i class="icon-ticket"></i>
                        <span>机 票</span>
                    </router-link>
                    <router-link tag="div" class="nav-items" to="./">
                        <i class="icon-hotel"></i>
                        <span>酒 店</span>
                    </router-link>
                    <router-link tag="div" class="nav-items" to="./">
                        <i class="icon-rental"></i>
                        <span>租 车</span>
                    </router-link>
                    <router-link tag="div" class="nav-items" to="./">
                        <i class="icon-holiday"></i>
                        <span>度 假</span>
                    </router-link>
                </div>
                <div class="nav-search">
                    <div class="search-box">
                        <input type="text" class="input-search">
                    </div>
                </div>
            </div>
            
        </div>
        <div class="hotel-search">
            <!-- <div class="items-column">
                <div class="search-item">

                </div>
                <div class="search-item">
                    
                </div>
            </div>
            <div class="items-column">
                <div class="search-item">
                    
                </div>
                <div class="search-item">
                    
                </div>
            </div> -->
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
            <div class="link-button">搜 索 ></div>
        </div>
        </div>
        
    </div>
</template>
<script>
    
</script>
<style>
.nav{
    
    height: 1.84rem;
    background:linear-gradient(160deg,#ff5400 ,#ff9c00 );
}
.nav-panels{
    display: flex;
    box-sizing: border-box;
    height: 0.5rem;
    padding:0.2rem 0.55rem  0 0.5rem;
}
.nav-items{
    display: inline-flex;
    align-items: center;
    flex: 1;
    width: 1.15rem;
    height: 0.3rem;
    font-size: 0.24rem;
}
.nav-items i{
    display: inline-block;
    width: 0.46rem;
    height: 0.34rem;
    margin-right: 0.14rem;
    background: url('./icon.png') no-repeat;
}
.nav-items .icon-ticket{
    background-position:0px 0px;
}
.nav-items .icon-hotel{
    background-position: 0px -36px;
}
.nav-items .icon-rental{
    background-position: 0px -72px;
}
.nav-items .icon-holiday{
    background-position: 0px -108px;
}
.router-link-active span{
    color: #8d3800;
}
.router-link-active .icon-ticket{
    background-position: -46px 0px;
}
.router-link-active .icon-hotel{
    background-position: -46px -36px;
}
.router-link-active .icon-rental{
    background-position: -46px -72px;
}
.router-link-active .icon-holiday{
    background-position: -46px -108px;
}
.nav-search{
    padding: 0.38rem 0 0.34rem;
}
.search-box{
    width: 90%;
    height: 0.63rem;
    margin: 0 auto;
}
.input-search{
    display: inline-block;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    font-size: 0.3rem;
    padding-left: 0.19rem;
    background:rgba(255,255,255, 0.2)
}
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


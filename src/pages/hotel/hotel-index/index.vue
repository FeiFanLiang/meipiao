<template>
    <div class="container">
        <div class="nav-wrap">
            <div class="nav">
                <div class="nav-panels">
                    <router-link tag="div" class="nav-items" to="./ticket">
                        <i class="icon-ticket"></i>
                        <span>机 票</span>
                    </router-link>
                    <router-link tag="div" class="nav-items" to="./hotel">
                        <i class="icon-hotel"></i>
                        <span>酒 店</span>
                    </router-link>
                    <router-link tag="div" class="nav-items" to="./rental">
                        <i class="icon-rental"></i>
                        <span>租 车</span>
                    </router-link>
                    <router-link tag="div" class="nav-items" to="./holiday">
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
      
        <router-view></router-view>
    </div>
</template>
<script>
 
  export default{
      components:{
         
      },

  }  
</script>
<style>


.nav-wrap .nav{
    color: #fff;
    height: 1.84rem;
    background-image: url('./head-content.jpg');
    background-size: 100%;
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
    background-repeat: no-repeat;
    background-position: center center;
  
}

.router-link-active span{
    color: #8d3800;
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
/* TAB栏图标 */
.icon-ticket{
    background-image: url('./icon2x/ticket@2x.png')
}
.icon-hotel{
    background-image: url('./icon2x/hotel@2x.png')
}
.icon-rental{
    background-image: url('./icon2x/rental@2x.png')
}
.icon-holiday{
    background-image: url('./icon2x/travel@2x.png')
}
.router-link-active .icon-ticket{
    background-image: url('./icon2x/ticket-active@2x.png')
}
.router-link-active .icon-hotel{
    background-image: url('./icon2x/hotel-active@2x.png')
}
.router-link-active .icon-rental{
    background-image: url('./icon2x/rental-active@2x.png')
}
.router-link-active .icon-holiday{
    background-image: url('./icon2x/travel-active@2x.png')
}
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3){
      .icon-ticket{
    background-image: url('./icon3x/ticket@3x.png')
}
.icon-hotel{
    background-image: url('./icon3x/hotel@3x.png')
}
.icon-rental{
    background-image: url('./icon3x/rental@3x.png')
}
.icon-holiday{
    background-image: url('./icon3x/travel@3x.png')
}
.router-link-active .icon-ticket{
    background-image: url('./icon3x/ticket-active@3x.png')
}
.router-link-active .icon-hotel{
    background-image: url('./icon3x/hotel-active@3x.png')
}
.router-link-active .icon-rental{
    background-image: url('./icon3x/rental-active@3x.png')
}
.router-link-active .icon-holiday{
    background-image: url('./icon3x/travel-active@3x.png')
}
  }
</style>


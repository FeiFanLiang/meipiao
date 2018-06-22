<template>
  <div id="app">
    
    <header class="topHeader">
      <AsideList></AsideList>
      <div class="header-log">
        <h1>美票网</h1>
        </div>
    </header>
    
    <router-view></router-view> 
  </div>
 
</template>

<script>
import AsideList from '@/components/common/aside/aside'
export default {
  name: 'App',
  components:{
    AsideList
  }
}
</script>

<style>
body{
  font-family: '微软雅黑','Microsoft YaHei';
  color:#303030;
}
#app{
  font-size: 0.24rem;
}
.topHeader{
  position: relative;
  display: flex;
  height: 1rem;
  color: #fff;
}
/* .header-menu{
  position:absolute;
  top: 0.35rem;
  left: 0.32rem;
  width: 0.4rem;
  height: 0.4rem;
  box-sizing: border-box;
  border-top: 0.03rem solid #fff;
  
}
.header-menu i {
  display: block;
  height: 0.2rem;
  box-sizing: border-box;
  border-bottom: 0.03rem solid #fff;
}
.menu-border2x{
   width: 0.28rem;
   
  
}
.menu-border{
  width: 0.2rem;
  
} */
.header-log{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background: linear-gradient(110deg,#ff5400 ,#ff9c00 )
  
  
}
.header-log h1{
  font-size: 0.3rem;
  font-weight: normal;
}

</style>

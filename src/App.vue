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
.header-log{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-image: url('assets/header-bg.jpg');
  background-size: 100%;
}
.header-log h1{
  font-size: 0.3rem;
  font-weight: normal;
}

</style>

<template>
    <div class="circle-container">
        <span v-if="!load">上拉加载更多</span>
        <Loading color="black" v-else></Loading>
    </div>
</template>
<script>
import { Loading } from 'vant'
export default {
    components:{
        Loading
    },
    props:{
        loadText:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{
            load:''
        }
    },
    mounted(){
        this.load = this.loadText
    },
    watch:{
        loadText(){
            this.load = this.loadText
        }
    }
}
</script>
<style>
.circle-container{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.16rem;
    color: #3f3b3a;
    height: 0.6rem;
}
.circle-container .van-loading{
    width: 0.6rem;
    height: 0.6rem;
}
</style>



<template>
    <div class="header">
            <i class="icon-arrow" @click="hide"> </i>
            <span class="popup-title">
                <slot></slot>
            </span>
    </div>
</template>
<script>
export default {
   
    methods:{
        hide(){
            this.$emit('hide',false)
        }
    }
}
</script>
<style>
.icon-arrow{
        position: absolute;
        left: 0.1rem;
        width: 0.32rem;
        height: 0.94rem;
       background: url('./icon-arrow.png') no-repeat center center;
    }
    .header{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 0.94rem;
        background: linear-gradient(160deg,#ff5400 ,#ff9c00);
    }
    .popup-title{
        font-size: 0.3rem;
        line-height: 0.3rem;
        color: #fff;
    }
</style>



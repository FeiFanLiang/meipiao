<template>
    <div class="header">
            <i class="icon-arrow"> </i>
            <span class="popup-title">酒店详情</span>
    </div>
</template>
<script>
export default {
    
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



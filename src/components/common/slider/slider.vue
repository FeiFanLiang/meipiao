<template>
    <div class="slider">
        <Swipe>
                <SwipeItem></SwipeItem>
                <SwipeItem></SwipeItem>
                <SwipeItem></SwipeItem>
                <SwipeItem></SwipeItem>
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
    }
}
</script>
<style>
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
</style>



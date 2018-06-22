<template>
    <div class="sonroom-pop">
        <Popheader></Popheader>
        <div class="pop-content">
            <div class="genera">2张双人床 或 1张特大床
                房间面积40平方米,可欣赏海景</div>
            <div class="detail-list">
                <ul>
                    <li>
                        <span class="list-title">网络:</span>免费WIFI
                    </li>
                    <li>
                        <span class="list-title">网络:</span>免费WIFI
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import Popheader from '@/components/common/pop-header/pop-header'
export default {
    components:{
        Popheader
    }
}
</script>
<style>
    .sonroom-pop{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
    }
    .sonroom-pop .header{
        height: 0.94rem;
        background:linear-gradient(160deg ,#ff5400 ,#ff9c00);
    }
    .sonroom-pop .pop-content{
        padding: 0.48rem 0 0 0.44rem;
        font-size: 0.2rem;
        line-height: 0.275rem;
        color: #4a4949;
    }
    .pop-content .genera{
        width: 2.84rem;
        margin-bottom: 0.5rem;
    }
    .detail-list .list-title{
        color: #ff5400;
        font-size: 0.2rem;
    }
    .detail-list ul li{
        margin-bottom: 0.15rem;
    }
</style>



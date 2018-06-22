<template>
    <div class="popup-container">
        <div class="header">
            <i class="icon-arrow"> </i>
            <span class="popup-title">酒店详情</span>
        </div>
        <div class="detail-content">
            <tabs v-model="active" :lineWidth= 0.1 :duration=0>
                <tab title="酒店设施">
                    <div slot="title">
                        <span class="tab-item">酒店设施</span>
                    </div>
                    <div class="content-wrap">
                        <div class="content-item">
                           <span class="content-title">主要设施</span>
                           <div class="content-desc">
                               免费WIFI 2间餐厅 室外游泳池 健身中心 SPA服务 供应早餐 会议中心 空调 每日客房清洁服务
                            </div> 
                        </div>
                        <div class="content-item">
                           <span class="content-title">饮食选择</span>
                           <div class="content-desc">
                               每天提供自助式早餐 2间餐厅 酒吧 咖啡馆 24小时客房送餐服务
                            </div> 
                        </div>
                    </div>
                </tab>
                <tab title="客房设施">
                    <div slot="title">
                        <span class="tab-item">客房设施</span>
                    </div>
                    <div class="item-content">

                    </div>
                </tab>
                 <tab title="关键咨询">
                    <div slot="title">
                        <span class="tab-item">关键资讯</span>
                    </div>
                    <div class="item-content">

                    </div>
                </tab>
                 <tab title="注意事项">
                    <div slot="title">
                        <span class="tab-item">注意事项</span>
                    </div>
                    <div class="item-content">
                        
                    </div>
                </tab>
            </tabs>
        </div>
       
    </div>
</template>
<script>
import { Tab, Tabs } from 'vant'
export default {
    components:{
        Tab,
        Tabs
    },
    data() {
        return {
            active: 0,
            width:0
        };
    }

}
</script>
<style>
    .popup-container{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #fff;
    }
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
    .detail-content .van-tabs--line{
        padding-top: 0.86rem;
    }
    .detail-content .van-tab--active{
        color: #ff5400;
    }
    .detail-content .van-tab--active .tab-item{
         border-bottom: 0.03rem solid #ff5400;
    }
    .detail-content .van-tabs--line .van-tabs__wrap{
        height: 0.86rem;
        border-bottom: 0.01rem solid #e6e6e6;
    }
    .detail-content .van-tab{
        font-size: 0.2rem;
        padding: 0;
    }
    .van-tab{
        line-height: 0;
    }
    .van-tabs__nav--line{
        padding-bottom: 0.2rem;
    }
    .van-tab .tab-item{
        width: 0.92rem;
        
        padding-bottom: 0.14rem;
        line-height: 0.2rem;
       
        margin: 0.3rem auto 0;
    }
    
    .content-wrap{
        display: flex;
        flex-direction: column;
        margin-top: 0.09rem;
        border-top: 0.01rem solid #e6e6e6;
        padding: 0.34rem 0 0 0.44rem;
        
    }
    
    .content-item{
        display: flex;
        flex-direction: column;
        margin-bottom: 0.36rem;

    }
    .content-title{
        font-size: 0.2rem;
        color: #4a4949;
        margin-bottom: 0.3rem;
    }
    .content-desc{
        width: 72.31%;
        font-size: 0.18rem;
        color: #828282;
    }
</style>



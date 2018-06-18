<template>
    <div class="container">
        <div class="search-details-wrap">
            <div class="search-details">
                <div class="details-text">
                    <span class="details-title">青岛,中国</span>
                    <span class="details-date">入住：10月10日周二 离店：10月11日周三</span>
                    <span class="deatils-num">人数：5人 房间：3间</span>
                </div>
                <div class="edit-button">
                    <button class="edit-btn">编辑</button>
                </div>
            </div>
            
        </div>
        <div class="hotel-filt">
                <div class="hotel-input">
                    <Search placeholder="请输入酒店名称"></Search>
                </div>
                <div class="filt-more">
                    <span>更多条件筛选>></span>                    
                </div>
            </div>
    </div>
</template>
<script>
import { Search } from 'vant'
export default {
    components:{
        Search
    }
}
</script>
<style>
    /* 头部搜索条件 */
    .search-details-wrap{
        height: 1.4rem;
        padding: 0 0.16rem;
        font-size: 0.18rem;
    }
    .search-details{
        display: flex;
        padding: 0.25rem 0 0.21rem 0.13rem;
        border-bottom: 0.01rem solid #e6e6e6;
    }
    .details-text{
        display: flex;
        flex: 1;
        flex-direction: column;
        /* align-items: center; */
        /* margin-right: 1.1rem; */
    }
    .edit-button{
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: flex-start;
        width: 0.93rem;
       

    }
    .details-title{
        font-size: 0.2rem;
        color:#333333;
        margin-bottom: 0.17rem;
    }
    .details-date{
        margin-bottom: 0.19rem;
        color: #3d3d3d;
    }
    .deatils-num{
        
        color: #282828;
    }
    .edit-btn{
        width: 0.8rem;
        height: 0.36rem;
        line-height: 0.36rem;
        font-size: 0.16rem;
        color: #ff8a00;
        border: 0.01rem solid #ff8a00;
        border-radius: 0.08rem;
    }
    /* 条件筛选框 */
    .hotel-filt{
        display: flex;
        padding: 0 0.29rem 0 0.26rem;
    }
    .hotel-input{
        flex: 1;

    }
    .filt-more{
       margin-left: 0.27rem;
       font-size: 0.14rem;
       color: #0879e3;

    }
</style>



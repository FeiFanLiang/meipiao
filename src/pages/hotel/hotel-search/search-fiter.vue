<template>
    <div class="fiter-container" v-show="show">
        <div class="fiter-header">
            <div class="fiter-back" @click="hide">
                <span>取消</span>
            </div>
            <div class="header-title">
                <span>排序和筛选</span>
            </div>
            <div class="fiter-go" @click="submit">
                <span>确定</span>
            </div>
        </div>
        <div class="fiter-form">
            <div class="fiter-item">
                    <Cell title="排序方式" is-link value="热门程度">
                       
                    </Cell>
            </div>
            <div class="fiter-items">
                <div class="items-title">
                    <span>价格范围</span>
                </div>
                <div class="radio-wrap">
                   <RadioGroup v-model="Radio.price" :list="radioPrice"></RadioGroup>
                </div>
                <div class="items-title">
                    <span>酒店星级</span>
                </div>
                <div class="radio-wrap">
                    <RadioGroup v-model="Radio.star" :list="radioStar"></RadioGroup>
                </div>
                <div class="items-title">
                    <span>酒店评分</span>
                </div>
                <div class="radio-wrap">
                    <RadioGroup v-model="Radio.rate" :list="radioRate"></RadioGroup>
                </div>
             </div>
            <div class="fiter-item">
                    <Cell title="排序方式" is-link>
                       
                    </Cell>
            </div>
            <div class="fiter-item">
                    <Cell title="地标" is-link>
                       
                    </Cell>
            </div>
            <div class="fiter-item">
                    <Cell title="设施" is-link>
                       
                    </Cell>
            </div>
            <div class="fiter-item">
                    <Cell title="周边地区" is-link>
                       
                    </Cell>
            </div>
            <div class="fiter-item">
                    <Cell title="主题" is-link>
                       
                    </Cell>
            </div>
            <div class="fiter-item">
                    <Cell title="住宿类型" is-link>
                       
                    </Cell>
            </div>
        </div>
    </div>
</template>
<script>
import { Cell, CellGroup,Icon, Radio } from 'vant'
import RadioGroup from '@/components/common/radio-group/radio-group'
export default {
    components:{
        Cell,
        RadioGroup,
        // Radio,
        
    },
    props:{
        popshow:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{ 
            Radio:{
                price:'',
                star:'',
                rate:''
            },
            show:'',
            radioPrice:[
                {label:'0-500',value:1},
                {label:'500-1000',value:2},
                {label:'1000-2000',value:3},
                {label:'2000+',value:4}
            ],
            radioStar:[
                {label:'1星',value:1},
                {label:'2星',value:2},
                {label:'3星',value:3},
                {label:'4星',value:4},
                {label:'5星',value:5}
            ],
            radioRate:[
                {label:'1+',value:1},
                {label:'2+',value:2},
                {label:'3+',value:3},
                {label:'4+',value:4},
                {label:'5+',value:5}
            ]

        }
    },
    
    methods:{
       hide(){ 
           this.show = false
             this.$emit('hide',false)
       },
       submit(){
           this.$emit('submit',this.Radio)
           this.hide()
       }
    },
    watch:{
        popshow:function(value){
            this.show = value
            //  console.log(this.show)
        }
    },
    
}
</script>
<style>
    .fiter-container{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #fff;
        z-index: 20;
        
    }
    .fiter-header{
        display: flex;
        height: 0.94rem;
        background:linear-gradient(160deg,#ff5400 ,#ff9c00);
        align-items: center;
        color: #fff;
        font-size: 0.3rem;
        
    }
    .header-title{
        flex: 1;
        text-align: center;
    }
    .fiter-back{
        padding-left: 0.32rem;
    }
    .fiter-go{
        padding-right: 0.32rem;
        justify-content: flex-end;
    }
    .fiter-back,.fiter-go{
        width: 1.3rem;
        height: 100%;
        display: inline-flex;
        align-items: center;
        
    }
    .fiter-form{
        padding: 0 0.19rem;
    }
    .fiter-item{
        border-bottom: 0.01rem solid #e6e6e6;
    }
    .fiter-item .van-cell{
        height: 0.84rem;
        font-size: 0.2rem;
        line-height: 0.2rem;
        padding: 0.34rem 0.08rem 0.3rem 0.14rem;
        
    }
    .fiter-item .van-cell__right-icon{
        line-height: 0.24rem;
    }
    .fiter-item .van-cell__value{
        color: #9a9a9a;
    }
    .fiter-items{
        padding: 0.35rem 0.14rem;
    }
    .fiter-items .items-title{
        font-size: 0.2rem;
        margin-bottom: 0.28rem;
    }
    .radio-wrap{
        margin-bottom: 0.45rem;
    }
    .radio-wrap:nth-child(3){
        margin: 0;
    }
</style>


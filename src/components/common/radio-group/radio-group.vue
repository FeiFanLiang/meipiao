<template>
    <div class="radio-group">
        <label v-for="(item,index) in radioList" class="radio-item">
            <input type="radio" name="price" v-model="radio.price" :value="item.value" :index="index"
             @change="$emit('input',$event.target.value)" class="input-radio">
            <span :class="radio.price == item.value?'checked':'check'">{{item.label}}</span>
        </label>
    </div>
</template>
<script>
export default {
    props:['value'],
    data(){
        return{
            radio:{
                price:1
            },
            radioList:[
                {label:'0-500',value:0},
                {label:'500-1000',value:1},
                {label:'1000-2000',value:2},
                {label:'2000+',value:3}
            ]
        }
    }
}
</script>
<style>
    .input-radio{
        opacity: 0;
    }
    .radio-item span{
        display: inline-flex;
        padding: 0.1rem 0.19rem;
        font-size: 0.2rem;
        line-height: 0.2rem;
        border: 0.01rem solid #e6e6e6;
        color: #b1b1b1;
    }
    .radio-item .checked{
        color: #ff8a00;
        border-color: #ff8a00;
    }
</style>



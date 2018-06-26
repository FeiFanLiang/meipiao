<template>
    <div class="radio-group">
        <label v-for="(item,index) in radioList" class="radio-item">
            <input type="radio" name="price"  :value="item.value" :index="index"
             @change="change($event)" class="input-radio">
            <span :class="checked == item.value?'checked':'check'">{{item.label}}</span>
        </label>
    </div>
</template>
<script>
export default {
    // props:['value'],
    props:{
        value:{},
        list:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            checked:1,
            radioList:[]
        }
    },
    methods:{
        change(event){
            // console.log(typeof event.target.value)
            this.checked = event.target.value
            this.$emit('input',this.checked) 
        }
    },
    mounted(){
        this.radioList = this.list
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



<template>
     <div class="pop-wrapper" @touchmove.prevent>
        <Popheader @hide="hide">
            <slot name="title"></slot>
        </Popheader>
        <div>
            <slot></slot>
            <slot name="content"></slot>
        </div>
    </div>
</template>
<script>
import Popheader from '@/components/common/pop-header/pop-header'
export default {
    components:{
        Popheader
    },
    methods:{
        hide(){
            this.$emit('hide',false)
        }
    }
}
</script>
<style>
 .pop-wrapper{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        
        z-index: 300;
    }
    .pop-wrapper .header{
        height: 0.94rem;
        background:linear-gradient(160deg ,#ff5400 ,#ff9c00);
    }
    
  
</style>


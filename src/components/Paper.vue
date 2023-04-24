<script>
import {marginsAndPaddingsProps} from '../utils.js'
export default({
  name:'Paper',
  props:{
    ...marginsAndPaddingsProps,
  },
  computed:{
    styles(){
      return{
        marginLeft:this.mx||this.ml||'',
        marginRight:this.mx||this.mr||'',
        marginTop:this.my||this.mt||'',
        marginBottom:this.my||this.mb||'',
        paddingLeft:this.px||this.pl||'',
        paddingRight:this.px||this.pr||'',
        paddingTop:this.py||this.pt||'',
        paddingBottom:this.py||this.pb||'',
      }
    }
  }
})
</script>
<style lang="sass">
.paper
  box-shadow: 0px 5px 20px rgba(0,0,0,0.07)
</style>
<template >
  <div class="paper" :style="styles">
    <slot/>
  </div>
</template>
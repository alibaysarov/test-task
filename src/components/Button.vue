<script>

export default({
  name:'Button',
  props:{
    icon:{
      type:String,
      default:''
    }
  },
  computed:{
    hasIcon(){
      return this.icon.length>0 &&true
    }
  }
})
</script>
<style lang="sass">
.Button
  cursor: pointer
  border:0px
  outline: none
  padding: 10px
  border-radius: 5px
  background-color: $blue3
  color: $white
  font-family: $text
  font-size: 14px
  font-weight: 400
  line-height: 1.2
  +trns 
  &:active
    transform: scale(0.97)
  &:hover
    background-color: darken($blue3,10% )
  .icon
    margin-right: 7px
  .hasIcon
    justify-content: space-between
    gap:7px
</style>
<template>
  <button :class="['Button',hasIcon&&'hasIcon']">
    <img class="icon" v-if="hasIcon" width="11" height="11" :src="this.icon" alt="Иконка">
    <slot/>
  </button>
</template>
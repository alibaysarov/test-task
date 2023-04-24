<script>
import Stack from './Stack.vue'
import Text from './Text.vue'
export default({
  name:'Settings',
  components:{
    Stack,
    Text
  },
  props:{
    text:{
      type:String,
      default:''
    },
    menu:{
      type:Array,
      default:[]
    }
  },
  computed:{
    hasTxt(){
      return this.text.length>0 && true
    },
    hasMenu(){
      return this.menu.length>0 && true
    },
  }
})
</script>
<style lang="sass">
svg.settingIcon
  cursor: pointer
  path
    fill:#A6B7D4
    +trns
  &.active,&:hover
    path
      fill:#3A556A
.settings
  position: relative
  &__menu
    position: absolute
    width: 229px
    right: 0px
    top: calc(100% + 5px)
    box-shadow: 0px 0px 3px,inset 0px 1px 2px rgba(255,255,255,0.5)
    background-color: $white
    padding: 10px
    border-radius: 10px
</style>
<template >
<Stack class="settings" dir="row" alignItems="center" :spacing="hasTxt==true?'16px':'0px'">
  <div v-if="hasMenu" class="settings__menu">
    <Stack spacing="10px" dir="column">
      <Stack dir="row" style="width:100%;" alignItems="center" justifyContent="space-between">
        <Text style="cursor:pointer;" color="black" fontSize="14px" fontFamily="secondary">Отображение столбцов</Text>
        <img src="/public/icons/Rarrow.png" width="4" height="9" alt="">
      </Stack>
      <Stack dir="row" style="width:100%;" alignItems="center" justifyContent="space-between">
        <Text style="cursor:pointer;" color="black" fontSize="14px" fontFamily="secondary">Порядок столбцов</Text>
        <img src="/public/icons/Rarrow.png" width="4" height="9" alt="">
      </Stack>
    </Stack>
  </div>
  <Text v-if="hasTxt" color="lBlue" fontSize="12px" fontFamily="secondary">{{ this.text }}</Text>
  <svg class="settingIcon" width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.2499 5.97894C14.6641 5.97894 14.9999 6.31474 14.9999 6.72895L15 8.27105C15 8.68526 14.6642 9.02106 14.25 9.02106L13.2979 9.02114C13.158 9.5553 12.948 10.0596 12.6757 10.5247L13.3484 11.1976C13.6414 11.4905 13.6414 11.9653 13.3484 12.2582L12.2581 13.3486C11.9651 13.6415 11.4904 13.6415 11.1974 13.3486L10.5245 12.6758C10.0594 12.9483 9.55505 13.1581 9.021 13.298L9.021 14.25C9.021 14.6642 8.6853 15 8.271 15L6.729 15C6.3147 15 5.97888 14.6642 5.97888 14.25L5.97888 13.2979C5.44482 13.158 4.94055 12.9483 4.47546 12.6758L3.80261 13.3486C3.50977 13.6415 3.03491 13.6415 2.74207 13.3486L1.65161 12.2583C1.35864 11.9654 1.35864 11.4905 1.65161 11.1976L2.32434 10.5248C2.05188 10.0597 1.84204 9.55537 1.70215 9.02136L0.75 9.02136C0.335815 9.02136 0 8.68563 0 8.27135L0 6.72925C0 6.31504 0.335815 5.97924 0.75 5.97924L1.7019 5.97924C1.84167 5.44515 2.05151 4.94073 2.32397 4.47563L1.65112 3.80297C1.35828 3.51007 1.35828 3.03517 1.65112 2.74227L2.74158 1.65182C3.03442 1.35884 3.50928 1.35884 3.80225 1.65174L4.47485 2.3244C4.94006 2.0519 5.44458 1.84188 5.97876 1.70204L5.97876 0.750011C5.97876 0.33573 6.31458 0 6.72876 0L8.27087 0C8.68506 0 9.02087 0.33573 9.02087 0.750011L9.02087 1.70212C9.55505 1.84188 10.0594 2.05182 10.5245 2.32425L11.1973 1.65152C11.4902 1.35854 11.9651 1.35854 12.2579 1.65144L13.3484 2.74189C13.6414 3.03487 13.6414 3.50969 13.3484 3.8026L12.6757 4.47533C12.9481 4.94043 13.1581 5.44485 13.2979 5.97901L14.2499 5.97894ZM10.2534 7.49981C10.2534 9.0197 9.02124 10.2518 7.50134 10.2518C5.98145 10.2518 4.74939 9.0197 4.74939 7.49981C4.74939 5.97993 5.98145 4.74781 7.50134 4.74781C9.02124 4.74781 10.2534 5.97993 10.2534 7.49981Z" id="Combined-Shape" fill-rule="evenodd" stroke="none" />
  </svg>
</Stack>
</template>
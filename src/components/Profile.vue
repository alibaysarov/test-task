<script>
import Text from './Text.vue'
export default({
    name:'Profile',
    components:{
      Text
    },
    data(){
      return{
        openedMenu:false
      }
    },
    methods:{
      openProfileMenu(){
        console.log(123);
        this.openedMenu=!this.openedMenu
      }
    },
    computed:{
      isMenuOpen(){
        return this.openedMenu==true&&'active'
      }
    }
})
</script>
<style lang="sass">
.profile
  display: flex
  flex-direction: column
  justify-content: end
  flex-grow: 1
  padding: 10px 0px
  pointer-events: none
  &__avatar
    display: flex
    justify-content: center
    align-items: center
    width: 40px
    height: 40px
    border-radius: 50%
    background-color: $white
    margin-right: 7px
  &__cnt
    display: flex
    margin-left: 15px
    align-items: center
    position: relative
    cursor: pointer
    pointer-events: all
    padding-top: 10px
    border-top:1px solid #2C3D51
    margin-right: 10px
    z-index: 12
  &__menu
    background-color: $white
    border-radius: 5px
    padding: 10px 10px
    display: flex
    flex-direction: column
    gap:12px
    position: absolute
    bottom: 70px
    left: 15px
    width: 100%
    max-width: 199px
    box-shadow: 0px 0px 3px,inset 0px 1px 2px rgba(255,255,255,0.5)    
    opacity: 0
    visibility: hidden
    +trns
    &.active
      opacity: 1
      visibility: visible
</style>
<template >
    <div class="profile">
      <div :class="['profile__menu',isMenuOpen]">
        <Text style="cursor:pointer;" color="black" fontSize="14px" fontFamily="secondary">Личные настройки</Text>
        <Text style="cursor:pointer;" color="black" fontSize="14px" fontFamily="secondary">Выйти</Text>
      </div>
      <div @click="openProfileMenu" class="profile__cnt">
        <div class="profile__avatar"><Text color="text" weight="bold">Д</Text></div>
        <Text color="white" fontSize="17px" weight="regular" fontFamily="secondary">Денис Потемкин</Text>
      </div>
    </div>
</template>
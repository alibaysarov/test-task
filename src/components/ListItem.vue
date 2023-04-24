<script>
import Text from "./Text.vue";
export default {
  name: "ListItem",
  components: {
    Text,
  },
  props: {
    item: {},
    title: {
      type: String,
      default: "",
    },
    innerList: {
      type: Array,
      default: [],
    },
  },
  computed: {
    isMult() {
      return this.innerList.length > 0 && "mult";
    },
    openMenu() {
      return this.isOpened && "active";
    },
  },
  data() {
    return {
      isOpened: false,
    };
  },
  methods: {
    clickHandler() {
      this.isOpened = !this.isOpened;
      console.log(this.isOpened);
    },
  },
};
</script>
<style lang="sass">
.menuListItem
  cursor: pointer
  padding: 7px 0
  padding-left: 25px
  padding-right: 15px
  display: flex
  flex-direction: column
  &__cnt
    display: flex
    justify-content: space-between
  &__inner
    height: 0px
    overflow: hidden
    opacity: 0
    visibility: hidden
    +trns
    &.active
      height: auto
      opacity: 1
      visibility: visible
  .submenuPhoto
    img
      +trns
      &.isOpen
        transform: rotate(180deg)

.mult
  background-color: $lightBlack
</style>
<template #item="{ element: item }">
  <div @click="clickHandler" :class="['menuListItem', isMult]">
    <div class="menuListItem__cnt">
      <Text color="white" fontSize="14px" fontWeight="regular">{{
        title
      }}</Text>
      <div v-if="isMult" class="submenuPhoto">
        <img
          src="/public/icons/DnArr.png"
          :class="{ isOpen: this.isOpened }"
          width="12"
          height="7"
          alt="Больше"
        />
      </div>
    </div>
    <div :class="['menuListItem__inner', openMenu]">
      <Text
        style="padding: 7px 0px"
        color="lBlue"
        fontSize="14px"
        fontWeight="regular"
        :key="id + 1"
        v-for="(item, id) in innerList"
        >{{ item.title }}</Text
      >
    </div>
  </div>
</template>

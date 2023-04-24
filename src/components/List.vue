<script>
import Text from "./Text.vue";
import ListItem from "./ListItem.vue";

import draggable from "vuedraggable";
export default {
  name: "List",
  props: {},
  components: {
    Text,
    draggable,
    ListItem,
  },
  data() {
    return {
      list: [
        {
          title: "Логистика",
          isOpen: false,
          link: "/",
        },
        {
          title: "Перевозчики",
          isOpen: false,
          innerList: [1, 2, 3],
          link: "/",
        },
        {
          title: "Задачи",
          isOpen: false,
          link: "/",
        },
        {
          title: "Аналитика",
          isOpen: false,
          innerList: [
            {
              title: "Справочник",
              link: "/",
            },
            {
              title: "База",
              link: "/",
            },
            {
              title: "База",
              link: "/",
            },
          ],
        },
        {
          title: "Адреса",
          link: "/",
          isOpen: false,
        },
        {
          title: "Товары",
          link: "/",
          isOpen: false,
        },
        {
          title: "Информация для склада",
          link: "/",
          isOpen: false,
        },
        {
          title: "Адреса",
          link: "/",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    clickHandler(el) {
      el.isOpen = !el.isOpen;
      // console.log(this.isOpened);
    },
  },
  computed: {
    // isMult(item) {
    //   return item.innerList.length > 0 == true && "mult";
    // },
    openMenu(item) {
      return item.isOpened && "active";
    },
  },
};
</script>

<style lang="sass">
.list
  padding-top: 30px
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
<template>
  <div class="list">
    <ListItem :="item" v-for="item in list" />
  </div>
  <!-- <draggable
    item-key="title"
    v-model="list"
    ghost-class="start"
    class="list"
    tag="div"
  >
    <template #item="{ element: item }">
      <div @click="clickHandler(item)" :class="['menuListItem', item.title]">
        <div class="menuListItem__cnt">
          <Text color="white" fontSize="14px" fontWeight="regular">{{
            item.title
          }}</Text>
          <div class="submenuPhoto">
            <img
              src="/public/icons/DnArr.png"
              :class="{ isOpen: item.isOpened }"
              width="12"
              height="7"
              alt="Больше"
            />
          </div>
        </div>
        <div :class="['menuListItem__inner']">
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
  </draggable> -->
</template>

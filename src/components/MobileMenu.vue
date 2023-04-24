<script>
import { useStore } from "vuex";
import Stack from "./Stack.vue";
import Text from "./Text.vue";
export default {
  name: "MobileMenu",
  components: {
    Stack,
    Text,
  },
  data() {
    const store = useStore();
    return {
      isShown: store.state.table.menuShown,
      menuList: [
        {
          title: "Логистика",
          link: "/",
        },
        {
          title: "Перевозчики",
          link: "/",
        },
        {
          title: "Заказы по дням",
          link: "/",
        },
        {
          title: "Нераспределенные заказы",
          link: "/",
        },
        {
          title: "Задачи",
          link: "/",
        },
        {
          title: "Настройки",
          link: "/",
        },
        {
          title: "Денис Потемкин",
          link: "/",
        },
      ],
    };
  },
};
</script>
<style lang="sass">
.MobileMenu
  padding: 30px 10px
  position: fixed
  width: 100%
  height: 0vh
  background-color: $white
  z-index: 300
  overflow: hidden
  opacity: 0
  transition: all 0.3s ease
  &.show
    opacity: 1
    height: 100vh
  &__item
    background-color: #F6F5F3
    padding: 15px
    border-radius: 4px
    width: 100%
</style>
<template>
  <div :class="['MobileMenu', isShown && 'show']">
    <Stack alignItems="center" justifyContent="space-between">
      <Text type="h1">Меню</Text>
      <Stack
        @click="this.$store.commit('menuHandler')"
        alignItems="center"
        spacing="5px"
      >
        <Text style="color: #0584fe" font>Вернуться</Text>
        <img
          src="/public/icons/BlueArrow.png"
          width="10"
          height="16"
          alt=""
          srcset=""
      /></Stack>
    </Stack>
    <Stack mt="20px" dir="column" spacing="5px">
      <div class="MobileMenu__item" v-for="(item, id) in menuList">
        <Text
          type="a"
          fontFamily="secondary"
          :href="item.link"
          color="black"
          fontSize="16px"
          style="text-decoration: none"
        >
          {{ item.title }}
        </Text>
      </div>
    </Stack>
  </div>
</template>

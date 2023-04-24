<script>
export default {
  name: "Burger",
  data() {
    return {
      render: window.matchMedia("(max-width:1024px)").matches && true,
    };
  },
  methods: {
    openMenu() {
      this.$store.commit("menuHandler");
    },
  },
};
</script>
<style lang="sass">
.Burger

  cursor: pointer
  width: 15px
  height: 15px
  img
    object-fit: cover
</style>
<template>
  <div @click="openMenu" class="Burger" v-if="render">
    <img src="/public/icons/Burger2.png" width="15" height="15" alt="" />
  </div>
</template>

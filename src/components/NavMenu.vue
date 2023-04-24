<script>
import Text from "./Text.vue";
import List from "./List.vue";
import Profile from "./Profile.vue";

export default {
  name: "NavMenu",
  components: {
    Text,
    List,
    Profile,
  },
};
</script>
<style lang="sass">
.menu
  background: $gradient
  background-position: top center
  background-size: cover
  padding-top: 31px
  max-width: 229px
  position: sticky
  top: 0px
  bottom: 0px
  display: flex
  flex-direction: column
  &__logo
    display: flex
    justify-content: center
@media (max-width:1024px)
  .menu
    position: fixed
    display: none
    z-index: 100
</style>
<template lang="">
  <div class="menu">
    <div class="menu__logo">
      <img src="/public/images/Logo.png" alt="Логотип" />
    </div>
    <List />
    <Profile />
  </div>
</template>

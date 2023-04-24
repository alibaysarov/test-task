<script>
export default {
  name: "Input",
  props: {
    value: "",
  },
  data() {
    return {
      value: this.value,
    };
  },
};
</script>
<style lang="sass">
.Input
  outline: none
  padding: 10px 15px 6px
  border-radius: 5px
  border:1px solid #cccccc
  font-family: $text
  color: $black
  font-size: 16px
  font-weight: 400
</style>
<template>
  <input v-model="value" class="Input" type="text" />
</template>

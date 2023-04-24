<script>
export default {
  name: "Text",
  props: {
    href: {
      type: String,
      default: "#",
    },
    weight: {
      type: String,
      default: "regular",
    },
    color: {
      type: String,
      default: "text",
    },
    fontFamily: {
      type: String,
      default: "primary",
    },
    fontSize: {
      type: String,
      default: "14px",
    },
    type: {
      type: String,
      default: "p",
    },
  },
  data() {
    return {
      styles: {
        fontSize: this.fontSize,
      },
    };
  },
  computed: {
    classObj() {
      return {
        text: this.color == "text",
        white: this.color == "white",
        black: this.color == "black",
        lBlue: this.color == "lBlue",
        blue: this.color == "blue",
        regular: this.weight == "regular",
        semibold: this.weight == "semibold",
        bold: this.weight == "bold",
        primary: this.fontFamily == "primary",
        secondary: this.fontFamily == "secondary",
      };
    },
  },
};
</script>
<style lang="sass">
h1
  font-size: 36px
  font-family: $text
  font-weight: 400
  line-height: 1.2
.text
  color: $txt
  line-height: 1.2
.regular
  font-weight: 400
.semibold
  font-weight: 600
.bold
  font-weight: 600
.white
  color: $white
.black
  color: $black
.blue
  color: $blue2
.lBlue
  color: $lightBlue
.primary
  font-family: $text2
.secondary
  font-family: $text
@media screen and (max-width:500px)
  h1
    font-size:26px
</style>
<template>
  <component
    :is="this.type"
    :href="this.type == 'a' && this.href"
    :class="classObj"
    style="{{ this.styles }}"
  >
    <slot />
  </component>
</template>

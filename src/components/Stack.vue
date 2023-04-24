<script>
export default {
  name: "Stack",
  props: {
    mt: {
      type: String,
      default: "",
    },
    mb: {
      type: String,
      default: "",
    },
    ml: {
      type: String,
      default: "",
    },
    mr: {
      type: String,
      default: "",
    },
    pt: {
      type: String,
      default: "",
    },
    pr: {
      type: String,
      default: "",
    },
    pb: {
      type: String,
      default: "",
    },
    pl: {
      type: String,
      default: "",
    },
    mx: {
      type: String,
      default: "",
    },
    my: {
      type: String,
      default: "",
    },
    px: {
      type: String,
      default: "",
    },
    py: {
      type: String,
      default: "",
    },
    spacing: {
      type: String,
      default: "0px",
    },
    alignItems: {
      type: String,
      default: "start",
    },
    justifyContent: {
      type: String,
      default: "start",
    },
    dir: {
      type: String,
      default: "row",
    },
  },
  computed: {
    styles() {
      return {
        gap: this.spacing,
        marginLeft: this.mx || this.ml || "",
        marginRight: this.mx || this.mr || "",
        marginTop: this.my || this.mt || "",
        marginBottom: this.my || this.mb || "",
        paddingLeft: this.px || this.pl || "",
        paddingRight: this.px || this.pr || "",
        paddingTop: this.py || this.pt || "",
        paddingBottom: this.py || this.pb || "",
      };
    },
    classObj() {
      return {
        row: this.dir == "row",
        column: this.dir == "column",
        ais: this.alignItems == "start",
        aic: this.alignItems == "center",
        aisb: this.alignItems == "space-between",
        aisa: this.alignItems == "space-around",
        jcc: this.justifyContent == "center",
        jce: this.justifyContent == "end",
        jcsb: this.justifyContent == "space-between",
      };
    },
  },
};
</script>
<style lang="sass">
.stack
  display: flex
.row
  flex-direction: row
.column
  flex-direction: column
.ais
  align-items: start
.aic
  align-items: center
.aisb
  align-items: space-between
.aisa
  align-items: space-around
.jcc
  justify-content: center
.jce
  justify-content: flex-end
.jcsb
  justify-content: space-between
.jcsa
  justify-content: space-around
</style>
<template lang="">
  <div :class="['stack', classObj]" :style="styles">
    <slot />
  </div>
</template>

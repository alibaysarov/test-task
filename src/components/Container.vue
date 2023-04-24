<script>
export default({
    name:'Container'
})
</script>
<style lang="sass">
.container
  // width: 100%
  // max-width: 1500px
  // margin-left: 229px
  padding: 25px
  background-color: #FBFCFD
</style>
<template >
    <div class="container">
        <slot/>
    </div>
</template>
<template>
  <div id="app">
    <Nav />
    <div id="content">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  components:{
    Nav : ()=> import("@/components/Nav")
  }
}
</script>
<style lang="scss">
@import "@/assets/styles/global.scss";

</style>

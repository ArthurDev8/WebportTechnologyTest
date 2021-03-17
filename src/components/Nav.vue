<template>
  <nav class="nav">
    <router-link class="link" to="/">Posts</router-link>
    <router-link class="link" to="/users">Users</router-link>
  </nav>
</template>
<script>
export default {
  name: "Nav",
};
</script>
<style lang="scss">
.nav {
  padding: 20px 0;
  .link {
    padding: 5px 20px;
    margin: 10px;
    color: #9396a5;
    text-decoration: none;
    font-size: 20px;
    border-radius: 4px;
    &.router-link-exact-active {
      color: black;
      background-color: #dbe1e8;
    }
  }
}
</style>
<template>
  <div id="app">
    <div id="nav">
      <div v-if="!isLoggin">
        <router-link to="/">Home</router-link> |
        <router-link to="/login">Login</router-link> |
        <router-link to="/register">Register</router-link>|
      </div>
      <div v-else class="d-flex">
        <router-link to="/">Home</router-link> |
        <router-link to="/profile">Profile</router-link>
      </div>

    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "ToolBar",
  props: ["isLoggin"]
}
</script>

<style scoped>

</style>
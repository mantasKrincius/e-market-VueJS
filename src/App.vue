<template>
  <div id="app">
    <ToolBar/>
  </div>
</template>
<script>

import ToolBar from "./components/AddinionalComponents/ToolBar";

export default {
  components: {ToolBar},
  computed: {
    isLoggin() {
      return this.$store.state.user.userStatus
    }
  },
  mounted() {
    this.$store.dispatch('getUserName')
    this.$store.dispatch('getAllPosts')
    this.$store.dispatch('getUserPosts')
    this.$store.dispatch('getUserOrders')
  },
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 20px;
}

.top-nav-menu {
  color: #fff;
}

.top-nav-logged div {
  padding: 0 5px;
}

.top-nav-logo img {
  height: 60px;
}

.d-flex {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  font-size: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#nav a {
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #fff;
}
</style>

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
        <router-link to="/user/cart">Cart</router-link> |
        <router-link to="/profile">Profile</router-link>
        <Logout/>
      </div>

    </div>
    <router-view/>
  </div>
</template>
<script>
import Logout from "./components/AddinionalComponents/Logout";
export default {
  components: {Logout},
  computed: {
    isLoggin(){
      return this.$store.state.user.userStatus
    }
  },
  mounted() {
    this.$store.dispatch('getUserName')
    this.$store.dispatch('getAllPosts')
    this.$store.dispatch('getUserPosts')
  }
}
</script>

<style>
.d-flex {
  display: flex;
  justify-content: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>
  <div id="app">
    <div id="nav" class="top-nav">
      <div class="top-nav-logo">
        <router-link to="/">
          <img :src="require('./assets/gumtree_logo.png')"/>
        </router-link>
      </div>
      <div v-if="!isLoggin" class="top-nav-menu">
        <router-link to="/login"><i class="fas fa-sign-in-alt"></i> Login</router-link>
        /
        <router-link to="/register"><i class="fas fa-user-plus"></i>Register</router-link>

      </div>
      <div v-else class="d-flex top-nav-menu top-nav-logged">
        <div>Hello, {{ $store.state.user.userName }}</div>
        <div>
          <router-link to="/profile"><i class="far fa-user-circle"></i></router-link>
        </div>
        <div>
          <router-link to="/user/cart"><i class="fas fa-shopping-cart"></i></router-link>
        </div>
        <div>
          <router-link to="/createPost">POST</router-link>
        </div>
        <div>
          <Logout/>
        </div>
      </div>
    </div>
    <Hero/>
    <router-view/>
  </div>
</template>
<script>
import Logout from "./components/AddinionalComponents/Logout";
import Hero from "./components/Hero/Hero";

export default {
  components: {Hero, Logout},
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

.top-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #3c3241;
  width: 100%;
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
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  font-size: 1rem;
  display: flex;
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

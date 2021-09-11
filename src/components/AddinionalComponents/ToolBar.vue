<template>
  <div class="main-div">
    <div id="nav" class="top-nav">
      <div class="top-nav-logo">
        <router-link to="/">
          <img :src="require('../../assets/gumtree_logo.png')"/>
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
          <router-link :to="/profile/ + `${user.userName}`"><i class="far fa-user-circle"></i></router-link>
        </div>
        <div>
          <router-link :to="`/${user.userName}` + '/cart'"><i class="fas fa-shopping-cart">{{userCart}}</i></router-link>
        </div>
        <div>
          <router-link to="/createPost" class="post-decoration"><i class="fas fa-screwdriver"></i>POST</router-link>
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
import Logout from "./Logout";
import Hero from "../Hero/Hero";

export default {
  name: "ToolBar",
  components: {Hero, Logout},
  methods: {
    toProfile() {
      this.$router.push(`/profile/${this.user.userName}`)
    }
  },
  computed: {
    isLoggin() {
      return this.$store.state.user.userStatus
    },
    user() {
      return this.$store.state.user
    },
    userCart(){
      return this.$store.state.userCart.length
    }
  },
}
</script>

<style scoped>
.post-decoration {
  padding: 10px;
  border: 1px solid red;
}

i {
  font-size: 1.3rem;
  padding: 0 10px;
}

.top-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #3c3241;
  width: 100%;
}

.main-div {

  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
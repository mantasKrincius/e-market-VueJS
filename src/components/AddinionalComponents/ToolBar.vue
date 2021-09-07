<template>
  <div class="toolbar">
    <div>
      <div v-if="!isLoggin">
        <router-link to="/">Home</router-link> |
        <router-link to="/login">Login</router-link> |
        <router-link to="/register">Register</router-link>|
      </div>
      <div v-else class="d-flex">
        <router-link to="/">Home</router-link> |
        <router-link to="/profile">Profile</router-link>
        <Logout/>
      </div>

    </div>
    <router-view/>
  </div>
</template>

<script>
import Logout from "./Logout";
export default {
  name: "ToolBar",
  components: {Logout},
  props: ["isLoggin"],

  computed: {
    isLoggin(){
      return this.$store.state.user.userStatus
    }
  },
}
</script>

<style scoped>
.d-flex {
  display: flex;
  justify-content: center;
}

.toolbar {
  background-color: red;
  
}
</style>
<template class="main-template">
  <form class="login-form">
    <label>User Name</label>
    <input type="text" v-model="user.userName">
    <label>Password</label>
    <input type="text" v-model="user.password">
    <button @click.prevent="login">Login</button>
    <h3>{{$store.state.message}}</h3>
  </form>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: {
        userName: "",
        password: ""
      }
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', this.user)
      this.$router.push("/");
    }
  }
}
</script>

<style scoped>
.login-form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 30px 0;
}

button {

}

label {
  padding: 5px;
}

.login-form input {
  padding: 5px;
  width: 300px;
  margin: 5px 0;
}
</style>
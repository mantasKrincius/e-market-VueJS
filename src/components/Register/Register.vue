<template>
  <div>
    <h2>{{ message }}</h2>
    <form class="register-form">
      <label>Enter Your User Name</label>
      <input type="text" v-model="user.userName">
      <label>Enter Your Password</label>
      <input type="text" v-model="user.password">
      <label>Repeat Password</label>
      <input type="text" v-model="user.repeatPassword">
      <button @click.prevent="submitForm">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      user: {
        userName: "",
        password: "",
        repeatPassword: "",
      },
      message: ""
    }
  },
  methods: {
    submitForm() {
      if(this.user.password === this.user.repeatPassword && this.user.userName.length > 10 && this.user.userName.length <= 30) {
        this.$store.dispatch('register', this.user)
        this.message = "Thank you, now you can login"
        setTimeout(() => this.message = "", 1000)
        this.user.userName = ""
        this.user.password = ""
        this.user.repeatPassword = ""
      } else {
        this.message = "Your passwords doesnt match or your username not match parameters: min 10/max 30 symbols"
        setTimeout(() => this.message = "", 1000)
      }
    }
  }
}
</script>

<style scoped>
.register-form {
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

.register-form input {
  padding: 5px;
  width: 300px;
  margin: 5px 0;
}
</style>
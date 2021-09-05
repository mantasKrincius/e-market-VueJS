<template>
  <div>
    <h2>{{ message }}</h2>
    <form>
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
      if(this.user.password === this.user.repeatPassword) {
        this.$store.dispatch('register', this.user)
        this.message = "Thank you, now you can login"
      } else {
        this.message = "Your passwords doesnt match, please try again"
      }
    }
  }
}
</script>

<style scoped>

</style>
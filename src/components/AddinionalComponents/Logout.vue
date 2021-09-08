<template>
<div>
  <button @click="logout">Logout</button>
</div>
</template>

<script>
export default {
  name: "Logout",
  methods: {
    logout(){
      this.$store.dispatch('logout')
      this.$router.push("/").catch(()=>{})
    }
  }
}
</script>

<style scoped>

</style>
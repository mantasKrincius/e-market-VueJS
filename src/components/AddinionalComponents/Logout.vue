<template>
<div>
  <i class="fas fa-door-open" @click="logout"></i>
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
i {
  cursor: pointer;
  font-size: 1.3rem;
  padding: 0 10px;
}
</style>
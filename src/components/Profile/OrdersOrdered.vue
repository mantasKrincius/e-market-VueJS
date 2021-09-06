<template>
  <div>
  My Orders:
    <div v-for="(item, index) in getUserOrder" :key="index">
      {{item}}
    </div>

  </div>
</template>

<script>
export default {
  name: "OrdersOrdered",
  computed: {
    getUserOrder(){
      return this.$store.state.userOrders
    },
  },
  mounted() {
    console.log(this.getUserOrder)

  }
}
</script>

<style scoped>

</style>
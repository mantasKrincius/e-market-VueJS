<template>
  <div>
    My Orders:
    <div v-for="(item, index) in getUserOrder" :key="index">
      <div>Ordered date: {{ item.createdAt }}</div>
      <div>Total Price: {{ item.totalPrice }}</div>
      <div v-for="(product,index) in item.products" :key="index">
        {{ product.data.name }}
        Quantity: {{ product.data.quantity }}
        Price: {{ product.data.price }}
        Seller Name: {{ product.data.userName }}
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "OrdersOrdered",
  computed: {
    getUserOrder() {
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
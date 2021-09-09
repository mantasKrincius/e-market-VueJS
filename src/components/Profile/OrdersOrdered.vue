<template>
  <div>
    <div class="main-div">
      <div v-for="(item, index) in getUserOrder" :key="index" class="ordered-orders">
        <h4>Ordered date: {{ item.createdAt }}</h4>
        <h3>Total Paid: £ {{ item.totalPrice }}</h3>
        <div v-for="(product,index) in item.products" :key="index" class="ordered-orders-info">
          <h5>{{ product.data.name }}</h5>
          <h5>Quantity: {{ product.data.quantity }}</h5>
          <h4>Price: {{ product.data.price }}</h4>
         <h5>Seller Name: {{ product.data.userName }}</h5>
        </div>
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

.ordered-orders-info {
  border: 1px solid rgba(0,0,0,0.1);
}

.ordered-orders {
  padding: 20px;
  background-image: url("../../assets/notePaper.png");
  background-size: cover;
  background-position: center;
  max-width:400px;
  margin: 10px;
  color: blue;
}

.main-div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>
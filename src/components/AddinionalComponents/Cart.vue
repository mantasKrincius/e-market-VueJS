<template>
  <div>
    <div v-for="(item, index) in userCart" :key="index">
      <h3>Name: {{ item.data.name }}</h3>
      <div>
        <button @click="add(item)">+</button>
        <button @click="minus(item)">-</button>
        <div>Quantity: {{ item.quantity }}</div>
        <button @click="remove(item)">Delete</button>
      </div>
    </div>
    <h2>{{ $store.state.message }}</h2>
    <h3>Total Price: {{ $store.state.totalPrice }}</h3>
    <button @click="buy">Buy</button>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      amount: 0,
      totalPay: 0
    }
  },
  methods: {
    buy() {
      for (let i = 0; i in this.userCart; i++) {
        this.items = this.userCart[i]
        this.$store.dispatch('changeQuantity', this.items)
      }
      this.$store.dispatch("buy")
      console.log(this.items)
    },
    remove(item) {
      //find by index and delete that index
      const itemRemove = this.userCart.findIndex(i => i.data._id === item.data._id)
      this.userCart.splice(itemRemove, 1)
    },
    add(item) {
      //increase quantity and send it to store
      item.quantity++
      this.$store.dispatch('add', item)
    },
    minus(item) {
      //decrease quantity and send it to store
      item.quantity--
      this.$store.dispatch('minus', item)
    }
  },
  computed: {
    totalPrice() {

    },
    //targeting userCart for v-for
    userCart() {
      return this.$store.state.userCart
    },
  }
}
</script>

<style scoped>

</style>
<template>
  <div>
    <div v-for="(item, index) in userCart" :key="index">
      <h3>Name: {{ item.data.name }}</h3>
      <div>
        <button @click="add(item)">+</button>
        <button @click="minus(item)">-</button>
        {{ items = item }}
        <div>Quantity: {{ item.quantity }}</div>
      </div>
    </div>
    <button @click="buy">Buy</button>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      amount: 0,
      items: []
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
    add(item) {
      item.quantity++
      this.$store.dispatch('add', item.quantity)

    },
    minus(item) {
      item.quantity--
      this.$store.dispatch('add', item.quantity)
    }
  },
  computed: {
    userCart() {
      return this.$store.state.userCart
    },
    mounted() {

    }
  }
}
</script>

<style scoped>

</style>
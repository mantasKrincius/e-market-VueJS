<template>
  <div>
    <div v-for="(item, index) in userCart" :key="index">
      <h3>Name: {{ item.data.name }}</h3>
      <div>
        <button @click="add(item)">+</button>
        <button @click="minus(item)">Minus</button>
        <div>Quantity: {{ item.quantity }}</div>
      </div>
    </div>
    <button @click="buy(item)">Buy</button>
  </div>
</template>

<script>
export default {
  name: "Cart",
  methods: {
    buy() {
      this.$store.dispatch("buy")
      console.log(this.userCart)
    },
    add(item){
      this.$store.dispatch('add', item)
    },
    minus(item){
      this.$store.dispatch('minus', item)
    }
  },
  computed: {
    userCart() {
      return this.$store.state.userCart
    }
  }
}
</script>

<style scoped>

</style>
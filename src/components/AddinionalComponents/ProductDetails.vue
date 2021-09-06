<template>
  <div>
    <div v-for="item in singlePost">
      {{ item }}
      <button @click="toCart(item)">Add to cart</button>
      <input v-model="quantity"/>
    </div>
    <h3>{{ $store.state.message }}</h3>
  </div>
</template>

<script>

export default {
  name: "ProductDetails",
  components: {},
  data() {
    return {
      quantity: 0,
    }
  },
  methods: {
    toCart(item) {
      this.$store.commit('quantity', this.quantity)
      this.$store.dispatch('addToCart', {data: item, quantity: this.quantity})
    }
  },
  computed: {
    singlePost() {
      return this.$store.state.singlePost
    },
  },
}
</script>

<style scoped>

</style>
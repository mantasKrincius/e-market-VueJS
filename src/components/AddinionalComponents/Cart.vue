<template class="d-flex">
  <div class="cart">
    <div v-if="userCart.length === 0" class="message">
      <h2>Your cart is empty</h2>
    </div>
    <div v-else>
      <h2>{{ $store.state.message }}</h2>
      <div class="cart-options" v-for="(item, index) in userCart" :key="index" :item="item">
        <div class="cart-title">
          <h3>{{ item.data.name }}</h3>
          <h5>Price: {{ item.data.price }}</h5>
        </div>
        <div class="cart-img">
          <img :src="item.data.productImage"/>
        </div>
        <div class="cart-selectors">
          <button @click="add(item)">+</button>
          <h5>Quantity: {{ item.quantity }}</h5>
          <button @click="minus(item)">-</button>
          <button @click="remove(item)">Delete</button>
        </div>
      </div>
      <div>
        <h3>Total Price: {{$store.state.totalPrice}}</h3>
        <button @click="buy">Buy</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
    }
  },
  methods: {
    buy() {
      for (let i = 0; i in this.userCart; i++) {
        this.items = this.userCart[i]
        this.$store.dispatch('changeQuantity', this.items)
      }
      this.$store.dispatch("buy")
    },
    remove(item) {
      const itemRemove = this.userCart.findIndex(i => i.data._id === item.data._id)
      this.userCart.splice(itemRemove, 1)
    },
    add(item) {
      item.quantity++
      this.$store.dispatch('add', item)
    },
    minus(item) {
      item.quantity--
      this.$store.dispatch('minus', item)
    }
  },
  computed: {
    userCart() {
      return this.$store.state.userCart
    },
    maxPay(){
      let sum = 0
      for(let i = 0; i < this.userCart.length; i++){
        sum += this.userCart[i].data.price * this.userCart[i].quantity
      }
      return sum
    },
  },
}
</script>

<style scoped>
.cart {
  margin: 5px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  max-width: 1300px;
}

.cart-title {
  margin: 0 40px;
}

.cart-selectors {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
}

button {
  margin: 0 10px;
  padding: 2px 15px;
}

.cart-options {
  margin: 10px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}

.cart-img {
  display: flex;
  align-items: center;
  width: 100px;
  height: 100px;
}

.cart-img img {
  width: 100px;
  height: 100px;
}

.message {
  padding: 10px;
}
</style>
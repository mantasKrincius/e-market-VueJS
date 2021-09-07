<template>
  <div class="product-detail">
    <div v-for="item in singlePost" class="product-detail">
      <div class="product-detail-img">
        <img :src="item.productImage"/>
      </div>
      <div>
        <h2>{{ item.name }}</h2>
        <h6>Add by: {{ item.userName }}</h6>
        <h6>Created: {{ item.createdAt }}</h6>
        <div class="product-detail-description">
          <p>Description: {{ item.description }} </p>
        </div>
        <h4>Quantity: {{ item.quantity }}</h4>
        <div class="product-detail-controllers">
          <button @click="toCart(item)">Add to cart</button>
          <input type="number" v-model="quantity"/>
        </div>
      </div>

    </div>
    <div class="message">
      <h3>{{ message }}</h3>
    </div>

  </div>
</template>

<script>

export default {
  name: "ProductDetails",
  components: {},
  data() {
    return {
      quantity: 1,
      message: ""
    }
  },
  methods: {
    toCart(item) {
      if (this.quantity > item.quantity) {
        this.message = "No more"
      } else {
        let maxToPay = item.price * this.quantity
        this.$store.commit('quantity', this.quantity)
        this.$store.dispatch('addToCart', {data: item, quantity: this.quantity})
        this.$store.commit('addByTotalPrice', maxToPay)
        console.log(maxToPay)
      }

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
.product-detail {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: #fae596;
  padding: 10px;
}

.product-detail-description {
  max-width: 300px;
  padding: 30px;
}

.product-detail-description p {
  display: flex;
}

.product-detail-controllers {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
}

.product-detail-img img {
  max-width: 100%;
  max-height: 700px;
}
</style>
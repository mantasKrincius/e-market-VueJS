<template>
  <div>
    <div v-for="item in singlePost" class="product-detail">

      <div>
        <div class="product-detail-top">
          <h2>{{ item.name }}</h2>
          <h2> Price: {{ item.price }}</h2>
        </div>
        <div>
          <CarouselComponent :item="item"/>
          <p>Description: {{ item.description }} </p>
          <h6>AD ID: {{ item._id }}</h6>
        </div>
      </div>

      <div>
        <div class="product-detail-user-bar">
          <div class="product-detail-user-bar-name">
            <h6>Add by: {{ item.userName }}</h6>
          </div>
          <div>
            <h6>Created: {{ item.createdAt }}</h6>
            <hr/>
          </div>
          <div>
            <h4>Quantity: {{ item.quantity }}</h4>
          </div>
          <div class="product-detail-controllers">
            <div>
              <button @click="toCart(item)">Add to cart</button>
              <button>Add favourite</button>
            </div>
            <input type="number" v-model="quantity"/>
          </div>
        </div>

      </div>

    </div>
    <div class="message">
      <h3>{{ message }}</h3>
    </div>

  </div>
</template>

<script>

import CarouselComponent from "../Gallery/CarouselComponent";

export default {
  name: "ProductDetails",
  components: {CarouselComponent},
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

.product-detail-user-bar-name {
  background-color: #3c3241;
  color: #fff;
}

.product-detail {
  display: flex;
  justify-content: space-evenly;
}

.product-detail-user-bar {
  margin: 0 10px;
  width: 400px;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
}

.product-detail-top {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
}
</style>
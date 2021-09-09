<template>
  <div>
    <div v-for="item in singlePost" class="product-detail">

      <div>
        <div class="product-detail-top">
          <h2>{{ item.name }}</h2>
          <h2 :style="{color:'#52a744'}">£ {{ item.price }}</h2>
        </div>
        <div>
          <CarouselComponent :item="item"/>
          <h3>Description:</h3>
          <p> {{ item.description }} </p>
          <h6>AD ID: {{ item._id }}</h6>
        </div>
      </div>
      <span class="stop" v-if="!isLoggin">
      <img id="pop-up" :src="require('../../assets/policeLine.png')"/>
       <h2>Please Login</h2>
      </span>
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
              <button @click="toFavourites(item)">Add favourite</button>
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
      message: "",
      favourites: 0,
    }
  },
  methods: {
    toCart(item) {
      if (item.userName === this.$store.state.user.userName) {
        this.message = "This is your own item"
      } else if (this.quantity > item.quantity && this.quantity < 0) {
        this.message = "No more"
      } else {
        let maxToPay = item.price * this.quantity
        this.$store.commit('quantity', this.quantity)
        this.$store.dispatch('addToCart', {data: item, quantity: this.quantity})
        this.$store.commit('addByTotalPrice', maxToPay)
        console.log(maxToPay)
      }
    },
    toFavourites(item) {
      console.log(this.$store.state.favourites)
    }
  },
  computed: {
    singlePost() {
      return this.$store.state.singlePost
    },
    isLoggin() {
      return this.$store.state.user.userStatus
    }
  },
}
</script>

<style scoped>
#pop-up {
  top: -350px;
  animation: drop 1s ease forwards;
}

@keyframes drop {
  0% {
    opacity: 0
  }
  70% {
    transform: translateY(700px)
  }
  100% {
    transform: translateY(650px);
    opacity: 1;
  }
}

button {
  background-color: #cc4e5c;
  padding: 10px;
  margin: 10px;
}

.stop img {
  position: absolute;
  width: 100%;
  top: 350px;
  bottom: 0;
  left: 0;
  right: 0;
}

.stop h2 {
  position: absolute;
  top: 400px;
  left: 0;
  right: 0;

}


.product-detail-controllers {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.product-detail-user-bar-name {
  background-color: #3c3241;
  color: #fff;
}

.product-detail {
  display: flex;
  justify-content: space-evenly;
}

.product-detail-user-bar {
  margin: 10px 10px;
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
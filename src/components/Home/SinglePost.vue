<template>
  <div class="main-div">
    <div class="component">
      <h2>{{ item.name }}</h2>
      <h6>{{item.userName}}</h6>
      <div>
        <img @click="moreInfo" :src="item.productImage">
      </div>
      <h5>Price: {{ item.price }}</h5>
      <h5>Quantity: {{ item.quantity }}</h5>
      <h6>{{item.createdAt}}</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "SinglePost",
  props: ['item'],
  methods: {
    moreInfo() {
      this.$router.push(`/products/${this.item._id}`)
      this.$store.dispatch('moreInfo', this.item)
    },
  }
  // mounted() {
  //   console.log(this.item)
  // }
}
</script>

<style scoped>
.main-div {
  max-width: 1300px;
  display: flex;
}

.component {

}

img {
  width: 200px;
}
</style>
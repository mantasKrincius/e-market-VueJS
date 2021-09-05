<template>
  <div>
    <form>
      <label>Product name</label>
      <input v-model="product.name">
      <label>Product price</label>
      <input v-model="product.price">
      <label>Product description</label>
      <input v-model="product.description">
      <label>Product quantity</label>
      <input v-model="product.quantity">
      <label>Upload Picture</label>
      <input type="file" @change="processValue">

      <button @click.prevent="addPost">Post</button>
    </form>
    {{$store.state.message}}
  </div>
</template>

<script>
export default {
  name: "CreatePost",
  data() {
    return {
      product: {
        name: "",
        price: 0,
        description: "",
        quantity: 0,
        productImage: ""
      }
    }
  },
  methods: {
    addPost() {
      this.$store.dispatch('addPost', this.product)
      console.log(this.product.productImage)
    },
    processValue(event){
      this.product.productImage = event.target.files[0]
    }
  }
}
</script>

<style scoped>

</style>
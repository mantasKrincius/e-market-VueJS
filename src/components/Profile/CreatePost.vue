<template>
  <div class="d-flex">
    <form>
      <label>Product</label>
      <input v-model="product.name">
      <label>Price</label>
      <input v-model="product.price">
      <label>Description</label>
      <textarea v-model="product.description"/>
      <label>Quantity</label>
      <input v-model="product.quantity">
      <label>Upload Picture</label>
      <input type="file" @change="processValue">
      <div>
        <button @click.prevent="addPost">Post</button>
      </div>
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
        productImage: "",
      }
    }
  },
  methods: {
    addPost() {
      this.$store.dispatch('addPost', this.product)
      console.log(this.product.productImage)
      console.log(this.product.productImage2)
    },
    processValue(event){
      this.product.productImage = event.target.files[0]
    },
  }
}
</script>

<style scoped>
.d-flex {
  display: flex;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #173e43;
  color: white;
  padding: 50px;
}

form input, textarea {
  text-align: center;
  padding: 10px 10px;
  margin: 5px 0;
  width: 300px;
}
</style>
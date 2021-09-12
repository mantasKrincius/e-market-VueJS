<template>
  <div class="d-flex">
    {{ message }}
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

  </div>
</template>

<script>
export default {
  name: "CreatePost",
  data() {
    return {
      message: "",
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
      if (this.product.name.length >= 10 && this.product.name.length <= 100 && this.product.description.length >= 30 && this.product.description.length <= 100) {
        this.$store.dispatch('addPost', this.product)
        this.message = "Thank you, post uploaded"
        setTimeout(() => this.message = "", 1000)
      } else {
        this.message = "Title must be: min 10/max 100 characters, description min 30/max 100 characters"
        setTimeout(() => this.message = "", 1000)
      }

      console.log(this.product.productImage)
      console.log(this.product.productImage2)
    },
    processValue(event) {
      this.product.productImage = event.target.files[0]
    },
  }
}
</script>

<style scoped>
.d-flex {
  display: flex;
  margin: 30px;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #3c3241;
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
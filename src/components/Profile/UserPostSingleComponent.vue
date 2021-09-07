<template>
  <div class="user-post">
    EDIT PRODUCT: {{ item.name }}
    <button @click="deletePost">Delete</button>
    <button @click="edit(item)">Edit</button>
    <div v-if="show" class="user-post-edit">
      <input placeholder="NAME" v-model="itemEdit.name">
      <input placeholder="PRICE" v-model="itemEdit.price">
      <input placeholder="QUANTITY" v-model="itemEdit.quantity">
      <input placeholder="DESCRIPTION" v-model="itemEdit.description">
      <button @click="editBE(item)">Change Item</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserPostSingleComponent",
  props: ['item'],
  data() {
    return {
      show: false,
      itemEdit: {
        _id: this.item._id,
        name: this.item.name,
        price: this.item.price,
        description: this.item.description,
        quantity: this.item.quantity
      }
    }
  },
  methods: {
    deletePost() {
      this.$store.dispatch('deletePost', this.item._id)
    },
    edit() {
      this.show = !this.show
      console.log(this.itemEdit.name)
    },
    editBE() {
      console.log(this.itemEdit)
      this.$store.dispatch('editBE', this.itemEdit)
    }
  }
}
</script>

<style scoped>
.user-post {
  background-color: red ;
  margin: 30px;
}

.user-post-edit {
  margin: 30px;
}
</style>
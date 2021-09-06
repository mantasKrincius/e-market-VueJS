<template>
  <div>
    {{ item.name }}
    <button @click="deletePost">Delete</button>
    <button @click="edit(item)">Edit</button>
    <div v-if="show">
      <input :placeholder="item.name" v-model="itemEdit.name">
      <input :placeholder="item.price" v-model="itemEdit.price">
      <input :placeholder="item.quantity" v-model="itemEdit.quantity">
      <input :placeholder="item.description" v-model="itemEdit.description">
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

</style>
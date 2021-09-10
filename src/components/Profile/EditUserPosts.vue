<template>
  <div class="user-post">

    <div class="user-post-wrapper">
      <div class="user-post-title">
        <img :src="item.productImage"/>
        <div class="user-post-info">
          <h5> {{ item.name }}</h5>
          <h5> Quantity: {{ item.quantity }}</h5>
          <h5> Price: {{ item.price }}</h5>
        </div>
      </div>

      <div class="user-post-controllers">
        <button @click="deletePost">Delete</button>
        <button @click="edit(item)">Edit</button>
      </div>

      <div v-if="show" class="user-post-edit">
        <div class="user-post-edit-controllers">
          <input placeholder="NAME" v-model="itemEdit.name">
          <input placeholder="PRICE" v-model="itemEdit.price">
          <input placeholder="QUANTITY" v-model="itemEdit.quantity">
          <textarea placeholder="DESCRIPTION" v-model="itemEdit.description"> </textarea>
          <button @click="editBE(item)">Change Item</button>
        </div>

      </div>
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
    },
    editBE() {
      this.$store.dispatch('editBE', this.itemEdit)
    }
  }
}
</script>

<style scoped>

.user-post-edit-controllers {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.user-post-edit {
  width: 500px;
  margin: 5px 0;
}

input {
  width: 300px;
  margin: 5px 0;
}

textarea {
  width: 300px;
  margin: 5px 0;
}

.user-post-controllers {
  padding: 10px;
}

.user-post-title {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.user-post-title img {
  width: 100px;
  height: 100px;
  margin: 5px;
}

.user-post {
  margin: 5px;
  border: 1px solid black;
  padding: 10px;
}

.user-post-wrapper {

}
</style>
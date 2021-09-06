<template>
<div>
{{item.name}}
  <button @click="deletePost">Delete</button>
  <button @click="edit(item)">Edit</button>
</div>
</template>

<script>
export default {
  name: "UserPostSingleComponent",
  props: ['item'],
  methods: {
    deletePost(){
      this.$store.dispatch('deletePost', this.item._id)
    },
    edit(item){
      console.log(item)
    }
  }
}
</script>

<style scoped>

</style>
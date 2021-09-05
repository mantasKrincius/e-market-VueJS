<template>
<div>
{{item}}
  <button @click="deletePost">Delete</button>
  <button>Edit</button>
</div>
</template>

<script>
export default {
  name: "UserPostSingleComponent",
  props: ['item'],
  methods: {
    deletePost(){
      this.$store.dispatch('deletePost', this.item._id)
    }
  }
}
</script>

<style scoped>

</style>
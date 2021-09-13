<template>
  <div class="d-flex">
    <div v-for="(item, index) in userFavourites" :key="index">
      <SinglePost :item="item"/>
    </div>
  </div>
</template>

<script>
import SinglePost from "../Home/SinglePost";
export default {
  name: "Favourites",
  components: {SinglePost},
  computed: {
    userFavourites(){
      return this.$store.state.favorites
    }
  }
}
</script>

<style scoped>

</style>
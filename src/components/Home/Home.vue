<template>
  <div class="main-div">
    <div v-for="(item, index) in allPosts" :key="index">
      <SinglePost :item="item"/>
    </div>
  </div>
</template>

<script>
import SinglePost from "./SinglePost";
export default {
  name: "Home",
  components: {SinglePost},
  data() {
    return {}
  },
  computed: {
    allPosts(){
      return this.$store.state.allPosts
    }
  },
}
</script>

<style scoped>
.main-div {
  display: flex;
  flex-wrap: wrap;
  margin: 30px;
}
</style>
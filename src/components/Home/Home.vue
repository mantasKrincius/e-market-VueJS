<template class="bg">
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
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background:#f1f1f1')
  },
  beforeDestroy () {
    document.querySelector('body').setAttribute('style', 'background:#fff')
  }
}
</script>

<style scoped>

.main-div {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
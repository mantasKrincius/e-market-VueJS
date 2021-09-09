<template>
  <div>
    <div v-for="(item, index) in userPosts" :key="index">
    <UserPostSingleComponent :item="item"/>
    </div>
  </div>
</template>

<script>

import UserPostSingleComponent from "./EditUserPosts";
export default {
  name: "UserPosts",
  components: {UserPostSingleComponent},
  computed: {
    userPosts(){
      return this.$store.state.userPosts
    }
  }
}
</script>

<style scoped>

</style>
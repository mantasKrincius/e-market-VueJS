<template>
  <div>
    <CreatePost/>
    <UserPosts/>
  </div>
</template>

<script>
import CreatePost from "./CreatePost";
import UserPosts from "./UserPosts";

export default {
  name: "Profile",
  components: {UserPosts, CreatePost}
}
</script>

<style scoped>

</style>
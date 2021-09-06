<template>
  <div>
    <CreatePost/>
    <UserPosts/>
    <OrdersOrdered/>
  </div>
</template>

<script>
import CreatePost from "./CreatePost";
import UserPosts from "./UserPosts";
import OrdersOrdered from "./OrdersOrdered";

export default {
  name: "Profile",
  components: {OrdersOrdered, UserPosts, CreatePost}
}
</script>

<style scoped>

</style>
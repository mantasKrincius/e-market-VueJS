<template>
  <div>
    <div>
      <div v-if="userPosts.length <= 0 ">
        <h3>You havnt posted any post yet</h3>
      </div>
      <div v-else>
        <h2>Edit your items</h2>
        <UserPosts/>
      </div>
    </div>

    <div>
      <div>
        <div v-if="userOrders.length <= 0">
          <h3>There is no your orders. Go and buy something</h3>
        </div>

        <div v-else>
          <h3>My Orders: </h3>
          <OrdersOrdered/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserPosts from "./UserPosts";
import OrdersOrdered from "./OrdersOrdered";

export default {
  name: "Profile",
  components: {OrdersOrdered, UserPosts},
  computed: {
    userPosts() {
      return this.$store.state.userPosts
    },
    userOrders() {
      return this.$store.state.userOrders
    }
  }
}
</script>

<style scoped>

</style>
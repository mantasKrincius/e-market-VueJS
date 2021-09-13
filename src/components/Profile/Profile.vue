<template>
  <div>
    <h2>{{$store.state.message}}</h2>
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

      <div>
        <div v-if="userFavourites.length <= 0 ">
          <h3>You dont have any favourite post</h3>
        </div>
        <div v-else>
          <h3>User Favourites</h3>
          <div class="d-flex">
            <Favourites/>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import UserPosts from "./UserPosts";
import OrdersOrdered from "./OrdersOrdered";
import Favourites from "../Favourites/Favourites";

export default {
  name: "Profile",
  components: {Favourites, OrdersOrdered, UserPosts},
  computed: {
    userPosts() {
      return this.$store.state.userPosts
    },
    userOrders() {
      return this.$store.state.userOrders
    },
    userFavourites() {
       return this.$store.state.favorites
    }
  }
}
</script>

<style scoped>

</style>
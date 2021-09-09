<template>
  <div class="main-div">
    <div class="component" @click="moreInfo">
      <div class="home-img">
        <img  :src="item.productImage">
      </div>
      <div class="component-info">
        <h5>{{item.name}}</h5>
        <h5 :style="{color:'#52a744'}">£ {{ item.price }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SinglePost",
  props: ['item'],
  methods: {
    moreInfo() {
      this.$router.push(`/products/${this.item._id}`)
      this.$store.dispatch('moreInfo', this.item)
    },
  }
}
</script>

<style scoped>

.component-info {
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 1.4rem;
  padding: 4px;
}

h5 {
  font-weight: 400;
  padding: 0;
  margin: 0;
}

.main-div {
  /*max-width: 1300px;*/
  display: flex;

  color: black;
}

.component {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  margin: 10px;
  background-color: #fff;
  width: 100%;
  cursor: pointer;
  box-shadow: 1px 1px 1px grey;
}

.home-img img {
  width: 250px;
  height: 200px;

}

</style>
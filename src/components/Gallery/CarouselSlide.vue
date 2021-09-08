<template>
  <transition>
    <div v-show="visibleSlide === index" class="carousel-slide">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "CarouselSlide",
  props: ["visibleSlide", "index"],
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
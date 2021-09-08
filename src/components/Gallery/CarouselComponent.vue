<template>
  <div>
    <carousel
        @next="next"
        @prev="prev">
      <carousel-slide v-for="(slide, index) in slides" :key="index" :index="index" :visibleSlide="visibleSlide">
        <div class="images">
          <img :src="slide">
        </div>

      </carousel-slide>
    </carousel>
  </div>
</template>

<script>
import Carousel from "./Carousel";
import CarouselSlide from "./CarouselSlide";

export default {
  name: "CarouselComponent",
  components: {CarouselSlide, Carousel},
  props: ['item'],
  data() {
    return {
      slides: [this.item.productImage],
      visibleSlide: 0
    }
  },
  methods: {
    next() {
      if (this.visibleSlide >= this.slidesLen - 1) {
        this.visibleSlide = 0
      } else {
        this.visibleSlide++
      }
    },
    prev() {
      if (this.visibleSlide <= 0) {
        this.visibleSlide = this.slidesLen - 1
      } else {
        this.visibleSlide--
      }
    }
  },
  computed: {
    slidesLen() {
      return this.slides.length
    }
  }
}
</script>

<style scoped>
.images img {
  width: 600px;
  height: 350px;
}
</style>
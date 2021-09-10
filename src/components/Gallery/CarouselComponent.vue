<template>
  <div>
    <carousel
        @next="next"
        @prev="prev">
      <carousel-slide v-for="(slide, index) in slides" :index="index" :visibleSlide="visibleSlide" :key="index">
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
      slides: [this.item.productImage, "https://i.ebayimg.com/00/s/ODAwWDYwMA==/z/H1MAAOSwgjVgMVrd/$_86.PNG"],
      visibleSlide: 0,
      pic: ""
    }
  },
  methods: {
    next() {
      if (this.visibleSlide >= this.slides.length - 1) {
        this.visibleSlide = 0
      } else {
        this.visibleSlide++
      }
    },
    prev() {
      if (this.visibleSlide <= 0) {
        this.visibleSlide = this.slides.length - 1
      } else {
        this.visibleSlide--
      }
    },
  },
  beforeUpdate() {

  }
}
</script>

<style scoped>
.images img {
  width: 600px;
  height: 450px;
}
</style>
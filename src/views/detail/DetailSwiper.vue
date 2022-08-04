<template>
    <div class="swiper-container" :class="swiperclass">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <div class="swiper-pagination">
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.min.css' // 也可以引入swiper.css

export default {
  data () {
    return {
    }
  },
  props: {
    perslide: {
      default: 1,
      type: Number
    },
    swiperclass: {
      type: String,
      default: 'swiper-container'
    }
  },
  mounted () {
    // 同一个页面有两个swiper会有问题。需要绑定不同的class
    new Swiper('.' + this.swiperclass, {
      slidesPerView: this.perslide,
      spaceBetween: 20,
      freeMode: true
    })
  }
}
</script>

<style lang="scss" scoped>
img{
    width: 100%;
    margin-top: 4px;
}
</style>

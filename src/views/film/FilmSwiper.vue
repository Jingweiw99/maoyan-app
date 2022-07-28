<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <div class="swiper-pagination"></div>

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
  mounted () {
    new Swiper('.swiper-container', {
      // 分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>

<style lang="scss" scoped>
// .swiper-wrapper {
//     img {
//         width: 100%;
//         height: 200px;
//     }
// }
</style>

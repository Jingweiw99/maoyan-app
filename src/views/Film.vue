<template>
    <div>
        <film-swiper>
            <div class="swiper-slide" v-for="(img, index) in imglist" :key="index">
                <div :style="{backgroundImage:'url('+img+')'}"
                    style="height:200px;background-size:cover;
                    background-position:center;"
                ></div>
            </div>
        </film-swiper>
        <film-header class="sticky"></film-header>

        <!-- /film/nowplaying Nowplaying
        /film/comingsoon Comingsoon -->
        <router-view></router-view>
    </div>
</template>

<script>
import filmHeader from './film/FilmHeader.vue'
import filmSwiper from './film/FilmSwiper.vue'
export default {
  name: 'Film',
  data () {
    return {
      imglist: ['https://pic.maizuo.com/usr/movie/016d10c955c970b8b609312143bf4a76.jpg?x-oss-process=image/quality,Q_70', 'https://pic.maizuo.com/usr/movie/090313ca5d645b96f527b05ae5fb8022.jpg?x-oss-process=image/quality,Q_70']
    }
  },
  methods: {

  },
  components: {
    filmHeader,
    filmSwiper
  }
}
</script>

<style lang="scss" scoped>
.sticky{
  position:sticky;
  top:0;
  background: white;
  z-index:9999;
}
</style>

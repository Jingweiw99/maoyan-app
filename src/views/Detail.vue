<template>
  <div v-if="filmList">
    <detail-header v-scroll="30">
      <h3>{{ filmList.name }}</h3>
    </detail-header>
    <div :style="{ backgroundImage: 'url(' + filmList.poster + ')' }"
      style="height:200px; background-size:cover;  background-position:center;">
    </div>
    <div class="filmListContent">
      <h3>{{ filmList.name }}-{{ filmList.filmType.name }}</h3>
      <p>{{ filmList.category }}</p>
      <p>{{ filmList.premiereAt | dateFilter }}</p>
      <p>{{ filmList.nation }}|{{ filmList.runtime }}分钟</p>
      <p :class="isShow ? '' : 'synopsis'">{{ filmList.synopsis }}</p>
      <p style="text-align:center;"><i class="iconfont" :class="isShow ? 'icon-less' : 'icon-moreunfold'"
          @click="isShow = !isShow"></i></p>
    </div>
    <div class="filmListContent">
      <h3>演职人员</h3>
      <!-- 如果一个页面中有多个轮播图，就会有先后出来问题，那个先出来就是perslide
      可以设置不同的名字。
      传自定义属性
      -->
      <detail-swiper :perslide="4" swiperclass="swiper-actors">
        <div class="swiper-slide" v-for="(data, index) in filmList.actors" :key="index">
          <img :src="data.avatarAddress" />
          <div style="text-align:center">
            <div>{{ data.name }}</div>
            <div>{{ data.role }}</div>
          </div>
        </div>
      </detail-swiper>
    </div>
    <div class="filmListContent">
      <h3>剧照</h3>
      <detail-swiper :perslide="3.5" swiperclass="swiper-photos">
        <div class="swiper-slide" v-for="(data, index) in filmList.photos" :key="index">
          <div :style="{ backgroundImage: 'url(' + data + ')' }"
            style="height:100px;background-size:cover;background-position:center;" @click="handlePreview(index)">
          </div>
        </div>
      </detail-swiper>
    </div>
  </div>
</template>

<script>
import http from '@/util/http'
import Vue from 'vue'
import moment from 'moment'
import detailSwiper from './detail/DetailSwiper.vue'
import detailHeader from './detail/DetailHeader.vue'
import { ImagePreview } from 'vant'
import mixinTabbar from '@/util/mixinTabbar'

Vue.filter('dateFilter', (date) => {
  // 日期处理函数
  return moment(date * 1000).format('YYYY-MM-DD h:mm:ss a')
})

Vue.directive('scroll', {
  inserted (el, binding) {
    // console.log(el)  但是监听好了之后会一直存在，所以需要销毁。
    // console.log(binding.value)
    el.style.display = 'none'
    window.onscroll = () => {
      if (document.documentElement.scrollTop || document.body.scrollTop > binding.value) {
        el.style.display = ' block'
      } else {
        el.style.display = 'none'
      }
    }
  },
  // 指令的生命周期unbind（销毁执行）
  unbind () {
    window.onscroll = null
  }

})
export default {
  name: 'Detail',
  data () {
    return {
      filmList: null,
      isShow: false
    }
  },
  mixins: [mixinTabbar],
  components: {
    detailSwiper,
    detailHeader
  },
  methods: {
    handlePreview (index) {
      ImagePreview({
        images: this.filmList.photos,
        startPosition: index
      })
    }
  },

  mounted () {
    // console.log(this.$route)

    http({
      url: `/gateway?filmId=${this.$route.params.myid}&k=4157706`,
      headers: {
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then((res) => {
      this.filmList = res.data.data.film
      // console.log(this.filmList)
    })
  }
}
</script>

<style lang="scss" scoped>
.filmListContent {
  padding: 12px 15px 15px;

  p {
    margin-top: 4px;
  }
}

.synopsis {
  height: 40px;
  overflow: hidden;
}
</style>

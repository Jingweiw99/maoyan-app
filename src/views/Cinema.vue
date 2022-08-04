<template>
  <div>
    <van-nav-bar title="影院" @click-left="clickLeft()" @click-right="clickRight()">
      <template #left>
        {{ cityName }}
        <van-icon name="arrow-down" color="black" />
      </template>
      <template #right>
        <van-icon name="search" size="23" color="black" />
      </template>
    </van-nav-bar>

    <div class="box" :style="{
      height: height
    }">
      <ul>
        <li v-for="data in cinemaList" :key="data.cinemaId">
          <div class="left">
            <div class="cinema-name">{{ data.name }}</div>
            <div class="cinema-address">{{ data.address }}</div>
          </div>
          <div class="right cinema-name">
            <div style="color:red">￥{{ data.lowPrice / 100 }}起</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Cinema',
  components: {
  },
  data () {
    return {
      height: '0px'
    }
  },
  computed: {
    ...mapState(['cinemaList', 'cityId', 'cityName'])

  },
  mounted () {
    this.height = document.documentElement.clientHeight - 100 + 'px'
    // 不重复请求，离开页面在回来不请求，提升用户体验。vuex提供了快照。
    if (this.cinemaList.length === 0) {
      this.getCinemaList(this.cityId).then(() => {
        this.$nextTick(() => {
          new BetterScroll('.box', {
            scrollbar: {
              fade: true
            }
          })
        })
      })
    } else {
      // console.log("缓存")
      this.$nextTick(() => {
        new BetterScroll('.box', {
          scrollbar: {
            fade: true
          }
        })
      })
    }

    // http({
    //   url: `/gateway?cityId=${this.$store.state.cityId}&ticketFlag=1&k=3312386`,
    //   headers: {
    //     "X-Host": "mall.film-ticket.cinema.list"
    //   }
    // }).then(res => {

    //   this.cinemaList = res.data.data.cinemas
    //   // console.log(this.cinemaList)

    //  this.$nextTick(() => {
    //     // new BetterScroll('.box', {
    //       scrollbar: {
    //         fade: true
    //       }
    //     })
    //   })
    // })
  },
  methods: {
    ...mapActions(['getCinemaList']),
    ...mapMutations(['clearCinemaList']),
    clickLeft () {
      this.$router.push('/city')
      // 清空cinemaList,避免邏輯判斷沒反應。
      this.clearCinemaList()
    },
    clickRight () {
      this.$router.push('/cinema/search')
    }
  }

}
</script>

<style lang="scss" scoped>
li {
  padding: 15px;
  display: flex;
  justify-content: space-between;

  .left {
    width: 13.25rem;

    .cinema-name {
      font-size: 15px;
    }

    .cinema-address {
      font-size: 12px;
      margin-top: 5px;
      // 下面三行就是超出显示三个点。
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}

.box {
  overflow: hidden;
  height: 48.6875rem;
  position: relative;
}
</style>

<template>
  <div class="home">
    <ul>
      <li v-for="data in cinemaList" :key="data.cinemaId">
        <div class="left">
          <div class="cinema-name">{{ data.name }}</div>
          <div class="cinema-address">{{ data.address }}</div>
        </div>
        <div class="right cinema-name">
          <div style="color:red">￥{{data.lowPrice/100}}起</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import http from '@/util/http'

export default {
  name: 'Cinema',
  components: {
  },
  data() {
    return {
      cinemaList: []
    }
  },
  mounted() {
    http({
      url: "/gateway?cityId=110100&ticketFlag=1&k=3312386",
      headers: {
        "X-Host": "mall.film-ticket.cinema.list"
      }
    }).then(res => {

      this.cinemaList = res.data.data.cinemas
      console.log(this.cinemaList)
    })
  }

}
</script>

<style lang="scss" scoped>
li{
  padding:15px;
  display:flex;
  justify-content: space-between;
  .left{
    width: 13.25rem;
    
    .cinema-name{
      font-size: 15px;
    }
    .cinema-address{
      font-size: 12px;
      margin-top:5px;
      // 下面三行就是超出显示三个点。
      overflow:hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
  }
}

</style>
<template>
    <div>
        <ul>
            <li v-for="data in datalist" :key="data.filmId" @click="handleClick(data.filmId)">
                <img :src="data.poster" alt="">
                <h3>{{ data.name }}</h3>
                <p>主演：</p>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Nowplaying',
  data () {
    return {
      datalist: []
    }
  },
  methods: {
    handleClick (id) {
      this.$router.push(`/detail/${id}`)
      // 根据id去加载信息。利用id去获取数据然后来的到页面。
    }
  },
  mounted () {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=136082',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1596502176387264316178433","bc":"310100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data.data.films)
      this.datalist = res.data.data.films
    })
  }
}
</script>

<style lang="scss" scoped>
li {
    overflow: hidden;

    img {
        float: left;
        width: 100px;

    }
}
</style>

<template>
  <div id="app">
    <router-view></router-view>

    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from './components/Tabbar.vue'
import axios from 'axios'

export default {
  data () {
    return {
    }
  },
  components:{
    tabbar  
  },
  methods:{
   
  },
  mounted () {
    axios.get("/api/mmdb/movie/v3/list/hot.json?ct=%E4%B8%8A%E6%B5%B7&ci=10&channelId=4")
    .then((res) => {
      console.log(res)
    })
  }
}
</script>

<style lang="scss">
li{
  list-style: none;
}
*{
  margin:0;
  padding:0;
}
html body{
  height:100%;
}
</style>

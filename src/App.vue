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
  components: {
    tabbar
  },
  methods: {

  },
  mounted () {
    axios.get('/ajax/movieOnInfoList?token=&optimus_uuid=43388C403C4911EABDC9998C784A573A4F64A16AA5A34184BADE807E506D749E&optimus_risk_level=71&optimus_code=10').then(res => {
      // console.log(res.data)
    })
  }
}
</script>

<style lang="scss">
li {
  list-style: none;
}

* {
  margin: 0;
  padding: 0;
}

html body {
  height: 100%;
}

a {
    text-decoration: none;
    color: black;
}

.router-link-active {
    text-decoration: none;
    color: red;
}
</style>

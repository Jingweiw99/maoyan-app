<template>
  <div id="app">
    <section>
      <router-view></router-view>
    </section>
    
    <tabbar ref="mytabber" v-if="isTabbarShow"></tabbar>
  </div>
</template>

<script>
import Vue from 'vue'
import tabbar from './components/Tabbar.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import { mapState } from 'vuex'

Vue.use(Vant)
export default {
  data() {
    return {

    }
  },
  computed:{
    ...mapState(['isTabbarShow'])
  },
  components: {
    tabbar
  },
  mounted(){
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
section{
  margin-bottom: 50px;
}
</style>

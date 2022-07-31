<template>
  <div id="app">
    <section>
      <router-view></router-view>
    </section>

    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from './components/Tabbar.vue'
import axios from 'axios'

export default {
  data() {
    return {

    }
  },
  components: {
    tabbar
  },
  methods: {

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

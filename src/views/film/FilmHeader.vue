<template>
    <div>
        <ul>
            <li>
                <router-link to="/film/nowplaying">正在热映</router-link>
            </li>
            <li>
                <router-link to="/film/comingsoon">即将上映</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'FilmHeader',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
ul{
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
    li{
        flex: 1;
    }
}
li:active {
    border-bottom: 3px solid red
}
</style>

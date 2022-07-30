<template>
    <div>
        <ul>
            <li v-for="data in datalist" :key="data.filmId" @click="handleClick(data.filmId)">
                <img :src="data.poster" alt="">
                <div class="infoName">
                    <h3>{{ data.name }}</h3>
                    <p style="overflow: hidden;
                    text-overflow: ellipsis;
                     white-space: nowrap;">主演：{{ data.actors | actorFilter }}</p>
                    <p>{{ data.nation }} | {{ data.runtime }} 分钟</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import http from '@/util/http'
import Vue from 'vue'

Vue.filter('actorFilter', (actors) => {
    if (actors === undefined) return '暂无主演'
    return actors.map(item => item.name).join(' ')
})
export default {
    name: 'Nowplaying',
    data() {
        return {
            datalist: []
        }
    },
    methods: {
        handleClick(myid) {
            this.$router.push(`/detail/${myid}`)
            // 根据id去加载信息。利用id去获取数据然后来的到页面。
        }
    },
    mounted() {
        http({
            url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=136082',
            headers: {
                'X-Host': 'mall.film-ticket.film.list'
            }
            // method:"get"
        }).then(res => {
            console.log(res.data)
            this.datalist = res.data.data.films
        })
    }
}
</script>

<style lang="scss" scoped>
li {
    overflow: hidden;
    padding: 10px;

    img {
        float: left;
        width: 100px;

    }

    .infoName {
        overflow: hidden;
        padding: 0 10px;
    }
}
</style>

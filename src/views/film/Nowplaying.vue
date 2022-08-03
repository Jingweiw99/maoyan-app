<template>
    <div>
        <van-list v-model="loading" :finished="finished" finished-text="我是有底线的~" @load="onLoad" :immediate-check="false">
            <van-cell v-for="data in datalist" :key="data.filmId" @click="handleClick(data.filmId)">
                <img :src="data.poster" alt="">
                <div class="infoName">
                    <h3>{{ data.name }}</h3>
                    <p style="overflow: hidden;
                    text-overflow: ellipsis;
                     white-space: nowrap;">主演：{{ data.actors | actorFilter }}</p>
                    <p>{{ data.nation }} | {{ data.runtime }} 分钟</p>
                </div>
            </van-cell>
        </van-list>
    </div>
</template>

<script>
import http from '@/util/http'
import Vue from 'vue'
import { mapState } from 'vuex'



Vue.filter('actorFilter', (actors) => {
    if (actors === undefined) return '暂无主演'
    return actors.map(item => item.name).join(' ')
})
export default {
    name: 'Nowplaying',
    data() {
        return {
            datalist: [],
            loading: false, // 是否正在加载中,防止多次触发
            finished: false,
            currentPage: 1,
            total: 0
        }
    },
    computed:{
        ...mapState(['cityId'])
    },
    methods: {
        handleClick(myid) {
            this.$router.push(`/detail/${myid}`)
            // 根据id去加载信息。利用id去获取数据然后来的到页面。
        },
        onLoad() {
            //总长度匹配，禁用懒加载.必须后面为0，返回bug
            if(this.datalist.length === this.total && this.datalist.length !== 0){
                this.finished = true
                return
            }
            // console.log('到底了')
            this.currentPage++
            http({
                url: `/gateway?cityId=${this.cityId}&pageNum=${this.currentPage}&pageSize=10&type=1&k=136082`,
                headers: {
                    'X-Host': 'mall.film-ticket.film.list'
                }
                // method:"get"
            }).then(res => {
                // console.log(res.data)
                this.datalist = [...this.datalist,...res.data.data.films]
                this.loading = false
            })
        }
    },
    mounted() {
        http({
            url: `/gateway?cityId=${this.cityId}&pageNum=1&pageSize=10&type=1&k=136082`,
            headers: {
                'X-Host': 'mall.film-ticket.film.list'
            }
            // method:"get"
        }).then(res => {
            // console.log(res.data)
            this.datalist = res.data.data.films
            this.total = res.data.data.total
        })
    }
}
</script>

<style lang="scss" scoped>
.van-cell {
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

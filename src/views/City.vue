<template>
    <div>
        <van-index-bar :index-list="computedList" @change="handleChange">
            <div v-for="city in cityList" :key="city.type">
                <van-index-anchor :index="city.type" />
                <van-cell :title="item.name" v-for="item in city.list" :key="item.cityId" @click="handleClick(item)" />
            </div>
        </van-index-bar>
        <div>
            r
        </div>
    </div>
</template>

<script>
import http from '@/util/http';
import { Toast } from 'vant'

export default {
    name: 'City',
    data() {
        return {
            cityList: []
        };
    },
    computed: {
        computedList() {
            return this.cityList.map(item => item.type)
        }
    },
    mounted() {
        http({
            url: "/gateway?k=2554485",
            headers: {
                "X-Host": "mall.film-ticket.city.list"
            }
        }).then(res => {
            // console.log(res.data.data.cities)
            // 将数据进行分组，结合组件库渲染页面。
            this.cityList = this.renderCity(res.data.data.cities)
        })
    },
    methods: {
        renderCity(list) {
            // console.log(list)
            var cityList = []
            var letterArr = []
            for (var i = 65; i < 91; i++) {
                letterArr.push(String.fromCharCode(i))
            }
            letterArr.forEach((letter) => {
                var newList = list.filter(item =>
                    item.pinyin.substring(0, 1).toUpperCase() === letter)
                // console.log(newList)

                newList.length > 0 && cityList.push({
                    type: letter,
                    list: newList
                })

            })
            return cityList
        },
        handleChange(data) {
            Toast(data)
        },
        handleClick(item) {
            console.log(item.name, item.cityId)
            
        }

    }

};
</script>

<style lang="scss" scoped>
</style>
<style>
.van-toast--html,
.van-toast--text {
    min-width: 25px;
}
</style>

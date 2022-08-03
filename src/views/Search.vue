<template>
    <div>
        <form action="/">
            <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel" />
        </form>
        <ul v-if="value">
            <li v-for="data in computedList" :key="data.cinemaId">
                <div class="left">
                    <div class="cinema-name">{{ data.name }}</div>
                    <div class="cinema-address">{{ data.address }}</div>
                </div>
                <div class="right cinema-name">
                    <div style="color:red">￥{{ data.lowPrice / 100 }}起</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    name: 'Search',
    data() {
        return {
            value: ''
        };
    },
    
    methods: {
        onSearch(val) {

        },
        onCancel() {
            this.$router.back()
        },
        ...mapActions(['getCinemaList'])
    },
    mounted() {
        if (this.cinemaList.length === 0) {
            this.getCinemaList(this.cityId)
        } else {
            console.log("缓存")

        }
    },
    computed: {
        ...mapState(['cinemaList','cityId']),
        computedList() {
            return this.cinemaList.filter(item =>
                item.name.toUpperCase().includes(this.value.toUpperCase()) ||
                item.address.toUpperCase().includes(this.value.toUpperCase())
            )

        }
    }
};
</script>

<style lang="scss" scoped>
li {
    padding: 15px;
    display: flex;
    justify-content: space-between;

    .left {
        width: 13.25rem;

        .cinema-name {
            font-size: 15px;
        }

        .cinema-address {
            font-size: 12px;
            margin-top: 5px;
            // 下面三行就是超出显示三个点。
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
}

.box {
    overflow: hidden;
    height: 48.6875rem;
    position: relative;
}
</style>

<template>
    <div>
        <ul>
            <li v-for="data in datalist" :key="data.id" @click="handleClick(data.id)">
                {{ data.title }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Nowplaying',
    data() {
        return {
            datalist: [
                {
                    id: 1,
                    title: '夺冠'
                },
                {
                    id: 2,
                    title: '姜子牙'
                },
                {
                    id: 3,
                    title: '花木兰'
                }
            ]
        };
    },
    methods: {
        handleClick(id) {
            this.$router.push(`/detail/${id}`)
            //根据id去加载信息。利用id去获取数据然后来的到页面。

        }
    },
};
</script>

<style lang="css" scoped>
</style>

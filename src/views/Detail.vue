<template>
    <div>
        Detail
    </div>
</template>

<script>
export default {
    name: 'Detail',
    data() {
        return {

        };
    },
    methods: {

    },
    mounted() {
        console.log("利用获取的id，发送ajax请求")
        console.log("location.hash",location.hash)
        console.log(this.$route.params.id)
        console.log(this.$route.query.id)//使用query进行跳转有query.id
    }
};
</script>

<style lang="css" scoped>
</style>

<template>
    <div>
        <div style="height:300px;background:yellow; ">大轮播</div>
        <ul>
            <li>正在热映</li>
            <li>即将上映</li>
        </ul>


        <!-- /film/nowplaying Nowplaying
        /film/comingsoon Comingsoon -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Film',
    data() {
        return {

        };
    },
    methods: {

    },
};
</script>

<style lang="css" scoped>

</style>

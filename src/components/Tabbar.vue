<template>
    <div>
        <ul>
            <!-- <li><router-link to="/film">电影</router-link></li>  等价于-->
            <router-link to="/film" custom v-slot="li" active-class="active">电影</router-link>
            <router-link to="/cinema" custom v-slot="li" active-class="active">影院</router-link>
            <router-link to="/center" custom v-slot="li" active-class="active">我的</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Tabbar',
    data() {
        return {

        };
    },
    methods: {

    },
};
</script>

<style lang="scss" scoped>
ul {
    display: flex;
    justify-content: center;

    li {
        flex: 1;
    }
           
}
.active{
    color:red;
}
</style>

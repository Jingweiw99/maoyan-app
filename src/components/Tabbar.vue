<template>
    <div class="nav">
        <ul>
            <li>
                <router-link to="/film">
                    <i class="iconfont icon-training"></i>
                    <span>电影</span>
                </router-link>
            </li>
            <li>
                <router-link to="/cinema">
                    <i class="iconfont icon-all"></i>
                    <span>影院</span>
                </router-link>
            </li>
            <li>
                <router-link to="/center">
                    <i class="iconfont icon-account"></i>
                    <span>我的</span>
                </router-link>
            </li>
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
.nav {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    line-height: 25px;
    text-align: center;
    background-color: white;

    ul {
        display: flex;

        li {
            flex: 1;

            a {
                display: flex;
                flex-direction: column;
                i {
                    font-size: 20px;
                }
                span {
                    font-size: 10px;
                }
            }
        }

    }
}

a {
    text-decoration: none;
    color: black;
}

.router-link-active {
    text-decoration: none;
    color: red;
}
</style>

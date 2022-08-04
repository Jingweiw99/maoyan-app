<template>
    <div class="header">
        <i class="iconfont icon-back"
        @click ="goBack"
        ></i>
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  methods: {
    goBack () {
      // this.$router.push(`/detail`) 或者从哪里来到哪里去back。
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    height: 2.75rem;
    width: 100%;
    line-height: 2.75rem;
    background: white;
    text-align: center;
    i{
        font-size: 30px;
        position: fixed;
        left:.625rem;
        top:0px;

    }
}

</style>

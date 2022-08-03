const  mixinTabbar = {
    created(){
        this.$store.commit('tabbarHide')
    },
    destroyed(){
        this.$store.commit('tabbarShow')
    }
}


export default mixinTabbar
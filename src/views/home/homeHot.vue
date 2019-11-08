<template>
    <div>
        <HomeItem :movie_data = "movie_data"></HomeItem>

    </div>
</template>

<script>
import HomeItem from './homeItem'
export default {
   
    components:{
        HomeItem
    },
    created(){
        this.$store.dispatch('get_data')
       
    },
    computed:{
        movie_data () {
            return this.$store.state.list_data.dataMovie && this.$store.state.list_data.dataMovie
        },
    }
}
</script>

<style lang="stylus" scoped>
    div
        flex 1 
        overflow hidden
</style>
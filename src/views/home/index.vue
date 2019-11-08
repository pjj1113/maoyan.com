<template>
    <div class="home_box">
        <HomeHeader class="homeheader"/>
        <router-view class="view_home"></router-view>
    </div>
</template>

<script>
import HomeHeader from './homeHeader'
export default {
    components:{
        HomeHeader
    }
}
</script>
<style lang="stylus" scoped>
    .home_box
        display flex
        flex 1
        flex-direction column
        overflow hidden

</style>
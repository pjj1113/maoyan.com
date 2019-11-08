<template>
    <div>
       <ul>
           <router-link to="/city" tag="li" class="city">
                <span> 杭州 </span>
                <i class="fas fa-caret-down"></i>
           </router-link>
           <li class="list">
               <router-link active-class="active" :to = "{name:'homehot'}">正在热映</router-link>
               <router-link active-class="active" :to = "{name:'homeCommit'}">即将上映</router-link>
           </li>
           <router-link to = "/search" tag = "li" class="search">
            <a href="">
                <i class="fas fa-sync-alt"></i>
            </a>
    </router-link>
       </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
    @import '../../assets/css/border.styl';
    @import '../../assets/css/theme.styl';
    ul
        display flex
        height .44rem 
        border 0 0 1px 0,#ccc 
        background-color #ffffff
        z-index 9999
        .city
            display flex
            flex 50
            justify-content center
            align-items center
            span
                font-size .15rem
            i 
                font-size .15rem
                margin-left .06rem
        .list
            display flex
            flex 255
            justify-content space-around
            align-items center
            a
                font-size .15rem
                color #666
                text-decoration none
                font-weight 600
                line-height .44rem
                padding 0 .15rem
            .active 
                color $theme_color 
                border-bottom .02rem solid $theme_color 
        .search
            display flex
            flex 50
            justify-content center
            align-items center
            a
                display flex
                color #666
                i 
                    font-size .2rem

</style>
<style lang="stylus" scoped>

</style>
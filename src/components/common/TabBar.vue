<template>
     <footer>
         <ul>
             <router-link
             v-for="item in tabers" :key = "item.id"
             tag="li"
             :to = "item.path"
             active-class="active"
             >
                <i class = "fas" :class = "[ item.icon ]"></i>
                <span>{{ item.text }}</span>
             </router-link>
         </ul>
     </footer>
</template>

<script>

export default {
    data(){
        return {
            tabers:[
              {
                id: 1,
                text: '首页',
                path: '/home',
                icon: 'fa-home'
                },
                {
                id: 2,
                text: '影院',
                path: '/cinema',
                icon: 'fa-film'
                },
                {
                id: 3,
                text: '我的',
                path: '/mine',
                icon: 'fa-user-secret'
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '../../assets/css/theme.styl';
    footer
        display flex
        width 100% 
        height .485rem
        ul
            width 100% 
            height 100%
            display flex
            justify-content space-around
            .active{
                color $theme_color
            }
            li
                display flex
                flex-direction column
                align-items center
                i 
                    font-size .25rem
                span 
                    font-size .16rem
</style>

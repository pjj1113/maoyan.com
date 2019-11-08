<template>
   <div class="tab-content">
    <div class="page n-hot active" data-hot=".n-hot" data-cid="c_dmLad">
      <div class="list-wrap" style="margin-top: 0px;">
           <div v-if = "movie_data">
               
          <HomeList :item = item v-for="item in movie_data.movieList" :key="item.id"/>
           </div>
          </div>
      </div>
      <Loading v-if="Loading_flag"></Loading>
    </div>
</template>

<script>
import HomeList from './homeList'
import HomeHot from './homeHot'
import BSscrool from 'better-scroll'
import { Toast } from 'mint-ui'
import { mapActions,mapState } from 'vuex';
import _ from 'lodash'
export default {
    props:['movie_data'],
    components:{
        HomeList
    },
    created(){

    },
    methods:{
          ...mapActions(['get_coming_data','open_loading','colose_loading'])
    },

    mounted(){
        const bs = new BSscrool('.page',{
        pullUpLoad: {
                threshold: 50 
            }
        })
        let count = 0
        bs.on('pullingUp',()=>{
            const movieIds = this.movie_data.movieIds.slice( 12 )
            const ids = _.chunk( movieIds,10 )

            

            if(count==ids.length){
                Toast({
                    message: '没有内容了',
                    position: 'bottom',
                    duration: 5000
                });
                 bs.finishPullUp() 
                return;
            }
            
            if(count < ids.length){
                this.open_loading()
                 this.get_coming_data( ids[ count ].join(',') )
                setTimeout(()=>{
                   
                    this.colose_loading()
                },2000)
            }
            
            bs.finishPullUp()
            count++
        })
    },
    data(){
        return {
           
        }
    },
    computed: {
        ...mapState({
            Loading_flag: state => state.list_data.loading_flag
        })
    },
   
}
</script>

<style lang="stylus" scoped>
     .tab-content 
        height 100% 
        .page 
            height 100% 
</style>
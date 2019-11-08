import axios from 'axios'
const GET_DATA = "GET_DATA"

const GET_COMING_DATA = 'GET_COMING_DATA'

const OPEN_LOADING = 'OPEN_LOADING'

const COLOSE_LOADING = 'COLOSE_LOADING'

export default {
    state:{
        dataMovie:null,
        loading_flag:false
    },
    actions:{
        get_data({commit}){
            axios({
                url:'/ajax/movieOnInfoList',
                params:{
                    token:''
                }
            }).then(res=>{
                commit({
                    type:GET_DATA,
                    payload:res.data
                })
            })
        },
        get_coming_data({commit},movieIds){
            axios({
                url: '/ajax/moreComingList',
                params: {
                  token: '',
                  movieIds:movieIds
                }
            }).then(res => {
                commit({
                    type:GET_COMING_DATA,
                    payload:res.data
                })
            })
        },

        open_loading({commit}){
            commit({
                type:OPEN_LOADING
            })
        },
        colose_loading({commit}){
            commit({
                type:COLOSE_LOADING
            })
        }
        


    },
    mutations:{
        GET_DATA (state,actions){
            state.dataMovie = actions.payload
        },
        GET_COMING_DATA (state,actions){
            state.dataMovie.movieList.push( ...actions.payload.coming )
        },
        OPEN_LOADING(state,actions){
            state.loading_flag = true
        },
        COLOSE_LOADING(state,actions){
            state.loading_flag = false
        }
    }
}
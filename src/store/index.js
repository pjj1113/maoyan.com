import Vue from 'vue'

import Vuex from 'Vuex'

Vue.use( Vuex )
import list_data from '../views/home/store'
const store = new Vuex.Store({
    modules:{
        list_data
    }
})
export default store
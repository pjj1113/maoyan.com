import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
import store from './store'

import { AllFilter } from './filter/index'

import CT from './views/customTenp'

Vue.use(CT)


for(var key in AllFilter){
  Vue.filter(key,AllFilter[key])
}

Vue.use(MintUI)
import router from './router'
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

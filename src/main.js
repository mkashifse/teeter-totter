import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

import TriangleShape from "./components/TriangleShape.vue";
import CircleShape from "./components/CircleShape.vue";
import RectShape from "./components/RectShape.vue";
import SeeSaw from "./components/SeeSaw.vue";


Vue.config.productionTip = false

Vue.component('TriangleShape',TriangleShape)
Vue.component('CircleShape',CircleShape)
Vue.component('RectShape',RectShape)
Vue.component('SeeSaw',SeeSaw)


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    
  }
})


new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

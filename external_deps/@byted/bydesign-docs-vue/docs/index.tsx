import Vue from 'vue'
import App from './App.vue'

import ByDocs from '../src/index'

Vue.use(ByDocs)

Vue.component('App', App)

new Vue({
  el: '#app',
  render: h => h(App)
})

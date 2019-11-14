import Vue from 'vue'
import App from './App'
import fastClick from 'fastclick'
import router from './router'


import './assets/styles/reset.css'
import '@/assets/styles/iconfont.css'



fastClick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

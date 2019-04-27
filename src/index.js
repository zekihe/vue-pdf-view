import Vue from 'vue'
import App from './app.vue'
import router from './router.js'

import './assets/js/flexible.js'
import './assets/css/reset.css'
import './assets/scss/main.scss'
import './assets/css/common.css'



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import './assets/stylesheets/reset.css'
import './assets/font/css/font-awesome.css'

new Vue({
  render: h => h(App),
}).$mount('#app')



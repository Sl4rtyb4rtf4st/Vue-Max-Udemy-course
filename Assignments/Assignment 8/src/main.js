import Vue from 'vue'
import App from './App.vue'
import Footer from './components/shared/Footer.vue'
import Header from './components/shared/Header.vue'

Vue.component('headEl', Header)
Vue.component('footEl', Footer)

new Vue({
  el: '#app',
  render: h => h(App)
})

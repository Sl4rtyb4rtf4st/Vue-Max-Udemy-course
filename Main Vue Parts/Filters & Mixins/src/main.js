import Vue from 'vue'
import App from './App.vue'

// Global filter
Vue.filter('toLowercase', value => value.toLowerCase());

// Global, gets executed in every component
Vue.mixin({
  // Mixin beforeDestroy() 
  created() {
    console.log('Global mixin - created hook');
  }
}) 

new Vue({
  el: '#app',
  render: h => h(App)
})

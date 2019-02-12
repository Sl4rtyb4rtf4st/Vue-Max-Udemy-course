import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      console.log('====================================');
      console.log('changeAge was called, with parameter:', age);
      console.log('====================================');
      this.$emit('ageWasChanges', age);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})


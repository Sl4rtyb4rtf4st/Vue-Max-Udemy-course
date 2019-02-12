import Vue from 'vue'
import App from './App.vue'
import EventBus from './eventBus.js'

Vue.directive('greenHighlight', {
  bind(el, binding, vnode) {
    el.style.backgroundColor = 'green';
  }
});

Vue.directive('chooseHighlight', {
  bind(el, binding, vnode) {
      el.style.backgroundColor = binding.value;
  }
});

Vue.directive('recieveArg', {
  bind(el, binding, vnode) {
    if(binding.arg == 'background') {
      el.style.backgroundColor = binding.value;
    } else {
      el.style.color = binding.value;
    }
  }
});

Vue.directive('hasModifier', {
  bind(el, binding, vnode) {
    let delay = '';
    if(binding.modifiers['delay']) {
      delay = 3000;
    }
    setTimeout(() => {
      if(binding.arg == 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})

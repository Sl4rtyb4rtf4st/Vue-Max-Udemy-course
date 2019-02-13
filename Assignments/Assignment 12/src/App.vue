<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1 v-myOn:click.slower="fnName">Directives Exercise</h1>
        <!-- Exercise -->
        <!-- Build a Custom Directive which works like v-on (Listen for Events) -->

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    directives: {
      'myOn': {
        bind(el, binding, vnode) {
          if(binding.modifiers['slower']) {
            el.style.transition = 'all .3s';
          }
          const eventType = binding.arg;
          const fn = binding.value;
          el.addEventListener(eventType, fn);
        }
      }
    },
    methods: {
      fnName(e) {
        e.target.style.backgroundColor = 'lightcoral';
        e.target.style.color = 'white';
        e.target.style.padding = '5px';
      }
    }
  }
</script>

<style>
poep {
  color: lightcoral
}
</style>

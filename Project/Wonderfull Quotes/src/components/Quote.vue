<template>
  <div class="quote" @click="remove(index)">
    <q>
      <slot></slot>
    </q>
  </div>
</template>

<script>
  import EventBud,{ EventBus } from '../eventBus.js'


  export default {
    props:['index'],
    methods: {
      remove(index) {
        EventBus.$emit('removeQuote', index);
      }
    }
  }
</script>

<style scoped>
</style>

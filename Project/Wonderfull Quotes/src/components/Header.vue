<template>
  <div class="row">
    <div class="col-sm-12">
      <h2>Quotes Added</h2>
      <div class="progress">
        <div 
          class="progress-bar" 
          role="progressbar" 
          :aria-valuenow="(quotes * 10)" 
          aria-valuemin="0" 
          aria-valuemax="100" 
          :style="{width: (quotes * 10) + '%'}">
          {{ quotes }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { EventBus } from '../eventBus.js';

  export default {
    props: ['quotes'],
  }
</script>

<style>
</style>

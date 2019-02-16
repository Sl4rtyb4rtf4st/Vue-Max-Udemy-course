<template>
  <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
    <hr>
    <h1>Filters & Mixins</h1>
    <hr>
    <p>When filtering a list a filter is not the best option becuse of the lack of caching, in stead for thus use case you should use a computed property</p>
    <input type="text" name="" id="" v-model="filterText">
    <ul>
      <li v-for="(fruit, i) in filteredFruits" v-bind:key="i">{{ fruit }}</li>
    </ul>
  </div>
</template>

<script>
import { fruitMixin } from './fruitMixin';

  export default {
    data() {
      return {
        fruits: ['apple', 'orange', 'banana', 'mango','melon'],
      }
    },
    mixins: [fruitMixin],
    created() {
      console.log('Local List Component  - Created hook')
    }
  }
</script>

<style>

</style>

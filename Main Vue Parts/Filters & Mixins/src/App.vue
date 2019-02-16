<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>
          Filtered text: "{{ text | toUppercase }}".
        <br>
          The filter works in the following manner: <span v-pre>{{ dataValue | filterName }}</span>
        </p>
        <p>
          Chaning filters is done by adding a pipe symbol and an other filter name: <br> 
          <span v-pre>{{ dataValue | firstFilter | secondFilter }}</span> <br>
          Chained filters: "{{ text | toUppercase | toLowercase }}"
        </p>
        <hr>
        <p>When filtering a list a filter is not the best option becuse of the lack of caching, in stead for thus use case you should use a computed property</p>
        <input type="text" name="" id="" v-model="filterText">
        <ul>
          <li v-for="(fruit, i) in filteredFruits" v-bind:key="i">{{ fruit }}</li>
        </ul>
      </div>
      <app-list></app-list>
    </div>
  </div>
</template>

<script>
  import List from './List.vue'
  // Example of a local mixin
  import { fruitMixin } from './fruitMixin'

  export default {
    data() {
      return {
        text: 'Hello World!',
      }
    },
    filters: {
      toUppercase(value) {
        return value.toUpperCase();
      }
    },
    created() {
      console.log('Local App Component- Created hook');
    },
    components: {
      appList: List
    },
    mixins: [fruitMixin]
  }
</script>

<style>

</style>

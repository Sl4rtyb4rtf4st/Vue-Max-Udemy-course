<template>
  <div class="row">
    <div class="quotes-container col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12">
      <div class="quote-container" 
        v-for="(quote, index) in quotes" 
        :key="index + 1">
        <quote :index="index">{{ quote }}</quote>
      </div>
    </div>
  </div>
</template>

<script>
  import Quote from './Quote.vue'
  import { EventBus } from '../eventBus.js'

  export default {
    data: function() {
      return {
        quotes: [
          "Any code of your own that you haven’t looked at for six or more months might as well have been written by someone else."
        ]
      }
    },
    components: {
      quote: Quote,
    },
    watch: {
      quotes: function() {
        EventBus.$emit('updateQuoteNumber', this.quotes.length);
      }
    },
    mounted() {
      EventBus.$on('addQuote', data => {
        this.quotes.push(data)
      });
      EventBus.$on('removeQuote', index => {
        this.quotes.splice(index, 1);
      });
    }
  }
</script>

<style scoped>
  fieldset {
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  .quotes-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left; 
    align-items: center;
    align-content: center;
  }
  .quote-container {
    font-family: Arizonia;
    font-size: 24px;
    max-width: 400px;
    min-width: 200px;
    padding: 20px;
    margin: 10px;
    border: 2px solid #cccccc;
    border-radius: 10px;
  }
  .quote-container:hover {
    background-color: lightpink
  }
</style>

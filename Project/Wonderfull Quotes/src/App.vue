<template>
  <div class="container">
    <header-el :quotes="quoteNr"></header-el>
    <new-quote :quoteNr="quoteNr"></new-quote>
    <quote-list></quote-list>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div clas="alert alert-info">
          <p>info: Click on a quote to delete it</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// The components in the app:
//   Header with the progressbar
//   Contant with a text field and button to add a quote
//   A list of added quote
//   A footer with some info 
  import Header from './components/Header.vue'
  import NewQuote from './components/NewQuote.vue'
  import QuoteList from './components/QuoteList.vue'
  import { EventBus } from './eventBus.js'

  export default {
    data: function() {
      return {
        quoteNr: 1
      }
    },
    components: {
      headerEl: Header,
      newQuote: NewQuote,
      quoteList: QuoteList,
    },
    mounted() {
      EventBus.$on('updateQuoteNumber', data => {
        this.quoteNr = data; 
      });
    }
  }
</script>

<style>
</style>

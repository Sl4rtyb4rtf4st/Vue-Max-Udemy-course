<template>
  <div class="container">
    <div class="row">
      <form @submit.prevent="addQuote" class="">
        <fieldset>
          <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12 form-group">
            <textarea name="quote" id="quote" cols="80" rows="3" v-model="quote"></textarea>
          </div>
          <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12 form-group">
            <input type="submit" value="Add Quote" class="btn btn-primary">
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
  import { EventBus } from '../eventBus.js';

  export default {
    data: function() {
      return {
        quote: '',
        max: false
      }
    },
    props: ['quoteNr'],
    methods: {
      addQuote(e) {
        if(this.quoteNr < 10 && this.quote != '') {
          EventBus.$emit('addQuote', this.quote);
          this.quote = '';
        } else if (this.quoteNr >= 10) {
          alert('Maximum number of quote was reached');
        }
      },
    },
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
    justify-content: left; 
    align-items: center;
    align-content: center;
  }
  .quote-container {
    font-family: Arizonia;
    max-width: 400px;
    padding: 20px;
    margin: 10px;
    border: 2px solid #cccccc;
    border-radius: 10px;
  }
</style>

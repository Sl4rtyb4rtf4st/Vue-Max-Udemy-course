<template>
  <div>
    <div class="form-group">
      <label for="first-name">First name</label>
      <input 
        type="text" 
        name="first-name" 
        class="form-control"
        id="first-name" 
        v-model="firstName"
        @input="inputed">
    </div>
    <div class="form-group">
      <label for="last-name">Last name</label>
      <input 
        type="text" 
        name="last-name"
        class="form-control" 
        id="last-name" 
        v-model="lastName"
        @input="inputed">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        firstName: '',
        lastName: ''
      }
    },
    props: ['value'],
    methods: {
      inputed() {
        this.$emit('input', `${this.firstName} ${this.lastName}`)
      }
    }
  }
</script>
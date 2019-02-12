export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      console.log('====================================');
      console.log('changeAge was called, with parameter:', age);
      console.log('====================================');
      this.$emit('ageWasChanges', age);
    }
  }
});
export const fruitMixin = {
  data() {
    return {
      fruits: ['apple', 'banana', 'mango','melon', 'kiwi'],
      filterText: ''
    } 
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter((fruit) => {
        return fruit.match(this.filterText);
      })
    }
  },
  created() {
    console.log('Local mixin - Created hook')
  },
};
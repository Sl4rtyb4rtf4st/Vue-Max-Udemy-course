export const reverseCountMixin = {
  data() {
    return {
      text: 'Some Text'
    }
  },
  computed: {
    textLength() {
      return `${this.text} (${this.text.length})`
    }
  },

}
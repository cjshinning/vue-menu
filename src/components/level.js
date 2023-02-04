export default {
  name: 'level',
  props: {
    type: String
  },
  render(h) {
    console.log(this.$slots)
    return h('h' + this.type, this.$slots.default);
  }
}

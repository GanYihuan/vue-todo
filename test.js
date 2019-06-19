import Vue from "vue";

const app = new Vue({
  el: '#root',
  template: '<div>{{text}} {{obj.a}}</div>',
  props: {
    value: {
      type: String
    }
  },
  data() {
    value: 0
  },
  model: {
    prop: 'value1',
    event: 'change'
  }
}
app.$mount('#root')



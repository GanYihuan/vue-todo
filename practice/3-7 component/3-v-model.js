import Vue from 'vue'

const component = {
  model: {
    /* 自定义 prop 名称, value -> value1 */
    prop: 'value1',
    /* 自定义 event 名称, input -> change */
    event: 'change'
  },
  // props: ['value'],
  /* 自定义 prop 名称, value -> value1 */
  props: ['value1'],
  template: `
    <div>
      <!-- <input type="text" @input="handleInput" :value="value"> -->
      <input type="text" @input="handleInput" :value="value1">
    </div>
  `,
  methods: {
    handleInput(e) {
      // this.$emit('input', e.target.value)
      /* 自定义 event 名称, input -> change */
      this.$emit('change', e.target.value)
    }
  }
}

new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  data() {
    return {
      value: '123'
    }
  },
  template: `
    <div>
      <!-- <comp-one :value="value" @input="value=arguments[0]"></comp-one> -->
      // 上下等价
      <comp-one v-model="value"></comp-one>
    </div>
  `
})

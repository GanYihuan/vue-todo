import Vue from 'vue'

const component = {
  model: {
    /* 自定义 prop 名称 */
    prop: 'value1',
    event: 'change'
  },
  // props: ['value'],
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

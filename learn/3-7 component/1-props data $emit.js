import Vue from 'vue'

/*
props 特性 : 父组件传递给子组件数据，子组件内部也定义好该数据名称
标签里的 数据名称 不会显示在 dom 上
可以使用 this.xxx 或 {{}} 来调用 数据名称

非 props 特性 : 子组件内部没有定义 props,
标签里的 数据名称 会显示在 dom 上
不可以使用 this.xxx 或 {{}} 来调用
*/
const component = {
  props: {
    active: {
      required: true,
      type: Boolean,
      default: true,
      validator(value) {
        return typeof value === 'boolean'
      }
    },
    propOne: String
  },
  data() { // child component data must function
    return {
      text: 0,
      propOned: this.propOne // Parent data is converted to subcomponent internal data, Children cannot directly modify parent data
    }
  },
  template: `
    <div>
      <input type="text" v-model="text"/>
      <span @click="handleChange">{{propOned}}</span>
      <span v-show="active">see me if active</span>
    </div>
  `,
  methods: {
    handleChange() {
      this.$emit('change') // The child throws an event to the parent to modify the parent data., Single data stream
    }
  }
}
// Vue.component('CompOne', component)

new Vue({
  el: '#root',
  components: {
    CompOne: component
  },
  data() {
    return {
      prop1: 'text1'
    }
  },
  mounted() {
    console.log(this.$refs.comp1)
  },
  methods: {
    handleChange() {
      this.prop1 += 1
    }
  },
  template: `
    <div>
      <comp-one ref="comp1" :active="true" :prop-one="prop1" @change="handleChange"></comp-one>
      <comp-one :active="true" propOne="text2"></comp-one>
    </div>
  `
})

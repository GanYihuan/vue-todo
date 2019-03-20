import Vue from 'vue'

const component = { // 父组件
  props: {
    active: Boolean,
    propOne: String
  },
  data() {
    return {
      text: 0
    }
  },
  template: `
    <div>
      <input type="text" v-model="text">
      <span @click="handleChange">{{propOne}}</span>
      <span v-show="active">see me if active</span>
    </div>
  `,
  mounted() {
    console.log('component mounted')
  },
  methods: {
    handleChange() {
      this.$emit('change')
    }
  }
}
const CompVue = Vue.extend(component) // 子组件继承父组件
new CompVue({ // 子组件
  el: '#root',
  propsData: { // propsData: 子组件传递数据给父组件
    propOne: 'xxx'
  },
  data() { // 覆盖父组件 data
    return {
      text: '123'
    }
  },
  mounted() { // 父组件 mounted 先被调用, 后调用自身 mounted
    console.log('CompVue mounted')
  }
})

// ----------------------------------------------------------

const componet2 = {
  // parent: parent, // new Vue 的时候才能指定 parent
  extends: component, // 继承 component 组件
  data() {
    return {
      text: 1
    }
  },
  mounted() {
    console.log('component2 mounted')
    console.log(this.$parent.$options.name) // Root
    console.log(this.$parent.text) /* 23333 */
    this.$parent.text = '12345' // 谁调用我, 谁就是父组件 $parent 不推荐子组件修改父组件的值
  }
}

const parent = new Vue({
  name: 'parent'
})
new Vue({
  parent: parent, // 继承父组件
  name: 'Root',
  el: '#root',
  components: {
    Comp: componet2
  },
  data() {
    return {
      text: 23333
    }
  },
  mounted() {
    console.log(this.$parent.$options.name) // parent
  },
  template: `
    <div>
      <span>{{text}}</span>
      <comp></comp>
    </div>
  `
})

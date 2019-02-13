import Vue from 'vue'

// 父组件
const component = {
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
// 子组件继承父组件
const CompVue = Vue.extend(component)
// 子组件
new CompVue({
  el: '#root',
  /* propsData: 传递数据给父组件 */
  propsData: {
    propOne: 'xxx'
  },
  /* 覆盖父组件 data */
  data() {
    return {
      text: '123'
    }
  },
  /* 父组件 mounted 先被调用, 后调用自身 mounted */
  mounted() {
    console.log('CompVue mounted')
  }
})

// ----------------------------------------------------------

const componet2 = {
  /* new Vue 的时候才能指定 parent */
  // parent: parent,
  // 继承 component 组件
  extends: component,
  data() {
    return {
      text: 1
    }
  },
  mounted() {
    console.log('component2 mounted')
    console.log(this.$parent.$options.name) /* Root */
    console.log(this.$parent.text) /* 23333 */
    /* 谁调用我, 谁就是父组件 $parent, 这里是 new Vue (Root) */
    /* 不推荐子组件修改父组件的值 */
    this.$parent.text = '12345'
  }
}

const parent = new Vue({
  name: 'parent'
})

new Vue({
  parent: parent,
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
    /* new Vue 的时候才能指定 parent */
    console.log(this.$parent.$options.name) // parent
  },
  template: `
    <div>
      <span>{{text}}</span>
      <comp></comp>
    </div>
  `
})

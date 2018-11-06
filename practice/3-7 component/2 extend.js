import Vue from 'vue'

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

const CompVue = Vue.extend(component)
new CompVue({
  el: '#root',
  /* propsData: 传递数据给子组件 */
  propsData: {
    propOne: 'xxx'
  },
  /* 覆盖子组件 data */
  data() {
    return {
      text: '123'
    }
  },
  /* extend() 组件 mounted 先被调用, 后调用自身 mounted */
  mounted() {
    console.log('CompVue mounted')
  }
})

const componet2 = {
  /* 无效 */
  /* new Vue 的时候才能指定 parent */
  // parent: parent,
  extends: component,
  /* 覆盖子组件 data */
  data() {
    return {
      text: 1
    }
  },
  /* 子组件 mounted 先被调用, 后调用自身 mounted */
  mounted() {
    console.log('component2 mounted')
    /* new Vue (Root) */
    console.log(this.$parent.$options.name)
    /* 不推荐子组件修改父组件的值 */
    /* 谁调用我, 谁就是父组件 $parent, 这里是 new Vue (Root) */
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
  /* 覆盖 children component data */
  data() {
    return {
      text: 23333
    }
  },
  /* 子组件 mounted 先被调用, 后调用自身 mounted */
  mounted() {
    /* Parent */
    /* new Vue 的时候才能指定 parent */
    console.log(this.$parent.$options.name)
  },
  template: `
    <div>
      <span>{{text}}</span>
      <comp></comp>
    </div>
  `
})

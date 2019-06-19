import Vue from 'vue'

const component = { // Parent component
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
const CompVue = Vue.extend(component) // Child component inherits parent component
new CompVue({ // Child component
  el: '#root',
  propsData: { // propsData: Child component passes data to parent component
    propOne: 'xxx'
  },
  data() { // Override parent component data
    return {
      text: '123'
    }
  },
  mounted() { // Parent component mounted First called, after Call itself mounted
    console.log('CompVue mounted')
  }
})

// ----------------------------------------------------------

const componet2 = {
  // parent: parent, // new Vue Can be specified parent
  extends: component, // inherit component
  data() {
    return {
      text: 1
    }
  },
  mounted() {
    console.log('component2 mounted')
    console.log(this.$parent.$options.name) // Root
    console.log(this.$parent.text) /* 23333 */
    this.$parent.text = '12345' // Who called me, Who is the parent component, $parent Subcomponents are not recommended to modify the value of the parent component
  }
}

const parent = new Vue({
  name: 'parent'
})
new Vue({
  parent: parent, // Inherit parent component
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

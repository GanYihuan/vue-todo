import Vue from 'vue'

const ChildComponent = { // child component
  template: '<div>child component: {{value}}</div>', // Grandfather component
  inject: ['yeye', 'value'], // Get all the parents
  mounted() {
    // $parent Can only get the upper level value
    console.log(this.$parent.$options.name) // comp
    console.log(this.yeye, this.value) // Grandfather component
  }
}

const component = { // Parent component
  name: 'comp',
  components: {
    ChildComponent
  },
  template: `
    <div :style="style">
      <div class="header">
        <slot name="header"></slot>
      </div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
      <slot name="content" :value="value"></slot>
      <child-component />
    </div>
  `,
  data() {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      },
      value: 'component value'
    }
  }
}

new Vue({
  el: '#root', // Grandfather component
  components: {
    CompOne: component
  },
  data() {
    return {
      value: '爷爷组件'
    }
  },
  provide() { // child component injection, Not available react attribute, like data()
    // Not recommended defineProperty() provide react Attributes, 使 value 改变下级对应改变
    // const data = {}
    // Object.defineProperty(data, 'value', {
    //   get: () => this.value,
    //   enumerable: true
    // })
    return {
      yeye: this,
      value: this.value
      // data
    }
  },
  mounted() {
    console.log(this.$refs.comp.value) // component value
  },
  template: `
    <div>
      <comp-one ref="comp">
        <span slot="header">this is header</span>
        <span slot="footer">this is footer</span>
        <span slot="content" slot-scope="props" ref="span">{{props.value}} {{value}}</span> // slot-scope="props": Calling slot attribute value
      </comp-one>
      <input type="text" v-model="value" />
    </div>
  `
})

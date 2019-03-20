import Vue from 'vue'

const ChildComponent = { // 子组件
  template: '<div>child component: {{value}}</div>', // 爷爷组件
  // inject: ['yeye', 'data'],
  inject: ['yeye', 'value'], // 拿到所有父级
  mounted() {
    // $parent 只能拿到上一级里面的 value
    console.log(this.$parent.$options.name) // comp
    console.log(this.yeye, this.value) // 爷爷组件
  }
}

const component = { // 父组件
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

new Vue({ // 爷爷组件
  components: {
    CompOne: component
  },
  el: '#root',
  data() {
    return {
      value: '爷爷组件'
    }
  },
  provide() { // 下级组件注入, 不提供 react 属性, 像 data()
    // 不推荐用 defineProperty() 提供 react 属性, 使 value 改变下级对应改变
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
        <span slot="content" slot-scope="props" ref="span">{{props.value}} {{value}}</span> // slot-scope="props": 调用子组件 slot 的属性 value
      </comp-one>
      <input type="text" v-model="value" />
    </div>
  `
})

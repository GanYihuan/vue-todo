import Vue from 'vue'

const ChildComponent = {
  template: '<div>child component: {{data.value}}</div>',
  /* 爷爷组件(上级) provide */
  inject: ['yeye', 'data'],
  mounted() {
    /* this.$parent: 拿到上一级 */
    console.log(this.$parent.$options.name) // comp
    console.log(this.yeye, this.value) // 123
  }
}

const component = {
  name: 'comp',
  components: {
    ChildComponent
  },
  // template: `
  //   <div :style="style">
  //     <div class="header">
  /* slot 用来被外部替换 */
  //       <slot name="header"></slot>
  //     </div>
  //     <div class="body">
  //       <slot name="body"></slot>
  //     </div>
  //   </div>
  // `,
  template: `
    <div :style="style">
      <slot :value="value"></slot>
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
  components: {
    CompOne: component
  },
  el: '#root',
  data() {
    return {
      value: '123'
    }
  },
  /* 下级组件注入, 不提供 react 属性, 像 data() */
  provide() {
    const data = {}
    /* 不推荐 defineProperty */
    /* 提供 react 属性 */
    /* <input type="text" v-model="value" /> can run */
    Object.defineProperty(data, 'value', {
      get: () => this.value,
      enumerable: true
    })
    return {
      yeye: this,
      // value: this.value,
      data
    }
  },
  mounted() {
    /* component value 123 */
    console.log(this.$refs.comp.value, this.$refs.span)
  },
  template: `
    <div>
      <comp-one ref="comp">
        <!-- <span slot="header">this is header</span> -->
        <!-- <span slot="body">this is body</span> -->
        <!-- slot-scope="props": 调用子组件 slot 的属性 -->
        <!-- props.value: 子组件的 slot 的 value -->
        <span slot-scope="props" ref="span">{{props.value}} {{value}}</span>
      </comp-one>
      <input type="text" v-model="value" />
    </div>
  `
})

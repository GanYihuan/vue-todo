import Vue from 'vue'

const component = {
  props: ['props1'],
  name: 'comp',
  // template: `
  //   <div :style="style">
  //     <slot></slot>
  //   </div>
  // `,
  /* 上下能替换, render() 原理 */
  render(createElement) {
    return createElement(
      'div',
      {
        style: this.style
        // ,
        // on: {
        //   click: () => {
        //     this.$emit('click')
        //   }
        // }
      },
      [this.$slots.default, this.$slots.header, this.props1]
    )
  },
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
  mounted() {
    console.log(this.$refs.comp.value, this.$refs.span)
  },
  methods: {
    handleClick() {
      console.log('clicked')
    }
  },
  // template: `
  //   <comp-one ref="comp">
  //     <span ref="span">{{value}}</span>
  //   </comp-one>
  // `,
  /* 上下能替换, when use template, will recall this */
  render(createElement) {
    return createElement(
      'comp-one',
      {
        ref: 'comp',
        props: {
          props1: this.value
        },
        /* 需要发送 $emit */
        // on: {
        //   click: this.handleClick
        // },
        /* 自动绑定到根节点 <div></div>, 不需要发送$emit */
        nativeOn: {
          click: this.handleClick
        }
      },
      [
        createElement(
          'span',
          {
            ref: 'span',
            slot: 'header',
            /* 原生 dom 效果相似 */
            domProps: {
              innerHTML: '<span>345</span>'
            },
            attrs: {
              id: 'test-id'
            }
          },
          this.value
        )
      ]
    )
  }
})

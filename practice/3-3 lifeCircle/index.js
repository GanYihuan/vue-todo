import Vue from 'vue'

/*
生命周期函数是某个时间点执行的函数
vm: vue实例
*/
const app = new Vue({
  data() {
    return {
      test: 'hello vue'
    }
  },
  /* init event & lifecycle */
  /*
  初始化, dom 没完成
  不要修改数据
  服务端渲染调用
  */
  beforeCreate() {
    console.log(this.$el, 'beforeCreate') // undefined
  },
  /* init injections & reactivity */
  /*
  初始化, dom 没完成
  能改数据, 数据不会被监控
  服务端渲染调用
  */
  created() {
    console.log(this.$el, 'created') // undefined
  },
  /* has 'el' option? */
  el: '#root',
  /* N: when vm.$mount(el) is called */
  /* Y: has 'template' option? */
  template: '<div>{{test}}</div>',
  /* Y: compile template as render function */
  /* N: compile outHTML(el) as template */
  /*
  beforeMount: 数据和模板即将结合挂载到页面中之前一瞬间
  dom 相关
  服务端渲染不调用(服务端渲染没有 dom)
  */
  beforeMount() {
    /* 没数据 */
    /* <div id="app"></div> */
    console.log(this.$el, 'beforeMount')
  },
  /*
  h: createElement()
  耗时，效率低
  */
  render(h) {
    throw new TypeError('render error')
    // console.log('render function invoked')
    // return h('div', {}, this.text)
  },
  /*
  h: createElement()
  开发环境中使用, 不关心子组件
  */
  renderError(h, err) {
    return h('div', {}, err.stack)
  },
  /* 会向上冒泡, 正式的环境中使用, 收集错误 */
  errorCaptured() { },
  /* create vm.$el and replace 'el' with it */
  /*
  dom 相关
  服务端渲染不调用, 服务端渲染没有 dom
  mounted 之后, 要外界触发才执行生命周期
  经过 render 节点变为: <div>hello world</div>
  */
  mounted() {
    /* The component is called when it is mounted to the dom */
    /* 有数据 */
    /* <div>hello world</div> */
    console.log(this.$el, 'mounted')
  },
  /* when data changes */
  beforeUpdate() {
    console.log(this, 'beforeUpdate')
  },
  /* virtual DMO re-render and patch */
  updated() {
    /* Data updates are invoked */
    console.log(this, 'updated')
  },
  /*
  当使用 keep-alive 时，App.vue 将附加组件激活
  当页面重新显示的时候将运行
  deactivated(){}, 与 activated 相反
  */
  activated() {
    console.log(this, 'activated')
  },
  /* deactivated(){}, 与 activated 相反 */
  deactivated() {
    console.log(this, 'deactivated')
  },
  /* when vm.$destory() is called */
  beforeDestroy() {
    console.log(this, 'beforeDestroy')
  },
  /* teardown watches, child components and events listeners */
  destroyed() {
    /* Called when a component is destroyed */
    console.log(this, 'destroyed')
  }
})

app.$mount('#root')
// setInterval(() => {
/* 数据更新 */
//   app.text = app.text += 1
// }, 1000)

setTimeout(() => {
  app.$destroy()
}, 1000)

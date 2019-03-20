import Vue from 'vue'

// 生命周期函数是某个时间点执行的函数 vm: vue实例
const app = new Vue({
  data() {
    return {
      test: 'hello vue'
    }
  },
  // init event & lifecycle
  beforeCreate() { // 初始化 dom 没完成 不要修改数据 服务端渲染调用
    console.log(this.$el, 'beforeCreate') // undefined
  },
  // init injections & reactivity
  created() { // 初始化 dom 没完成 能改数据 数据不会被监控 服务端渲染调用
    console.log(this.$el, 'created') // undefined
  },
  el: '#root',
  // has 'el' option? N: when vm.$mount(el) is called
  // Y: has 'template' option? N: compile outHTML(el) as template
  // Y: compile template as render function
  template: '<div>{{test}}</div>',
  beforeMount() { // 数据和模板即将结合挂载到页面中之前一瞬间 dom 相关 没数据 服务端渲染不调用(服务端渲染没有 dom)
    // <div id="app"></div>
    console.log(this.$el, 'beforeMount')
  },
  render(h) { // h: createElement() 耗时 效率低
    throw new TypeError('render error')
  },
  renderError(h, err) { // h: createElement() 开发环境中使用, 不关心子组件
    return h('div', {}, err.stack)
  },
  errorCaptured() {}, // 会向上冒泡, 正式的环境中使用, 收集错误
  // create vm.$el and replace 'el' with it
  mounted() { // dom 相关 有数据 服务端渲染不调用 服务端渲染没有 dom mounted 之后, 要外界触发才执行生命周期 经过 render 节点变为: <div>hello world</div>
    // <div>hello world</div>
    console.log(this.$el, 'mounted')
  },
  beforeUpdate() { // when data changes
    console.log(this, 'beforeUpdate')
  },
  updated() { // virtual DMO re-render and patch Data updates are invoked
    console.log(this, 'updated')
  },
  activated() { // 当使用 keep-alive 时，App.vue 将附加组件激活 当页面重新显示的时候将运行
    console.log(this, 'activated')
  },
  deactivated() { // deactivated(){}, 与 activated 相反
    console.log(this, 'deactivated')
  },
  beforeDestroy() { // when vm.$destory() is called
    console.log(this, 'beforeDestroy')
  },
  destroyed() { // teardown watches, child components and events listeners
    console.log(this, 'destroyed')
  }
})

app.$mount('#root')
// setInterval(() => { // 数据更新
//   app.text = app.text += 1
// }, 1000)

setTimeout(() => {
  app.$destroy()
}, 1000)

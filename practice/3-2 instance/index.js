import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  /* template 会渲染到 #root 里面 */
  template: '<div ref="div">{{text}} {{obj.a}}</div>',
  data: {
    text: 0,
    obj: {} /* 没定义 a */
  },
  mounted() {
    /* this: 相当于 app, app.a(), app. 就是 vue 实例 */
    // this.a()
  }
  /* watch 自动注销 */
  // watch: {
  //   text (newText, oldText) {
  //     console.log(`${newText} : ${oldText}`)
  //   }
  // }
})

app.$mount('#root') /* 替代 el */
// app.text = 'text1'

let i = 0
setInterval(() => {
  // app.$options.data.text += 1 /* useless */
  // app.$data.text += 1 /* usefull */

  i++
  /* 异步渲染, 值更新会放入一个异步队列里，一段时间后一次性渲染队列里全部值 */
  // app.text += 1
  // app.text += 1
  // app.text += 1
  // app.text += 1
  // app.text += 1
  /* $nextTick(): 异步渲染, 在下次 DOM 更新循环结束之后执行延迟回调 */
  /* a = 5 -> 10 -> 15 ... */

  // app.obj.a = i /* obj 没定义 a 就赋值, 形成非响应式 */
  // app.$forceUpdate() /* 强制组件渲染一次, 不建议使用 */

  app.$set(app.obj, 'a', i) /* 设置值 */
  // app.$delete(app.obj, 'a', i) /* 删除值 */
}, 1000)

// console.log(app.$data) /* text, object */
// console.log(app.$props) /* undefined */
// console.log(app.$el) /* <div>0</div> */
// console.log(app.$options) /* new Vue 传入的整个对象 */
/* 下次有值改变时候渲染 */
// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// }
// console.log(app.$root === app) /* true */
// console.log(app.$children)
// console.log(app.$slots) /* 插槽 */
// console.log(app.$scopedSlots) /* 插槽 */
// console.log(app.$refs) /* 定位组件, 节点 */
// console.log(app.$isServer)

/* app.$watch 要手动注销, 相当于 watch(){}, 差别在于是否能主动注销, 该方法要手动注销 */
// const unWatch = app.$watch('text', (newText, oldText) => {
//   console.log(`$(newText) : $(oldText)`)
// })
// setTimeout(() => {
//   unWatch()
// }, 2000)

/* 监听 */
// app.$on('test', (a, b) => {
//   console.log(`test emited ${a} ${b}`)
// })
/* 只监听一次 */
// app.$once('test', (a, b) => {
//   console.log(`test emited ${a} ${b}`)
// })
// setInterval(() => {
//   app.$emit('test', 1, 2) /* 触发 */
// }, 1000)

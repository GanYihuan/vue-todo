import Vue from 'vue'

const app = new Vue({
  // el: '#root', // 挂载点
  template: '<div ref="div">{{text}} {{obj.a}}</div>', // template 会渲染到 #root 里面
  data: {
    text: 0,
    obj: {} // 没定义 a
  },
  mounted() {
    this.a() // this: 相当于 app, app.a(), app. 就是 vue 实例
  },
  watch: { // watch 自动注销
    text(newText, oldText) {
      console.log(`${newText} : ${oldText}`)
    }
  }
})
const unWatch = app.$watch('text', (newText, oldText) => { // app.$watch 相当于 watch(){}, 差别在于是否能主动注销, 该方法要手动注销
  console.log(`$(newText) : $(oldText)`)
})
setTimeout(() => {
  unWatch()
}, 2000)
app.$mount('#root') // 替代 el
app.text = 'text1'

let i = 0
setInterval(() => {
  i++
  app.obj.a = i // obj 没定义 a 就赋值, 形成非响应式
  app.$forceUpdate() // 强制组件渲染一次, 不建议使用
  app.$set(app.obj, 'a', i) // 设置值 响应式
  app.$delete(app.obj, 'a', i) // 删除值
  // 异步渲染, 值更新会放入一个异步队列里，一段时间后一次性渲染队列里全部值
  app.text += 1
  app.text += 1
  app.text += 1
  app.text += 1
  app.text += 1
  // $nextTick(): 异步渲染, 在下次 DOM 更新循环结束之后执行延迟回调
  // a = 5 -> 10 -> 15 ...
}, 1000)

console.log(app.$el) // <div>0</div> 挂载的 html 节点的引用
console.log(app.$props)
console.log(app.$data)
console.log(app.$options) // new Vue 传入的整个对象
app.$options.data.text += 1 // useless
app.$data.text += 1 // usefull
app.$options.render = h => { // 下次有值改变时候渲染
  return h('div', {}, 'new render function')
}
console.log(app.$root === app) // true
console.log(app.$children) // <item><div></div></item> $children -> div
console.log(app.$slots) // 插槽
console.log(app.$scopedSlots) // 插槽
console.log(app.$refs) // 定位组件, 节点
console.log(app.$isServer) // 判断是否是服务端渲染

app.$on('test', (a, b) => { // 监听
  console.log(`test emited ${a} ${b}`)
})
app.$once('test', (a, b) => { // 只监听一次
  console.log(`test emited ${a} ${b}`)
})
setInterval(() => {
  app.$emit('test', 1, 2) // 触发
}, 1000)

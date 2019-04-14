import Vue from 'vue'

const app = new Vue({
  // el: '#root', // Mount point
  template: '<div ref="div">{{text}} {{obj.a}}</div>', // template will render #root inside
  pros : {
    type : String,
    default: 'text'
  },
  data() {
    text: 0,
    obj: {} // no define a
  },
  mounted() {
    this.a() // this: equal app, app. is vue instance
  },
  watch: { // auto distory
    text(newText, oldText) {
      console.log(`${newText} : ${oldText}`)
    }
  }
})
const unWatch = app.$watch('text', (newText, oldText) => { // app.$watch equal watch: {}, can't auto distory
  console.log(`$(newText) : $(oldText)`)
})
setTimeout(() => {
  unWatch()
}, 2000)
app.$mount('#root') // replace el
app.text = 'text1'

let i = 0
setInterval(() => {
  i++
  app.obj.a = i // obj no difine a, not reaction
  app.$forceUpdate() // foce componet render once
  app.$set(app.obj, 'a', i) // set value, reaction
  app.$delete(app.obj, 'a', i) // delete value
  // async render, Value updates are placed in an asynchronous queue, Render all values ​​in the queue once after a while
  app.text += 1
  app.text += 1
  app.text += 1
  app.text += 1
  app.text += 1
  // $nextTick(): async render, At the next time DOM Perform a delayed callback after the update loop ends
  // a = 5 -> 10 -> 15 ...
}, 1000)

console.log(app.$props) // text
console.log(app.$data)

console.log(app.$options) // new Vue The entire object passed in
app.$options.data.text += 1 // useless
app.$data.text += 1 // usefull
app.$options.render = h => { // Render next time there is a value change
  return h('div', {}, 'new render function')
}

console.log(app.$el) // <div>0</div> Mounted html Node reference
console.log(app.$root === app) // true
console.log(app.$children) // <item><div></div></item> $children -> div
console.log(app.$refs) // Positioning component, node
console.log(app.$isServer) // Determine if it is server-side rendering

console.log(app.$slots) // Slot
console.log(app.$scopedSlots) // Slot

app.$on('test', (a, b) => { // Listen
  console.log(`test emited ${a} ${b}`)
})
app.$once('test', (a, b) => { // Listen only once
  console.log(`test emited ${a} ${b}`)
})
setInterval(() => {
  app.$emit('test', 1, 2) // trigger
}, 1000)

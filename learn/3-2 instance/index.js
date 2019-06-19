import Vue from 'vue'

const app = new Vue({
  el: '#root', // Mount point
  template: '<input type="text" @input="handleInput" :value="value1"></div>', // template will render #root inside
  model: {
    prop: 'value1', // defined prop name, value -> value1
    event: 'change' // defined event name, input -> change
  },
  props: {
    active: {
      required: true, // must pass
      type: Boolean, // must bollean
      default: true, // if not pass, use default
      validator(value) { // data validator
        return typeof value === 'boolean'
      }
    },
    propOne: String
  },
  data() { // function
    text: 0,
    propOned: this.propOne, // parent data is converted to the child data, child cannot modify parent data
    obj: {} // not define a
  },
  mounted() {
    this.a() // this = app
  },
  methods: {
    handleInput(e) {
      this.$emit('change', e.target.value)
    }
  },
  watch: { // auto destroy
    text(newText, oldText) {
      console.log(`${newText} : ${oldText}`)
    }
  },
  filters: {
    formatDate(time) {
      const date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd hh:mm')
    }
  }
})

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
  // $nextTick(): async render, at the next time DOM perform a delay callback after the update loop ends
  // a = 5 -> 10 -> 15 ...
}, 1000)

console.log(app.$props) // text
console.log(app.$data) // text: 0, obj: {}

console.log(app.$root === app) // true
console.log(app.$options) // new Vue
app.$options.data.text += 1 // useless
app.$data.text += 1 // usefull
app.$options.render = h => { // render next time value change
  return h('div', {}, 'new render function')
}

console.log(app.$el) // <div>0</div>, mount html node reference
console.log(app.$children) // <item><div></div></item>, $children = div
console.log(app.$refs) // Positioning component, node
console.log(app.$isServer) // determine is server-side render ?
console.log(app.$slots) // Slot
console.log(app.$scopedSlots) // Slot

const unWatch = app.$watch('text', (newText, oldText) => { // app.$watch = watch: {}, can't auto destory
  console.log(`$(newText) : $(oldText)`)
})
setTimeout(() => {
  unWatch()
}, 2000)

app.$on('test', (a, b) => { // Listen
  console.log(`test emited ${a} ${b}`)
})
app.$once('test', (a, b) => { // Listen only once
  console.log(`test emited ${a} ${b}`)
})
setInterval(() => {
  app.$emit('test', 1, 2) // trigger
}, 1000)

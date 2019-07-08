import Vue from 'vue'

// The lifecycle function is a function that is executed at a certain point in time. vm: vue instcance
const app = new Vue({
  el: '#root',
  data() {
    return {
      test: 'hello vue'
    }
  },
  // init event & lifecycle
  beforeCreate() { // dom not complete, don't modify data, server side render
  },
  // init injections & reactivity
  created() { // dom not complete, can modify data, data not monitor, server side render
  },
  beforeMount() { // Data and templates are about to be combined with the moment before being mounted on the page, dom Related, No data, Server rendering is not called(Server rendering does not dom)
    // <div></div>
    console.log(this.$el, 'beforeMount')
  }, // Will bubble up, Used in production environment, Collecting errors
  // create vm.$el and replace 'el' with it
  mounted() { // dom Related, Have data, Server rendering is not called, Server rendering does not dom, mounted after, Execution of the life cycle is required for external triggering
    // <div>hello world</div>
    console.log(this.$el, 'mounted')
  },
  // Mounted
  // when data changes
  beforeUpdate() {
    console.log(this, 'beforeUpdate')
  },
  // virtual DMO re-render and patch Data updates are invoked
  updated() {
    console.log(this, 'updated')
  },
  activated() { // When used <keep-alive></keep-alive>, App.vue Activate add-on, Will run when the page is redisplayed
  },
  deactivated() { // deactivated(){}, contrast activated opposite
  },
  // when vm.$destory() is called
  beforeDestroy() {
  },
  destroyed() { // teardown watches, child components and events listeners
  },
  // has 'el' option ? N: when vm.$mount(el) is called
  // Y: has 'template' option ? N: compile el's outHTML as template
  // Y: compile template into render function
  template: '<div>{{test}}</div>',
  render(h) { // h: createElement() -> time consuming, low efficiency
    return throw new TypeError('render error')
  },
  renderError(h, err) { // h: createElement() Used in development environment, Don't care about subcomponents
    return h('div', {}, err.stack)
  },
  errorCaptured() {}
})

app.$mount('#root')
// setInterval(() => { // Data Update
//   app.text = app.text += 1
// }, 1000)

setTimeout(() => {
  app.$destroy()
}, 1000)

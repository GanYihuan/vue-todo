import Vue from 'vue'
import Vuex from 'vuex'
import App from './app.vue'
import createStore from './store/store'
import './assets/styles/global.styl'

/* How to use the plugin, Allow insertion router into new Vue */
Vue.use(Vuex)

const store = createStore()

/* dynamic regist module */
store.registerModule('c', {
  state: {
    text: 3
  }
})
/* dynamic unbinding module */
store.unregisterModule('c', {
  state: {
    text: 3
  }
})

/* when state.count change, (newCount) will invoked, simular getters */
store.watch(
  state => state.count + 1,
  newCount => {
    console.log('new count watched:', newCount)
  }
)

/* mutation invoked */
store.subscribe((mutation, state) => {
  console.log(mutation.type)
  /* payload: mutation received param */
  console.log(mutation.payload)
})

/* actions invoked */
store.subscribeAction((action, state) => {
  console.log(action.type)
  /* payload: actions received param */
  console.log(action.payload)
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#root')

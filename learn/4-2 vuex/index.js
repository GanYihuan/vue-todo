/*
 * @Description:
 * @version:
 * @Author: GanEhank
 * @Date: 2019-03-22 04:51:07
 * @LastEditors: GanEhank
 * @LastEditTime: 2019-08-15 03:37:04
 */
import Vue from 'vue'
import Vuex from 'vuex'
import App from './app.vue'
import createStore from './store/store'
import './assets/styles/global.styl'

const store = createStore()

Vue.use(Vuex) // How to use the plugin, Allow insertion router into new Vue

store.registerModule('c', { // dynamic regist module
  state: {
    text: 3
  }
})
store.unregisterModule('c', { // dynamic unbinding module
  state: {
    text: 3
  }
})
store.watch( // when state.count change, (newCount) will invoked, simular getters
  state => state.count + 1,
  newCount => {
    console.log('new count watched:', newCount)
  }
)
store.subscribe((mutation, state) => { // mutation invoked
  console.log(mutation.type)
  console.log(mutation.payload) // payload: mutation received param
})
store.subscribeAction((action, state) => { // actions invoked
  console.log(action.type)
  console.log(action.payload) // payload: actions received param
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#root')

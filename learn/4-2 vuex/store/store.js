/*
 * @Description:
 * @version:
 * @Author: GanEhank
 * @Date: 2019-03-22 04:51:07
 * @LastEditors: GanEhank
 * @LastEditTime: 2019-08-15 03:38:33
 */
import Vuex from 'vuex'
import defaultState from './state/state'
import getters from './getters/getters'
import mutations from './mutations/mutations'
import actions from './actions/actions'

const isDev = process.env.NODE_ENV === 'development' // External cannot modify data, Can only be modified by mutation, Development environment use

export default () => {
  const store = new Vuex.Store({
    strict: isDev,
    state: defaultState,
    mutations,
    getters,
    actions,
    plugins: [ // define vuex plugin
      store => {
        console.log('my plugin invoked')
      }
    ],
    modules: { // Module function, Modules have different scopes
      a: {
        namespaced: true, // Can write the same mutation
        state: {
          text: 1
        },
        getters: {
          textPlus(state, rootState) { // rootState: global state
            return state.text + rootState.b.text
          }
        },
        mutations: {
          updateText(state, text) {
            state.text = text
          }
        },
        actions: {
          add({ state, commit, rootState }) {
            commit('updateCount', { num: 56789 }, { root: true }) // {root:true}: global invoked vuex/mutation
          }
        }
      },
      b: {
        namespaced: true,
        state: {
          text: 2
        },
        actions: {
          testAction({ state, commit, rootState }) {
            commit('a/updateText', 'test text', { root: true })
          }
        }
      }
    }
  })
  if (module.hot) { // vuex Hot replacement function
    module.hot.accept(
      [
        './state/state',
        './mutations/mutations',
        './actions/actions',
        './getters/getters'
      ],
      () => {
        const newState = require('./state/state').default
        const newMutations = require('./mutations/mutations').default
        const newActions = require('./actions/actions').default
        const newGetters = require('./getters/getters').default
        store.hotUpdate({
          state: newState,
          mutations: newMutations,
          getters: newGetters,
          actions: newActions
        })
      }
    )
  }
  return store
}

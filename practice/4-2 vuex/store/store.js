import Vuex from 'vuex'
import defaultState from './state/state'
import getters from './getters/getters'
import mutations from './mutations/mutations'
import actions from './actions/actions'

/* External cannot modify data, Can only be modified by mutation, Development environment use */
const isDev = process.env.NODE_ENV === 'development'

export default () => {
  const store = new Vuex.Store({
    strict: isDev,
    state: defaultState,
    mutations,
    getters,
    actions,
    /* define vuex plugin */
    plugins: [
      store => {
        console.log('my plugin invoked')
      }
    ],
    /* Module function */
    modules: {
      /* Modules have different scopes */
      a: {
        /* Can write the same mutation */
        namespaced: true,
        state: {
          text: 1
        },
        getters: {
          /* rootState global state */
          textPlus(state, getters, rootState) {
            return state.text + rootState.b.text
          }
        },
        mutations: {
          updateText(state, text) {
            console.log('a.state', state)
            state.text = text
          }
        },
        actions: {
          add({ state, commit, rootState }) {
            /* {root:true}: global invoked vuex/mutation */
            commit('updateCount', { num: 56789 }, { root: true })
          }
        }
      },
      /* Modules have different scopes */
      b: {
        /* Can write the same mutation */
        namespaced: true,
        state: {
          text: 2
        },
        actions: {
          testAction({ commit }) {
            /* {root:true}: global invoked vuex/mutation */
            commit('a/updateText', 'test text', { root: true })
          }
        }
      }
    }
  })
  /* vuex Hot replacement function */
  if (module.hot) {
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

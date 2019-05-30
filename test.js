import router from "./practice/4-1 router/router";

router.beforeEach((to, from, next))

beforeEnter((to, from, next))

beforeRouteEnter((to, from, next))
beforeRouteUpdate((to, from, next))
beforeRouteLeave((to, from, next))

router.beforeResolve((to, from, next))

router.afterEach((to, from, next))


modules: {
  a: {
    namespaced: true,
    state: {
      text: 1
    },
    getters: {
      text(state, rootState) {
        return state.text + rootState.b.text
      }
    },
    mutations: {
      update(state, text) {
        state.text = text
      }
    },
    actions: {
      addEventListener({state, commit, rootState}) {
        commit('', {num:'', {root: true}})
      }
    }
  }
}

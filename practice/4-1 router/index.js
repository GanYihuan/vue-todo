import Vue from 'vue'
import VueRouter from 'vue-router'
import createRouter from './config/router'
import App from './app.vue'
import './assets/styles/global.styl'

Vue.use(VueRouter)
const router = createRouter()

/* Routing guard, data verify, route change will invoked */
router.beforeEach((to, from, next) => {
  console.log('1. before each invoked')
  next()
  if (to.fullPath === '/app') {
    // route jump, can write router-view define attribute
    next({ path: '/login' })
  } else {
    next()
  }
})

/* Routing guard */
/*
2. routes.js/beforeEnter()
3. todo.vue/beforeRouteEnter()
*/

router.beforeResolve((to, from, next) => {
  console.log('4. before resolve invoked')
  next()
})

/* Routing guard, trigger after jump */
router.afterEach((to, from) => {
  console.log('5. after each invoked')
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#root')

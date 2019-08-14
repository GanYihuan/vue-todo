/*
 * @Description:
 * @version:
 * @Author: GanEhank
 * @Date: 2019-03-22 04:51:07
 * @LastEditors: GanEhank
 * @LastEditTime: 2019-08-15 03:32:11
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import createRouter from './config/router'
import App from './app.vue'
import './assets/styles/global.styl'

const router = createRouter()

Vue.use(VueRouter)

/* Routing guard */
router.beforeEach((to, from, next) => { // Data validation, Triggered when the route changes
  console.log('1. before each invoked')
  next()
  if (to.fullPath === '/app') {
    next({ path: '/login' }) // route jump, can write router-view define attribute
  } else {
    next()
  }
})
/*
2. routes.js/beforeEnter()
3. todo.vue/beforeRouteEnter()
*/
router.beforeResolve((to, from, next) => {
  console.log('4. before resolve invoked')
  next()
})
router.afterEach((to, from) => { // Trigger after route jump
  console.log('5. after each invoked')
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#root')

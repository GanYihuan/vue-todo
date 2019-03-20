import Vue from 'vue'
import VueRouter from 'vue-router'
import createRouter from './config/router'
import App from './app.vue'
import './assets/styles/global.styl'

Vue.use(VueRouter)
const router = createRouter()

router.beforeEach((to, from, next) => { // 数据校验, 路由改变时触发
  console.log('1. before each invoked')
  next()
  if (to.fullPath === '/app') {
    next({ path: '/login' }) // route jump, can write router-view define attribute
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

router.afterEach((to, from) => { // 路由跳转后触发
  console.log('5. after each invoked')
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#root')

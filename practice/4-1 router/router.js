import Router from 'vue-router'
import routes from './routes'

export default () => {
  // project requires server-side rendering to prevent memory overflows, using method calls to return the Router
  return new Router({
    routes,
    mode: 'history', // 去除地址栏的哈希 #
    base: '/base/', // 地址栏自动添加 localhost:8000/base/ 前缀
    linkActiveClass: 'active-link', // 含有激活路由时, <router-link/> 添加 className=active-link
    linkExactActiveClass: 'exact-active-link', // 激活路由完全匹配 /login/exact <router-link/> 添加 className=exact-active-link
    scrollBehavior(to, from, savedPosition) { // 路由跳转时页面滚动到指定位置
      if (savedPosition) {
        return savedPosition
      } else {
        return { // 指定位置
          x: 0,
          y: 0
        }
      }
    },
    fallback: true, // 当浏览器不支持单页应用时, 默认返回哈希方式, 默认设为 true 如果设置成 false, 单页面变成多页应用, 耗时
    parseQuery(query) {}, // query -> url: ?a=111&b=222 string => json(object)
    stringifyQuery(obj) {} // json(object) => string
  })
}

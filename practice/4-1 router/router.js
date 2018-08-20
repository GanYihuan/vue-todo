import Router from 'vue-router'
import routes from './routes'

export default () => {
  /* project requires server-side rendering to prevent memory overflows, using method calls to return the Router */
  return new Router({
    routes,
    /* 去除地址栏的哈希 # */
    mode: 'history',
    /* 地址栏自动添加 localhost:8000/base/ 前缀 */
    base: '/base/',
    /* 路由含有 /login 就能 <router-link/> 添加 className=active-link */
    linkActiveClass: 'active-link',
    /* 路由完全匹配到 /login/exact 就能 <router-link/> 添加 className=exact-active-link */
    linkExactActiveClass: 'exact-active-link',
    /* 路由跳转时页面滚动到指定位置 */
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        // 指定位置
        return {
          x: 0,
          y: 0
        }
      }
    },
    /* 当浏览器不支持单页应用时, 默认返回哈希方式, 默认设为 true */
    /* 如果设置成 false, 单页面变成多页应用, 耗时 */
    fallback: true,
    /* query->url: ?a=111&b=222 */
    /* string => json(object) */
    parseQuery(query) {},
    /* json(object) => string */
    stringifyQuery(obj) {}
  })
}

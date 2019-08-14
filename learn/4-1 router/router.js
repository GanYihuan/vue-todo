/*
 * @Description:
 * @version:
 * @Author: GanEhank
 * @Date: 2019-03-22 04:51:07
 * @LastEditors: GanEhank
 * @LastEditTime: 2019-08-15 03:34:44
 */
import Router from 'vue-router'
import routes from './routes'

export default () => {
  // project requires server-side rendering to prevent memory overflows, using method calls to return the Router
  return new Router({
    routes,
    mode: 'history', // Remove the hash of the address bar #
    base: '/base/', // The address bar is automatically added localhost:8000/base/ Prefix
    linkActiveClass: 'active-link', // When there is an active route, <router-link/> add className=active-link
    linkExactActiveClass: 'exact-active-link', // Activate route exact match /login/exact <router-link/> add className=exact-active-link
    scrollBehavior(to, from, savedPosition) { // Page scrolls to the specified location when the route jumps
      if (savedPosition) {
        return savedPosition
      } else {
        return { // Specified location
          x: 0,
          y: 0
        }
      }
    },
    fallback: true, // When the browser does not support single page applications, Default return hash mode, Default setting true, If set to false, Single page becomes a multi-page application, time consuming
    parseQuery(query) {}, // query -> url: ?a=111&b=222 string => json(object)
    stringifyQuery(obj) {} // json(object) => string
  })
}

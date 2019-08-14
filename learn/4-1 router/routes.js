/*
 * @Description:
 * @version:
 * @Author: GanEhank
 * @Date: 2019-03-22 04:51:07
 * @LastEditors: GanEhank
 * @LastEditTime: 2019-08-15 03:35:08
 */
import Login from '../views/login/login.vue'

export default [
  { // Default route jump
    path: '/',
    redirect: '/app'
  },
  {
    // path: '/app', // When the route matches successfully, at <router-view></router-view> Render components
    path: '/app/:id', // transfer router parameter, matches route: /app/xxx
    props: true, // transfer router parameter ':id' to <RankList/>, <RankList/> can use props get :id, decoupling $route
    // props: { id: '456' }, // pass route params id=456
    // props: (route) => ({ id: route.query.b }),
    /* router-view add inside name=a */
    // components: {
    //   default: Todo,
    //   /* app.js: <router-view name="a"/> */
    //   a: Login
    // },
    component: () => {
      /* Asynchronous routing, Save load time */
      /* webpackChunkName: "todo-view" */
      import('../views/todo/todo.vue')
    },
    name: 'app', // Route naming, <router-link :to="{name: 'app'}">app</router-link>
    meta: { // Save routing information, beneficial to SEO
      title: 'this is app',
      description: '123'
    },
    beforeEnter(to, from, next) { // Trigger before route entry
      console.log('2. app route before enter')
      next()
    },
    children: [ // <router-view></router-view> put into todo component inside, show sub-route
      {
        path: 'test',
        component: Login
      }
    ]
  },
  {
    // path: '/login/exact',
    path: '/login',
    // component: Login,
    component: () => {
      /* Async routing Save load time */
      import(/* webpackChunkName: "login-view" */ '../views/login/login.vue')
    }
  }
]

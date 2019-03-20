// import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [
  { // 默认路由跳转
    path: '/',
    redirect: '/app'
  },
  {
    // path: '/app', // 当路由匹配成功时, 在 <router-view></router-view> 渲染出组件
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
      /* 异步路由, Save load time */
      /* webpackChunkName: "todo-view" */
      import('../views/todo/todo.vue')
    },
    name: 'app', // 路由命名 <router-link :to="{name: 'app'}">app</router-link>
    meta: { // 保存路由信息, 有利于 SEO
      title: 'this is app',
      description: '123'
    },
    beforeEnter(to, from, next) { // 路由进入前触发
      console.log('2. app route before enter')
      next()
    },
    children: [ // router-view 放置在 todo 组件里面显示子路由
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

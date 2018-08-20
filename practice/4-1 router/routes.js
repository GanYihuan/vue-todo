// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

export default [
  /* default route jump */
  {
    path: '/',
    redirect: '/app'
  },
  {
    /* When the route matches successfully, Will place the component in <router-view></router-view> */
    path: '/app',
    /* transfer router parameter, matches route: /app/xxx */
    // path: '/app/:id',
    /* transfer router parameter ':id' to <RankList/>, <RankList/> can use props get :id, decoupling $route */
    props: true,
    /* two other ways of writing */
    // props: {
    //   id: '456'
    // },
    // props: (route) => ({ id: route.query.b }),
    /* router-view add inside name=a, correspond to different interfaces */
    // components: {
    //   default: Todo,
    /* app.js: <!-- <router-view name="a"/> --> */
    //   a: Login
    // },
    component: () => {
      /* Async routing, Save load time */
      /* webpackChunkName: "todo-view" */
      import('../views/todo/todo.vue')
    },
    name: 'app',
    /* 保存路由信息, 有利于SEO */
    meta: {
      title: 'this is app',
      description: 'asdasd'
    },
    /* before enter route invoked */
    beforeEnter(to, from, next) {
      console.log('2. app route before enter')
      next()
    }
    /* router-view 放置在 todo 组件里面显示子路由 */
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
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

# imooc-todo

> vue核心技术 Vue+Vue-Router+Vuex+SSR实战精讲

## use method

```console
git clone https://github.com/Jokcy/vue-todo-tech.git
npm install
npm run dev
```

## Technical vulnerability

1. Koa
2. Webpack
3. ES6

## 2-1 项目目录升级-一个正式项目的目录结构

```console
<!-- webpack-merge provides a merge function that concatenates arrays and merges objects creating a new object. -->
npm i webpack-merge -D
npm i rimraf -D
```

## 2-2 vue-loader 配置

```console
npm i vue-style-loader -D
```

- app.vue

```js
<docs>
## 文档
</docs>
```

## 2-3 css module 配置

- **vue-loader.config.js**
- **header.vue**

## 2-4 安装使用eslint和editorconfig以及precommit

```console
npm i eslint eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node -D
npm i eslint-plugin-html -D
npm i eslint-loader babel-eslint -D
<!-- git相关优化 -->
npm i husky -D
```

- **package.json**

```json
"lint": "eslint --ext .js --ext .jsx --ext .vue client/",
"lint-fix": "eslint --fix --ext .js --ext .jsx --ext .vue client/",
"precommit": "npm run lint-fix",
```

- **editorconfig** 编辑器配置

## 2-5: webpack4 升级

- git branch webpack4

```console
npm uninstall webpack webpack-dev-server webpack-merge -D
cnpm i webpack webpack-dev-server webpack-merge webpack-cli -D
```

- ```npm i eslint-loader@^2.0.0 -D```

## 3-2 Vue 实例

- vue 实例属性
- vue 实例方法

## 3-3 Vue 的生命周期方法

- 看懂一张图

## 3-4 Vue 的数据绑定

- template 数据绑定

## 3-5 computed 和 watch 使用场景和方法

## 3-6 Vue 的原生指令

## 3-7 Vue 的组件之组件的定义

- props 属性定义
- data 使用函数来定义

## 3-8 Vue 的组件之组件的继承

- Vue.extend
- propsData: 传递数据给子组件
- parent

## 3-9 Vue 的组件之自定义双向绑定

- `props: ['value1'], this.$emit('change', e.target.value), v-model="value"`
- `/* 自定义 prop 名称 */
  model: {
    prop: 'value1',
    event: 'change'
  },`

## 3-10 Vue 的组件之高级属性

- slot, slot-scope
- $parent, provide()

## 3-11 Vue 的组件之 render function

- render() 原理

## 4-1 Vue-router 之集成

```console
npm i vue-router -S
```

## 4-2 Vue-router 之配置

- history 路由不能匹配解决方法
- webpack.config.client.js

```js
const devServer = {
  historyApiFallback: {
    index: '/public/index.html'
  },
}
```

## 4-3 Vue-router 之路由参数传递

## 4-4 Vue-router 之导航守卫

- 异步路由，节省加载时间, 修改.babelrc

```console
npm i babel-plugin-syntax-dynamic-import -D
```

## 4-5 Vuex 之集成

```console
npm i vuex -S
```

## 4-6 Vuex 之 state 和 getters

- 使用 ...mapState() 等新特性写法

```console
npm i babel-preset-stage-1 -D
```

- **.barbelrc**

```json
"presets": [
    "stage-1"
],
```

## 4-7 Vuex 之 mutation 和 action

## 4-8 Vuex 之 模块

- 热更替功能

## 4-9 Vuex 之其他一些 API 和配置

## 5-1 开发时服务端渲染的配置和原理

- 生成一个 json 文件, 处理逻辑

```console
npm i vue-server-renderer -S
```

- webpack.config.server.js

## 5-2 使用koa实现node server

> ?
- npm i koa-router -S
- npm i axios -S
- npm i memory-fs -D
- npm i ejs -S

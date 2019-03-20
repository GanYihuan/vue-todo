<template>
  <div id="app">
    <!-- router-link it's <a></a> tag -->
    <router-link :to="{name: 'app'}">app</router-link>
    <router-link to="/app/123">app123</router-link>
    <transition name="fade" mode="out-in">
      <!-- 子路由内容渲染到这里 -->
      <router-view/>
    </transition>
    <router-view name="a"/>
  </div>
</template>

<script>
export default {
  props: ['id'], // 获得路由参数: id
  mounted() {
    console.log(this.id) // routes.js `Setting props: true`, Pass routing parameters :id
    console.log(this.$route) // 获得路由信息 (routes.js -> path: '/app/:id', )
  }
}
</script>

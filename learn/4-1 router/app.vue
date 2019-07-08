<template>
  <div id="app">
    <!-- router-link it's <a></a> tag -->
    <router-link :to="{name: 'app'}">
      app
    </router-link>
    <router-link to="/app/123">
      app123
    </router-link>
    <transition
      name="fade"
      mode="out-in"
    >
      <!-- Sub-route content is rendered here -->
      <router-view />
    </transition>
    <router-view name="a" />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    }
  }, // Obtain routing parameters: id
  mounted() {
    console.log(this.id) // routes.js `Setting props: true`, Pass routing parameters :id
    console.log(this.$route) // Obtain routing information (routes.js -> path: '/app/:id', )
  }
}
</script>

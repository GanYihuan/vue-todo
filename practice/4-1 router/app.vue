<template>
  <div id="app">
    <!-- router-link Equivalent to a tag -->
    <router-link :to="{name: 'app'}">app</router-link>
    <router-link to="/app/123">app123</router-link>
    <router-link to="/app/456">app456</router-link>
    <router-link to="/login">login</router-link> 
    <router-link to="/login/exact">login exact</router-link> 
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <router-view name="a"/>
  </div>
</template>

<script>
export default {
	/* Get routing parameters */
	props: ['id'],
	mounted() {
		/* routes.js Setting props: true, Pass routing parameters :id */
		/* Get routing parameters */
		console.log(this.id)
		/* Get routing information */
		console.log(this.$route)
	}
}
</script>

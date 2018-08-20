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
    <!-- <router-view name="a"/> -->
  </div>
</template>

<script>
export default {
	/* Get routing parameters */
	// props: ['id'],
	mounted() {
		/* routes.js Setting props: true, Pass routing parameters :id */
		/* Get routing parameters */
		// console.log(this.id)
		/* Get routing information */
		// console.log(this.$route)
		/* get vuex store */
		// console.log(this.$store)
		// let i = 1
		/* dispatch: trigger vuex/actions */
		// this.$store.dispatch(updateCountAsync, {
		//   num: 5,
		//   time: 2000
		// })
		// this.updateCountAsync({
		//   num: 5,
		//   time: 2000
		// })
		// this['a/updateText']('123')
		/* invoked vuex/actions */
		// this['a/add']()
		// this['b/testAction']()
		// this.testAction()
		// this.$store.state.count = 3
		// setInterval(() => {
		/* commit: invoked vuex/mutations */
		//   this.$store.commit('updateCount', i ++)
		//   this.updateCount({
		//     num: i++,
		//     num2: 2
		//   })
		// }, 1000)
	}
}
</script>

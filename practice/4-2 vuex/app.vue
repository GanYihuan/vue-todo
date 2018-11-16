<script>
/* grammar sugar: babel-preset-stage-1 */
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
// console.log(Header.__docs)

export default {
	mounted() {
		/* routes.js Setting props: true, Pass routing parameters :id */
		/* get vuex store */
		console.log(this.$store)
		let i = 1
		/* dispatch: invoked vuex/actions */
		// this.$store.dispatch(updateCountAsync, {
		// 	num: 5,
		// 	time: 2000
		// })
		this.updateCountAsync({
			num: 5,
			time: 2000
		})
		this['a/updateText']('123')
		this['a/add']()
		this['b/testAction']()
		this.testAction()
		// this.$store.state.count = 3
		setInterval(() => {
			/* commit: invoked vuex/mutations */
			// this.$store.commit('updateCount', i++)
			this.updateCount({
				num: i++,
				num2: 2
			})
		}, 1000)
	},
	methods: {
		...mapActions(['updateCountAsync', 'a/add', 'b/testAction']),
		...mapMutations(['updateCount', 'a/updateText']),
		notify() {
			this.$notify({
				content: 'test $notify',
				btn: 'close'
			})
		}
	},
	computed: {
		/* Use state data inside vuex */
		// ...mapState(['loading']),
		/* get vuex/state */
		...mapState({
			// counter: 'count',
			counter: state => state.count,
			/* Call difference module */
			textA: state => state.a.text,
			textC: state => state.c.text
		}),
		/* get vuex/getters */
		...mapGetters({
			fullName: 'fullName',
			textPlus: 'a/textPlus'
		}),
		count() {
			/* get vuex store */
			return this.$store.state.count
		},
		textA() {
			/* invoked module b */
			return this.$store.state.b.text
		},
		fullName() {
			return this.$store.getters.fullName
		}
	}
}
</script>

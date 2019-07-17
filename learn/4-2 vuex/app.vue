<script>
/* grammar sugar: babel-preset-stage-1 */
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
// console.log(Header.__docs)

export default {
  computed: {
    // ...mapState(['loading']), // Use state data inside vuex
    ...mapState({ // get vuex/state
      // counter: 'count',
      counter: state => state.count,
      textA: state => state.a.text, // Call difference module
      textC: state => state.c.text
    }),
    ...mapGetters({ // get vuex/getters
      fullName: 'fullName',
      textPlus: 'a/textPlus'
    }),
    count() {
      return this.$store.state.count // get vuex store
    },
    textA() {
      return this.$store.state.b.text // invoked module b
    },
    fullName() {
      return this.$store.getters.fullName
    }
  },
  mounted() {
    /* routes.js Setting props: true, Pass routing parameters :id */
    console.log(this.$store) // get vuex store
    let i = 1
    // this.$store.dispatch(updateCountAsync, { // dispatch: invoked vuex/actions
    //  num: 5,
    //  time: 2000
    // })
    this.updateCountAsync({
      num: 5,
      time: 2000
    })
    this['a/updateText']('123') // invoked modules mutations
    this['a/add']()
    this['b/testAction']()
    this.testAction()
    // this.$store.state.count = 3
    setInterval(() => {
      // this.$store.commit('updateCount', i++) // commit: invoked vuex/mutations
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
  }
}
</script>

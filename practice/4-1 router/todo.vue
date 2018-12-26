<script>
export default {
  /* Routing guard */
  /* Trigger before route entry. Can't use this, vm alternative, set props=true */
  beforeRouteEnter(to, from, next) {
    console.log('3. todo before enter', this) // this => undefined
    next(vm => {
      console.log('after enter vm.id is ', vm.id)
    })
  },
  /* Routing guard */
  /* The same component is shown to trigger on different routes */
  /* example: transfter route parameter */
  beforeRouteUpdate(to, from, next) {
    console.log('todo update enter')
    next()
  },
  /* Routing guard */
  beforeRouteLeave(to, from, next) {
    console.log('todo leave enter')
    if (global.comfirm('are you sure leave this page?')) {
      next()
    }
    next()
  }
}
</script>

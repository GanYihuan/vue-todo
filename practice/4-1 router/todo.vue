<script>
export default {
  beforeRouteEnter(to, from, next) { // 路由进入触发. 不能使用 this, vm 可替代(设置 props=true)
    console.log('3. todo before enter', this) // this => undefined
    next(vm => {
      console.log('after enter vm.id is ', vm.id)
    })
  },
  beforeRouteUpdate(to, from, next) { // The same component is shown to trigger on different routes, example: transfter route parameter
    console.log('todo update enter')
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log('todo leave enter')
    if (global.comfirm('are you sure leave this page?')) {
      next()
    }
    next()
  }
}
</script>

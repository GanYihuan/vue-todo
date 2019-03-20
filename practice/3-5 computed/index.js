import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <p>Name: {{name}}</p>
      <p>Name: {{getName()}}</p>
      <p>Number: {{number}}</p>
      <p>FullName: {{fullName}}</p>
      <p><input type="text" v-model="number"></p>
      <p>FirstName: <input type="text" v-model="firstName"></p>
      <p>LastName: <input type="text" v-model="lastName"></p>
      <p>Name: <input type="text" v-model="name"></p>
      <p>Obj.a: <input type="text" v-model="obj.a"></p>
    </div>
  `,
  data() {
    return {
      firstName: 'Jokcy',
      lastName: 'Lou',
      number: 0,
      fullName: '',
      obj: {
        a: 0
      }
    }
  },
  computed: { // 能缓存, 生成值
    name: {
      get() {
        console.log('new name')
        return `${this.firstName} ${this.lastName}`
      },
      set(name) { // 不推荐改原来的值
        const names = name.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
      // return `${this.firstName} ${this.lastName}`
    }
  },
  methods: {
    getName() {
      console.log('getName invoked')
      return `${this.firstName} ${this.lastName}`
    }
  },
  watch: { // 监听到有变化才执行, 生成值, 不推荐改原来的值
    firstName(newName, oldName) {
      this.fullName = newName + ' ' + oldName
    },
    'obj.a': { // 给 obj 赋值时才能监听到
      handler() { // 执行
        console.log('obj.a changed')
        this.obj.a += 1 // 不推荐改原来的值, 应该监听然后处理成另外一个值
      },
      immediate: true, // 立即执行 handler()
      deep: true // 针对 obj:{}, 监听整个 obj，高性能开销
    }
  }
})

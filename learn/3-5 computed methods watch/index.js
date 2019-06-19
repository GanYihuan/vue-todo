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
  computed: { // can cache, generate value
    name: {
      get() {
        return `${this.firstName} ${this.lastName}`
      },
      set(name) { // not recommend to change the original value
        const names = name.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
      // return `${this.firstName} ${this.lastName}`
    }
  },
  methods: {
    getName() {
      return `${this.firstName} ${this.lastName}`
    }
  },
  watch: { // listen change to execute, generate value, not recommend to change original value
    firstName(newName, oldName) {
      this.fullName = newName + ' ' + oldName
    },
    'obj.a': { // give obj.a value monitor
      handler() { // execute
        console.log('obj.a changed')
        this.obj.a += 1 // not recommend change original value, should listen and then processe into another value
      },
      immediate: true, // immediate execute handler()
      deep: true // for obj:{}, monitor whole obj:{}, high performance overhead
    }
  }
})

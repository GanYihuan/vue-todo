import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div
      :id="aaa"
      :class="[{active: isActive}]"
      :style="[styles, styles2]"
      @click="handleClick"
    >
      <p v-html="html"></p>
      <p>{{getJoinedArr(arr)}}</p>
    </div>
  `,
  data() {
    return {
      aaa: 'main',
      isActive: false,
      styles: {
        color: 'red',
        appearance: 'none'
      },
      styles2: {
        color: 'black'
      },
      html: '<span>123</span>',
      arr: [1, 2, 3]
    }
  },
  methods: {
    handleClick() {
      console.log('clicked')
    },
    getJoinedArr(arr) {
      return arr.join(' ')
    }
  }
})

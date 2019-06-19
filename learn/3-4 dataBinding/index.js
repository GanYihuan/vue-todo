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
      },
      styles2: {
        color: 'blue'
      },
      html: '<span>123</span>',
      arr: [1, 2, 3]
    }
  },
  methods: {
    handleClick() {
    },
    getJoinedArr(arr) {
      return arr.join(' ')
    }
  }
})

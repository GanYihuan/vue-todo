import Vue from 'vue'

new Vue({
  el: '#root',
  data() {
    return {
      arr: [2, 3],
      obj: {
        a: '123',
        b: '456',
        c: '789'
      },
      picked: '',
      text: 0,
      active: false,
      html: '<span>this is html</span>'
    }
  },
  methods: {
    clicked() {
      console.log('clicked')
    }
  },
  template: `
    <div>
      <div v-pre>Text: {{text}}</div> // Do not parse the result
      <div v-cloak>Text: {{text}}</div>
      <div v-once>Text: {{text}}</div> // Monitor only once
      <div>Text: {{text}}</div>
      <div v-show="active">Text</div> // Add class name display: none & display: show
      <div v-if="text === 0" @click="clicked">Else Text: {{text}}</div> // Add and delete nodes
      <div v-else-if="text > 2">else content > 2</div>
      <div v-else>else content</div>
      <div v-text="html"></div>
      <div v-html="html"></div>
      <input type="text" v-model.trim="text"/> // v-model Used by default input
      <input type="text" v-model.number="text"/>
      <input type="text" v-model.lazy="text"/>
      <input type="checkbox" v-model="active"/>
      <div>
        <input type="checkbox" v-model="arr" :value="1"/>
        <input type="checkbox" v-model="arr" :value="2"/>
        <input type="checkbox" v-model="arr" :value="3"/>
      </div>
      <div>
        <input type="radio" v-model="picked" value="one"/>
        <input type="radio" v-model="picked" value="two"/>
      </div>
      <ul>
        <li v-for="(item, index) in arr" :key="item">{{item}}:{{index}}</li>
      </ul>
      <ul>
        <li v-for="(val, key, index) in obj">{{val}}:{{key}}:{{index}}</li>
      </ul>
    </div>
  `
})

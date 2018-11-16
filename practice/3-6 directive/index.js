import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      // 不解析结果
      <div v-pre>Text: {{text}}</div>
      // 基本用不到
      <div v-cloak>Text: {{text}}</div>
      // 只监控一次
      <div v-once>Text: {{text}}</div>
      <div>Text: {{text}}</div>
      // 加类名 display: none 与 display: show
      <div v-show="active">Text</div>
      // 增删节点
      <div v-if="text === 0" @click="clicked">Else Text: {{text}}</div>
      <div v-else-if="text > 2">else content > 2</div>
      <div v-else>else content</div>
      <div v-text="html"></div>
      <div v-html="html"></div>
      // v-model 默认用在 input 标签上
      <input type="text" v-model.trim="text"/>
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
  `,
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
  }
})

import Vue from 'vue'
import App from './App.vue'

let app = new Vue({
  el: '#app',
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
})

export default app

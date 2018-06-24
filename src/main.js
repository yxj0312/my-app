// import Vue from 'vue'
import Vue from 'vue/dist/vue.js'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

let store = {
  user: {
      name:'John Doe'
    }
}
new Vue({
  el: '#app1',
  
  data: {
    foo: 'bar',
    shared: store
  }
})

new Vue({
  el: '#app2',
  
  data: {
    foo: 'otherbar',
    shared: store
  }
})
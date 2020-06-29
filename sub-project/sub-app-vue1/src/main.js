import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false




export function bootstrap() {
  this.$root = new Vue({
    render: h => h(App),
  })
}

export function mount(props) {
  this.$root.$mount(props.el)
}

export function unmount(props) {
  // this.$root.$mount(props.el)
  console.log(props)
}
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

const products = [
  { name: "Coca-Cola", price: 25, img: "cocacola.png" },
  { name: "Sprite", price: 22, img: "sprite.jpg"},
  { name: "Solo Super", price: 25, img: "solosuper.jpg"},
  { name: "Pepsi Max", price: 25, img: "pepsimax.jpg"},
  { name: "Fanta", price: 25, img: "fanta.png"},
  { name: "Villa", price: 25, img: "villa.jpeg"},
  { name: "7up", price: 25, img: "7up.jpg"},
  { name: "Tab X-Tra", price: 25, img: "tabxtra.png"},
  { name: "Urge", price: 25, img: "urge.jpg" },
  { name: "Coca-Cola Uten Sukker", price: 25, img: "colautensukker.jpg"}
]

let cart = []

Vue.prototype.$products = products
Vue.prototype.$cart = cart

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

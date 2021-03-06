import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

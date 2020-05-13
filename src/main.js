import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes'
import store from './store/index'


Vue.use(VueRouter);

new Vue({
  el: '#app',
  router: router,
  store,
  render: h => h(App)
})

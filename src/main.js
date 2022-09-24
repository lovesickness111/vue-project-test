import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@progress/kendo-theme-default/dist/all.css';
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

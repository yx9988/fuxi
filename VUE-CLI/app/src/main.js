import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
//引入common.css  @代表src，可以快速引用
import '@/assets/css/common.scss'
import '@/assets/js/rem.js'
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

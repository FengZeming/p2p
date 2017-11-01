// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'



/* ----------- Config ---------- */
import axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:7890/';

axios.defaults.baseURL = '/api';
// vue-scroller
import VueScroller from 'vue-scroller'
Vue.use(VueScroller);
/* ----------- Config ---------- */
Vue.config.productionTip = true;


router.push({path: '/home'});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});

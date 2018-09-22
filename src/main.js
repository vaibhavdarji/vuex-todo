// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import router from './router';
import { sync } from 'vuex-router-sync';
import Element from 'element-ui';
import 'element-theme-default';
import './assets/style.scss';
import store from './store';
import App from './App';

Vue.use(VueAxios, axios);
Vue.use(Element);
Vue.config.productionTip = false;

sync(store, router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
});

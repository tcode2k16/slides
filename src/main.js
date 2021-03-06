// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import App from './App';
import router from './router';
import store from './store';

// css
import './css/normalize.css';
import './css/skeleton.css';
import './css/font-awesome.min.css';

import './css/animations.css';


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});

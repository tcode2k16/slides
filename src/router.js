import Vue from 'vue';
import Router from 'vue-router';
import Index from './components/Index';
import Intro from './components/Intro';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/intro',
      name: 'intro',
      component: Intro,
    },
  ],
});

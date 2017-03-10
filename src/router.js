import Vue from 'vue';
import Router from 'vue-router';
import Index from './components/Index/Index';
import Intro from './components/Intro/Intro';
import OedipusFormative from './components/OedipusFormative/OedipusFormative';
import LeaderSummative from './components/LeaderSummative/LeaderSummative';
import Test from './components/Test/Test';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index,
    },
    {
      path: '/intro',
      name: 'intro',
      component: Intro,
    },
    {
      path: '/oedipus_formative',
      name: 'oedipus_formative',
      component: OedipusFormative,
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
    },
    {
      path: '/leader_summative',
      name: 'leader_summative',
      component: LeaderSummative,
    },
  ],
});

import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/Index.vue';
import Setting from './views/Setting.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/setting',
      component: Setting
    }
  ]
});

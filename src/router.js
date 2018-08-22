import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/Index.vue';
import Setting from './views/Setting.vue';
import About from './views/About.vue';
import Tags from './views/Tags.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/index',
      component: Index,
    },
    {
      path: '/setting',
      component: Setting,
    },
    {
      path: '/tags',
      component: Tags,
    },
    {
      path: '/about',
      component: About,
    },
  ],
});

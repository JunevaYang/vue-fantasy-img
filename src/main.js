import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import I18nPlugin from './i18n';

Vue.config.productionTip = false;

Vue.use(I18nPlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

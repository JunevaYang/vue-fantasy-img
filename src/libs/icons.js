import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faTags,
  faCog,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add({
  faHome,
  faTags,
  faCog,
  faExclamationCircle
});

Vue.component('font-awesome-icon', FontAwesomeIcon);

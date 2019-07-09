import Vue from 'vue';
import ElementUI from 'element-ui'; // Element UI
import locale from 'element-ui/lib/locale/lang/fr';
import 'element-ui/lib/theme-chalk/index.css'; // todo import only what needed not full
import 'element-ui/lib/theme-chalk/reset.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHeart, faHeartBroken, faBurn, faDiceD20,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import store from './store';
import router from './router';
import App from './App.vue';
import './styles.scss';

library.add(faHeart,
  faHeartBroken,
  faBurn,
  faDiceD20);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(ElementUI, { locale });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

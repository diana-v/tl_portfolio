import Vue from 'vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import TooltipPlugin from 'bootstrap-vue';
import "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-scss.min";
import "prismjs/components/prism-hcl.min";
import "prismjs/plugins/autolinker/prism-autolinker.min";
import "prismjs/plugins/autolinker/prism-autolinker.css";
import Prism from "vue-prism-component";
import axios from "axios";
import vueHeadful from 'vue-headful';

Vue.component('vue-headful', vueHeadful);
Vue.component("prism", Prism);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(TooltipPlugin);

import(/* webpackPreload: true */ "./views/About");
import(/* webpackPreload: true */ "./views/Blog");
import(/* webpackPreload: true */ "./views/BlogEntry");
import(/* webpackPreload: true */ "./views/Contact");
import(/* webpackPreload: true */ "./views/Home");
import(/* webpackPreload: true */ "./views/Services");
import(/* webpackPreload: true */ "./views/Skills");

Vue.use(vuetify);

Vue.prototype.$http = axios;
Vue.prototype.$backend = process.env.VUE_APP_BACKEND_URL;
Vue.prototype.$contact_url = process.env.VUE_APP_CONTACT_URL;

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app');

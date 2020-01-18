import Vue from 'vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import TooltipPlugin from 'bootstrap-vue'
import "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-scss.min";
import "prismjs/plugins/autolinker/prism-autolinker.min";
import "prismjs/plugins/autolinker/prism-autolinker.css";
import Prism from "vue-prism-component";

Vue.component("prism", Prism);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(TooltipPlugin);

Vue.use(vuetify);

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app');

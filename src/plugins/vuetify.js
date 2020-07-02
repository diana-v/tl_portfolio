import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Vuelidate from 'vuelidate';

Vue.use(Vuetify);
Vue.use(Vuelidate);

export default new Vuetify({
  theme: {
    dark: true,
    icons: {
      iconfont: 'fa',
    },
  }
});

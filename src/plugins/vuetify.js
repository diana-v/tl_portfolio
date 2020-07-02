import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import Vuelidate from 'vuelidate';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons/faLinkedin'
import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope'
import {faList} from '@fortawesome/free-solid-svg-icons/faList'

Vue.component('font-awesome-icon', FontAwesomeIcon);
library.add(faLinkedin, faGithub, faEnvelope, faList);

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

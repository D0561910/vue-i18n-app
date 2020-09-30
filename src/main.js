import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

Vue.config.productionTip = false

const messages = {
  en: {
    message: {
      value: 'This is an example of content translation.'
    }
  },
  be: {
    message: {
      value: 'Гэта прыклад перакладу змесціва.'
    }
  },
  da: {
    message: {
      value: 'Dette er et eksempel på oversættelse af indhold.'
    }
  },
  hr: {
    message: {
      value: 'Ovo je primjer prevođenja sadržaja.'
    }
  }
};

const i18n = new VueI18n({
  locale: 'en',
  messages
});

new Vue({
  router,
  store,
  render: h => h(App),
  i18n
}).$mount('#app')

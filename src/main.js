import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(Vuex);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    user: {},
    configs: {},
    services: [],
    employees: [],
    reservations: [],
  },
  mutations: {
    setServices(state, services) {
      state.services = services;
    },
    setBusinessConfig(state, configs) {
      state.configs = configs;
    },
  },
});

new Vue({
  router,
  render: (h) => h(App),
  store,
}).$mount('#app');

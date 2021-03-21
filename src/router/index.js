import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import Calendar from '../components/Calendar.vue';
import Services from '../components/Services.vue';
import Reservations from '../components/Reservations.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar,
    },
    {
      path: '/services',
      name: 'Services',
      component: Services,
    },
    {
      path: '/reservations',
      name: 'Reservations',
      component: Reservations,
    },
  ],
});

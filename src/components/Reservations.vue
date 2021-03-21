<template>
  <div>
    <Navigation style="margin-bottom:50px;"/>
    <center style="margin-bottom:30px;"><h3>Future Reservations</h3></center>
    <b-container class="reservations-container" >
      <b-col v-for="reservation in reservations" :key="reservation.name">
        <reservation :data="reservation"/>
      </b-col>
    </b-container>

  </div>
</template>

<script>
import { mapState } from 'vuex'

import Navigation from './Navigation.vue';
import Reservation from './Reservation.vue';

export default {
  data() {
    return {
      reservations: [
        {
          service: {
            name: 'Manichiura',
            price: 100,
            description: 'vwlehbf fbewkj fwheibehq gfhewjglrw gbelqwbejg',
            img: 'http://placekitten.com/200/200',
          },
          employee: {
            name: 'Ana',
          },
          date: '2018-11-21',
        },
      ],
    };
  },
  components: {
    Navigation,
    Reservation,
  },
  computed: {
    ...mapState('store', [
      'reservations',
    ]),
  },
};
</script>

<style scoped>
  #services-container {
    margin-right: auto;
    margin-left: auto;
  }
</style>

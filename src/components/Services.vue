<template>
  <div>
    <Navigation style="margin-bottom:50px;"/>
    <b-container class="services-container" >
      <b-row cols="1" cols-sm="2" cols-lg="3" class="justify-content-md-center">
        <b-col v-for="service in services" :key="service.name">
          <service :data="service"/>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
import { mapState } from 'vuex';
import Navigation from './Navigation.vue';
import Service from './Service.vue';

export default {
  data() {
    return {
      services: [
        {
          name: 'Manichiura',
          price: 100,
          description: 'vwlehbf fbewkj fwheibehq gfhewjglrw gbelqwbejg',
          img: 'http://placekitten.com/200/200',
        },
        {
          name: 'Pedichiura',
          price: 100,
          description: 'vwlehbf fbewkj fwheibehq gfhewjglrw gbelqwbejg',
          img: 'http://placekitten.com/200/200',
        },
        {
          name: 'Coafor',
          price: 100,
          description: 'vwlehbf fbewkj fwheibehq gfhewjglrw gbelqwbejg',
          img: 'http://placekitten.com/200/200',
        },
      ],
    };
  },
  components: {
    Navigation,
    Service,
  },
  computed: {
    ...mapState('store', [
      'services',
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

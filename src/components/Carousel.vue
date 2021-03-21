<template>
  <div style="margin-top:20px;">
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide v-for="service in services" :key="service.name">
          <service :data="service"/>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import Service from './Service.vue';

export default {
  components: {
    Service,
  },
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
};
</script>

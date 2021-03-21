<template>
  <div>
    <Navigation style="margin-bottom:30px;"/>
    <div v-if="showFilter" id="service_filter" style="margin-left: auto; margin-right: auto;">
      <b-form-group label="Select Service:" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          id="checkbox-group-1"
          v-model="selected"
          :options="options"
          :aria-describedby="ariaDescribedby"
          name="flavour-2a"
          stacked
        ></b-form-checkbox-group>
      </b-form-group>

      <b-button variant="success" @click="enableCalendar">Next</b-button>
    </div>

    <div v-if="showCalendar" id="calendar"
      style="margin-left: auto; margin-right: auto; padding: 20px;">
      <b-button variant="success" style="margin-bottom: 10px;" @click="enableFilter">Back</b-button>
        <vue-cal ref="vuecal" selected-date="2021-03-20"
            today-button
            :time-from="10 * 60"
            :time-to="18 * 60"
            :snap-to-time="15"
            :events="events"
            class="vuecal--full-height-delete"
            small
            :disable-views="['years', 'year', 'day']"
            :drag-to-create-event="true"
            :editable-events="{ title: true, drag: true, resize: true, delete: true, create: true }"
            :drag-to-create-threshold="0"
            @event-create="eventCreated">
        </vue-cal>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';
import 'vue-cal/dist/drag-and-drop';
import axios from 'axios';

import Navigation from './Navigation.vue';

export default {
  data() {
    return {
      selected: [],
      showCalendar: false,
      showFilter: true,
      showEventCreationDialog: false,
      events: [
        {
          start: '2021-03-21 10:30',
          end: '2021-03-21 11:30',
          title: 'Need to go shopping',
          content: '<i class="v-icon material-icons">shopping_cart</i>',
          class: 'leisure',
        },
        {
          start: '2021-03-21 12:30',
          end: '2021-03-21 13:30',
          title: 'Golf with John',
          content: '<i class="v-icon material-icons">golf_course</i>',
          class: 'sport',
        },
        {
          start: '2021-03-21 15:30',
          end: '2021-03-21 16:30',
          title: 'Dad\'s birthday!',
          content: '<i class="v-icon material-icons">cake</i>',
          class: 'sport',
        },
      ],
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
      ],
    };
  },
  components: {
    VueCal,
    Navigation,
  },
  methods: {
    enableCalendar() {
      this.showCalendar = true;
      this.showFilter = false;
    },
    enableFilter() {
      this.showCalendar = false;
      this.showFilter = true;
    },
    async eventCreated(event) {
      console.log(event);
      const data = {
        business_db_name: '',
        service_name: 'Manichiura',
        start_time: event.start,
        end_time: event.end,
        client_name: 'Alina',
        client_phone: '1234',
      };
      await axios.post('http://192.168.100.49:5000/add_reservation', data);
    },

    async getEvents(event) {
      const data = {
        business_db_name: '',
        service_name: 'Manichiura',
        client_name: 'Alina',
        client_phone: '1234',
      };
      await axios.get('http://192.168.100.49:5000/get_reservation', data);
      events.push(
        {
          start: '2021-03-21 15:30',
          end: '2021-03-21 16:30',
          title: 'Dad\'s birthday!',
          content: '<i class="v-icon material-icons">cake</i>',
          class: 'sport',
        }
      )
    }
  },
};
</script>

<style scoped>
@media only screen and (min-width: 768px) {
  #calendar {
    max-width: 70%;
  }
  #service_filter {
    max-width: 20%;
  }
}
.vuecal__cell--highlighted:not(.vuecal__cell--has-splits),
.vuecal__cell-split--highlighted {background-color: rgba(195, 255, 225, 0.5);}
.vuecal__arrow.vuecal__arrow--highlighted,
.vuecal__view-btn.vuecal__view-btn--highlighted {background-color: rgba(136, 236, 191, 0.25);}

</style>

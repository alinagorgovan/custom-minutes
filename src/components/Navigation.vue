<template>
  <div>
    <b-navbar :style="customStyle" toggleable="lg" type="dark">
      <b-navbar-brand href="/">
        <img src="../assets/logo.png" :alt="configs.name" height="50">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">

          <b-nav-item :href="configs.facebook">
            <img src="../assets/facebook.png" :alt="configs.facebook" height="30">
          </b-nav-item>
          <b-nav-item :href="configs.instagram">
            <img src="../assets/instagram.png" :alt="configs.instagram" height="30">
          </b-nav-item>

          <b-button style="font-size: 20px;" href="/calendar">Book Now</b-button>

          <b-nav-item style="font-size: 20px;" href="/services">Services & Prices</b-nav-item>

          <b-nav-item-dropdown v-if="this.user" right>
            <template #button-content>
              <em style="font-size: 20px;">User</em>
            </template>
            <b-dropdown-item style="font-size: 20px;" href="/reservations">
            Reservations</b-dropdown-item>
            <b-dropdown-item style="font-size: 20px;" href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item v-else style="font-size: 20px;" href="/register">Sign Up</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      configs: {
        logo: '',
        color: '#4245f5',
        socialMedia: {
          instagram: '',
          facebook: '',
          youtube: '',
          tiktok: '',
        },
        name: 'NailDistrict',
        tagline: '',
        description: '',
        contact: {
          phone: '',
          email: '',
          address: '',
        },
        pictures: [],
        services: [
          {
            name: '',
            description: '',
            price: '',
          },
        ],
      },
    };
  },
  computed: {
    ...mapState('store', [
      'user',
      // 'configs',
    ]),
  },
  computed: {
    customStyle() {
      return `background-color: ${this.configs.color}`;
    },
  },
};
</script>

<style>
body {
  font-family: 'Abel', sans-serif !important;
}
</style>

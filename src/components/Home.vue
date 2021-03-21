<template>
  <div>
    <Navigation/>
    <div>
      <div>
        <b-card id="homepage_card"
          overlay
          img-src="https://picsum.photos/900/250/?image=3"
          img-alt="Card Image"
          text-variant="white"
          :title="configs.name"
        >
          <b-card-text>
            {{configs.tagline}}
          </b-card-text>
        </b-card>
      </div>

      <div style="margin-top:20px; margin-right:10px; margin-left:10px;">
        <b-container>
          <b-row class="justify-content-md-center">
            <b-col style="width:50%;">
              <b-row style="font-size:30px;">{{configs.tagline}}</b-row>
              <b-row><img :src="configs.logo" :alt="configs.name" height="100px"></b-row>
              <b-row style="font-size:20px;">{{configs.description}}</b-row>
            </b-col>
          </b-row>
        </b-container>
      </div>

      <div style="background-color: #4a3bf5; margin-top:20px">
        <b-container style="padding:20px;">
          <b-row cols="1" cols-sm="2" cols-lg="4" class="justify-content-md-center"
          style="margin-top:10px;">
            <b-col><img :src="configs.logo" :alt="configs.name" height="100px"></b-col>
            <b-col>
              <FooterElement label="Address" :value="configs.contact.address"></FooterElement>
            </b-col>
            <b-col>
              <FooterElement label="Schedule" :value="configs.contact.schedule"></FooterElement>
            </b-col>
            <b-col>
              <FooterElement label="Email" :value="configs.contact.email"></FooterElement>
            </b-col>
          </b-row>
        </b-container>
      </div>

    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import Navigation from './Navigation.vue';
import FooterElement from './FooterElement.vue';

export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      configs: {
        logo: 'http://placekitten.com/600/600',
        socialMedia: {
          instagram: '',
          facebook: '',
          youtube: '',
          tiktok: '',
        },
        name: 'NailDistrict',
        tagline: 'Salon profesional de manichiura, pedichiura, unghii false cu gel',
        description: `
        Te invitam sa descoperi o echipa de profesionisti dedicata tie si unghiilor tale, de la care vei primi sfaturi si raspunsuri la fiecare pas. Din respect pentru tine folosim cele mai bune si sigure produse profesionale de pe piata. Confortul si siguranta clientelor noastre sunt prioritatile principale ce stau la baza serviciilor pe care le oferim.
        Te vom cuceri cu atmosfera calda si primitoare si vei fi inconjurata de voie buna astfel ca timpul petrecut cu noi se va transforma intr-o experienta unica, lipsita de griji. Vei pleca de aici cu un zambet larg si dorinta de a ne revedea cat mai curand.`,
        contact: {
          schedule: 'Luni – Sambata: 09.00 – 21.00\nDuminica: inchis',
          email: 'programari@naildistrict.ro\noffice@naildistrict.ro',
          address: 'str. Armeneasca, nr. 36, corp A, parter, ap. 1, sector 2, Bucuresti',
        },
        pictures: [
          'http://placekitten.com/200/200',
        ],
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
      'businessConfig',
    ]),
  },
  components: {
    Navigation,
    FooterElement,
  },
  methods: {
    ...mapMutations('store', [
      'setServices',
      'setBusinessConfig',
    ]),
    async getUser() {
      return [];
    },
    async getBusinessConfig(businessName) {
      return businessName;
    },
    async getServices(businessName) {
      return businessName;
    },
    getBusinessName() {
      const reader = new FileReader();
      return reader.readAsText('../assets/business_name.txt');
    },
  },
  async mounted() {
    const businessName = this.getBusinessName();

    this.setBusinessConfig(await this.getBusinessConfig(businessName));
    this.setServices(await this.getServices(businessName));
    // await this.getServices(businessName);
  },
};
</script>

<style scoped>
.card-title {
  font-size: 40px;
}
.card-text {
  font-size: 30px;
}
.card-img {
  min-height: 40%;
}
</style>

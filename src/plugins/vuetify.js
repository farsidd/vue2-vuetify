import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#e74c3c',
        //   secondary: '#e67e22',
        },
        dark: {
          primary: '#2c3e50',
        },
      },
    },
  })

  export default vuetify
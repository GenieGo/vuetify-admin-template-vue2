import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: false // From 2.0 You have to select the theme dark or light here
  },
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  }
})

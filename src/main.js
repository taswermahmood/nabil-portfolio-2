import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import AOS from 'aos';
import 'aos/dist/aos.css';
const VueScrollTo = require('vue-scrollto')
Vue.config.productionTip = false
AOS.init();
Vue.use(VueScrollTo)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

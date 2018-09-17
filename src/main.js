import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import firebase from 'firebase/app'
import 'firebase/database'
const VueTouch = require('vue-touch')
Vue.use(VueTouch, {
  name: 'v-touch'
})
const config = {
  apiKey: 'AIzaSyDo5AHR3LIJ7Xww5XiO7xnIj0u5KY5I4Wk',
  authDomain: 'events-8b686.firebaseapp.com',
  databaseURL: 'https://events-8b686.firebaseio.com',
  projectId: 'events-8b686',
  storageBucket: 'events-8b686.appspot.com',
  messagingSenderId: '1036061242377'
}
firebase.initializeApp(config)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

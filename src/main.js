import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAvV69wMe_5Z5r9nL_Lakd_AWF8wirknqc',
      authDomain: 'first-aae60.firebaseapp.com',
      databaseURL: 'https://first-aae60.firebaseio.com',
      projectId: 'first-aae60',
      storageBucket: 'first-aae60.appspot.com',
      messagingSenderId: '568802721528'
    })
  }
})

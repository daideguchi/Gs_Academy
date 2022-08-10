import Vue from 'vue'
import App from './App.vue'
import router from './router'

// ここから追加
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUser,
  faSignOutAlt,
  faEllipsisV
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faUser,
  faSignOutAlt,
  faEllipsisV
)


import { firestorePlugin } from 'vuefire'
import firebase from 'firebase'
import 'firebase/firestore'

Vue.use(firestorePlugin)

firebase.initializeApp({

  apiKey: "AIzaSyDB7Pb3bNdL3fc598bRxcJafr9CNquGzsU",
  authDomain: "gswork-5f2a8.firebaseapp.com",
  projectId: "gswork-5f2a8",
  storageBucket: "gswork-5f2a8.appspot.com",
  messagingSenderId: "36074200495",
  appId: "1:36074200495:web:331a2e90a9dcf8f085235a"
})

export const db = firebase.firestore()
export const auth = firebase.auth()

Vue.component('fa', FontAwesomeIcon)
// ここまで追加


Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

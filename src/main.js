import 'bootstrap/dist/css/bootstrap.min.css'
// import './assets/main.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
// import './style.css';

import { initializeApp } from 'firebase/app'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBn_CZoOTdf55_Aqcog1oasmvHYQwcmwac',
  authDomain: 'week7-hao.firebaseapp.com',
  projectId: 'week7-hao',
  storageBucket: 'week7-hao.appspot.com',
  messagingSenderId: '505869371555',
  appId: '1:505869371555:web:e4f7341642f87d22489716'
}

initializeApp(firebaseConfig)

createApp(App)
  .use(PrimeVue, {
    theme: {
      preset: Aura
    }
  })
  .use(router)
  .mount('#app')

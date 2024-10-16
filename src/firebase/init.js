import { initializeApp } from 'firebase/app'

import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBn_CZoOTdf55_Aqcog1oasmvHYQwcmwac',
  authDomain: 'week7-hao.firebaseapp.com',
  projectId: 'week7-hao',
  storageBucket: 'week7-hao.appspot.com',
  messagingSenderId: '505869371555',
  appId: '1:505869371555:web:e4f7341642f87d22489716'
}

// initializeApp(firebaseConfig)
// const db = getFirestore()
// export default db
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db

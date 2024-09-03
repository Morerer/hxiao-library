<template>
  <h1>Sign in</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><Password placeholder="Password" v-model="password" /></p>
  <p><button @click="signin">Sign in via Ffirebase</button></p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()
const auth = getAuth()

const signin = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(() => {
      console.log('Firebase Register Successful!')
      router.push('/')
      console.log(auth.currentUser)
    })
    .catch((error) => {
      console.log(error.code)
    })
}
</script>

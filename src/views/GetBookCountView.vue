<template>
  <div class="container mt-5 text-center">
    <h1>Book Counter</h1>
    <button @click="getBookCount" class="btn btn-primary mb-3">Get Book Count</button>
    <p v-if="count !== null">Total number of books: {{ count }}</p>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BookCounter',
  data() {
    return {
      count: null,
      error: null
    }
  },
  methods: {
    async getBookCount() {
      try {
        const response = await axios.get(
          'https://us-central1-week7-hao.cloudfunctions.net/countBooks'
        )
        this.count = response.data.count
        this.error = null
      } catch (error) {
        console.error('Error fetching book count:', error)
        this.error = 'Error fetching book count'
        this.count = null
      }
    }
  }
}
</script>

<style scoped>
.container {
  padding-top: 50px;
}

h1 {
  margin-bottom: 20px;
}

p {
  font-size: 1.5em;
  margin-top: 20px;
}
</style>

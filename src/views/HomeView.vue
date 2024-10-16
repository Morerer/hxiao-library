<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-6 text-center">
        <h1>Book API</h1>
        <button @click="getAllBooks" class="btn btn-primary mb-3">Get All Book API</button>
        <div v-if="jsonBooks">
          <pre>{{ jsonBooks }}</pre>
        </div>
        <p v-if="bookError">{{ bookError }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      jsonBooks: null, 
      bookError: null 
    }
  },
  methods: {
    async getAllBooks() {
      try {
        const response = await axios.get(
          'https://us-central1-week7-hao.cloudfunctions.net/getAllBooks' 
        )
        this.jsonBooks = JSON.stringify(response.data, null, 2) 
        this.bookError = null
      } catch (error) {
        console.error('Error fetching books:', error)
        this.bookError = 'Error fetching books.'
        this.jsonBooks = null
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
  text-align: center;
}

button {
  margin-bottom: 20px;
}

pre {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 5px;
  overflow-x: auto;
}
</style>

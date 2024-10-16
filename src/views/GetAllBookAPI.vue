<template>
  <div class="container">
    <h1>All Books</h1>
    <button @click="getAllBooks" class="btn btn-primary">Get All Books</button>
    <div v-if="books">
      <pre>{{ books }}</pre>
    </div>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      books: null,
      error: null
    }
  },
  methods: {
    async getAllBooks() {
      try {
        const response = await axios.get(
          'https://us-central1-week7-hao.cloudfunctions.net/getAllBooks'
        )
        this.books = JSON.stringify(response.data, null, 2)
        this.error = null
      } catch (error) {
        console.error('Error fetching books:', error)
        this.error = 'Error fetching books.'
        this.books = null
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
  padding: 10px;
  border-radius: 5px;
  white-space: pre-wrap; /* 允许自动换行 */
  word-wrap: break-word;
}
</style>

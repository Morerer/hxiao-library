<template>
  <div>
    <h1>Book Count API</h1>
    <pre>{{ jsondata }}</pre>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      jsondata: null,
      error: null
    }
  },
  mounted() {
    this.getBookCountAPI()
  },
  methods: {
    async getBookCountAPI() {
      try {
        const response = await axios.get(
          'https://us-central1-week7-hao.cloudfunctions.net/countBooks'
        )
        this.jsondata = response.data
        this.error = null
      } catch (error) {
        console.error('Error fetching book count:', error)
        this.error = 'Error fetching book count.'
        this.jsondata = null
      }
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}

pre {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 5px;
  overflow-x: auto;
}
</style>

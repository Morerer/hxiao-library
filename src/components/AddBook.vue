<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-6">
        <h2>Add a New Book</h2>
        <form @submit.prevent="addBook">
          <div class="mb-3">
            <label for="bookName" class="form-label">Book Name</label>
            <input type="text" id="bookName" class="form-control" v-model="newBook.name" required />
          </div>
          <div class="mb-3">
            <label for="bookISBN" class="form-label">ISBN</label>
            <input type="text" id="bookISBN" class="form-control" v-model="newBook.isbn" required />
          </div>
          <button type="submit" class="btn btn-success">Add Book</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { collection, addDoc } from 'firebase/firestore'
import db from '@/firebase/init.js'

// 新增图书的数据
const newBook = ref({
  name: '',
  isbn: ''
})

// 添加图书到 Firestore
const addBook = async () => {
  try {
    if (!newBook.value.name || !newBook.value.isbn) {
      alert('Please enter both a book name and ISBN')
      return
    }

    // 添加到 Firestore
    await addDoc(collection(db, 'books'), {
      name: newBook.value.name,
      isbn: newBook.value.isbn
    })

    // 清空表单
    newBook.value.name = ''
    newBook.value.isbn = ''
    alert('Book added successfully!')
  } catch (error) {
    console.error('Error adding book: ', error)
    alert('Failed to add the book. Please try again.')
  }
}
</script>

<style scoped>
.container {
  padding-top: 50px;
}

h2 {
  text-align: center;
}

form {
  margin-top: 20px;
}
</style>

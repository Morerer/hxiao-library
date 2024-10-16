<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-6 text-center">
        <h2>Manage Books</h2>

        <!-- Add Book Button -->
        <button @click="toggleForm('add')" class="btn btn-primary mt-3">Add a New Book</button>

        <!-- Update Book Button -->
        <button @click="toggleForm('update')" class="btn btn-warning mt-3">Update Book</button>

        <!-- Conditionally render the Add Book form -->
        <div v-if="showForm === 'add'" class="mt-4">
          <h3>Add Book</h3>
          <form @submit.prevent="addBook">
            <div class="mb-3">
              <label for="bookName" class="form-label">Book Name</label>
              <input
                type="text"
                id="bookName"
                class="form-control"
                v-model="newBook.name"
                required
              />
            </div>
            <div class="mb-3">
              <label for="bookISBN" class="form-label">ISBN</label>
              <input
                type="text"
                id="bookISBN"
                class="form-control"
                v-model="newBook.isbn"
                required
              />
            </div>
            <button type="submit" class="btn btn-success">Add Book</button>
          </form>
        </div>

        <!-- Conditionally render the Update Book form -->
        <div v-if="showForm === 'update'" class="mt-4">
          <h3>Update Book</h3>
          <form @submit.prevent="updateBook">
            <div class="mb-3">
              <label for="bookId" class="form-label">Book ID (for Update)</label>
              <input type="text" id="bookId" class="form-control" v-model="bookId" required />
            </div>
            <div class="mb-3">
              <label for="bookNameUpdate" class="form-label">Updated Book Name</label>
              <input type="text" id="bookNameUpdate" class="form-control" v-model="newBook.name" />
            </div>
            <div class="mb-3">
              <label for="bookISBNUpdate" class="form-label">Updated ISBN</label>
              <input type="text" id="bookISBNUpdate" class="form-control" v-model="newBook.isbn" />
            </div>
            <button type="submit" class="btn btn-warning">Update Book</button>
          </form>
        </div>

        <!-- Delete Book Section -->
        <div class="mt-4">
          <h3>Delete Book</h3>
          <form @submit.prevent="deleteBook">
            <div class="mb-3">
              <label for="bookIdDelete" class="form-label">Book ID (for Deletion)</label>
              <input type="text" id="bookIdDelete" class="form-control" v-model="bookId" required />
            </div>
            <button type="submit" class="btn btn-danger">Delete Book</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { collection, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import db from '@/firebase/init.js'

// 控制表单的显示/隐藏
const showForm = ref(null)

// 切换表单的显示状态
const toggleForm = (formType) => {
  showForm.value = formType
}

// 新增图书的数据
const newBook = ref({
  name: '',
  isbn: ''
})

// 更新或删除操作时需要的书籍 ID
const bookId = ref('')

// 添加图书到 Firestore
const addBook = async () => {
  try {
    await addDoc(collection(db, 'books'), {
      name: newBook.value.name,
      isbn: newBook.value.isbn
    })
    newBook.value.name = ''
    newBook.value.isbn = ''
    alert('Book added successfully!')
    showForm.value = null
  } catch (error) {
    console.error('Error adding book: ', error)
    alert('Failed to add the book. Please try again.')
  }
}

// 更新书籍信息
const updateBook = async () => {
  try {
    const bookRef = doc(db, 'books', bookId.value)
    await updateDoc(bookRef, {
      name: newBook.value.name || null, // 如果没有输入新的名称，保持不变
      isbn: newBook.value.isbn || null
    })
    newBook.value.name = ''
    newBook.value.isbn = ''
    bookId.value = ''
    alert('Book updated successfully!')
    showForm.value = null
  } catch (error) {
    console.error('Error updating book: ', error)
    alert('Failed to update the book. Please try again.')
  }
}

// 删除书籍信息
const deleteBook = async () => {
  try {
    const bookRef = doc(db, 'books', bookId.value)
    await deleteDoc(bookRef)
    bookId.value = ''
    alert('Book deleted successfully!')
  } catch (error) {
    console.error('Error deleting book: ', error)
    alert('Failed to delete the book. Please try again.')
  }
}
</script>

<style scoped>
.container {
  padding-top: 50px;
}

h2,
h3 {
  text-align: center;
}

form {
  margin-top: 20px;
}
</style>

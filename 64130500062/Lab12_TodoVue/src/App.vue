<script setup>
import { ref, onMounted } from 'vue'
import { query, collection, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import db from './firebase/init.js'
import TodoList from './components/TodoList.vue'
import TodoInput from './components/TodoInput.vue'

const todos = ref([])

async function getTodos() {
  const querySnap = await getDocs(query(collection(db, 'todos')))
  todos.value = []
  querySnap.forEach((doc) => {
    let data = doc.data()
    data.id = doc.id
    todos.value.push(data)
  })
}

async function toggleCompleted(index) {
  /* add code for toggling the completed field */
  // console.log('toggle')
  const todo = todos.value[index]
  const todoRef = doc(db, 'todos', todos.value[index].id);
  await updateDoc(todoRef, {
    completed: !todo.completed
  })
  await getTodos()
}

async function deleteTodo(index) {
  /* add code for deleting a todo */
  // console.log('delete')
  const todoRef = doc(db, 'todos', todos.value[index].id);
  await deleteDoc(todoRef);
  await getTodos();
}

onMounted(() => {
  getTodos()
})
</script>

<template>
  <h1>Todo List</h1>
  <TodoInput @update-todos="getTodos" />
  <TodoList :todos="todos" @toggle-completed="toggleCompleted" @delete-todo="deleteTodo" />
</template>

<style scoped></style>

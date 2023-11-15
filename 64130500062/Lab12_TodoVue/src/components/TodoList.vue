<script setup>
    defineProps(['todos'])
    defineEmits(['toggle-completed','delete-todo'])
</script>

<template>
    <ul>
        <li v-for="(todo,index) in todos" :key="todo.id">
            <span :class="{ completed: todo.completed }">{{ todo.title }}</span> &nbsp;
            <button @click="$emit('toggle-completed',index)">Completed</button>
            <button @click="$emit('delete-todo',index)">Delete</button>
        </li>
    </ul>
</template>

<style scoped>
  .completed {
    text-decoration: line-through ;
  }
</style>

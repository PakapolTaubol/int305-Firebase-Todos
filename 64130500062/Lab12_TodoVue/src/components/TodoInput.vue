<script setup>
    import { ref } from 'vue'
    const emit = defineEmits(['update-todos'])
    const newTitle = ref('')

  async function addTodo(){
    /* add code for create a new doc and send $emit('update-todos') */
    console.log('add todo')
  }
</script>

<template>
    <div>
      <input v-model="newTitle" placeholder="Enter a new task" size="30" />
      <button @click="addTodo">ADD</button>
    </div>
</template>

<style scoped>
</style>

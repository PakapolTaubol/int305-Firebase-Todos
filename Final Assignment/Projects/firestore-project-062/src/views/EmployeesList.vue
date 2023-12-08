<script setup>
import { ref, onMounted } from 'vue';
import List from '../components/List.vue';
import { getDataByCollectionName } from '../composable/getData';

const data = ref([]);
const employees = ref([]);

onMounted(async () => {
    data.value = await getDataByCollectionName("employees");
    data.value.forEach(emp => {
        employees.value.push(emp);
    });
});
</script>
 
<template>
    <div class="header">
        <div class="max-w-screen-lg mx-auto space-y-4">
            <h1 class="text-3xl text-center py-6">Employees List</h1>
            <List :data="employees" />
        </div>
    </div>
</template>
 
<style scoped></style>

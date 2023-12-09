<script setup>
import { ref, onMounted } from 'vue';
import List from '../components/List.vue';
import { getDataByCollectionName } from '../composable/getData';
import CompanyList from '../components/CompanyList.vue';

const data = ref([]);
const companies = ref([]);

onMounted(async () => {
    data.value = await getDataByCollectionName("employees");
    companies.value = await getDataByCollectionName("companies");
});
</script>
 
<template>
    <div class="header">
        <div class="max-w-screen-lg mx-auto space-y-4">
            <h1 class="text-3xl text-left pt-6">Employees List</h1>
            <CompanyList :companies="companies"/>
            <List :data="data" :companies="companies" />
        </div>
    </div>
</template>
 
<style scoped></style>

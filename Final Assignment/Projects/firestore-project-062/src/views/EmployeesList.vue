<script setup>
import { ref, onMounted, watchEffect } from 'vue';
import List from '../components/List.vue';
import { getDataByCollectionName } from '../composable/getData';
import CompanyList from '../components/CompanyList.vue';

const employees = ref([]);
const companies = ref([]);
const filteredEmployees = ref([])

onMounted(async () => {
    employees.value = await getDataByCollectionName("employees");
    companies.value = await getDataByCollectionName("companies");
});
const handleEmployeesDataChange = async (emp) => {
    filteredEmployees.value = emp;
}
watchEffect(() => {
    employees.value = filteredEmployees.value
})
</script>
 
<template>
    <div class="header">
        <div class="max-w-screen-lg mx-auto space-y-4">
            <h1 class="text-3xl text-left pt-6">Employees List</h1>
            <CompanyList :companies="companies" @changeEmployeesData="handleEmployeesDataChange" />
            <List :employees="employees" :companies="companies" />
        </div>
    </div>
</template>
 
<style scoped></style>
<script setup>
import { ref, onMounted, watchEffect } from 'vue';
import List from '../components/List.vue';
import { getDataByCollectionName } from '../composable/getData';
import CompanyList from '../components/CompanyList.vue';
import QueryList from '../components/QueryList.vue';

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
            <div class="flex items-end justify-between">
                <h1 class="text-3xl text-left pt-6">Employees List</h1>
                <RouterLink to="/departments" class="text-blue-500 underline">Go to Department List -></RouterLink>
            </div>
            <QueryList @changeEmployeesData="handleEmployeesDataChange" />
            <CompanyList :companies="companies" @changeEmployeesData="handleEmployeesDataChange" />
            <List :employees="employees" :companies="companies" />
        </div>
    </div>
</template>
 
<style scoped></style>
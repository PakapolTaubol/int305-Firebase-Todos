<script setup>
import { queryEmployeesByCompanyID } from '../composable/getData'
const props = defineProps({
    companies: {
        type: Array,
        reqired: true,
    }
});
const emit = defineEmits(['changeEmployeesData'])
const handleEmployeesChange = async (companyId) => {
    const filteredEmployees = await queryEmployeesByCompanyID(companyId);
    emit('changeEmployeesData', filteredEmployees);
};
</script>
 
<template>
    <div>
        <div class="text-gray-600">กรองตามบริษัท</div>
        <div class="w-full h-full flex gap-x-1 overflow-scroll pb-4">
            <button v-for="(company, index) in companies" :key="company.id" @click="handleEmployeesChange(company.id)"
                class="btn btn-primary text-white">
                {{ company.name }}
            </button>
        </div>
    </div>
</template>
 
<style scoped></style>
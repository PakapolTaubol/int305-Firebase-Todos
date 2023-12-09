<script setup>
import { qurryByCondition } from '../composable/getData'
const btnList = ['Order by Name', 'Order by Salary', 'First 2 QA', 'Salary 30,000+', 'Full-stack and 28,500+', 'Frontend or Backend']

const emit = defineEmits(['changeEmployeesData'])
const handleEmployeesChange = async (index) => {
    const filteredEmployees = await qurryByCondition(index);
    emit('changeEmployeesData', filteredEmployees);
};
</script>
 
<template>
    <div>
        <div class="text-gray-600">กรองตามที่กำหนด (กดปุ่ม 1 รอบ Asc, 2 รอบ Desc)</div>
        <div class="w-full h-full flex gap-x-1 overflow-scroll pb-4">
            <button v-for="(condition, index) in btnList" @click="handleEmployeesChange(index)"
                class="btn btn-info text-white">
                <span>{{ condition }}</span>
            </button>
        </div>
    </div>
</template>
 
<style scoped></style>
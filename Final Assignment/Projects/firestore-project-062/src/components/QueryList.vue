<script setup>
import { queryByCondition } from '../composable/getData'
const btnList = ['Order by Name', 'Order by Salary', 'First 2 QA', 'Salary 30,000+', 'Full-stack and 28,500+', 'Frontend or Backend', 'QA / BA']
const conditionList = ['ทั้งหมด', 'จำนวนคนที่อยู่บริษัท Arise', 'เงินเดือนเฉลี่ยของ DevOps','รายชื่อพนักงานที่มีเงินเดือนระหว่าง 24,000-26,000','จำนวนคนที่มีอยู่ในระบบ']

const emit = defineEmits(['changeEmployeesData'])
const handleEmployeesChange = async (index, name) => {
    const filteredEmployees = await queryByCondition(index, name);
    emit('changeEmployeesData', filteredEmployees);
};
</script>
 
<template>
    <div>
        <div class="text-gray-600">กรองตามที่กำหนด (กดปุ่ม 1 รอบ Asc, 2 รอบ Desc)</div>
        <div class="w-full h-full flex gap-x-1 overflow-scroll pb-4">
            <button v-for="(condition, index) in btnList" @click="handleEmployeesChange(index, 'employees')"
                class="btn btn-info text-white">
                <span>{{ condition }}</span>
            </button>
        </div>
        <div class="text-gray-600">ปุ่มชวนกด</div>
        <div class="w-full h-full flex gap-x-1 overflow-scroll pb-4">
            <button v-for="(condition, index) in conditionList" @click="handleEmployeesChange(index, 'condition')"
                class="btn btn-accent text-white">
                <span>{{ condition }}</span>
            </button>
        </div>
    </div>
</template>
 
<style scoped></style>
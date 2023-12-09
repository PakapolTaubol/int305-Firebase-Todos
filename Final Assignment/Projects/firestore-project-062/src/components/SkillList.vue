<script setup>
import { queryByCondition } from '../composable/getData'
const btnList = ['HTML CSS JavaScript', 'Excel', 'SQL', 'Python']

const emit = defineEmits(['changeDepartmentData'])
const handleDepartmentChange = async (index) => {
    const filteredDepartment = await queryByCondition(index, 'departments');
    emit('changeDepartmentData', filteredDepartment);
};
</script>
 
<template>
    <div>
        <div class="text-gray-600">กรองตามสกิลที่คุณสนใจ</div>
        <div class="w-full h-full flex gap-x-1 overflow-scroll pb-4">
            <button v-for="(condition, index) in btnList" @click="handleDepartmentChange(index)"
                class="btn btn-error text-white">
                <span>{{ condition }}</span>
            </button>
        </div>
    </div>
</template>
 
<style scoped></style>
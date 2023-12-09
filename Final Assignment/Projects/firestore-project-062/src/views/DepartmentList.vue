<script setup>
import { ref, onMounted, watchEffect } from 'vue';
import { getDataByCollectionName } from '../composable/getData';
import DepartmentListLoop from '../components/DepartmentListLoop.vue';
import SkillList from '../components/SkillList.vue';

const departments = ref([])
const filteredDepartment = ref([])

onMounted(async () => {
    departments.value = await getDataByCollectionName("departments")
})
const handleDepartmentDataChange = async (dp) => {
    filteredDepartment.value = dp;
}
watchEffect(() => {
    departments.value = filteredDepartment.value
})
</script>
 
<template>
    <div class="header">
        <div class="max-w-screen-lg mx-auto space-y-4">
            <div class="flex items-end justify-between">
                <h1 class="text-3xl text-left pt-6">Department List</h1>
                <RouterLink to="/employees" class="text-red-500 underline">Go to Employees List -></RouterLink>
            </div>
            <SkillList @changeDepartmentData="handleDepartmentDataChange" />
            <DepartmentListLoop :departments="departments" />
        </div>
    </div>
</template>
 
<style scoped></style>
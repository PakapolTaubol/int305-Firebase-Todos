<script setup>
import { ref, onMounted } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase/init.js';
import Table from '../components/Table.vue';

const empCol = ref(null)
const data = ref([])
const employee = ref([])

onMounted(async () => {
    data.value = await getEmployess(db);
    data.value.forEach(emp => {
        showData(emp.data())
    })
});

const getEmployess = async (db) => {
    empCol.value = collection(db, 'employees');
    const empSnapshot = await getDocs(empCol.value);
    return empSnapshot;
}

const showData = (emp) => {
    employee.value.push(emp);
}

</script>
 
<template>
    <div class="header">
        <Table :data="employee" />
    </div>
</template>
 
<style scoped></style>
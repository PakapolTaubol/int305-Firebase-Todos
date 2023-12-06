<script setup>
import { ref, onMounted } from 'vue';
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from '../firebase/init.js';
import Table from '../components/Table.vue';

const empCol = ref(null);
const data = ref([]);
const employees = ref([]);

onMounted(async () => {
    data.value = await getEmployeesWithDepartments(db);
    data.value.forEach(emp => {
        showData(emp);
    });
});

const getEmployeesWithDepartments = async (db) => {
    empCol.value = collection(db, 'employees');
    const empSnapshot = await getDocs(empCol.value);
    const employeesWithDepartments = [];

    for (const doc of empSnapshot.docs) {
        const empData = doc.data();
        const depColRef = collection(doc.ref, 'department');
        const depSnapshot = await getDocs(depColRef);

        depSnapshot.forEach(depDoc => {
            empData.department = depDoc.data();
        });

        employeesWithDepartments.push(empData);
    }

    return employeesWithDepartments;
};

const showData = (emp) => {
    employees.value.push(emp);
};
</script>
 
<template>
    <div class="header">
        <Table :data="employees" />
    </div>
</template>
 
<style scoped></style>

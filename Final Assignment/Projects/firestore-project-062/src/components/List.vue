<script setup>
import { ref, onMounted } from 'vue';
import { getDataByCollectionName } from "../composable/getData.js"

defineProps({
    data: {
        type: Array,
        reqired: true,
    },
});

const colCompany = ref([])
const companies = ref([]);
onMounted(async () => {
    colCompany.value = await getDataByCollectionName("companies");
    colCompany.value.forEach(emp => {
        companies.value.push(emp);
    });
});

const getCompanyName = (cmp_id) => {
    let cmp_name = '';
    companies.value.forEach(cmp => {
        if (cmp.id == cmp_id) {
            cmp_name = cmp.name;
        }
    });
    return cmp_name;
}
</script>
 
<template>
    <div>
        <div v-for="(doc, index) in data" :key="index" class="bg-gray-100 rounded-lg p-4 mb-4">
            <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold">{{ index + 1 }}. {{ doc.name }}</h3>
                <span class="text-sm opacity-60">{{ doc.email }}</span>
            </div>
            <div class="mt-2">
                <ul>
                    <li>อายุ: {{ doc.age }}</li>
                    <li>
                        บริษัท: <span class="text-blue-500 underline cursor-pointer">
                            {{ getCompanyName(doc.company) }}
                        </span>
                    </li>
                    <li>อาชีพ: {{ doc.department }}</li>
                    <li>เงินเดือน: {{ doc.salary }} บาท</li>
                    <!-- <li v-if="doc.department">
                        Department:
                        <ul class="pl-4">
                            <li>Id: {{ doc.department.id }}</li>
                            <li>Job-Name: {{ doc.department.name }}</li>
                            <li>Salary: {{ doc.department.salary }}</li>
                        </ul>
                    </li> -->
                </ul>
            </div>
        </div>
    </div>
</template>

 
<style scoped></style>
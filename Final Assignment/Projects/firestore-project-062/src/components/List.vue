<script setup>
import { ref, watchEffect } from 'vue';
import { getCompanyNameById } from "../composable/getData.js"

const props = defineProps({
    data: {
        type: Array,
        reqired: true,
    },
    companies: {
        type: Array,
        reqired: true,
    }
});

const companyNames = ref({});

watchEffect(async () => {
    props.companies.forEach(async (company) => {
        companyNames.value[company.id] = await getCompanyNameById(company.id);
    });
});

</script>
 
<template>
    <div v-if="companyNames && data">
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
                            {{ companyNames[doc.company] }}
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

    <div v-else class="flex justify-center items-center">
        <div class="loading loading-dots loading-lg py-44 bg-purple-700"></div>
    </div>
</template>

 
<style scoped></style>
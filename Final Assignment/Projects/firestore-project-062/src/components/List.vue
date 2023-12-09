<script setup>
import { ref, watchEffect } from 'vue';
import { getCompanyNameById } from "../composable/getData.js"
import { companyDetails, departmentDetails } from "../composable/swalDetail"

const props = defineProps({
    employees: {
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
    <div v-if="companyNames && employees">
        <div v-for="(doc, index) in employees" :key="index" class="bg-gray-100 rounded-lg p-4 mb-4">
            <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold">{{ index + 1 }}. {{ doc.name }}</h3>
                <span class="text-sm opacity-60">{{ doc.email }}</span>
            </div>
            <div class="mt-2">
                <ul>
                    <li>อายุ: {{ doc.age }}</li>
                    <li>
                        บริษัท: <span @click="companyDetails(doc.company, companies)"
                            class="text-blue-500 underline cursor-pointer">
                            {{ companyNames[doc.company] }}
                        </span>
                    </li>
                    <li>เงินเดือน: {{ doc.salary }} บาท</li>
                    <li>อาชีพ: {{ doc.department }} <button @click="departmentDetails(doc.department)"
                            class="text-blue-500 underline">เพิ่มเติม</button></li>
                </ul>
            </div>
        </div>
    </div>

    <div v-else class="flex justify-center items-center">
        <div class="loading loading-dots loading-lg py-44 bg-purple-700"></div>
    </div>
</template>

 
<style scoped></style>
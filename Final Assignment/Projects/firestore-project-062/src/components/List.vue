<script setup>
import { ref, watchEffect } from 'vue';
import { getCompanyNameById } from "../composable/getData.js"
import Swal from 'sweetalert2'

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

const companyDetails = (cmp_id, companies) => {
    const company = companies.find(c => c.id === cmp_id);
    if (!company) {
        Swal.fire({
            text: 'Company not found',
            icon: 'error',
            showConfirmButton: false,
        });
        return;
    }

    const {
        id,
        name,
        type,
        status: { open, createdOn, updatedOn }
    } = company;

    const [createdOnDate, updatedOnDate] = [createdOn, updatedOn].map(
        (date) => new Date(date.seconds * 1000).toLocaleString("th-TH", {
            day: "numeric",
            month: "long",
            year: "numeric",
        })
    );

    Swal.fire({
        html: `<div class="flex flex-col text-left text-gray-700">
                        <div class="flex items-center justify-between">
                            <span>Company Detail:</span>
                            <span class="text-blue-500">ID: ${id}</span>
                        </div>
                        <ul class="p-4">
                            <li>ชื่อบริษัท: <span class="text-blue-500">${name}</span></li>
                            <li>ประเภท: <span class="text-blue-500">${type}</span></li>
                            <li>สถานะบริษัท: ${open == true ? 'เปิดดำเนินการ' : 'ปิดบริษัทไปแล้ว'}</li>
                            <li>สร้างขึ้นเมื่อ: ${createdOnDate}</li>
                            <li>อัปเดตล่าสุด: ${updatedOnDate}</li>
                        </ul>
                    </div>`,
        showConfirmButton: false,
    });
};


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
                    <li>อาชีพ: {{ doc.department }}</li>
                    <li>เงินเดือน: {{ doc.salary }} บาท</li>
                </ul>
            </div>
        </div>
    </div>

    <div v-else class="flex justify-center items-center">
        <div class="loading loading-dots loading-lg py-44 bg-purple-700"></div>
    </div>
</template>

 
<style scoped></style>
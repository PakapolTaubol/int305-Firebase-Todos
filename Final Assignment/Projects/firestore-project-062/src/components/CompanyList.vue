<script setup>
const props = defineProps({
    companies: {
        type: Array,
        reqired: true,
    }
});
</script>
 
<template>
    <div>
        <div class="w-full h-full flex gap-x-1 overflow-scroll pb-4">
            <button v-for="(company, index) in companies" :key="companies.id" class="btn btn-primary text-white">
                {{ company.name }}
            </button>
        </div>
    </div>
</template>
 
<style scoped></style>
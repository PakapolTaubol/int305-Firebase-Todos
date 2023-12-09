<script setup>
const props = defineProps({
    departments: {
        type: Array,
        reqired: true,
    }
});
</script>
 
<template>
    <div v-if="departments">
        <div v-for="(doc, index) in departments" :key="index" class="bg-gray-100 rounded-lg p-4 mb-4">
            <h3 class="text-lg font-semibold">{{ index + 1 }}. {{ doc.name }}</h3>
            <p>สกิลที่ต้องการ : <span class="text-red-500">{{ doc.skill.join(', ') }}</span></p>
        </div>
    </div>
    <div v-else class="flex justify-center items-center">
        <div class="loading loading-dots loading-lg py-44 bg-purple-700"></div>
    </div>
</template>
 
<style scoped></style>
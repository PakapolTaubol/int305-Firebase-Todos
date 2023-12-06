<script setup>
defineProps({
    data: {
        type: Array,
        reqired: true,
    },
});
</script>
 
<template>
    <div>
        <div v-for="(doc, index) in data" :key="index">
            <div class="w-full h-full">
                <li>{{ index + 1 }}. {{ doc.name }}</li>
                <li>age: {{ doc.age }}</li>
                <li>email: {{ doc.email }}</li>
                <li>{{ doc.department }}</li>
            </div>
        </div>
    </div>
</template>

 
<style scoped></style>
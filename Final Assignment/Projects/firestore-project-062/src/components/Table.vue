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
        <div v-for="(doc, index) in data" :key="index" class="bg-gray-100 rounded-lg p-4 mb-4">
            <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold">{{ index + 1 }}. {{ doc.name }}</h3>
                <span class="text-sm opacity-60">{{ doc.email }}</span>
            </div>
            <div class="mt-2">
                <ul>
                    <li class="text-gray-700">Age: {{ doc.age }}</li>
                    <!-- <li class="text-gray-700">Email: {{ doc.email }}</li> -->
                    <li v-if="doc.department" class="text-gray-700">
                        Department:
                        <ul class="pl-4">
                            <li>Id: {{ doc.department.id }}</li>
                            <li>Job-Name: {{ doc.department.name }}</li>
                            <li>Salary: {{ doc.department.salary }}</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

 
<style scoped></style>
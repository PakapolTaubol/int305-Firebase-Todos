<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from "vue-router"
import { collection, query, where, getDocs, onSnapshot } from "firebase/firestore"
import db from "../firebase/init.js"
import PostItem from "../components/PostItem.vue"

const user = ref("")
const posts = ref([])
const route = useRoute() 

async function getPosts(){
  user.value = route.params.user 
  /*  add your code here */
}

watch( () => route.params.user, getPosts)

onMounted(() => {
  getPosts() 
})

</script>

<template>
    <h3>Posts : {{user}}</h3>
    <PostItem v-for="post in posts" :post="post" :key="post.id" />
</template>

<style scoped>

</style>


<script setup>
import { ref, onMounted, watch } from "vue";
import { collection, query, where, getDocs, limit } from "firebase/firestore";
import db from "../firebase/init.js";
import Documents from "../components/Documents.vue";
import { useRoute } from "vue-router";

const zips = ref([]);
const title = ref("");
const route = useRoute();

async function getQuery() {
  let qryId = route.params.id;
  zips.value = [];
  let qry = null;
  if (qryId == 1) {
    title.value = "Cities with population > 100000";
    const zipsRef = collection(db, "zips");
    qry = query(zipsRef, where("pop", ">", 100000));
  } else if (qryId == 2) {
    title.value = "Cities in New York";
    const zipsRef = collection(db, "zips");
    qry = query(zipsRef, where("state", "==", "NY"), limit(10));
  }

  const querySnap = await getDocs(qry);
  querySnap.forEach((doc) => {
    let data = doc.data();
    data.id = doc.id;
    zips.value.push(data);
  });
}

watch(() => route.params.id, getQuery);

onMounted(() => {
  getQuery();
});
</script>
<template>
  <Documents :title="title" :data="zips" />
</template>

<style></style>

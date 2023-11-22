<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div id="header">
    <h2>Reports</h2>
    <RouterLink to="/query/1">1. Cities with population &gt; 100000</RouterLink>
    <RouterLink to="/query/2">2. Cities in New York</RouterLink>
  </div>
  <div id="detail">
    <RouterView />
  </div>
</template>

<style scoped>
a {
  display: block;
}
</style>

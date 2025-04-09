<script setup>
import WujieVue from 'wujie-vue3';


</script>

<template>
  <div>
    <h1>这是主应用</h1>
    <WujieVue name="vue3" url="http://localhost:5174/"></WujieVue> <!-- 子应用 -->
    <WujieVue name="react" url="http://localhost:5175/"></WujieVue> <!-- 子应用 -->
  </div>

</template>

<style scoped>

</style>

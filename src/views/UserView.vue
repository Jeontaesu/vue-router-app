<template>
  <div>
    <h2>{{ username }}님 환영합니다 👋</h2>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const username = route.params.name;
</script>

<style lang="scss" scoped></style>

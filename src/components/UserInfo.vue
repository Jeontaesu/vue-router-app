<template>
  <div v-if="store.username">
    <p>
      <strong>{{ store.username }}</strong
      >님, 환영합니다!
    </p>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/user";

const store = useUserStore();
</script>

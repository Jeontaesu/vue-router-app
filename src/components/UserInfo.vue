<template>
  <div v-if="store.username">
    <p v-if="store.username">
      <strong>{{ store.username }}</strong
      >님, 환영합니다!
    </p>
    <p v-else>이름을 입력해 주세요.</p>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/user";

const store = useUserStore();
</script>

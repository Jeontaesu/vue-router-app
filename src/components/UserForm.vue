<template>
  <div>
    <input v-model="input" placeholder="이름을 입력하세요" />
    <button @click="save">저장</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/user";

const input = ref("");
const store = useUserStore();

function save() {
  store.setUsername(input.value);
}
</script>

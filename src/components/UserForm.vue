<template>
  <div>
    <input v-model="input" placeholder="이름을 입력하세요" />
    <button @click="save">저장하고 소개로</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";

const input = ref();
const router = useRouter();
const store = useUserStore();

function save() {
  if (input.value.trim()) {
    store.setUsername(input.value.trim());
    router.push("/about"); // 저장 후 소개 페이지로 이동
  }
}
</script>

<style lang="scss" scoped></style>

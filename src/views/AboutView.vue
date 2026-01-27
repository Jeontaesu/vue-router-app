<template>
  <div>
    <h2>소개 페이지</h2>
    <p>
      <strong>{{ store.username }}</strong
      >님을 소개합니다.
    </p>
    <router-link to="/">← 홈으로 돌아가기</router-link>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";

const router = useRouter();
const store = useUserStore();

onMounted(() => {
  if (!store.username) {
    alert("이름이 없습니다. 홈으로 이동합니다.");
    router.push("/");
  }
});
</script>

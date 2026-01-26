<template>
  <div>
    <h2>소개 페이지</h2>
    <UserInfo />
    <router-link to="/">홈으로</router-link>
  </div>
</template>

<script setup>
import UserInfo from "@/components/UserInfo.vue";
</script>

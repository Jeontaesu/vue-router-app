<template>
  <div>
    <h2>홈</h2>
    <UserForm />
    <UserInfo />
    <router-link to="/about">소개 페이지로 이동</router-link>
  </div>
</template>

<script setup>
import UserForm from "@/components/UserForm.vue";
import UserInfo from "@/components/UserInfo.vue";
</script>

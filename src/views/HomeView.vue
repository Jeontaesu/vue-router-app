<template>
  <div>
    <h2>홈 페이지</h2>
    <UserForm />
    <UserInfo />
    <hr />
    <PostList />
  </div>
</template>

<script setup>
import UserForm from "@/components/UserForm.vue";
import UserInfo from "@/components/UserInfo.vue";
import PostList from "@/components/PostList.vue";
</script>

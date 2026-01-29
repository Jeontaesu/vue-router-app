<template>
  <div v-if="post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <router-link to="/">← 목록으로</router-link>
  </div>
  <div v-else>
    <p>게시글을 찾을 수 없습니다.</p>
    <router-link to="/">← 홈으로</router-link>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { usePostStore } from "@/stores/posts";

const route = useRoute();
const store = usePostStore();
const post = store.getPostById(route.params.id);
</script>

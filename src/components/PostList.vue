<template>
  <div>
    <h2>게시글 목록</h2>
    <ul>
      <li v-for="post in store.posts" :key="post.id">
        <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { usePostStore } from "@/stores/posts";
const store = usePostStore();
</script>

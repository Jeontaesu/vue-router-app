<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function goToAbout() {
  router.push("/about");
}

function goToPost() {
  router.push({
    path: "/post/123",
    query: { writer: "홍길동" },
  });
}
</script>

<template>
  <div>
    <h2>홈 페이지</h2>
    <p>여기는 메인 페이지입니다.</p>
    <button @click="goToAbout">소개로 이동</button>
    <button @click="goToPost">게시글 123 보기</button>
  </div>
</template>

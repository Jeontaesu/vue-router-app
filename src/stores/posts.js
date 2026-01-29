import { defineStore } from "pinia";

export const usePostStore = defineStore("posts", {
  state: () => ({
    posts: [
      { id: 1, title: "Vue 3 시작하기", content: "Composition API를 배워봅시다." },
      { id: 2, title: "Pinia란?", content: "간단한 상태 관리 라이브러리입니다." },
      { id: 3, title: "Vue Router 활용법", content: "SPA의 핵심입니다." },
    ],
  }),
  getters: {
    getPostById: (state) => (id) => state.posts.find((post) => post.id === Number(id)),
  },
});

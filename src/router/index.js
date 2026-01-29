import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
// import UserView from '@/views/UserView.vue'
import PostView from "@/views/PostView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/post/:id", component: PostView }, // ✅ 게시글 상세 라우트
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

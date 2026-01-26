import { createRouter, createWebHistory } from "vue-router";
import AboutView from "@/views/AboutView.vue";
import HomeView from "@/views/HomeView.vue";
import PostView from "@/views/PostView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/post/:id", name: "Post", component: PostView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

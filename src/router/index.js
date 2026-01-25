import { createRouter, createWebHistory } from "vue-router";
import AboutView from "@/views/AboutView.vue";
import HomeView from "@/views/HomeView.vue";
import UserView from "@/views/UserView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/user/:name", name: "User", component: UserView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

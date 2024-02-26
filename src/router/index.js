import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import ByBrand from "../views/ByBrand.vue";

const routes = [
  {
    path: "/",
    name: "mainpage",
    component: MainPage,
  },
  {
    path: "/bybrand",
    name: "bybrand",
    component: ByBrand,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

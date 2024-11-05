import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CategoriesView from "../views/CategoriesView.vue";
import XPPenView from "../views/XPPenView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/categories",
    name: "categories",
    component: CategoriesView,
  },
  {
    path: "/xp_pen",
    name: "xp_pen",
    component: XPPenView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

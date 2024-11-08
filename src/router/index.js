import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CategoriesView from "../views/CategoriesView.vue";
import XPPenView from "../views/XPPenView.vue";
import ContactUs from "../views/ContactUs.vue";
import ProductDetail from "../views/product/ProductDetail.vue";

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
  {
    path: "/contact",
    name: "contact",
    component: ContactUs,
  },
  {
    path: "/product/productdetail",
    name: "productdetail",
    component: ProductDetail,
    prop: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

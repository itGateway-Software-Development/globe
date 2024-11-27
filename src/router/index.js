import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CategoriesView from "../views/CategoriesView.vue";
import XPPenView from "../views/XPPenView.vue";
import ContactUs from "../views/ContactUs.vue";
import ProductDetail from "../views/product/ProductDetail.vue";
import Cart from "../views/Cart.vue";
import CheckoutView from "../views/CheckoutView.vue";

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
    path: "/information/contact",
    name: "contact",
    component: ContactUs,
  },
  {
    path: "/product/productdetail/:id",
    name: "productdetail",
    component: ProductDetail,
    prop: true,
  },
  {
    path: "/information/aboutus",
    name: "aboutus",
    component: AboutView,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/cart/checkout",
    name: "checkout",
    component: CheckoutView,
    meta: { hideNavbar: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

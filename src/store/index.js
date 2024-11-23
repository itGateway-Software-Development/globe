import { createStore } from "vuex";
import search from "./modules/search";
import product from "./modules/product";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    search,
    product,
  },
});

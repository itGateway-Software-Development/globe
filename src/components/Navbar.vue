<template>
  <div class="nav-wrapper">
    <div class="upper-nav">
      <div class="d-flex align-items-center justify-content-between">
        <div class="logo">
          <router-link to="/" class="d-flex align-items-center gap-2">
            <img src="../assets/images/logo.png" alt="" />
            <div class="d-inline-block">
              <h5><span>GLOBE</span></h5>
              <h5>IT & SMART ELECTRONIC</h5>
            </div>
          </router-link>
        </div>

        <!-- mobile menu button  -->
        <div class="mobile-menu-btn align-items-center gap-2">
          <div class="cursor-pointer" @click="isMobileSearch = !isMobileSearch">
            <span
              class="material-symbols-outlined fs-1"
              :style="{ color: isMobileSearch ? '#23b5de' : '' }"
            >
              search
            </span>
          </div>
          <div>
            <span class="material-symbols-outlined"> shopping_cart </span>
          </div>

          <div @click="drawer = !drawer" class="cursor-pointer">
            <span class="material-symbols-outlined fs-1"> menu_open </span>
          </div>
        </div>

        <div class="top-menu d-flex align-items-center gap-2">
          <span
            class="search-input-wrapper d-inline-flex"
            :class="{ searching: isSearch }"
          >
            <input
              type="text"
              class="search-input"
              placeholder="search ....."
              :class="{ searching: isSearch }"
            />
            <span
              class="material-symbols-outlined icon cursor-pointer search-bar-icon prevent-select"
              :class="{ searching: isSearch }"
              ref="searchIcon"
              @click="handleSearch"
            >
              search
            </span>
          </span>
          <div class="d-flex align-items-center gap-4">
            <router-link
              to="/"
              class="text-center d-inline-block justify-content-center"
            >
              <span class="material-symbols-outlined"> shopping_cart </span>
            </router-link>
            <router-link
              to="/"
              class="text-center d-inline-block justify-content-center"
            >
              <span class="material-symbols-outlined"> favorite </span>
            </router-link>
            <router-link
              to="/"
              class="text-center d-inline-block justify-content-center"
            >
              <span class="material-symbols-outlined"> account_circle </span>
            </router-link>
            <router-link
              to="/"
              class="text-center d-inline-block justify-content-center"
            >
              <span class="material-symbols-outlined"> phone </span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="lower-nav">
      <div class="nav-content">
        <div
          class="d-flex align-items-center justify-content-center gap-5 pt-0 position-relative"
        >
          <router-link to="/"><p>Home</p></router-link>
          <router-link
            to="/"
            class="menu"
            @mouseenter="menuHover(true)"
            @mouseleave="menuHover(false)"
          >
            <p class="d-flex align-items-center gap-2">
              Categories
              <span class="material-symbols-outlined"> arrow_drop_down </span>
            </p>

            <Categories />
          </router-link>
          <router-link to="/" class="d-flex align-items-center gap-2"
            ><p>XP-Pen</p>
            <span class="material-symbols-outlined">
              arrow_drop_down
            </span></router-link
          >
          <router-link to="/"><p>Globe Solar Solution</p></router-link>
          <router-link to="/"><p>Information</p></router-link>
        </div>
      </div>
    </div>

    <!-- Sidebar (Drawer) for mobile -->
    <v-navigation-drawer
      app
      v-model="drawer"
      id="drawer"
      style="
        background: var(--background-color);
        color: var(--font-color-white);
      "
      temporary
    >
      <MobileDrawer @changeRoute="handleChangeRoute" />
    </v-navigation-drawer>

    <!-- Search Ui for mobile  -->
    <div
      v-if="isMobileSearch"
      class="w-100 h-100 position-fixed border-top"
      style="background: #23b5de"
    >
      <div class="input-group my-2 px-1">
        <input
          type="text"
          class="form-control"
          placeholder="Search Here ..."
          aria-describedby="basic-addon2"
        />
        <span
          class="input-group-text cursor-pointer"
          style="background: rgba(173, 173, 173, 0.144)"
          id="basic-addon2"
          @click="isMobileSearch = !isMobileSearch"
        >
          <span class="material-symbols-outlined fs-1 text-white"> close </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import MobileDrawer from "./MobileDrawer";
import Categories from "./navDropDown/Categories";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  components: {
    MobileDrawer,
    Categories,
  },
  setup(props, { emit }) {
    const isSearch = ref(false);
    const drawer = ref(false);
    const router = useRouter();
    const isMobileSearch = ref(false);
    const dropdownContent = ref("categories");
    const handleSearch = () => {
      isSearch.value = !isSearch.value;
      const browserWidth = window.innerWidth;
      if (browserWidth < 890 && browserWidth > 768 && isSearch.value) {
        document.querySelector(".logo").classList.add("opacity-0");
      } else {
        setTimeout(
          () => document.querySelector(".logo").classList.remove("opacity-0"),
          500
        );
      }
    };

    const toogleDrawer = () => {
      drawer.value = true;
      const mobile = document.getElementById("drawer");
      mobile.classList.add("active-drawer");
    };

    const handleChangeRoute = (route) => {
      router.push(route);
      drawer.value = false;
    };

    const menuHover = (value) => emit("menuHoverStatus", value);

    return {
      isSearch,
      handleSearch,
      dropdownContent,
      menuHover,
      drawer,
      handleChangeRoute,
      toogleDrawer,
      isMobileSearch,
    };
  },
};
</script>

<style></style>

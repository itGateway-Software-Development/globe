<template>
  <div class="nav-wrapper" v-if="isNavbarVisible" data-aos="fade-down">
    <div class="desktop-nav">
      <nav class="upper-nav content-wrapper">
        <div
          class="d-flex align-items-center gap-5 mobile-nav justify-content-between"
        >
          <div class="d-flex align-items-center gap-4">
            <div class="logo">
              <router-link to="/"
                ><img src="../assets/images/logo.png" alt=""
              /></router-link>
            </div>

            <div class="phone">
              <router-link
                to="/contact"
                class="d-flex align-items-center gap-1 justify-content-center phone-list"
              >
                <div class="d-flex align-items-center gap-1">
                  <span class="icon-phone">
                    <span class="material-symbols-outlined">
                      phone_in_talk
                    </span>
                  </span>
                  <p class="text-bold">Call Us:</p>
                </div>
                <span class="color-text">+959 880 441 046</span>
              </router-link>
            </div>
          </div>
          <!-- mobile menu button  -->
          <div
            class="mobile-menu-btn align-items-center justify-content-between"
          >
            <div class="icon-group-mobile d-flex align-items-center gap-4">
              <div
                class="cursor-pointer"
                @click="isMobileSearch = !isMobileSearch"
              >
                <span
                  class="material-symbols-outlined"
                  :style="{
                    color: isMobileSearch ? '#23b5de' : '',
                  }"
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
          </div>

          <div class="search-group" ref="searchBar">
            <span class="search-input-wrapper d-inline-flex align-items-center">
              <input
                ref="searchInput"
                type="text"
                class="search-input"
                placeholder="search ....."
                @click="toggleSearch()"
              />
              <span
                class="material-symbols-outlined icon cursor-pointer search-bar-icon prevent-select"
                ref="searchIcon"
                @click="handleSearch"
              >
                search
              </span>
            </span>

            <div class="search-ui" v-if="searchUi">
              <div class="search-ui-header">
                <h6>Trending Now</h6>
              </div>
              <hr class="px-0 py-0" />
              <div
                class="ternding-card-list d-flex align-items-center flex-wrap gap-3"
              >
                <div
                  class="tranding-card"
                  v-for="item in serachList"
                  :key="item.index"
                >
                  <div class="d-flex align-items-center gap-2">
                    <span class="material-symbols-outlined"> search </span>
                    <p>{{ item.name }}</p>
                  </div>
                </div>
              </div>
              <div class="search-ui-header mt-5">
                <h6>Popular Item</h6>
              </div>
              <hr class="px-0 py-0" />
              <PopularProduct></PopularProduct>
            </div>
          </div>
          <div class="top-menu d-flex align-items-center gap-4">
            <router-link to="/cart" class="d-flex align-items-center">
              <span class="material-symbols-outlined"> shopping_cart </span>
              <span class="cardtotal text-center">{{ cartItemCount }}</span>
            </router-link>

            <router-link to="/" class="d-flex align-items-center">
              <span class="material-symbols-outlined"> favorite </span>
              <span class="wishlist text-center">0</span>
            </router-link>
            <router-link
              to="/"
              class="d-flex flex-column justify-content-center align-items-center"
            >
              <span class="material-symbols-outlined"> account_circle </span>
            </router-link>
          </div>
        </div>
      </nav>
      <nav class="lower-nav" id="navbar">
        <ul
          class="d-flex align-items center justify-content-center gap-5 nav-list"
        >
          <li class="nav-item">
            <router-link class="menu-route" to="/"><p>Home</p></router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link class="menu-route d-flex" to="/categories"
              ><p class="nav-link">Categories</p>
              <span class="material-symbols-outlined nav-link mt-1">
                keyboard_arrow_down
              </span></router-link
            >
            <div class="menu-dropdown menuDefault nav-dropdown--lv1">
              <ul>
                <li>
                  <router-link to="/" class="menu-route">
                    <p>Laptop</p>
                  </router-link>
                </li>
                <li>
                  <router-link to="/" class="menu-route">
                    <p>Tech Gadgets</p>
                  </router-link>
                </li>
                <li>
                  <router-link to="/" class="menu-route">
                    <p>Headset</p>
                  </router-link>
                </li>
                <li>
                  <router-link to="/" class="menu-route">
                    <p>Speaker</p>
                  </router-link>
                </li>
                <li>
                  <router-link to="/" class="menu-route">
                    <p>Portable</p>
                  </router-link>
                </li>
                <li>
                  <router-link to="/" class="menu-route">
                    <p>Tablet & E-Reader</p>
                  </router-link>
                </li>
                <li>
                  <router-link to="/" class="menu-route">
                    <p>Netwroking</p>
                  </router-link>
                </li>
                <li>
                  <router-link to="/" class="menu-route">
                    <p>Telecommunication</p>
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item dropdown">
            <router-link class="menu-route d-flex" to="/xp_pen"
              ><p class="nav-link">XP-Pen</p>
              <span class="material-symbols-outlined nav-link mt-1">
                keyboard_arrow_down
              </span></router-link
            >
            <div class="menu-dropdown menuDefault nav-dropdown--lv1">
              <ul>
                <li>
                  <router-link to="/" class="menu-route">
                    <p>Drawing Tablets</p>
                  </router-link>
                </li>
                <li>
                  <router-link to="/" class="menu-route">
                    <p>Drawing Display</p>
                  </router-link>
                </li>
                <li>
                  <router-link to="/" class="menu-route">
                    <p>Accessories</p>
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <router-link class="menu-route" to="/"
              ><p>Globe Solar Solution</p></router-link
            >
          </li>
          <li class="nav-item dropdown">
            <router-link class="menu-route d-flex" to="/"
              ><p class="nav-link">Information</p>
              <span class="material-symbols-outlined nav-link mt-1">
                keyboard_arrow_down
              </span></router-link
            >
            <div class="menu-dropdown menuDefault nav-dropdown--lv1">
              <ul>
                <li>
                  <router-link to="/" class="menu-route">
                    <p>Promotion</p>
                  </router-link>
                </li>
                <li>
                  <router-link to="/" class="menu-route">
                    <p>About Us</p>
                  </router-link>
                </li>
                <li>
                  <router-link to="/information/contact" class="menu-route">
                    <p>Contact Us</p>
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Sidebar (Drawer) for mobile -->
    <v-navigation-drawer
      app
      v-model="drawer"
      :class="drawer ? 'active' : 'unactive'"
      style="background: var(--background-color); color: #ededed; width: 100%"
      id="drawer"
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
import PopularProduct from "./search/PopularProduct";
import MobileDrawer from "./drawer/MobileDrawer";
import "@/assets/css/nav.css";
import { onMounted, ref, onBeforeUnmount, computed, onUnmounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import search from "../store/modules/search";

export default {
  components: {
    PopularProduct,
    MobileDrawer,
  },
  setup(props, { emit }) {
    const isSearch = ref(false);
    const drawer = ref(false);
    const router = useRouter();
    const store = useStore();
    const isScroll = ref(false);
    const isMobileSearch = ref(false);
    const route = useRoute();
    const searchUi = ref(false);
    const searchBar = ref(null);
    const searchInput = ref(null);
    const serachList = ref([
      {
        name: "Laptop",
      },
      {
        name: "Speaker",
      },
      {
        name: "Drawing Tablet",
      },
      {
        name: "Keyboard",
      },
      {
        name: "Mouse",
      },
      {
        name: "Headphone",
      },
      {
        name: "Earbuds",
      },
      {
        name: "Tablets",
      },
      {
        name: "Projector",
      },
      {
        name: "Drawing Display",
      },
    ]);

    const cartItemCount = computed(() => store.getters["cartItemCount"]);

    const isSearchOpen = computed(() => store.getters.isSearchOpen);

    const toggleSearch = () => {
      searchUi.value = !searchUi.value;
    };

    const handleClickOutside = (event) => {
      if (
        event.target != searchBar.value &&
        event.target != searchInput.value
      ) {
        searchUi.value = searchUi.value == true ? false : searchUi.value;
      }
    };

    const isNavbarVisible = ref(true);
    const fade_in = ref(false);
    const lastScrollY = ref(window.scrollY);
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY.value) {
        // Scrolling up
        isNavbarVisible.value = true;
        fade_in.value = true;
      } else if (currentScrollY > lastScrollY.value) {
        // Scrolling down
        isNavbarVisible.value = false;
      }
      lastScrollY.value = currentScrollY;
    };

    const navigate = (route) => {
      router.push(route);
      drawer.value = false;
    };

    const handleChangeRoute = (route) => {
      router.push(route);
      drawer.value = false;
    };

    const handleNavShadow = () => {
      if (window.scrollY > 300) {
        isScroll.value = true;
      } else {
        isScroll.value = false;
      }
    };

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

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("click", handleClickOutside);
    });

    onUnmounted(() => {
      window.removeEventListener("click", handleClickOutside);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      isSearch,
      drawer,
      navigate,
      handleChangeRoute,
      isNavbarVisible,
      handleSearch,
      isMobileSearch,
      route,
      fade_in,
      serachList,
      isSearchOpen,
      toggleSearch,
      searchUi,
      searchBar,
      searchInput,
      cartItemCount,
    };
  },
};
</script>

<style scoped>
.active {
  transform: translateX(0px) !important;
}

.unactive {
  transform: translateX(-100%) !important;
}

.fade-in {
  top: 0;
}

::-webkit-scrollbar {
  width: 10px;
  border-radius: 10px !important;
}

::-webkit-scrollbar-thumb {
  background: #333;
  width: 7px;
  height: 5px !important;
  border-radius: 10px !important;
  border: 3px solid #dfdfdf;
}

::-webkit-scrollbar-track {
  background-color: #efefef;
  border-radius: 10px;
  border: 1px solid #dfdfdf;
}
</style>

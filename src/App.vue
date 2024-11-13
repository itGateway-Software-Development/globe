<template>
  <v-app>
    <Navbar @menuHoverStatus="menuHoverEffect"></Navbar>

    <v-main :class="{ blurPage: isHover }">
      <Loading v-if="loading" />
      <router-view />
    </v-main>

    <Footer></Footer>
  </v-app>
  <Loading v-if="loading" />
</template>

<script>
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ref, watch, onMounted, onUnmounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
export default {
  components: {
    Loading,
    Footer,
    Navbar,
  },

  setup() {
    const isHover = ref(false);
    const menuHoverEffect = (data) => (isHover.value = data);
    const route = useRoute();
    const store = useStore();

    // const handleClick = (event) => {
    //   console.log(searchUi.value);
    // };

    const loading = ref(true);

    const loadContent = () => {
      loading.value = true;

      setTimeout(() => {
        loading.value = false;
      }, 1500);
    };

    watch(route, () => loadContent());

    onMounted(() => {
      // window.addEventListener("load", () => {
      //   loading.value = false;
      // });
      window.scroll(0, 0);
      loadContent();
    });
    // onMounted(() => {
    //   document.addEventListener("click", handleClick);
    // });

    // onUnmounted(() => {
    //   document.removeEventListener("click", handleClick);
    // });

    return {
      menuHoverEffect,
      isHover,
      loadContent,
      loading,
    };
  },
};
</script>

<style>
.blurPage {
  filter: blur(5px) brightness(0.5);
  background: rgb(255, 254, 254);
}
</style>

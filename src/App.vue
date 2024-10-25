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
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
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

    const loading = ref(true);

    const loadContent = () => {
      loading.value = true;

      setTimeout(() => {
        loading.value = false;
      }, 3000);
    };

    watch(route, () => loadContent());

    onMounted(() => {
      // window.addEventListener("load", () => {
      //   loading.value = false;
      // });
      window.scroll(0, 0);
      loadContent();
    });

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

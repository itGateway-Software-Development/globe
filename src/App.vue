<template>
  <v-app>
    <Navbar @menuHoverStatus="menuHoverEffect"></Navbar>
    <v-main :class="{ blurPage: isHover }">
      <router-view />
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ref } from "vue";
export default {
  components: {
    Footer,
    Navbar,
  },

  setup() {
    const isHover = ref(false);
    const menuHoverEffect = (data) => (isHover.value = data);

    return {
      menuHoverEffect,
      isHover,
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

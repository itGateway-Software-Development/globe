<template>
  <Header></Header>
  <Slider></Slider>
  <PopularSilder></PopularSilder>
  <BrowseBrand></BrowseBrand>
</template>

<script>
import BrowseBrand from "../components/BrowseBrand";
import PopularSilder from "../components/PopularSilder";
import Slider from "../components/Slider";
import Header from "../components/Header";
export default {
  components: {
    BrowseBrand,
    PopularSilder,
    Slider,
    Header,
  },
};
</script>

<style></style>

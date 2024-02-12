<template>
  <Header></Header>
  <Slider></Slider>
  <PopularSilder></PopularSilder>
  <BrowseBrand></BrowseBrand>
  <ProductShow></ProductShow>
</template>

<script>
import ProductShow from "../components/ProductShow";
import BrowseBrand from "../components/BrowseBrand";
import PopularSilder from "../components/PopularSilder";
import Slider from "../components/Slider";
import Header from "../components/Header";
export default {
  components: {
    ProductShow,
    BrowseBrand,
    PopularSilder,
    Slider,
    Header,
  },
};
</script>

<style></style>

<template>
  <Header></Header>
  <Slider></Slider>
  <PopularSilder></PopularSilder>
  <BrowseBrand></BrowseBrand>
  <ProductShow></ProductShow>
  <Footer></Footer>
</template>

<script>
import Footer from "../components/Footer";
import ProductShow from "../components/ProductShow";
import BrowseBrand from "../components/BrowseBrand";
import PopularSilder from "../components/PopularSilder";
import Slider from "../components/Slider";
import Header from "../components/Header";
export default {
  components: {
    Footer,
    ProductShow,
    BrowseBrand,
    PopularSilder,
    Slider,
    Header,
  },
};
</script>

<style></style>

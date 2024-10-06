<template>
  <v-app>
    <Carousel></Carousel>
    <PopularItem></PopularItem>
    <XP_PenSection></XP_PenSection>
    <LaptopSection></LaptopSection>
    <BrandList></BrandList>
  </v-app>
</template>

<script>
import BrandList from "../components/BrandList";
import Laptop from "../components/categories/Laptop";
import XP_PenSection from "../components/XP_PenSection";
import LaptopSection from "../components/LaptopSection";
import PopularItem from "../components/PopularItem";
import Carousel from "../components/Carousel";
// @ is an alias to /src

export default {
  components: {
    BrandList,
    Laptop,
    XP_PenSection,
    LaptopSection,
    PopularItem,
    Carousel,
  },
};
</script>

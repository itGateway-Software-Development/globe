<template>
  <v-app>
    <Carousel></Carousel>
    <PromotionSlider></PromotionSlider>
    <PopularItem></PopularItem>
    <XP_PenSection></XP_PenSection>
    <LaptopSection></LaptopSection>
    <BrandList></BrandList>
  </v-app>
</template>

<script>
import PromotionSlider from "../components/PromotionSlider";
import BrandList from "../components/BrandList";
import XP_PenSection from "../components/XP_PenSection";
import LaptopSection from "../components/LaptopSection";
import PopularItem from "../components/PopularItem";
import Carousel from "../components/Carousel";
// @ is an alias to /src

export default {
  components: {
    PromotionSlider,
    BrandList,
    XP_PenSection,
    LaptopSection,
    PopularItem,
    Carousel,
  },
};
</script>

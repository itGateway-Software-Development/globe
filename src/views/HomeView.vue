<template>
  <v-app>
    <Carousel></Carousel>
    <PromotionSlider></PromotionSlider>
    <PopularItem></PopularItem>
    <XP_PenSection></XP_PenSection>
    <LaptopSection></LaptopSection>
    <HeadsetSection></HeadsetSection>
    <SpeakerSection></SpeakerSection>
    <Tablet_EReaderSection></Tablet_EReaderSection>
    <TechGadgetsSection></TechGadgetsSection>
    <BrandList></BrandList>
  </v-app>
</template>

<script>
import TechGadgetsSection from "../components/homecomponents/TechGadgetsSection";
import Tablet_EReaderSection from "../components/homecomponents/Tablet_EReaderSection";
import SpeakerSection from "../components/homecomponents/SpeakerSection";
import HeadsetSection from "../components/homecomponents/HeadsetSection";
import PromotionSlider from "../components/homecomponents/PromotionSlider";
import BrandList from "../components/homecomponents/BrandList";
import XP_PenSection from "../components/homecomponents/XP_PenSection";
import LaptopSection from "../components/homecomponents/LaptopSection";
import PopularItem from "../components/homecomponents/PopularItem";
import Carousel from "../components/homecomponents/Carousel";
import { ref, onMounted } from "vue";
// @ is an alias to /src

export default {
  components: {
    TechGadgetsSection,
    Tablet_EReaderSection,
    SpeakerSection,
    HeadsetSection,
    PromotionSlider,
    BrandList,
    XP_PenSection,
    LaptopSection,
    PopularItem,
    Carousel,
  },

  setup() {},
};
</script>

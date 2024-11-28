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
import TechGadgetsSection from "../components/TechGadgetsSection";
import Tablet_EReaderSection from "../components/Tablet_EReaderSection";
import SpeakerSection from "../components/SpeakerSection";
import HeadsetSection from "../components/HeadsetSection";
import PromotionSlider from "../components/PromotionSlider";
import BrandList from "../components/BrandList";
import XP_PenSection from "../components/XP_PenSection";
import LaptopSection from "../components/LaptopSection";
import PopularItem from "../components/PopularItem";
import Carousel from "../components/Carousel";
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

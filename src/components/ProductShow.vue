<template>
  <div class="product-view">
    <Laptop></Laptop>
    <TechGadget></TechGadget>
    <Networking></Networking>
    <Telecommunication></Telecommunication>
    <DigitalDisplay></DigitalDisplay>
    <Tablet></Tablet>
    <Headset></Headset>
    <Speaker></Speaker>
    <Portable></Portable>
    <XPpen></XPpen>
  </div>
</template>

<script>
import XPpen from "./Product/XPpen";
import Portable from "./Product/Portable";
import Speaker from "./Product/Speaker";
import Headset from "./Product/Headset";
import Tablet from "./Product/Tablet";
import DigitalDisplay from "./Product/DigitalDisplay";
import Telecommunication from "./Product/Telecommunication";
import Networking from "./Product/Networking";
import TechGadget from "./Product/TechGadget";
import Laptop from "./Product/Laptop";
export default {
  components: {
    XPpen,
    Portable,
    Speaker,
    Headset,
    Tablet,
    DigitalDisplay,
    Telecommunication,
    Networking,
    TechGadget,
    Laptop,
  },
};
</script>

<style>
.product-view {
  margin: 0 60px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (max-width: 500px) {
  .product-view {
    margin: 0;
    padding: 0;
  }
}
</style>

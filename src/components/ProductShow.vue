<template>
  <div>
    <Laptop></Laptop>
    <TechGadget></TechGadget>
    <Networking></Networking>
    <Telecommunication></Telecommunication>
    <DigitalDisplay></DigitalDisplay>
    <Tablet></Tablet>
  </div>
</template>

<script>
import Tablet from "./Product/Tablet";
import DigitalDisplay from "./Product/DigitalDisplay";
import Telecommunication from "./Product/Telecommunication";
import Networking from "./Product/Networking";
import TechGadget from "./Product/TechGadget";
import Laptop from "./Product/Laptop";
export default {
  components: {
    Tablet,
    DigitalDisplay,
    Telecommunication,
    Networking,
    TechGadget,
    Laptop,
  },
};
</script>

<style></style>

<template>
  <div class="feature content-wrapper">
    <div class="section-header mt-5">
      <h2 class="fs-3 text-center fw-bold">Telecommunication</h2>
    </div>
    <div class="nav-tabs">
      <div
        class="tabs tabs-after"
        :class="{ active: tab == 'VC' }"
        @click="tab = 'VC'"
      >
        <p class="tabs-link show">Video Conference</p>
      </div>

      <!-- End tab nav item -->

      <div
        class="tabs tabs-after"
        :class="{ active: tab == 'CP' }"
        @click="tab = 'CP'"
      >
        <p class="tabs-link">Conference Phone</p>
        <!-- End tab nav item -->
      </div>

      <div
        class="tabs tabs-after"
        :class="{ active: tab == 'VVSP' }"
        @click="tab = 'VVSP'"
      >
        <p class="tabs-link">Video-VOIP-SIP Phone</p>
      </div>
      <!-- End tab nav item -->

      <div
        class="tabs tabs-after"
        :class="{ active: tab == 'GSM' }"
        @click="tab = 'GSM'"
      >
        <p class="tabs-link">GSM Gateway</p>
      </div>
      <div
        class="tabs"
        :class="{ active: tab == 'VOIP' }"
        @click="tab = 'VOIP'"
      >
        <p class="tabs-link">VOIP Gateway</p>
      </div>
      <div
        class="tabs tabs-after"
        :class="{ active: tab == 'CM' }"
        @click="tab = 'CM'"
      >
        <p class="tabs-link">Conference Mic</p>
      </div>
      <div
        class="tabs tabs-after"
        :class="{ active: tab == 'CW' }"
        @click="tab = 'CW'"
      >
        <p class="tabs-link">Conference Webcam</p>
      </div>
      <div class="tabs" :class="{ active: tab == 'PBX' }" @click="tab = 'PBX'">
        <p class="tabs-link">PBX / IP-PBX Devices</p>
      </div>
      <!-- End tab nav item -->
    </div>
    <div class="product-card gap-3">
      <TelecommunicationCard :tab="tab"></TelecommunicationCard>
    </div>
  </div>
</template>

<script>
import TelecommunicationCard from "./TelecommunicationCard";
import NetworkingCard from "./NetworkingCard";
import { ref } from "vue";
export default {
  components: {
    TelecommunicationCard,
    NetworkingCard,
  },
  setup() {
    let tab = ref("VC");

    let ViewMore;

    return { tab };
  },
};
</script>

<style>
.nav-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 0px;
  gap: 20px;
}

.product-card {
  margin-top: 20px;
  margin-left: 100px;
}

.tabs-after {
  position: relative;
  z-index: 2;
}

.tabs-after::after {
  content: "";
  position: absolute;
  background: #0f8ec5;
  width: 3px;
  height: 30px;
  margin-left: 128px;
  margin-top: -45px;
}

.feature .tabs {
  width: 240px;
  height: 40px;
  border: 1px solid #111;
  border-radius: 10px;
  padding: 4px;
}

.feature .tabs-link {
  font-size: 20px;
  text-decoration: none;
}

.feature .tabs:hover {
  background-color: #0f8ec5;
}

.feature .tabs-link:hover {
  color: #fff;
}

.feature .tabs.active {
  background-color: #0f8ec5;
  color: #fff;
}

.section-header h2 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  padding-bottom: 0;
  color: #000;
  position: relative;
  z-index: 2;
  padding-bottom: 20px;
  position: relative;
}
.section-header h2:after {
  content: "";
  position: absolute;
  display: block;
  width: 50px;
  height: 5px;
  background: #0f8ec5;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
</style>

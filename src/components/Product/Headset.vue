<template>
  <div class="feature content-wrapper">
    <div class="product-header">
      <div class="section-header mt-5">
        <h2 class="fs-3 text-center fw-bold">Headset</h2>
      </div>
      <div class="nav-tabs">
        <div
          class="tabs tabs-after"
          :class="{ active: tab == 'business' }"
          @click="tab = 'business'"
        >
          <p class="tabs-link show">Business</p>
        </div>

        <!-- End tab nav item -->

        <div
          class="tabs tabs-after"
          :class="{ active: tab == 'professional' }"
          @click="tab = 'professional'"
        >
          <p class="tabs-link">Professional</p>
          <!-- End tab nav item -->
        </div>

        <div
          class="tabs tabs-after"
          :class="{ active: tab == 'wireless' }"
          @click="tab = 'wireless'"
        >
          <p class="tabs-link">Wireless</p>
        </div>
        <!-- End tab nav item -->

        <div
          class="tabs"
          :class="{ active: tab == 'mic' }"
          @click="tab = 'mic'"
        >
          <p class="tabs-link">Mic</p>
        </div>
        <div
          class="tabs"
          :class="{ active: tab == 'wireheadset' }"
          @click="tab = 'wireheadset'"
        >
          <p class="tabs-link">Wire Headset</p>
        </div>
        <!-- End tab nav item -->
      </div>
    </div>
    <div class="product-card gap-3">
      <HeadsetCard :tab="tab"></HeadsetCard>
    </div>
  </div>
</template>

<script>
import HeadsetCard from "./HeadsetCard";
import { ref } from "vue";
export default {
  components: {
    HeadsetCard,
  },
  setup() {
    let tab = ref("business");

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

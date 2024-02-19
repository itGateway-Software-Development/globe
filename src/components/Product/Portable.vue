<template>
  <div class="feature content-wrapper">
    <div class="product-header">
      <div class="section-header mt-5">
        <h2 class="fs-3 text-center fw-bold">Portable</h2>
      </div>
      <div class="nav-tabs">
        <div
          class="tabs tabs-after"
          :class="{ active: tab == 'monitor' }"
          @click="tab = 'monitor'"
        >
          <p class="tabs-link show">Monitor</p>
        </div>

        <!-- End tab nav item -->

        <div
          class="tabs tabs-after"
          :class="{ active: tab == 'P&S' }"
          @click="tab = 'P&S'"
        >
          <p class="tabs-link">Printer & Scanner</p>
          <!-- End tab nav item -->
        </div>

        <div
          class="tabs tabs-after"
          :class="{ active: tab == 'PP' }"
          @click="tab = 'PP'"
        >
          <p class="tabs-link">Photo Printer</p>
        </div>
        <!-- End tab nav item -->

        <div
          class="tabs"
          :class="{ active: tab == 'projector' }"
          @click="tab = 'projector'"
        >
          <p class="tabs-link">Projector</p>
        </div>
        <div
          class="tabs tabs-after"
          :class="{ active: tab == 'conferencing' }"
          @click="tab = 'conferencing'"
        >
          <p class="tabs-link">Conferencing</p>
        </div>
        <div
          class="tabs tabs-after"
          :class="{ active: tab == 'MR' }"
          @click="tab = 'MR'"
        >
          <p class="tabs-link">Mobile Router</p>
        </div>
        <div class="tabs" :class="{ active: tab == 'PS' }" @click="tab = 'PS'">
          <p class="tabs-link">Power Station</p>
        </div>
        <!-- End tab nav item -->
      </div>
    </div>
    <div class="product-card gap-3">
      <PortableCard :tab="tab"></PortableCard>
    </div>
  </div>
</template>

<script>
import PortableCard from "./PortableCard";
import { ref } from "vue";
export default {
  components: {
    PortableCard,
  },
  setup() {
    let tab = ref("monitor");

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

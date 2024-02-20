<template>
  <div class="feature content-wrapper">
    <div class="product-header">
      <div class="section-header mt-5">
        <h2 class="fs-3 text-center fw-bold">Digital Display</h2>
      </div>
      <div class="nav-tabs">
        <div
          class="tabs tabs-after"
          :class="{ active: tab == 'BB' }"
          @click="tab = 'BB'"
        >
          <p class="tabs-link show">Black Board</p>
        </div>

        <!-- End tab nav item -->

        <div
          class="tabs tabs-after"
          :class="{ active: tab == 'IFP' }"
          @click="tab = 'IFP'"
        >
          <p class="tabs-link">Interative Flat Panel</p>
          <!-- End tab nav item -->
        </div>

        <div
          class="tabs"
          :class="{ active: tab == 'accessories' }"
          @click="tab = 'accessories'"
        >
          <p class="tabs-link">Accessories</p>
        </div>
        <!-- End tab nav item -->

        <!-- End tab nav item -->
      </div>
    </div>
    <div class="product-card gap-3">
      <DigitalDisplayCard :tab="tab"></DigitalDisplayCard>
    </div>
  </div>
</template>

<script>
import DigitalDisplayCard from "./DigitalDisplayCard";
import TelecommunicationCard from "./TelecommunicationCard";
import NetworkingCard from "./NetworkingCard";
import { ref } from "vue";
export default {
  components: {
    DigitalDisplayCard,
    TelecommunicationCard,
    NetworkingCard,
  },
  setup() {
    let tab = ref("BB");

    let ViewMore;

    return { tab };
  },
};
</script>

<style scoped>
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

@media (max-width: 500px) {
  .content-wrapper {
    padding: 0px;
  }
  .product-header {
    width: 500px;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  .nav-tabs {
    margin-left: -10px;
    flex-wrap: nowrap;
  }

  .section-header {
    margin: 0;
  }

  .tabs-after::after {
    margin-top: -0px;
    margin-left: -80px;
    width: 0;
  }
  .feature .tabs {
    width: 150px;
    height: 30px;
  }
  .feature .tabs-link {
    font-size: 14px;
  }
  .product-card {
    margin: 20px 0 0 0;
  }
}
</style>

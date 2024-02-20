<template>
  <div class="feature content-wrapper">
    <div class="product-header">
      <div class="section-header mt-5">
        <h2 class="fs-3 text-center fw-bold">Networking</h2>
      </div>
      <ul class="nav-tabs">
        <li
          class="tabs tabs-after"
          :class="{ active: tab == 'WAP' }"
          @click="tab = 'WAP'"
        >
          <p class="tabs-link show">Wireless AP</p>
        </li>

        <!-- End tab nav item -->

        <li
          class="tabs tabs-after"
          :class="{ active: tab == 'MWAP' }"
          @click="tab = 'MWAP'"
        >
          <p class="tabs-link">Mesh Wi-Fi Ap</p>
          <!-- End tab nav item -->
        </li>

        <li
          class="tabs tabs-after"
          :class="{ active: tab == 'SR' }"
          @click="tab = 'SR'"
        >
          <p class="tabs-link">Sim Router</p>
        </li>
        <!-- End tab nav item -->

        <li class="tabs" :class="{ active: tab == 'WR' }" @click="tab = 'WR'">
          <p class="tabs-link">Wireless Router</p>
        </li>
        <li class="tabs" :class="{ active: tab == 'NS' }" @click="tab = 'NS'">
          <p class="tabs-link">Network Switch</p>
        </li>
        <li
          class="tabs tabs-after"
          :class="{ active: tab == 'NTK' }"
          @click="tab = 'NTK'"
        >
          <p class="tabs-link">Network Tools Kit</p>
        </li>
        <li
          class="tabs tabs-after"
          :class="{ active: tab == 'WA' }"
          @click="tab = 'WA'"
        >
          <p class="tabs-link">Wi-Fi Adapter</p>
        </li>
        <li
          class="tabs r"
          :class="{ active: tab == 'gateway' }"
          @click="tab = 'gateway'"
        >
          <p class="tabs-link">Gateway</p>
        </li>
        <li
          class="tabs tabs-after"
          :class="{ active: tab == 'rack' }"
          @click="tab = 'rack'"
        >
          <p class="tabs-link">Rack</p>
        </li>
        <li class="tabs" :class="{ active: tab == 'NNH' }" @click="tab = 'NNH'">
          <p class="tabs-link">NAS & NAS HDD</p>
        </li>
        <!-- End tab nav item -->
      </ul>
    </div>
    <div class="product-card gap-3">
      <NetworkingCard :tab="tab"></NetworkingCard>
    </div>
  </div>
</template>

<script>
import NetworkingCard from "./NetworkingCard";
import { ref } from "vue";
export default {
  components: {
    NetworkingCard,
  },
  setup() {
    let tab = ref("WAP");

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
  margin-left: 20px;
}

.section-header {
  margin-left: 20px;
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

  .section-header {
    margin: 0;
  }
  .nav-tabs {
    margin-left: -10px;
    flex-wrap: nowrap;
  }

  .tabs-after::after {
    margin-top: -0px;
    margin-left: -80px;
    width: 0;
  }
  .nav-tabs {
    margin: 0;
    padding: 0;
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
  }
  .nav-tabs .tabs {
    padding: 6px 30px;
    height: 35px;
  }
  .feature .tabs-link {
    font-size: 14px;
  }
  .product-card {
    margin: 20px 0 0 0;
  }
}
</style>

<template>
  <div
    class="feature"
    data-aos="fade-right"
    data-aos-delay="50"
    data-aos-duration="2000"
  >
    <div class="product-header">
      <div class="section-header mt-5">
        <h2 class="fs-3 text-center fw-bold">Tech Gadget</h2>
      </div>
      <ul class="nav-tabs">
        <li
          class="tabs tabs-after"
          :class="{ active: tab == 'K&B' }"
          @click="tab = 'K&B'"
        >
          <p class="tabs-link show">Keyboard & Mouse</p>
        </li>

        <!-- End tab nav item -->

        <li
          class="tabs tabs-after"
          :class="{ active: tab == 'D&A' }"
          @click="tab = 'D&A'"
        >
          <p class="tabs-link">Docking & Adapter</p>
          <!-- End tab nav item -->
        </li>

        <li
          class="tabs tabs-after"
          :class="{ active: tab == 'P&C' }"
          @click="tab = 'P&C'"
        >
          <p class="tabs-link">Powerbank & Charger</p>
        </li>
        <!-- End tab nav item -->

        <li
          class="tabs tabs-after"
          :class="{ active: tab == 'PS' }"
          @click="tab = 'PS'"
        >
          <p class="tabs-link">Personal Storage</p>
        </li>
        <li
          class="tabs tabs-after"
          :class="{ active: tab == 'BP' }"
          @click="tab = 'BP'"
        >
          <p class="tabs-link">Back Pack</p>
        </li>
        <li class="tabs" :class="{ active: tab == 'SW' }" @click="tab = 'SW'">
          <p class="tabs-link">Smart Watch</p>
        </li>
        <li
          class="tabs tabs-after"
          :class="{ active: tab == 'pen' }"
          @click="tab = 'pen'"
        >
          <p class="tabs-link">Pen</p>
        </li>
        <li
          class="tabs tabs-after"
          :class="{ active: tab == 'LS' }"
          @click="tab = 'LS'"
        >
          <p class="tabs-link">Laptop Stand</p>
        </li>
        <li
          class="tabs tabs-after"
          :class="{ active: tab == 'lighting' }"
          @click="tab = 'lighting'"
        >
          <p class="tabs-link">Lighting</p>
        </li>
        <li class="tabs" :class="{ active: tab == 'W&M' }" @click="tab = 'W&M'">
          <p class="tabs-link">Webcam & Mic</p>
        </li>
        <!-- End tab nav item -->
      </ul>
    </div>
    <div class="product-card gap-3">
      <TechGadgetCard :tab="tab"></TechGadgetCard>
    </div>
  </div>
</template>

<script>
import TechGadgetCard from "./TechGadgetCard";
import { ref } from "vue";
export default {
  components: {
    TechGadgetCard,
  },
  setup() {
    let tab = ref("K&B");

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
  margin-right: 15px;
  margin-left: 0;
}

.section-header {
  margin-left: 15px;
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
@media (max-width: 1200px) {
  .content-wrapper {
    padding: 0;
  }

  .product-header {
    margin: 0;
  }
  .product-card {
    margin-left: 0;
  }
}

@media (max-width: 860px) {
  .content-wrapper {
    padding: 0px;
    justify-content: center;
  }
  .product-header {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  .section-header {
    margin: 0;
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

  .tabs-after::after {
    margin-top: -0px;
    margin-left: -80px;
    width: 0;
  }
  .feature .tabs-link {
    font-size: 14px;
  }
  .product-card {
    margin: 20px 0 0 0;
  }
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

  .tabs-after::after {
    margin-top: -0px;
    margin-left: -80px;
    width: 0;
  }
  .feature .tabs-link {
    font-size: 14px;
  }
  .product-card {
    margin: 20px 0 0 0;
  }
}
@media (max-width: 400px) {
  .product-header {
    width: 400px;
  }

  .nav-tabs {
    width: 375px;
  }
}
</style>

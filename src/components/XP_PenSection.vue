<template>
  <div class="laptop-wrapper content-wrapper">
    <div class="content-heading text-center" data-aos="flip-up">
      <h2>XP-Pen Section</h2>
    </div>

    <div class="button-group mt-5" data-aos="flip-up">
      <ul
        class="d-flex align-items-center justify-content-center flex-wrap gap-2"
      >
        <li>
          <button
            class="btn product-btn"
            @click="changeValue('tablet')"
            :class="{ active: header == 'tablet' }"
          >
            Drawing Tablet
          </button>
        </li>
        <li class="seperator-line"></li>
        <li>
          <button
            class="btn product-btn"
            @click="changeValue('display')"
            :class="{ active: header == 'display' }"
          >
            Drawing Display
          </button>
        </li>
        <li class="seperator-line"></li>
        <li>
          <button
            class="btn product-btn"
            :class="{ active: header == 'accessories' }"
          >
            Accessories
          </button>
        </li>
      </ul>
    </div>

    <div class="show-product">
      <div v-if="header == 'tablet'">
        <DrawingTablet></DrawingTablet>
      </div>
      <div v-if="header == 'display'">
        <DrawingDisplay></DrawingDisplay>
      </div>
    </div>
  </div>
</template>

<script>
import DrawingDisplay from "./xp_pen/DrawingDisplay";
import DrawingTablet from "./xp_pen/DrawingTablet";

import { ref } from "vue";
export default {
  components: {
    DrawingDisplay,
    DrawingTablet,
  },
  setup() {
    const header = ref("tablet");

    const changeValue = (value) => {
      header.value = value;
    };

    return {
      header,
      changeValue,
    };
  },
};
</script>

<style scoped>
.laptop-wrapper {
  margin-top: 80px;
}

.button-group ul {
  padding: 0px;
}

.seperator-line {
  width: 2px;
  height: 20px;
  background: #23b5de;
}

.product-btn {
  width: 180px;
  padding: 10px 15px;
  box-shadow: rgba(14, 63, 126, 0.06) 0px 0px 0px 1px,
    rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px,
    rgba(42, 51, 70, 0.04) 0px 2px 2px -1px,
    rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px,
    rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px,
    rgba(42, 51, 70, 0.03) 0px 10px 10px -5px,
    rgba(42, 51, 70, 0.03) 0px 24px 24px -8px;
  font-family: "Gilory-bold", sans-serif;
}

.product-btn:hover {
  background: #23b5de;
  color: var(--font-color-white);
}

.active {
  background: #23b5de;
  color: var(--font-color-white);
}

.show-product {
  position: relative;
}

@media (max-width: 600px) {
  .seperator-line {
    display: none;
  }
}
</style>

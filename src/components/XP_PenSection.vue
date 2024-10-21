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
  margin-top: 90px;
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
  border: 1px solid #111111;
  font-family: "Gilory-bold", sans-serif;
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

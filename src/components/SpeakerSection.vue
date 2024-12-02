<template>
  <div class="laptop-wrapper content-wrapper">
    <div class="content-heading text-center" data-aos="fade-down">
      <h2>Speaker List</h2>
    </div>

    <div class="button-group mt-5" data-aos="fade-down">
      <ul
        class="d-flex align-items-center justify-content-center flex-wrap gap-2"
      >
        <li>
          <button
            class="btn product-btn"
            @click="changeValue('marshall')"
            :class="{ active: header == 'marshall' }"
          >
            Marshall
          </button>
        </li>
        <li class="seperator-line"></li>
        <li>
          <button
            class="btn product-btn"
            @click="changeValue('harman')"
            :class="{ active: header == 'harman' }"
          >
            Harman
          </button>
        </li>
        <li class="seperator-line"></li>
        <li>
          <button class="btn product-btn" :class="{ active: header == 'jbl' }">
            JBL
          </button>
        </li>
      </ul>
    </div>

    <div class="show-product">
      <div v-if="header == 'marshall'">
        <Marshall></Marshall>
      </div>
      <div v-if="header == 'harman'">
        <Harman></Harman>
      </div>
    </div>
  </div>
</template>

<script>
import Harman from "./speakers/Harman";
import Marshall from "./speakers/Marshall";

import { ref } from "vue";
export default {
  components: {
    Harman,
    Marshall,
  },
  setup() {
    const header = ref("marshall");

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

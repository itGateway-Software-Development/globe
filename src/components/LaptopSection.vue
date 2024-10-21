<template>
  <div class="laptop-wrapper content-wrapper">
    <div class="content-heading text-center" data-aos="flip-up">
      <h2>Laptop List</h2>
    </div>

    <div class="button-group mt-5" data-aos="flip-up">
      <ul
        class="d-flex align-items-center justify-content-center flex-wrap gap-2"
      >
        <li>
          <button
            class="btn product-btn"
            @click="changeValue('microsoft')"
            :class="{ active: header == 'microsoft' }"
          >
            Microsoft Surface
          </button>
        </li>
        <li class="seperator-line"></li>
        <li>
          <button
            class="btn product-btn"
            @click="changeValue('dell')"
            :class="{ active: header == 'dell' }"
          >
            Dell
          </button>
        </li>
        <li class="seperator-line"></li>
        <li>
          <button
            class="btn product-btn"
            :class="{ active: header == 'lenovo' }"
          >
            Lenovo
          </button>
        </li>
      </ul>
    </div>

    <div class="show-product">
      <div v-if="header == 'microsoft'">
        <MicrosoftSurface></MicrosoftSurface>
      </div>
      <div v-if="header == 'dell'">
        <Dell></Dell>
      </div>
    </div>
  </div>
</template>

<script>
import Dell from "./LaptopList/Dell";
import MicrosoftSurface from "./LaptopList/MicrosoftSurface";
import { ref } from "vue";
export default {
  components: {
    Dell,
    MicrosoftSurface,
  },
  setup() {
    const header = ref("microsoft");

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

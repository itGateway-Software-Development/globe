<template>
  <div class="laptop-wrapper content-wrapper">
    <div class="content-heading text-center" data-aos="flip-up">
      <h2>Tablet & E-Reader</h2>
    </div>

    <div class="button-group mt-5" data-aos="flip-up">
      <ul
        class="d-flex align-items-center justify-content-center flex-wrap gap-2"
      >
        <li>
          <button
            class="btn product-btn"
            @click="changeValue('lenovo')"
            :class="{ active: header == 'lenovo' }"
          >
            Lenovo
          </button>
        </li>
        <li class="seperator-line"></li>
        <li>
          <button
            class="btn product-btn"
            @click="changeValue('samsung')"
            :class="{ active: header == 'samsung' }"
          >
            Samsung
          </button>
        </li>
        <li class="seperator-line"></li>
        <li>
          <button
            class="btn product-btn"
            :class="{ active: header == 'microsoft' }"
          >
            Microsoft
          </button>
        </li>
      </ul>
    </div>

    <div class="show-product">
      <div v-if="header == 'lenovo'">
        <Lenovo></Lenovo>
      </div>
      <div v-if="header == 'samsung'">
        <Samsung></Samsung>
      </div>
    </div>
  </div>
</template>

<script>
import Samsung from "./tablet/Samsung";
import Lenovo from "./tablet/Lenovo";
import { ref } from "vue";
export default {
  components: {
    Samsung,
    Lenovo,
  },
  setup() {
    const header = ref("lenovo");

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

<template>
  <div class="laptop-wrapper content-wrapper">
    <div class="content-heading text-center" data-aos="fade-down">
      <h2>Tablet & E-Reader</h2>
    </div>

    <div class="button-group mt-5" data-aos="fade-down">
      <ul
        class="d-flex align-items-center justify-content-center flex-wrap gap-2"
      >
        <li
          v-for="item in headerList"
          :key="item"
          class="d-flex align-items-center gap-2"
        >
          <button
            class="btn product-btn"
            @click="changeValue(item.value)"
            :class="{ active: header == item.value }"
          >
            {{ item.name }}
          </button>
          <div class="seperator-line"></div>
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
import Samsung from "../tablet/Samsung";
import Lenovo from "../tablet/Lenovo";
import { ref } from "vue";
export default {
  components: {
    Samsung,
    Lenovo,
    Samsung,
    Lenovo,
  },
  setup() {
    const header = ref("lenovo");

    const changeValue = (value) => {
      header.value = value;
    };

    const headerList = ref([
      {
        name: "Lenovo",
        value: "lenovo",
      },
      {
        name: "Samsung",
        value: "samsung",
      },
      {
        name: "Microsoft",
        value: "microsoft",
      },
    ]);

    return {
      header,
      changeValue,
      headerList,
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

li:last-child .seperator-line {
  display: none;
}

@media (max-width: 600px) {
  .seperator-line {
    display: none;
  }
}
</style>

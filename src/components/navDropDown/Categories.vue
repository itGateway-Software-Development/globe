<template>
  <div class="dropdown">
    <div class="content d-flex gap-3">
      <ul class="pt-5 pe-5 multi border-right">
        <!-- <li class="mb-5">
          <h5 class="d-flex align-items-center">
            Overview
            <span class="material-symbols-outlined ms-2">trending_flat</span>
          </h5>
        </li> -->
        <li
          @mouseover="dropdownContent = 'laptop'"
          :class="{ active: dropdownContent == 'laptop' }"
          class="d-flex align-items-center justify-content-between"
        >
          Laptop<span class="material-symbols-outlined"> chevron_right </span>
        </li>
        <li><hr /></li>
        <li
          @mouseover="dropdownContent = 'desktop'"
          :class="{ active: dropdownContent == 'desktop' }"
          class="d-flex align-items-center justify-content-between"
        >
          Desktop<span class="material-symbols-outlined"> chevron_right </span>
        </li>
        <li><hr /></li>
        <li
          @mouseover="dropdownContent = 'tech_gadget'"
          :class="{ active: dropdownContent == 'tech_gadget' }"
          class="d-flex align-items-center justify-content-between"
        >
          Tech Gadgets<span class="material-symbols-outlined">
            chevron_right
          </span>
        </li>
        <li><hr /></li>
        <li
          @mouseover="dropdownContent = 'headset'"
          :class="{ active: dropdownContent == 'headset' }"
          class="d-flex align-items-center justify-content-between"
        >
          Headset<span class="material-symbols-outlined"> chevron_right </span>
        </li>
        <li><hr /></li>
        <li
          @mouseover="dropdownContent = 'speaker'"
          :class="{ active: dropdownContent == 'speaker' }"
          class="d-flex align-items-center justify-content-between"
        >
          Speaker<span class="material-symbols-outlined"> chevron_right </span>
        </li>
        <li><hr /></li>
        <li
          @mouseover="dropdownContent = 'portable'"
          :class="{ active: dropdownContent == 'portable' }"
          class="d-flex align-items-center justify-content-between"
        >
          Portable<span class="material-symbols-outlined"> chevron_right </span>
        </li>
        <li><hr /></li>
        <li
          @mouseover="dropdownContent = 'digital_display'"
          :class="{ active: dropdownContent == 'digital_display' }"
          class="d-flex align-items-center justify-content-between"
        >
          Digital Display<span class="material-symbols-outlined">
            chevron_right
          </span>
        </li>
        <li><hr /></li>
        <li
          @mouseover="dropdownContent = 'tablet_e_reader'"
          :class="{ active: dropdownContent == 'tablet_e_reader' }"
          class="d-flex align-items-center justify-content-between"
        >
          Tablet and E-Reader
          <span class="material-symbols-outlined"> chevron_right </span>
        </li>
        <li><hr /></li>
        <li
          @mouseover="dropdownContent = 'networking'"
          :class="{ active: dropdownContent == 'networking' }"
          class="d-flex align-items-center justify-content-between"
        >
          Networking<span class="material-symbols-outlined">
            chevron_right
          </span>
        </li>
        <li><hr /></li>
        <li
          @mouseover="dropdownContent = 'telecommunication'"
          :class="{ active: dropdownContent == 'telecommunication' }"
          class="d-flex align-items-center justify-content-between"
        >
          Telecommunication<span class="material-symbols-outlined">
            chevron_right
          </span>
        </li>
        <li><hr /></li>
      </ul>
      <div class="solution pt-5">
        <div v-if="dropdownContent == 'laptop'">
          <Laptop />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Laptop from "../categories/Laptop";
import { ref } from "vue";
export default {
  components: { Laptop },
  props: ["dropdownContent"],

  setup() {
    const dropdownContent = ref("categoreies");

    return {
      dropdownContent,
    };
  },
};
</script>

<style>
.categories-container {
  position: relative;
  margin: 0;
  padding: 0 20px;
}

.categories-container .content-group h5 {
  text-decoration: underline;
  font-family: "Gilory-bold", sans-serif;
  letter-spacing: 0.07rem;
}

.categories-container .content-group ul {
  padding: 10px 0px;
}

.categories-container .content-group .menu-route:hover p {
  color: var(--background-color);
}
</style>

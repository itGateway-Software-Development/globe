<template>
  <div class="left-filter">
    <div class="filter-header d-flex align-items-center gap-2 cat">
      <span class="material-symbols-outlined"> menu </span>
      <h4>Categories</h4>
    </div>
    <div class="categories-filter">
      <div
        class="categories-card"
        v-for="(category, index) in visibleCategories"
        :key="index"
      >
        <h5>{{ category.name }}</h5>
      </div>
      <div
        class="categories-card"
        @click="showAllCategories = !showAllCategories"
        v-if="visibleCategories.length >= 4"
      >
        <h5>See More</h5>
      </div>
    </div>

    <div class="filter-header d-flex align-items-center gap-2">
      <span class="material-symbols-outlined"> tune </span>
      <h4>FILTER BY</h4>
    </div>

    <div class="break-line"><hr /></div>

    <div class="price-filter">
      <div
        class="filter-header d-flex align-items-center justify-content-between"
      >
        <div class="d-flex align-items-center gap-2">
          <span
            class="material-symbols-outlined"
            v-if="priceShow"
            @click="priceShow = !priceShow"
          >
            keyboard_arrow_up
          </span>
          <span
            class="material-symbols-outlined"
            v-else
            @click="priceShow = !priceShow"
          >
            keyboard_arrow_down
          </span>
          <h4>Price</h4>
        </div>
        <p class="reset" @click="resetPriceRange()" v-if="priceShow">Reset</p>
      </div>

      <div class="price-range" v-if="priceShow">
        <v-range-slider
          v-model="priceRange"
          :min="0"
          :max="5000000"
          step="1"
          class="price-slider"
          track-fill-color="blue"
          thumb-color="blue"
          ticks="always"
          tick-size="4"
        ></v-range-slider>

        <!-- Min and Max Price Inputs -->
        <div
          class="d-flex align-items-center flex-wrap gap-2 justify-content-center flex-column-md"
        >
          <input
            type="number"
            v-model="minPrice"
            class="price-field text-center"
          />
          <span class="divider"> - </span>
          <input
            type="number"
            v-model="maxPrice"
            class="price-field text-center"
          />
        </div>
      </div>
    </div>

    <div class="break-line"><hr /></div>

    <div class="brand-filter">
      <div class="filter-header d-flex align-items-center gap-2">
        <span
          class="material-symbols-outlined"
          v-if="filterShow"
          @click="filterShow = !filterShow"
        >
          keyboard_arrow_up
        </span>
        <span
          class="material-symbols-outlined"
          v-else
          @click="filterShow = !filterShow"
        >
          keyboard_arrow_down
        </span>
        <h4>Series</h4>
      </div>

      <ul class="list-items" v-if="filterShow">
        <li class="item" v-for="item in brandList" :key="item">
          <input type="checkbox" :value="item.name" class="checkbox" />
          <span class="item-text">{{ item.name }}</span>
        </li>
      </ul>
    </div>

    <div class="break-line"><hr /></div>

    <div class="clear-filter-btn">
      <button
        class="btn filter-btn d-flex align-item-center gap-2 justify-content-center"
      >
        <span class="material-symbols-outlined"> delete </span> Clear All
      </button>
    </div>
    <div class="break-line"><hr /></div>
    <div class="compatibility" v-if="compatibility">
      <div class="filter-header d-flex align-items-center gap-2">
        <span class="material-symbols-outlined"> token </span>

        <h4>Compatibility App</h4>
      </div>
      <ul class="d-flex align-items-center gap-2 flex-wrap mt-5">
        <li class="item" v-for="icon in compatibilityList" :key="icon.id">
          <img :src="icon.logo" alt="" />
        </li>
      </ul>
    </div>
    <div class="break-line" v-if="compatibility"><hr /></div>
  </div>
</template>

<script>
import { ref, computed, watch, onMounted } from "vue";
export default {
  props: [],
  setup(props) {
    const categories = ref([
      {
        name: "Drawing Display",
      },
      { name: "Drawing Tablet" },
      {
        name: "Accessories",
      },
    ]);

    const brandList = ref([
      {
        name: "Deco Pro Series",
      },
      {
        name: "Deco Series",
      },
      {
        name: "Deco Fun Series",
      },
      {
        name: "Star Series",
      },
      {
        name: "Artist Pro Series",
      },
      {
        name: "Artist Series",
      },
      {
        name: "Innovator Series",
      },
      {
        name: "Magic Drawing Pad",
      },
    ]);

    const compatibilityList = ref([
      {
        id: 1,
        logo: require("@/assets/images/xp_pen/compatibility/1.png"),
      },
      {
        id: 2,
        logo: require("@/assets/images/xp_pen/compatibility/2.png"),
      },
      {
        id: 3,
        logo: require("@/assets/images/xp_pen/compatibility/3.png"),
      },
      {
        id: 4,
        logo: require("@/assets/images/xp_pen/compatibility/4.png"),
      },
      {
        id: 5,
        logo: require("@/assets/images/xp_pen/compatibility/5.png"),
      },
      {
        id: 6,
        logo: require("@/assets/images/xp_pen/compatibility/6.png"),
      },
      {
        id: 7,
        logo: require("@/assets/images/xp_pen/compatibility/7.png"),
      },
      {
        id: 8,
        logo: require("@/assets/images/xp_pen/compatibility/8.png"),
      },
      {
        id: 9,
        logo: require("@/assets/images/xp_pen/compatibility/9.png"),
      },
    ]);

    const priceShow = ref(true);
    const brandShow = ref(true);
    const filterShow = ref(true);
    const compatibility = ref(true);
    const limitCategories = 4;
    const showAllCategories = ref(false);

    const visibleCategories = computed(() =>
      showAllCategories.value
        ? categories.value
        : categories.value.slice(0, limitCategories)
    );

    // Initialize price range values
    const minPrice = ref(0);
    const maxPrice = ref(5000000);
    const priceRange = ref([0, 5000000]);

    // Sync slider with min and max price fields
    watch(priceRange, (newVal) => {
      minPrice.value = newVal[0];
      maxPrice.value = newVal[1];
    });

    watch([minPrice, maxPrice], ([newMin, newMax]) => {
      priceRange.value = [newMin, newMax];
    });

    // Reset function for resetting the range to default
    const resetPriceRange = () => {
      minPrice.value = 0;
      maxPrice.value = 5000000;
      priceRange.value = [0, 5000000];
    };

    onMounted(() => {});

    return {
      priceShow,
      brandShow,
      brandList,
      minPrice,
      maxPrice,
      priceRange,
      resetPriceRange,
      visibleCategories,
      showAllCategories,
      compatibilityList,
      filterShow,
      compatibility,
    };
  },
};
</script>

<style scoped>
.filter-header {
  cursor: pointer;
  text-transform: uppercase;
}

.filter-header h4 {
  margin: 0px;
  font-family: "Gilory-Bold", sans-serif;
  font-weight: bold;
  font-size: 19px !important;
}

.categories-filter {
  margin: 40px 0px;
  padding: 0px 10px;
}

.categories-card h5 {
  font-size: 16px;
  opacity: 0.8;
}

.categories-card {
  padding: 10px;
  background: #ededed;
  box-shadow: rgba(14, 63, 126, 0.06) 0px 0px 0px 1px,
    rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px,
    rgba(42, 51, 70, 0.04) 0px 2px 2px -1px,
    rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px,
    rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px,
    rgba(42, 51, 70, 0.03) 0px 10px 10px -5px,
    rgba(42, 51, 70, 0.03) 0px 24px 24px -8px;
  font-family: "Gilory-bold", sans-serif;
  border-radius: 6px;
  margin: 6px 0px;
  cursor: pointer;
}

.categories-card:hover {
  background: var(--hover-color);
  color: var(--font-color-white);
}

.break-line {
  margin: 20px 0px;
}

.filter-btn {
  width: 100%;
  background: var(--background-color);
  padding: 10px 15px;
  color: var(--font-color-white);
  text-transform: uppercase;
}

.filter-btn:hover {
  background: #0f8ec5;
  color: var(--font-color-white);
}

.sub-filter-header {
  text-transform: uppercase;
  font-family: "Gilory-bold", sans-serif;
  font-weight: bold;
}

.reset {
  font-size: 14px !important;
  opacity: 0.8;
  cursor: pointer;
}

.availability .checkbox {
  height: 30px !important;
}

.price-slider {
  margin-top: 8px;
  margin-bottom: 16px;
}

.price-slider .v-slider__tick-label {
  color: #9e9e9e;
  font-size: 12px;
}

.v-range-slider .v-slider__track-fill {
  background-color: #007bff !important; /* Adjust color to match the reference */
}

.v-range-slider .v-slider__thumb {
  border: 2px solid #007bff !important;
}

.price-inputs {
  align-items: center;
}

.price-field {
  width: 100px;
  text-align: center;
  font-size: 14px;
  border: 0.5px solid #333;
  padding: 8px 0px;
  border-radius: 6px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.divider {
  margin: 0 8px;
  color: #333;
  font-size: 14px;
}

.brand-filter ul {
  padding-left: 12px;
}

.list-items {
  height: 140px;
  overflow: auto;
  margin-top: 20px;
}

.list-items .item {
  display: flex;
  align-items: center;
  list-style: none;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 8px;
}
.list-items .item:hover {
  background-color: #e7edfe;
}
.item .item-text {
  font-size: 16px;
  font-weight: 400;
  color: #333;
}
.item .checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 18px;
  width: 18px;
  border-radius: 4px;
  margin-right: 12px;
  border: 1.5px solid #111111;
  transition: all 0.3s ease-in-out;
}
.item.checked .checkbox {
  background-color: #4070f4;
  border-color: #4070f4;
}
.checkbox .check-icon {
  color: #fff;
  font-size: 11px;
  transform: scale(0);
  transition: all 0.2s ease-in-out;
}
.item.checked .check-icon {
  transform: scale(1);
}

::-webkit-scrollbar {
  width: 10px;
  border-radius: 10px !important;
}

::-webkit-scrollbar-thumb {
  background: #333;
  width: 7px;
  height: 5px !important;
  border-radius: 10px !important;
  border: 3px solid #dfdfdf;
}

::-webkit-scrollbar-track {
  background-color: #efefef;
  border-radius: 10px;
  border: 1px solid #dfdfdf;
}

.item img {
  width: 45px;
}
</style>

<template>
  <div class="mb-categories">
    <div class="block-banner text-center">
      <h1>CATEGORIES</h1>
    </div>
    <div
      class="d-flex align-items-center justify-content-between content-wrapper"
    >
      <div class="filter-header d-flex align-items-center gap-2">
        <span class="material-symbols-outlined" @click="drawer = !drawer">
          menu
        </span>
        <h4>Filter By</h4>
      </div>
      <div class="view">
        <div class="d-flex align-items-center gap-2">
          <div
            class="view-style"
            :class="{ active: listView == 'app' }"
            @click="changeView('app')"
          >
            <span class="material-symbols-outlined"> apps </span>
          </div>
          <div
            class="view-style"
            :class="{ active: listView == 'list' }"
            @click="changeView('list')"
          >
            <span class="material-symbols-outlined">
              format_list_bulleted
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="product content-wrapper">
      <div class="product-list" v-if="listView == 'app'">
        <div class="row">
          <div
            class="col-6 col-sm-4 col-md-4 col-xl-4 mb-5"
            v-for="item in productList"
            :key="item.id"
          >
            <ProductCard :data="item"></ProductCard>
          </div>
        </div>
      </div>

      <div class="product-list" v-if="listView == 'list'">
        <div class="d-flex flex-column mb-5 w-100">
          <div class="product-box" v-for="item in productList" :key="item.id">
            <ProductCardList :data="item"></ProductCardList>
          </div>
        </div>
      </div>
    </div>

    <v-navigation-drawer
      app
      v-model="drawer"
      :class="drawer ? 'active' : 'unactive'"
      :location="$vuetify.display.mobile ? 'bottom' : undefined"
      id="mb-categories"
      temporary
    >
      <div class="content-wrapper mb-filter-section">
        <div
          class="d-flex align-item-center justify-content-between pointer px-3 heading"
        >
          <h4>Filter & Sort</h4>
          <span class="material-symbols-outlined" @click="drawer = !drawer">
            close
          </span>
        </div>
        <hr class="p-0 m-0" />
        <v-list>
          <v-list-item>
            <div class="filter-header d-flex align-items-center gap-2">
              <span class="material-symbols-outlined"> dataset </span>
              <h4>Categories</h4>
            </div>
            <div
              class="categories-filter d-flex align-items-center flex-wrap gap-2"
            >
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
              >
                <h5>See More</h5>
              </div>
            </div>
          </v-list-item>
          <hr class="p-0 m-0" />
          <v-list-item>
            <div class="availability">
              <div
                class="filter-header d-flex align-items-center justify-content-between mb-2"
              >
                <div class="d-flex align-items-center gap-2">
                  <span class="material-symbols-outlined">
                    keyboard_arrow_up
                  </span>
                  <h4>Availability</h4>
                </div>
                <p class="reset">Reset</p>
              </div>

              <div class="checkbox-list">
                <ul class="list-items">
                  <li class="item">
                    <input type="checkbox" class="checkbox" />
                    <span class="item-text">Stock</span>
                  </li>
                  <li class="item">
                    <input type="checkbox" class="checkbox" />
                    <span class="item-text">Out of Stock</span>
                  </li>
                </ul>
              </div>
            </div>
          </v-list-item>
          <hr class="p-0 m-0" />
          <v-list-item>
            <div class="price-filter">
              <div
                class="filter-header d-flex align-items-center justify-content-between"
              >
                <div class="d-flex align-items-center gap-2">
                  <span class="material-symbols-outlined">
                    keyboard_arrow_up
                  </span>
                  <h4>Price</h4>
                </div>
                <p class="reset" @click="resetPriceRange()">Reset</p>
              </div>

              <div class="price-range">
                <!-- Min and Max Price Inputs -->
                <v-row align="center" justify="center" class="price-inputs">
                  <v-text-field
                    v-model="minPrice"
                    type="number"
                    hide-details
                    variant="outlined"
                    solo
                    class="price-field"
                  ></v-text-field>
                  <span class="divider"> - </span>
                  <v-text-field
                    v-model="maxPrice"
                    type="number"
                    hide-details
                    variant="outlined"
                    solo
                    class="price-field"
                  ></v-text-field>
                </v-row>
              </div>
            </div>
          </v-list-item>
          <hr class="p-0 m-0" />
          <v-list-item>
            <div class="brand-filter">
              <div class="filter-header d-flex align-items-center gap-2">
                <span class="material-symbols-outlined">
                  keyboard_arrow_up
                </span>
                <h4>Brand</h4>
              </div>
              <ul class="list-items">
                <li
                  class="item"
                  v-for="(brand, index) in brandList"
                  :key="index"
                >
                  <input type="checkbox" :value="brand.name" class="checkbox" />
                  <span class="item-text">{{ brand.name }}</span>
                </li>
              </ul>
            </div>
          </v-list-item>
          <hr class="p-0 m-0" />
          <v-list-item>
            <div class="clear-filter-btn">
              <button
                class="btn filter-btn d-flex align-item-center gap-2 justify-content-center"
              >
                <span class="material-symbols-outlined"> delete </span> Clear
                All
              </button>
            </div>
          </v-list-item>
        </v-list>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import ProductCardList from "../productcard/ProductCardList";
import ProductCard from "../productcard/ProductCard";
import { ref, watch, computed } from "vue";
export default {
  components: {
    ProductCardList,
    ProductCard,
  },
  setup() {
    const drawer = ref(false);
    const brandList = ref([
      {
        name: "Marshall",
      },
      {
        name: "Lenovo",
      },
      {
        name: "Dell",
      },
      {
        name: "HP",
      },
      {
        name: "Asus",
      },
      {
        name: "Asus",
      },
      {
        name: "Asus",
      },
      {
        name: "Asus",
      },
      {
        name: "Asus",
      },
      {
        name: "Asus",
      },
      {
        name: "Asus",
      },
      {
        name: "Asus",
      },
      {
        name: "Asus",
      },
      {
        name: "Asus",
      },
      {
        name: "Asus",
      },
      {
        name: "Asus",
      },
      {
        name: "Asus",
      },
      {
        name: "Asus",
      },
      {
        name: "Asus",
      },
      {
        name: "Asus",
      },
      {
        name: "Asus",
      },
      {
        name: "Asus",
      },
    ]);
    const categories = ref([
      {
        name: "XP-PEN",
      },
      { name: "Laptop" },
      {
        name: "Tech Gadgets",
      },
      {
        name: "Headsets",
      },
      {
        name: "speaker",
      },
      {
        name: "Portable",
      },
      {
        name: "Tablet & E-Reader",
      },
      {
        name: "Networking",
      },
      {
        name: "Telecommunication",
      },
    ]);

    const listView = ref("app");

    const changeView = (value) => {
      listView.value = value;
    };

    const rating = ref("3");
    const productList = ref([
      {
        id: 1,
        type: "tablet",
        name: "Lenovo Tab K10",
        price: "133",
        stock: "20",
        warrenty: "3",
        img: require("@/assets/images/tablet/2.jpg"),
        hoverimg: require("@/assets/images/tablet/1.jpg"),
      },
      {
        id: 2,
        type: "tablet",
        name: "Lenovo Tab M8",
        price: "131",
        stock: "20",
        warrenty: "3",
        img: require("@/assets/images/tablet/3.jpg"),
        hoverimg: require("@/assets/images/tablet/4.jpg"),
      },
      {
        id: 3,
        type: "tablet",
        name: "Lenovo Tab M10 plus",
        price: "232",
        stock: "20",
        warrenty: "3",
        img: require("@/assets/images/tablet/5.jpg"),
        hoverimg: require("@/assets/images/tablet/6.jpg"),
      },
      {
        id: 4,
        type: "tablet",
        name: "Lenvo Duet Chromebook",
        price: "400",
        stock: "20",
        warrenty: "3",
        img: require("@/assets/images/tablet/7.jpg"),
        hoverimg: require("@/assets/images/tablet/8.jpg"),
      },
    ]);

    const hoveredIndex = ref(null);

    // Handle mouse enter and leave to change image
    const onMouseEnter = (index) => {
      hoveredIndex.value = index;
    };

    const onMouseLeave = () => {
      hoveredIndex.value = null;
    };

    // Determine current image based on hover state
    const currentImage = (productList, index) => {
      return hoveredIndex.value === index
        ? productList.hoverimg
        : productList.img;
    };

    const limitCategories = 4;
    const showAllCategories = ref(false);

    const visibleCategories = computed(() =>
      showAllCategories.value
        ? categories.value
        : categories.value.slice(0, limitCategories)
    );

    // Initialize price range values
    const minPrice = ref(0);
    const maxPrice = ref(500);
    const priceRange = ref([0, 500]);

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
      maxPrice.value = 500;
      priceRange.value = [0, 500];
    };

    return {
      drawer,
      maxPrice,
      minPrice,
      priceRange,
      resetPriceRange,
      brandList,
      visibleCategories,
      showAllCategories,
      onMouseEnter,
      onMouseLeave,
      productList,
      rating,
      listView,
      changeView,
      currentImage,
    };
  },
};
</script>

<style scoped>
#mb-categories {
  height: 100% !important;
  transform: translateX(0px);
}

.block-banner {
  width: 100%;
  height: 200px;
  background: #f5f6fc;
  align-content: center;
  font-family: "Gilory-Bold", sans-serif;
  font-weight: bold;
}

.heading h4 {
  font-family: "Gilory-Bold", sans-serif;
  font-weight: bold;
}

.filter-header {
  cursor: pointer;
}

.filter-header h4 {
  margin: 0px;
  font-family: "Gilory-Bold", sans-serif;
  font-weight: bold;
}

.categories-filter {
  margin: 30px 0px;
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

.price-filter {
  width: 100%;
  height: 100%;
}

.price-range {
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow: visible !important;
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
  overflow: visible !important;
}

.price-inputs {
  align-items: center;
}

.price-field {
  max-width: 80px;
  text-align: center;
  font-size: 14px;
}

.divider {
  margin: 0 8px;
  color: #333;
  font-size: 14px;
}

.brand-filter ul {
  padding-left: 12px;
}

.checkbox-list .list-items {
  height: 100%;
}

.list-items {
  height: 140px;
  overflow: auto !important;
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

.view-group {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.view-style {
  border: 1px solid #111111;
  text-align: center;
  justify-content: center;
  padding: 5px 10px;
  border-radius: 6px;
  background: #ededed;
  cursor: pointer;
}

.view-style .material-symbols-outlined {
  margin-top: 5px;
}

.view-style.active {
  background: #007bff;
  color: #fff;
}
</style>

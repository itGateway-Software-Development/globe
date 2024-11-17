<template>
  <div class="categories-wrapper">
    <div class="block-banner text-center">
      <img
        src="../assets/images/xp_pen/banner-3.png"
        class="img-fluid"
        alt=""
      />
    </div>
    <div class="content-wrapper product-section">
      <div class="row">
        <div class="col-12 col-md-3 col-xl-3">
          <div class="left-filter">
            <div class="filter-header d-flex align-items-center gap-2">
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
              <!-- <div
                class="categories-card"
                @click="showAllCategories = !showAllCategories"
              >
                <h5>See More</h5>
              </div> -->
            </div>

            <div class="filter-header d-flex align-items-center gap-2">
              <span class="material-symbols-outlined"> tune </span>
              <h4>FILTER BY</h4>
            </div>

            <!-- <div class="availability">
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
                <v-checkbox
                  v-model="checkbox1"
                  :label="`In Stock`"
                  class="checkbox"
                ></v-checkbox>
                <v-checkbox
                  :model-value="false"
                  disabled
                  :label="`Out of Stock `"
                  class="checkbox"
                ></v-checkbox>
              </div>
            </div> -->

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
                <p class="reset" @click="resetPriceRange()" v-if="priceShow">
                  Reset
                </p>
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
                <h4>Filter</h4>
              </div>
              <ul class="list-items" v-if="filterShow">
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

            <div class="break-line"><hr /></div>

            <div class="clear-filter-btn">
              <button
                class="btn filter-btn d-flex align-item-center gap-2 justify-content-center"
              >
                <span class="material-symbols-outlined"> delete </span> Clear
                All
              </button>
            </div>
            <div class="break-line"><hr /></div>
            <div class="compatibility">
              <div class="filter-header d-flex align-items-center gap-2">
                <span class="material-symbols-outlined"> token </span>

                <h4>Compatibility</h4>
              </div>
              <ul class="d-flex align-items-center" v-if="compatibilityShow">
                <li
                  class="item"
                  v-for="icon in compatibilityList"
                  :key="icon.id"
                >
                  <img :src="icon.logo" alt="" />
                </li>
              </ul>
            </div>
            <div class="break-line"><hr /></div>
          </div>
        </div>
        <div class="col-12 col-md-9 col-xl-9">
          <div class="float-right view-group">
            <div class="d-flex align-items-center gap-2">
              <div
                class="view-style"
                :class="{ active: listView == 'app' }"
                @click="changeView('app')"
              >
                <span class="material-symbols-outlined"> apps </span>
              </div>
              <!-- <div
                class="view-style"
                :class="{ active: listView == 'app2' }"
                @click="changeView('app2')"
              >
                <span class="material-symbols-outlined"> grid_view </span>
              </div> -->
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

          <div class="product-list" v-if="listView == 'app'">
            <div class="row">
              <div
                class="col-6 col-md-3 col-xl-3 mb-5"
                v-for="(item, index) in productList"
                :key="item.id"
                @mouseenter="onMouseEnter(index)"
                @mouseleave="onMouseLeave(index)"
              >
                <div class="product-card">
                  <router-link to="/product/productdetail">
                    <div class="product-type text-right mb-2">
                      <h4>{{ item.type }}</h4>
                    </div>
                    <div class="product-img">
                      <img :src="item.img" alt="" id="img1" />
                      <img :src="item.hoverimg" alt="" id="img2" />
                      <i
                        class="fa-solid fa-heart"
                        v-if="hoverIcon === index"
                      ></i>
                    </div>
                    <div class="product-content mb-2">
                      <h4>{{ item.name }}</h4>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Excepturi, doloremque.
                      </p>
                    </div>
                  </router-link>

                  <div class="rating mb-2">
                    <v-rating
                      readonly
                      v-model="rating"
                      active-color="orange-lighten-1"
                      color="orange-lighten-1"
                      size="mini"
                    ></v-rating>
                  </div>
                  <div
                    class="price-button d-flex align-items-center justify-content-between"
                  >
                    <div class="price">
                      <h4>${{ item.price }}</h4>
                    </div>
                    <div class="button-group">
                      <button class="btn cart-btn mt-1">
                        <span class="material-symbols-outlined">
                          shopping_cart
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="product-list" v-if="listView == 'list'">
            <div class="d-flex flex-column mb-5 w-100">
              <div
                class="product-box"
                v-for="(item, index) in productList"
                :key="item.id"
                @mouseenter="onMouseEnter(index)"
                @mouseleave="onMouseLeave(index)"
              >
                <div class="product-card-list w-100 mb-5">
                  <div class="d-flex align-items-center gap-5">
                    <div class="product-img-list">
                      <img :src="item.img" alt="" id="img1" />
                      <img :src="item.hoverimg" alt="" id="img2" />
                      <i
                        class="fa-solid fa-heart"
                        v-if="hoverIcon === index"
                      ></i>
                    </div>
                    <div class="product-content">
                      <router-link to="/product/productdetail">
                        <div class="product-type mb-2">
                          <h4 class="hilight-font">{{ item.type }}</h4>
                        </div>
                        <div class="product-name mb-2">
                          <h4>{{ item.name }}</h4>
                        </div>
                        <div class="rating mb-2">
                          <div class="">
                            <v-rating
                              readonly
                              v-model="rating"
                              active-color="orange-lighten-1"
                              color="orange-lighten-1"
                              size="mini"
                            ></v-rating>
                          </div>
                        </div>
                        <div class="price mb-2">${{ item.price }}</div>
                        <div class="stock mb-2">
                          <div class="d-flex align-items-center gap-2">
                            <span class="material-symbols-outlined">
                              check_circle
                            </span>
                            <p>In Stock</p>
                          </div>
                        </div>
                        <div class="content mb-3">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Impedit modi omnis qui aspernatur, voluptas ut
                        </div></router-link
                      >

                      <div class="button-group">
                        <button
                          class="btn add-to-cart list-btn d-flex align-items-center gap-3 primary-btn justify-content-center"
                        >
                          <span class="material-symbols-outlined">
                            shopping_cart
                          </span>
                          <p>Quick Add</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed, watch } from "vue";
export default {
  setup() {
    const categories = ref([
      {
        name: "Drawing Display",
      },
      { name: "Drawing Tablet" },
      {
        name: "Accessories",
      },
      //   {
      //     name: "Headsets",
      //   },
      //   {
      //     name: "speaker",
      //   },
      //   {
      //     name: "Portable",
      //   },
      //   {
      //     name: "Tablet & E-Reader",
      //   },
      //   {
      //     name: "Networking",
      //   },
      //   {
      //     name: "Telecommunication",
      //   },
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
    ]);

    const priceShow = ref(true);
    const filterShow = ref(true);
    const compatibilityShow = ref(true);

    const listView = ref("app");

    const changeView = (value) => {
      listView.value = value;
    };

    const rating = ref("3");
    const productList = ref([
      {
        id: 1,
        type: "Drawing Tablet",
        name: "Artist 10 (2nd Gen)",
        price: "400",
        stock: "20",
        warrenty: "3",
        img: require("@/assets/images/xp_pen/artist10.jpg"),
        hoverimg: require("@/assets/images/xp_pen/deco_pro.jpg"),
      },
      {
        id: 2,
        type: "Drawing Tablet",
        name: "Artist 12 (2nd Gen)",
        price: "400",
        stock: "20",
        warrenty: "3",
        img: require("@/assets/images/xp_pen/5.jpg"),
        hoverimg: require("@/assets/images/xp_pen/6.jpg"),
      },
      {
        id: 3,
        type: "Drawing Tablet",
        name: "Artist 16 (2nd Gen)",
        price: "400",
        stock: "20",
        warrenty: "3",
        img: require("@/assets/images/xp_pen/8.jpg"),
        hoverimg: require("@/assets/images/xp_pen/7.jpg"),
      },
      {
        id: 4,
        type: "Drawing Tablet",
        name: "Artist 22 pro",
        price: "400",
        stock: "20",
        warrenty: "3",
        img: require("@/assets/images/xp_pen/10.jpg"),
        hoverimg: require("@/assets/images/xp_pen/9.jpg"),
      },
    ]);

    const hoveredIndex = ref(null);
    const hoverIcon = ref(null);

    // Handle mouse enter and leave to change image
    const onMouseEnter = (index) => {
      hoveredIndex.value = index;
      hoverIcon.value = index;
    };

    const onMouseLeave = () => {
      hoveredIndex.value = null;
      hoverIcon.value = null;
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
    onMounted(() => {
      window.scroll(0, 0);
    });

    return {
      categories,
      visibleCategories,
      showAllCategories,
      minPrice,
      maxPrice,
      priceRange,
      resetPriceRange,
      brandList,
      listView,
      changeView,
      onMouseEnter,
      onMouseLeave,
      rating,
      productList,
      currentImage,
      compatibilityList,
      priceShow,
      filterShow,
      compatibilityShow,
      hoverIcon,
    };
  },
};
</script>

<style scoped>
.block-banner {
  width: 100%;
  height: 300px;
  align-content: center;
  font-family: "Gilory-Bold", sans-serif;
  font-weight: bold;
}

.col-md-3,
.col-xl-3 {
  padding: 0px 10px;
}

.block-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-section {
  margin-top: 50px;
  background: #fff;
}

.filter-header {
  cursor: pointer;
  text-transform: uppercase;
}

.filter-header h4 {
  margin: 0px;
  font-family: "Gilory-Bold", sans-serif;
  font-weight: bold;
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
  max-width: 120px;
  width: 100%;
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

.product-card {
  width: 100%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 10px;
  transition: 0.3s linear;
  padding: 10px 20px;
  text-overflow: ellipsis;
}

.fa-heart {
  width: max-content;
  height: max-content;
  top: 10px;
  right: 0;
  padding: 15px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  background: #ffffff;
  position: absolute;
  border-radius: 50%;
  transition: 0.4s ease-in;
  cursor: pointer;
  z-index: 999;
}

.fa-heart:hover {
  background: var(--background-color);
  color: #ffffff;
}

.product-card h4 {
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
}

.product-card .product-content h4 {
  white-space: nowrap;
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.product-content {
  text-overflow: ellipsis;
}

.product-card .product-content p {
  font-size: 16px !important;
  opacity: 0.8;
  height: 45px;
  text-overflow: ellipsis;
  overflow: hidden;
}

.product-card .price h4 {
  font-size: 24px;
}

.product-card h4:hover {
  color: #0a65af;
}

.product-card .product-type h4 {
  color: #cdcdcd;
  cursor: pointer;
  transition: 0.4s;
  font-size: 18px;
}

.product-card .product-type h4:hover {
  color: #0a65af;
}

.product-card .button-group {
  border: 1px solid #fff;
  padding: 1px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background: #23b5de;
}

.product-card .button-group .cart-btn {
  color: #fff;
}

.cart-btn .material-symbols-outlined {
  font-size: 20px !important;
}

.product-img {
  position: relative;
  width: 100%;
}

.product-img img {
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  transition: 1.5s ease-in-out;
  margin-bottom: 20px;
}

.product-img #img2 {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: 1.5s ease-in-out;
}

.product-card:hover .product-img #img2 {
  opacity: 1;
  cursor: pointer;
}

.product-card:hover .product-img #img1 {
  opacity: 0;
  cursor: pointer;
}

.button-group:hover {
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

.product-card:hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
}

.product-card-list {
  width: 100%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 10px;
  transition: 0.3s linear;
  transform: translateZ(0px);
}

.product-img-list {
  position: relative;
  width: 400px;
  height: 300px;
}

.product-img-list img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  transition: 1.5s ease-in-out;
}

.product-img-list #img2:hover {
  opacity: 0;
  cursor: pointer;
}

.product-card-list:hover .product-img-list #img2 {
  opacity: 0;
  cursor: pointer;
}

.stock {
  color: #3cb872;
}

.stock .material-symbols-outlined {
  font-size: 18px !important;
}

.list-btn {
  margin: 0px !important;
}

.compatibility img {
  margin-top: 20px;
  width: 40px;
}
</style>

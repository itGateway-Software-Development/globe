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
        <div class="col-12 col-md-3 col-xl-3 left-col">
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
                <div
                  class="d-flex align-items-center flex-wrap gap-2 justify-content-center"
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
                <!-- <v-row align="center" justify="center" class="price-inputs">
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
                </v-row> -->
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
              <ul
                class="d-flex align-items-center gap-2 flex-wrap"
                v-if="compatibilityShow"
              >
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
        <div class="col-12 col-md-9 col-xl-9 right-col">
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
            <div class="row mb-5 main">
              <div
                class="col-6 col-md-3 col-xl-3 mb-5"
                v-for="(item, index) in paginatedProducts"
                :key="item.id"
                @mouseenter="onMouseEnter(index)"
                @mouseleave="onMouseLeave(index)"
              >
                <div class="product-card">
                  <!-- <div class="product-type text-right mb-2">
                      <h4>{{ item.type }}</h4>
                    </div> -->
                  <div class="product-img">
                    <router-link :to="`/product/productdetail/${item.id}`">
                      <div class="gradient"></div>
                      <img :src="item.img" alt="" id="img1" />
                      <img :src="item.hoverimg" alt="" id="img2" />
                    </router-link>
                    <i class="fa-solid fa-heart" v-if="hoverIcon === index"></i>
                    <i
                      class="fa-solid fa-expand"
                      v-if="hoverIcon === index"
                      @click="showModal(item)"
                    ></i>
                  </div>
                  <router-link :to="`/product/productdetail/${item.id}`">
                    <div class="product-content mb-2">
                      <h4>{{ item.name }}</h4>
                      <p>{{ item.cpu }}</p>
                      <p
                        v-for="(specItem, index) in getspecList(
                          item.spec,
                          item.id
                        )"
                        :key="index"
                      >
                        {{ specItem }}
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
                      <h4>{{ item.price }} MMK</h4>
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
            <div class="row justify-content-centr mt-5">
              <v-pagination
                v-model="currentPage"
                :length="totalPages"
                :total-visible="5"
                rounded="circle"
                @click="scrollWindow()"
              ></v-pagination>
            </div>
          </div>
          <div class="product-list" v-if="listView == 'list'">
            <div class="d-flex flex-column mb-5 w-100">
              <div
                class="product-box"
                v-for="(item, index) in paginatedProducts"
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
                      <i
                        class="fa-solid fa-expand"
                        v-if="hoverIcon === index"
                        @click="showModal(item)"
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
                        <div class="price mb-2">{{ item.price }} MMK</div>
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
            <div class="row justify-content-centr mt-5">
              <v-pagination
                v-model="currentPage"
                :length="totalPages"
                :total-visible="5"
                rounded="circle"
                @click="scrollWindow()"
              ></v-pagination>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span class="material-symbols-outlined"> close </span>
            </button>

            <!-- <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div> -->
            <div class="row" v-if="modalItem">
              <div class="col-12 col-md-12 col-xl-6">
                <div class="product-detail-img d-flex justify-content-center">
                  <img :src="modalItem.img" class="img-fluid" alt="" />
                </div>
                <div
                  class="product-detail-mini-img d-flex align-items-center gap-3"
                >
                  <img :src="modalItem.img" class="img-fluid" alt="" /><img
                    :src="modalItem.img"
                    class="img-fluid"
                    alt=""
                  /><img :src="modalItem.img" class="img-fluid" alt="" />
                </div>
              </div>
              <div class="col-12 col-md-12 col-xl-6">
                <div class="detail-header">
                  <h4>{{ modalItem.name }}</h4>
                </div>
                <div class="specList mb-3">
                  <h5 class="mb-3">Specification</h5>
                  <p
                    v-for="(specItem, index) in getSinglespecList(
                      modalItem.spec
                    )"
                    :key="index"
                  >
                    {{ specItem }}
                  </p>
                  <p>{{ modalItem.color1 }}</p>
                  <p>{{ modalItem.color2 }}</p>
                  <p>{{ modalItem.com }}</p>
                  <!-- <p class="more-spec" @click="fullspec = !fullspec">
                    View More
                  </p> -->
                </div>
                <div class="stock mb-3">
                  <div class="d-flex align-items-center gap-2">
                    <span class="material-symbols-outlined"> inventory_2 </span>
                    <span>In Stock</span>
                  </div>
                </div>
                <div class="price mb-5">
                  <h4>{{ modalItem.price }} MMK</h4>
                </div>
                <div class="color">
                  <p>Color : <span>Dark</span></p>
                  <div class="d-flex align-items-center gap-3 mt-3">
                    <div class="color-circle">
                      <div class="color1"></div>
                    </div>
                    <div class="color-circle">
                      <div class="color2"></div>
                    </div>
                    <div class="color-circle">
                      <div class="color3"></div>
                    </div>
                  </div>
                </div>

                <div class="modal-button-group d-flex align-items-center gap-2">
                  <button
                    class="btn cart-button"
                    @click="addtoCart()"
                    :class="{ shaking: isShaking }"
                  >
                    <span class="add-to-cart">ADD TO Cart</span>
                    <span class="added">ADDED : )</span>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-solid fa-box"></i>
                  </button>
                  <button class="btn heart-btn">
                    <span class="material-symbols-outlined"> favorite </span>
                  </button>
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
import { useStore } from "vuex";
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
    const filterShow = ref(true);
    const compatibilityShow = ref(true);
    const store = useStore();
    const modalItem = ref(null);
    const isShaking = ref(false);
    const fullspec = ref(false);

    const listView = ref("app");

    const changeView = (value) => {
      listView.value = value;
    };

    const rating = ref("3");
    const productList = store.getters.productList;

    const itemsPerPage = 12;
    const currentPage = ref(1);

    const totalPages = computed(() =>
      Math.ceil(productList.length / itemsPerPage)
    );

    const paginatedProducts = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return productList.slice(start, end);
    });

    const getspecList = (spec, id) => {
      if (id == 40) {
        return spec.split(", ").slice(0, 3);
      } else {
        return spec.split(", ").slice(0, 4);
      }
    };

    const getSinglespecList = (spec) => {
      return spec.split(", ");
    };

    const triggerAnimation = () => {
      isShaking.value = true;
      setTimeout(() => {
        isShaking.value = false;
      }, 1000);
    };

    const showModal = (product) => {
      const modalElement = document.getElementById("exampleModal");
      const modalInstance = new bootstrap.Modal(modalElement);
      modalInstance.show();
      modalItem.value = product;
      triggerAnimation();
    };

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

    const scrollWindow = () => {
      window.scroll(0, 0);
    };

    const addtoCart = () => {
      const cartBtn = document.querySelector(".cart-button");
      cartBtn.classList.add("clicked");

      setTimeout(() => {
        cartBtn.classList.remove("clicked");
      }, 3000);
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
      getspecList,
      paginatedProducts,
      itemsPerPage,
      currentPage,
      totalPages,
      scrollWindow,
      showModal,
      modalItem,
      getSinglespecList,
      addtoCart,
      isShaking,
      fullspec,
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

.left-filter {
  position: sticky;
  top: 0;
}

.cat {
  margin-top: 20px;
}

.col-xl-9 {
  padding-left: 50px;
}

.col-md-3,
.col-xl-3 {
  padding: 0px 5px;
}

.block-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.more-spec {
  cursor: pointer;
}

.more-spec:hover {
  color: var(--hover-color) !important;
}

/* .left-col {
  position: sticky;
  top: 100%;
}

.right-col {
  position: relative;
} */

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
  font-size: 17px !important;
}

.categories-filter {
  margin: 20px 0px 40px;
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

.product-content {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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

.product-card .fa-heart,
.product-card .fa-expand {
  padding: 10px;
  font-size: 14px;
  top: 0;
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

.fa-expand {
  width: max-content;
  height: max-content;
  margin-top: 50px;
  top: 10px;
  right: 2px;
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

.fa-heart:hover,
.fa-expand:hover {
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
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #111111;
}

.product-content {
  text-overflow: ellipsis;
}

.product-card .product-content p {
  font-size: 14px !important;
  opacity: 0.8;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #838282;
}

.product-card .price h4 {
  font-size: 17px;
  color: #f1803e;
}

/* .product-card h4:hover {
  color: #0a65af;
} */

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
  padding: 6px 10px;
}

.cart-btn .material-symbols-outlined {
  font-size: 20px !important;
}

.product-img {
  position: relative;
  width: 100%;
  margin-bottom: 20px;
}

/* .gradient {
  width: 100%;
  height: 180px;
  position: absolute;
  background: #111111;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0;
  transition: 1s ease-in;
} */

.product-img img {
  width: 100%;
  height: 100%;
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

.product-card:hover .gradient {
  opacity: 0.4;
}

.product-card:hover .product-img #img1 {
  opacity: 0;
  cursor: pointer;
}

.button-group:hover .cart-btn {
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

.product-img-list #img2 {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: 1.5s ease-in-out;
}

.product-card-list:hover .product-img-list #img2 {
  opacity: 1;
  cursor: pointer;
}

.product-card-list:hover .product-img-list #img1 {
  opacity: 0;
  cursor: pointer;
}

/* .product-img-list #img2 {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: 1.5s ease-in-out;
}

.product-img-list #img2:hover {
  opacity: 0;
  cursor: pointer;
}

.product-card-list:hover .product-img-list #img1 {
  opacity: 0;
  cursor: pointer;
} */

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

.modal-dialog {
  max-width: 1200px !important;
  width: 100%;
}

.modal-header {
  border: none;
}

.modal-content {
  padding: 30px;
}

.product-detail-img {
  width: 80%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.product-detail-img img {
  border-radius: 8px;
}

.product-detail-mini-img {
  width: 100px;
  height: 100px;

  border-radius: 8px;
}

.product-detail-mini-img img {
  border-radius: 8px;
  cursor: pointer;
}

.mini-img {
  width: 80px;
  height: 80px;
  border-radius: 10px;
  cursor: pointer;
}

.mini-img img {
  border-radius: 10px;
}

.color span {
  color: #9c9c9c;
  font-size: 14px;
}

.color-circle {
  width: 40px;
  height: 40px;
  border: 1px solid #111111;
  border-radius: 50%;
  padding: 2px;
}

.color1,
.color2,
.color3 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.color1 {
  background: #111111;
}

.color2 {
  background: #0f8ec5;
}

.color3 {
  background: #3cb872;
}

.detail-header h4 {
  font-family: "Gilory-bold", sans-serif;
  font-weight: bold;
  color: #111111;
  font-size: 20px;
}

.specList h5 {
  font-family: "Gilory-bold", sans-serif;
  font-weight: bold;
  text-decoration: underline;
  color: #9c9c9c;
  font-size: 16px;
}

.price h4 {
  font-family: "Gilory-bold", sans-serif;
  font-weight: bold;
  color: #f1803e;
  font-size: 20px;
}

.specList p {
  font-weight: 500;
  font-size: 14px !important;
  color: #9c9c9c;
}

.color p {
  font-size: 14px !important;
  font-weight: bold;
}

.stock span {
  color: #3cb872;
}

.modal-button-group {
  margin-top: 30px;
}

.heart-btn {
  width: max-content;
  height: 100%;
  display: flex;
  justify-content: center;
  border: 1px solid #111111;
  padding: 12px 15px;
  transition: 0.3s ease;
}

.heart-btn:hover {
  background: var(--background-color);
  border: 1px solid var(--background-color);
}

.heart-btn:hover .material-symbols-outlined {
  color: #fff;
}

.cart-button {
  position: relative;
  width: 100%;
  height: 50px;
  border-radius: 8px;
  color: #fff;
  background: var(--background-color);
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s ease;
}

.cart-button:active {
  transform: scale(0.9);
}

.cart-button .fa-cart-shopping {
  position: absolute;
  top: 50%;
  left: -10%;
  transform: translate(-50%, -50%);
  z-index: 2;
  font-size: 24px;
  color: #ffffff;
}

.cart-button .fa-box {
  position: absolute;
  top: -22%;
  left: 52%;
  transform: translate(-50%, -50%);
  z-index: 3;
  font-size: 16px;
  color: #fff;
}

.cart-button .add-to-cart,
.cart-button .added {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  font-family: "Gilory-bold", sans-serif;
  font-weight: bold;
  font-size: 18px;
}

.cart-button .added {
  opacity: 0;
}

.cart-button:hover {
  background: #007bff;
}

.cart-button.clicked {
  background: #007bff;
}

.cart-button.clicked .fa-cart-shopping {
  animation: cart 2s ease-in-out forwards;
}
.cart-button.clicked .fa-box {
  animation: box 2s ease-in-out forwards;
}
.cart-button.clicked .add-to-cart {
  animation: text1 2s ease-in-out forwards;
}
.cart-button.clicked .added {
  animation: text2 2s ease-in-out forwards;
}

@keyframes cart {
  0% {
    left: -10%;
  }

  40%,
  60% {
    left: 50%;
  }

  100% {
    left: 110%;
  }
}

@keyframes box {
  0%,
  40% {
    top: -22%;
  }

  60% {
    top: 40%;
    left: 51%;
  }

  100% {
    top: 40%;
    left: 112%;
  }
}

@keyframes text1 {
  0% {
    opacity: 1;
  }
  20%,
  100% {
    opacity: 0;
  }
}

@keyframes text2 {
  0%,
  80% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(5px);
  }
  50% {
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
}

.shaking {
  animation: shake 1s;
}

.btn-close {
  position: absolute;
  display: flex;
  align-items: center;
  right: -1%;
  top: -2%;
  background: #007bff;
  color: #fff;
  opacity: 1;
}

.btn-close .material-symbols-outlined {
  font-size: 16px;
}
</style>

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
          <ProductFilter
            :max-price-limt="maxPriceLimit"
            @filter="setCategoryFilter"
            @filterSeries="setSeriesFilter"
            @update-price="setPriceFilter"
            @clearFilter="clearFilter"
          ></ProductFilter>
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
                class="col-6 col-md-4 col-xl-4 mb-5"
                v-for="item in productsPerPage"
                :key="item.id"
              >
                <ProductCard
                  :data="item"
                  @openModal="handleProduct"
                ></ProductCard>
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
                v-for="item in productsPerPage"
                :key="item.id"
              >
                <ProductCardList :data="item"></ProductCardList>
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
    </div>
    <ModalCard ref="trigger"></ModalCard>
  </div>
</template>

<script>
import ProductFilter from "./productcard/ProductFilter";
import ModalCard from "./productcard/ModalCard";
import ProductCardList from "./productcard/ProductCardList";
import ProductCard from "./productcard/ProductCard";
import { ref, onMounted, computed, watch } from "vue";
import { useStore } from "vuex";
import getProducts from "../composable/getProducts";
import product from "../store/modules/product";
export default {
  components: {
    ProductFilter,
    ModalCard,
    ProductCardList,
    ProductCard,
  },
  setup() {
    const trigger = ref(null);
    const handleProduct = (product) => {
      if (trigger.value) {
        trigger.value.showModal(product);
      }
    };

    const activeCategory = ref("All");
    const selectedSeries = ref([]);

    const store = useStore();
    const listView = ref("app");

    const maxPriceLimit = ref(5000000);

    const minPrice = ref(0);
    const maxPrice = ref(maxPriceLimit.value);

    const setPriceFilter = (range) => {
      minPrice.value = range.mini;
      maxPrice.value = range.max;
      currentPage.value = 1;
    };

    const changeView = (value) => {
      listView.value = value;
    };

    const setCategoryFilter = (category) => {
      activeCategory.value = category;
      currentPage.value = 1;
    };

    const setSeriesFilter = (series) => {
      selectedSeries.value = series;
      currentPage.value = 1;
    };

    const filterProducts = computed(() => {
      return products.value.filter((product) => {
        const matchCategory =
          activeCategory.value == "All" ||
          product.category == activeCategory.value;
        const matchPrice =
          product.price >= minPrice.value && product.price <= maxPrice.value;
        const matchSeries =
          selectedSeries.value.length === 0 ||
          selectedSeries.value.includes(product.series);

        return matchCategory && matchPrice && matchSeries;
      });
    });
    const clearFilter = (category) => {
      activeCategory.value = category;
      selectedSeries.value = [];
      minPrice.value = 0;
      maxPrice.value = 5000000;
    };

    const itemsPerPage = 12;
    const currentPage = ref(1);

    const totalPages = computed(() =>
      Math.ceil(filterProducts.value.length / itemsPerPage)
    );

    const productsPerPage = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return filterProducts.value.slice(start, end);
    });

    const scrollWindow = () => {
      window.scroll(0, 0);
    };

    let { products, error, loadProduct } = getProducts();

    onMounted(async () => {
      window.scroll(0, 0);
      await loadProduct();
    });

    return {
      listView,
      changeView,
      trigger,
      itemsPerPage,
      currentPage,
      totalPages,
      scrollWindow,
      handleProduct,
      products,
      productsPerPage,
      setCategoryFilter,
      filterProducts,
      clearFilter,
      maxPriceLimit,
      setPriceFilter,
      setSeriesFilter,
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

<template>
  <div class="categories-wrapper">
    <div class="block-banner text-center">
      <h1>CATEGORIES</h1>
    </div>
    <div class="content-wrapper product-section">
      <div class="row">
        <div class="col-12 col-md-3 col-xl-3">
          <ProductFilter
            :categories="categories"
            :brand="brandList"
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
                v-for="item in productList"
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
                v-for="item in productList"
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
export default {
  components: {
    ProductFilter,
    ModalCard,
    ProductCardList,
    ProductCard,
  },
  setup() {
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
    const modalItem = ref(null);

    const isShaking = ref(false);

    const trigger = ref(null);
    const handleProduct = (product) => {
      if (trigger.value) {
        trigger.value.showModal(product);
      }
    };

    const listView = ref("app");

    const changeView = (value) => {
      listView.value = value;
    };

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

    onMounted(() => {
      window.scroll(0, 0);
    });

    return {
      categories,

      brandList,
      listView,
      changeView,
      productList,

      modalItem,
      trigger,
      handleProduct,
    };
  },
};
</script>

<style scoped>
.block-banner {
  width: 100%;
  height: 200px;
  background: #f5f6fc;
  align-content: center;
  font-family: "Gilory-Bold", sans-serif;
  font-weight: bold;
  margin-bottom: 30px;
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

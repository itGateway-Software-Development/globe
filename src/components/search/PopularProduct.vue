<template>
  <div class="popular-product-wrapper">
    <div
      class="d-flex flex-wrap gap-4 align-items-center justify-content-center"
    >
      <div
        class="product-card"
        v-for="(item, index) in popularProduct"
        :key="item.id"
        @mouseenter="onMouseEnter(index)"
        @mouseleave="onMouseLeave(index)"
      >
        <div class="product-img">
          <img :src="item.img" alt="png" class="img-fluid" />
          <span
            class="material-symbols-outlined"
            v-if="hoverIcon === index"
            :class="{ 'fade-in': hoverIcon === index }"
          >
            visibility
          </span>
        </div>
        <div class="product-content">
          <div class="product-name">
            <h6>{{ item.name }}</h6>
          </div>
          <div class="product-price">
            <p>{{ item.price }}$</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const popularProduct = ref([
      {
        id: 1,
        name: "Asus Keyboard",
        price: "300",
        img: require("@/assets/images/gadget/8.jpg"),
      },
      {
        id: 2,
        name: "Logitech Keyboard",
        price: "30",
        img: require("@/assets/images/gadget/4.jpg"),
      },
      {
        id: 3,
        name: "Power Bank",
        price: "20",
        img: require("@/assets/images/gadget/9.jpg"),
      },
      {
        id: 4,
        name: "Asus Keyboard",
        price: "300",
        img: require("@/assets/images/gadget/8.jpg"),
      },
      {
        id: 5,
        name: "Asus Keyboard",
        price: "300",
        img: require("@/assets/images/gadget/8.jpg"),
      },
      {
        id: 6,
        name: "Asus Keyboard",
        price: "300",
        img: require("@/assets/images/gadget/8.jpg"),
      },
    ]);

    const hoverIcon = ref(null);

    const onMouseEnter = (index) => {
      hoverIcon.value = index;
    };

    const onMouseLeave = () => {
      hoverIcon.value = null;
    };

    return {
      popularProduct,
      hoverIcon,
      onMouseEnter,
      onMouseLeave,
    };
  },
};
</script>

<style scoped>
.product-card {
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 6px;
  cursor: pointer;
}

.product-card .product-content {
  padding: 10px 15px;
  transition: 0.3s ease-in-out;
  background: #ffffff;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

.product-name h6 {
  font-family: "Gilory-Bold", sans-serif;
  font-weight: bold;
}

.product-card .product-content:hover {
  color: var(--hover-color);
}

.product-card img {
  width: 150px;
  height: 150px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
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

.product-img {
  position: relative;
  width: 100%;
}

.material-symbols-outlined {
  position: absolute;
  padding: 2px;
  right: 10px;
  top: 10px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  opacity: 0;
}

.material-symbols-outlined.fade-in {
  opacity: 1;
}
</style>

<template>
  <div
    class="product-card"
    @mouseenter="onMouseEnter(1)"
    @mouseleave="onMouseLeave(1)"
  >
    <div class="product-img">
      <router-link :to="`/product/productdetail/${product.slug}`">
        <div class="gradient"></div>
        <img
          v-for="(img, index) in product.preview_images"
          :key="index"
          :src="img.image_url"
          alt=""
          :id="`img${++index}`"
        />
        <img :src="product.img" v-if="product.img" />
      </router-link>
      <i class="fa-solid fa-heart"></i>
      <i class="fa-solid fa-expand" @click="$emit('openModal', product)"></i>
    </div>
    <div class="product-card-content">
      <router-link
        :to="`/product/productdetail/${product.slug}`"
        v-if="product"
      >
        <div class="product-content mb-2">
          <h4>{{ product.name }}</h4>
          <p>{{ product.cpu }}</p>

          <p class="spec" v-html="product.sepcification"></p>
        </div>
        <div class="rating mb-2">
          <v-rating
            readonly
            v-model="rating"
            active-color="orange-lighten-1"
            color="orange-lighten-1"
            size="mini"
          ></v-rating>
        </div>
      </router-link>
      <div
        class="price-button d-flex align-items-center justify-content-between"
      >
        <div class="price">
          <h4>{{ product.price }} MMK</h4>
        </div>
        <div class="button-group">
          <button class="btn cart-btn mt-1">
            <span class="material-symbols-outlined"> shopping_cart </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalCard from "./ModalCard";
import { ref, onMounted, computed, defineEmits } from "vue";
export default {
  components: { ModalCard },
  props: ["data"],
  setup(props) {
    const product = computed(() => props.data);
    const rating = ref("3");
    const hoveredIndex = ref(null);
    const hoverIcon = ref(null);
    const childRef = ref(null);
    const trigger = ref(null);
    const modalItem = ref(null);

    // Handle mouse enter and leave to change image
    const onMouseEnter = (index) => {
      hoveredIndex.value = index;
      hoverIcon.value = index;
    };

    const onMouseLeave = () => {
      hoveredIndex.value = null;
      hoverIcon.value = null;
    };

    return {
      product,
      hoveredIndex,
      hoverIcon,
      onMouseEnter,
      onMouseLeave,
      rating,
      childRef,
      trigger,
      modalItem,
    };
  },
};
</script>

<style scoped>
.product-card {
  width: 100%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 10px;
  transition: 0.3s linear;

  text-overflow: ellipsis;
}

.product-card-content {
  padding: 10px;
}

.product-card .fa-heart,
.product-card .fa-expand {
  padding: 10px;
  font-size: 14px;
  top: 0;
}

.product-card .fa-heart,
.product-card .fa-expand {
  display: none;
}

.product-card:hover .fa-heart {
  display: block;
}

.product-card:hover .fa-expand {
  display: block;
}

.fa-heart {
  width: max-content;
  height: max-content;
  top: 10px;
  right: 5px;
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
  right: 5px;
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

.spec {
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
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

.product-card .product-content p {
  font-size: 14px !important;
  opacity: 0.8;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #838282;
}

.product-card .price h4 {
  font-size: 18px;
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
  height: 100%;
  padding: 10px;
}

.gradient {
  width: 100%;
  height: 100%;
  position: absolute;
  background: #111111;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0;
  transition: 1s ease-in;
  border-radius: 6px 6px 0px 0px;
}

.product-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 1.5s ease-in-out;
  margin-bottom: 20px;
  border-radius: 6px 6px 0px 0px;
  /* background: linear-gradient(
    156.8deg,
    rgb(30, 144, 231) 27.1%,
    rgb(67, 101, 225) 77.8%
  ); */
}

.product-img #img2 {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: 1s ease-in-out;
}

.product-card:hover .product-img {
  margin-bottom: 10px;
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
</style>

<template>
  <div
    class="product-card-list w-100 mb-5"
    @mouseenter="onMouseEnter(index)"
    @mouseleave="onMouseLeave(index)"
  >
    <div class="d-flex align-items-center gap-5">
      <div class="product-img-list">
        <img :src="product.img" alt="" id="img1" />
        <img :src="product.hoverimg" alt="" id="img2" />
        <i class="fa-solid fa-heart" v-if="hoverIcon === index"></i>
        <i
          class="fa-solid fa-expand"
          v-if="hoverIcon === index"
          @click="showModal(product)"
        ></i>
      </div>
      <div class="product-content">
        <router-link to="/product/productdetail">
          <div class="product-type mb-2">
            <h4 class="hilight-font">{{ product.type }}</h4>
          </div>
          <div class="product-name mb-2">
            <h4>{{ product.name }}</h4>
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
          <div class="price mb-2">{{ product.price }} MMK</div>
          <div class="stock mb-2">
            <div class="d-flex align-items-center gap-2">
              <span class="material-symbols-outlined"> check_circle </span>
              <p>In Stock</p>
            </div>
          </div>
          <div class="content mb-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
            modi omnis qui aspernatur, voluptas ut
          </div></router-link
        >

        <div class="button-group">
          <button
            class="btn add-to-cart list-btn d-flex align-items-center gap-3 primary-btn justify-content-center"
          >
            <span class="material-symbols-outlined"> shopping_cart </span>
            <p>Quick Add</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  props: ["data"],
  setup(props) {
    const product = computed(() => props.data);

    const rating = ref("3");

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

    return {
      product,
      onMouseEnter,
      onMouseLeave,
      hoveredIndex,
      hoverIcon,
      rating,
    };
  },
};
</script>

<style scoped>
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

.fa-heart {
  width: max-content;
  height: max-content;
  top: 10px;
  right: 0;
  padding: 10px;
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
  padding: 10px;
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

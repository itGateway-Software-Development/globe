<template>
  <div class="microsoft">
    <div class="row">
      <div class="col-12 col-sm-12 col-md-12 col-xl-12 mb-5" data-aos="fade-up">
        <div class="blcok-banner">
          <div class="responsive-image">
            <img src="../../assets/images/speaker/banner.png" alt="" />
          </div>
          <div class="image-content">
            <h4>Marshall Speaker</h4>
            <a href="/" class="mt-5 d-flex align-items-center gap-1"
              >Shop Now
              <span class="material-symbols-outlined">
                arrow_right_alt
              </span></a
            >
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-12 col-md-12 col-xl-12" data-aos="fade-down">
        <div class="row">
          <div
            class="col-6 col-md-3 col-lg-3 col-xl-3 mb-5"
            v-for="item in productList"
            :key="item.id"
          >
            <ProductCard :data="item"></ProductCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "../productcard/ProductCard";
import { ref } from "vue";
export default {
  components: { ProductCard },
  setup() {
    const rating = ref("3");
    const productList = ref([
      {
        id: 1,
        type: "speaker",
        name: "Marshall Stockwell II",
        price: "250",
        stock: "20",
        warrenty: "3",
        img: require("@/assets/images/speaker/1.jpg"),
        hoverimg: require("@/assets/images/speaker/2.jpg"),
      },
      {
        id: 2,
        type: "speaker",
        name: "Marshall Acton III ",
        price: "300",
        stock: "20",
        warrenty: "3",
        img: require("@/assets/images/speaker/3.jpg"),
        hoverimg: require("@/assets/images/speaker/4.jpg"),
      },
      {
        id: 3,
        type: "speaker",
        name: "Marshall Willen",
        price: "54",
        stock: "20",
        warrenty: "3",
        img: require("@/assets/images/speaker/5.jpeg"),
        hoverimg: require("@/assets/images/speaker/6.jpg"),
      },
      {
        id: 4,
        type: "speaker",
        name: "Marshall Emberton II ",
        price: "200",
        stock: "20",
        warrenty: "3",
        img: require("@/assets/images/speaker/8.png"),
        hoverimg: require("@/assets/images/speaker/7.jpg"),
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

    return {
      rating,
      productList,
      hoveredIndex,
      onMouseEnter,
      onMouseLeave,
      currentImage,
      hoverIcon,
    };
  },
};
</script>

<style scoped>
.block-banner {
  position: relative;
  width: 100%;
}

.manual-col {
  overflow: hidden;
}

.responsive-image {
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 10px;
}

.responsive-image img {
  width: 100%;
  height: 375px;
  display: block;
  border-radius: 10px;
}

.fa-heart {
  width: max-content;
  height: max-content;
  right: 20px;
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

.image-content {
  position: absolute;
  top: 40px;
  left: 40px;
}

.image-content h4 {
  font-family: "Gilory-Bold", sans-serif;
}

.image-content a {
  transition: 0.5s ease-out;
  font-size: 16px;
  font-weight: bold;
}

.image-content a .material-symbols-outlined {
  font-size: 20px;
  transition: 0.5s ease-out;
}

.image-content a:hover {
  color: #0a65af !important;
}

.image-content a:hover .material-symbols-outlined {
  transform: translateX(5px);
}
</style>

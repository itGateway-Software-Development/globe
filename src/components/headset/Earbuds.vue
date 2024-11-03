<template>
  <div class="microsoft">
    <div class="row">
      <div class="col-12 col-sm-12 col-md-12 col-xl-12 mb-5" data-aos="fade-up">
        <div class="blcok-banner">
          <div class="responsive-image">
            <img src="../../assets/images/laptop/surface.jpg" alt="" />
          </div>
          <div class="image-content">
            <h4>Microsoft Surface</h4>
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
            v-for="(item, index) in productList"
            :key="item.id"
            @mouseenter="onMouseEnter(index)"
            @mouseleave="onMouseLeave(index)"
          >
            <div class="product-card">
              <div class="upper-card">
                <div class="product-img">
                  <img
                    :src="currentImage(item, index)"
                    :class="{ 'fade-in': hoveredIndex === index }"
                    alt=""
                  />
                </div>
                <div class="product-content">
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
                </div>
              </div>
              <div class="lower-card">
                <div class="product-stock mb-3">
                  <p
                    class="d-flex align-items-center gap-2 justify-content-center"
                  >
                    <span class="material-symbols-outlined"> check_circle </span
                    ><span class="small-font"
                      >{{ item.stock }} Products in stock</span
                    >
                  </p>
                </div>
                <div class="warranty mb-5">
                  <p
                    class="d-flex align-items-center gap-2 justify-content-center"
                  >
                    <span class="material-symbols-outlined"> check </span
                    ><span class="small-font"
                      >{{ item.warrenty }} Years Warranty</span
                    >
                  </p>
                </div>
                <div class="button-group">
                  <button
                    class="btn add-to-cart d-flex align-items-center gap-3 primary-btn justify-content-center"
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
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const rating = ref("3");
    const productList = ref([
      {
        id: 1,
        type: "Laptop",
        name: "Microsoft Surface Pro 9",
        price: "400",
        stock: "20",
        warrenty: "3",
        img: require("@/assets/images/laptop/surface-pro.png"),
        hoverimg: require("@/assets/images/laptop/1.jpg"),
      },
      {
        id: 2,
        type: "Laptop",
        name: "Microsoft Surface Laptop 5",
        price: "400",
        stock: "20",
        warrenty: "3",
        img: require("@/assets/images/laptop/3.jpg"),
        hoverimg: require("@/assets/images/laptop/2.jpg"),
      },
      {
        id: 3,
        type: "Laptop",
        name: "Microsoft Surface Go 3",
        price: "400",
        stock: "20",
        warrenty: "3",
        img: require("@/assets/images/laptop/5.jpg"),
        hoverimg: require("@/assets/images/laptop/4.jpg"),
      },
      {
        id: 4,
        type: "Laptop",
        name: "Microsoft Surface Pro 9",
        price: "400",
        stock: "20",
        warrenty: "3",
        img: require("@/assets/images/laptop/6.jpg"),
        hoverimg: require("@/assets/images/laptop/7.jpg"),
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

    return {
      rating,
      productList,
      hoveredIndex,
      onMouseEnter,
      onMouseLeave,
      currentImage,
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

.product-card {
  width: 100%;
  height: 375px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 10px;
  transition: 0.3s linear;
  transform: translateZ(0px);
}

.upper-card {
  padding: 15px 20px;
}

.product-img {
  width: 100%;
  justify-content: center;
  display: flex;
  margin-bottom: 40px;
}

.product-img img {
  width: 170px;
  height: 100%;
  transform: translateZ(0px);
  transition: all 0.5s linear;
}

.product-img img.fade-in {
  transform: translateZ(100%);
  width: 200px;
}

.product-card h4 {
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
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

.product-card .price {
  font-weight: bold;
  font-size: 20px !important;
  letter-spacing: 0.1rem;
}

.lower-card {
  visibility: hidden;
  transition: all 0.5s linear;
  transform: translateY(-200px);
  opacity: 0;
  padding: 0px 10px;
}

.lower-card .product-stock {
  color: #3cb872;
}

.lower-card .small-font {
  font-size: 12px;
}

.add-to-cart {
  width: 170px !important;
}

.product-card:hover .lower-card {
  visibility: visible;
  transform: translateY(0);
  opacity: 1;
}

.product-card:hover .upper-card {
  border-bottom: 1px solid #111111;
  margin-bottom: 20px;
}

.product-card:hover {
  border: 0px;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  height: 100%;
  padding: 20px 0px;
}

@media (max-width: 1310px) {
  .upper-card {
    padding: 15px 10px;
  }

  .product-img img {
    width: 120px;
  }

  .responsive-image img {
    height: 200px;
  }

  .product-img img.fade-in {
    transform: translateZ(100%);
    width: 150px;
  }

  .product-card {
    height: 330px;
  }
}

@media (max-width: 800px) {
  .product-img img {
    width: 160px;
    height: 100%;
  }

  .product-card {
    height: 375px;
  }
}

@media (max-width: 600px) {
  .product-card {
    height: 380px;
  }
}

@media (max-width: 500px) {
  .product-card .product-name h4 {
    font-size: 14px;
  }

  .product-card {
    height: 380px;
  }

  .upper-card {
    padding: 5px 5px;
  }
}

@media (max-width: 420px) {
  .product-card .rating {
    display: none;
  }

  .product-card {
    height: 330px;
  }
}
</style>

<template>
  <div class="product-detail">
    <div class="row content content-wrapper">
      <div class="col-12 col-md-6 col-xl-6 mb-5">
        <div class="main-img mb-5 d-flex justify-content-center">
          <img
            :src="mainImage"
            class="img-fluid"
            alt=""
            @mousemove="moveMagnifier"
            @mouseover="showMagnifier"
            @mouseout="hideMagnifier"
          />
          <div
            class="magnifier"
            ref="magnifier"
            v-show="isMagnifierVisible"
          ></div>
        </div>
        <div class="mini-img-list d-flex align-items-center gap-3">
          <div
            class="mini-img"
            v-for="img in singleProduct.images"
            :key="img.id"
          >
            <img
              :src="img.image_url"
              class="img-fluid"
              alt=""
              @click="changeMainImage(img.image_url)"
            />
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-xl-6">
        <div class="product-name mb-3">
          <h3>{{ singleProduct.name }}</h3>
        </div>
        <div class="rating d-flex align-items-center gap-2 mb-5">
          <div class="d-flex align-items-center gap-2">
            <v-rating
              readonly
              v-model="rating"
              active-color="orange-lighten-1"
              color="orange-lighten-1"
              size="mini"
            ></v-rating>
            <h5>({{ rating }})</h5>
          </div>
          <router-link to="/" class="review-link"
            ><h5>View All Reviews</h5></router-link
          >
        </div>
        <div class="price">
          <h3>{{ singleProduct.price }} MMK</h3>
        </div>
        <div class="product-content-detail mb-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
            natus dignissimos tenetur corrupti aperiam voluptatem incidunt
            ratione modi laboriosam distinctio?
          </p>
        </div>
        <div class="detail-content mb-5">
          <div class="d-flex align-items-center gap">
            <h6>Tags:</h6>
            <p>{{ singleProduct.category }}</p>
          </div>
          <div class="d-flex align-items-center gap">
            <h6>Category:</h6>
            <p>{{ singleProduct.category }}</p>
          </div>
        </div>

        <div class="color mb-5">
          <div class="color-content mb-4">
            <h6>Color: Black</h6>
          </div>
          <div class="d-flex align-items-center gap-2">
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

        <div class="button-group-1 mb-5">
          <div class="d-flex align-items-center gap-3">
            <button
              class="btn add-to-cart-btn"
              :class="{ shaking: isShaking }"
              @click="addToCart(singleProduct)"
            >
              <span class="cart"> Add to cart</span>
              <span class="added">Added : )</span>
              <i class="fa-solid fa-cart-shopping"></i>
              <i class="fa-solid fa-box"></i>
            </button>
            <button class="btn wish-btn primary-btn">
              <span class="material-symbols-outlined"> favorite </span>
            </button>
          </div>
        </div>

        <div class="delivery-content">
          <div class="d-flex align-items-center gap-2">
            <span class="material-symbols-outlined"> schedule </span>
            <p>Orders ship within 5 to 10 business days.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="note-content content-wrapper">
      <div class="description mb-3" :class="{ active: description }">
        <div
          class="d-flex aligns-items-center justify-content-between description-header"
          :class="{ active: description }"
          @click="description = !description"
        >
          <h4>Description</h4>
          <span class="material-symbols-outlined" v-if="description">
            keyboard_arrow_up </span
          ><span class="material-symbols-outlined" v-else>
            keyboard_arrow_down
          </span>
        </div>
        <div class="description-content" v-if="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            inventore voluptates eveniet adipisci iusto dignissimos eius
            possimus quas consectetur placeat?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            beatae alias magnam qui inventore eveniet praesentium reprehenderit
            accusantium ad, autem nobis, veniam error dolorem adipisci non esse
            quod laborum voluptatem aliquam? Sit dolore, architecto molestiae
            culpa harum iusto minima, blanditiis distinctio ducimus veniam
            tempora reiciendis voluptatem iste aspernatur nesciunt repudiandae
            ex omnis? Dolorum sunt accusamus fugit iste cum nesciunt totam illo
            laudantium, voluptate delectus dolore rerum porro, suscipit amet.
            Adipisci?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            inventore voluptates eveniet adipisci iusto dignissimos eius
            possimus quas consectetur placeat?
          </p>
        </div>
      </div>

      <div class="description mb-3" :class="{ active: specification }">
        <div
          class="d-flex aligns-items-center justify-content-between description-header"
          :class="{ active: specification }"
          @click="specification = !specification"
        >
          <h4>Specification</h4>
          <span class="material-symbols-outlined" v-if="specification">
            keyboard_arrow_up </span
          ><span class="material-symbols-outlined" v-else>
            keyboard_arrow_down
          </span>
        </div>
        <div class="specification-content" v-if="specification">
          <div class="spec-header">
            <h5>Specification</h5>
          </div>
          <div class="spec-list mt-5">
            <p class="spec" v-html="singleProduct.specification"></p>
          </div>
        </div>
      </div>

      <div class="description mb-3" :class="{ active: delivery }">
        <div
          class="d-flex aligns-items-center justify-content-between description-header"
          :class="{ active: delivery }"
          @click="delivery = !delivery"
        >
          <h4>Delivery Policy</h4>
          <span class="material-symbols-outlined" v-if="delivery">
            keyboard_arrow_up </span
          ><span class="material-symbols-outlined" v-else>
            keyboard_arrow_down
          </span>
        </div>
        <div class="description-content" v-if="delivery">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            inventore voluptates eveniet adipisci iusto dignissimos eius
            possimus quas consectetur placeat?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            beatae alias magnam qui inventore eveniet praesentium reprehenderit
            accusantium ad, autem nobis, veniam error dolorem adipisci non esse
            quod laborum voluptatem aliquam? Sit dolore, architecto molestiae
            culpa harum iusto minima, blanditiis distinctio ducimus veniam
            tempora reiciendis voluptatem iste aspernatur nesciunt repudiandae
            ex omnis? Dolorum sunt accusamus fugit iste cum nesciunt totam illo
            laudantium, voluptate delectus dolore rerum porro, suscipit amet.
            Adipisci?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            inventore voluptates eveniet adipisci iusto dignissimos eius
            possimus quas consectetur placeat?
          </p>
        </div>
      </div>

      <div class="description" :class="{ active: shipping }">
        <div
          class="d-flex aligns-items-center justify-content-between description-header"
          :class="{ active: shipping }"
          @click="shipping = !shipping"
        >
          <h4>Shipping & Return</h4>
          <span class="material-symbols-outlined" v-if="shipping">
            keyboard_arrow_up </span
          ><span class="material-symbols-outlined" v-else>
            keyboard_arrow_down
          </span>
        </div>
        <div class="description-content" v-if="shipping">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            inventore voluptates eveniet adipisci iusto dignissimos eius
            possimus quas consectetur placeat?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            beatae alias magnam qui inventore eveniet praesentium reprehenderit
            accusantium ad, autem nobis, veniam error dolorem adipisci non esse
            quod laborum voluptatem aliquam? Sit dolore, architecto molestiae
            culpa harum iusto minima, blanditiis distinctio ducimus veniam
            tempora reiciendis voluptatem iste aspernatur nesciunt repudiandae
            ex omnis? Dolorum sunt accusamus fugit iste cum nesciunt totam illo
            laudantium, voluptate delectus dolore rerum porro, suscipit amet.
            Adipisci?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            inventore voluptates eveniet adipisci iusto dignissimos eius
            possimus quas consectetur placeat?
          </p>
        </div>
      </div>
    </div>

    <div class="line-break">
      <hr class="p-0 m-0" />
    </div>

    <div class="customer-review content-wrapper">
      <div class="d-flex gap-3 review">
        <v-card
          class="d-flex flex-column mx-auto py-8"
          elevation="10"
          height="500"
          width="360"
        >
          <div class="d-flex justify-center mt-auto text-h5">
            Rating overview
          </div>

          <div class="d-flex align-center flex-column my-auto">
            <div class="text-h2 mt-5">
              3.5
              <span class="text-h6 ml-n3">/5</span>
            </div>

            <v-rating
              :model-value="3.5"
              color="yellow-darken-3"
              half-increments
            ></v-rating>
            <div class="px-3">3,360 ratings</div>
          </div>

          <v-list
            bg-color="transparent"
            class="d-flex flex-column-reverse"
            density="compact"
          >
            <v-list-item v-for="(rating, i) in 5" :key="i">
              <v-progress-linear
                :model-value="rating * 15"
                class="mx-n5"
                color="yellow-darken-3"
                height="20"
                rounded
              ></v-progress-linear>

              <template v-slot:prepend>
                <span>{{ rating }}</span>
                <v-icon class="mx-3" icon="mdi-star"></v-icon>
              </template>

              <template v-slot:append>
                <div class="rating-values">
                  <span class="d-flex justify-end"> {{ rating * 224 }} </span>
                </div>
              </template>
            </v-list-item>
          </v-list>
        </v-card>
        <div class="review-list">
          <div class="review-content d-flex gap-3">
            <div class="img-circle">
              <img src="" alt="" />
            </div>
            <div class="rating-content">
              <p class="mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                perspiciatis. Nesciunt architecto doloribus ipsa perspiciatis
                voluptatem officia, quidem atque ducimus!
              </p>
              <div class="rating">
                <div class="d-flex align-items-center gap-2">
                  <v-rating
                    readonly
                    v-model="rating"
                    active-color="orange-lighten-1"
                    color="orange-lighten-1"
                    size="mini"
                  ></v-rating>
                  <h5>({{ rating }})</h5>
                </div>
              </div>
            </div>
          </div>

          <div class="review-content d-flex gap-3">
            <div class="img-circle">
              <img src="" alt="" />
            </div>
            <div class="rating-content">
              <p class="mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                perspiciatis. Nesciunt architecto doloribus ipsa perspiciatis
                voluptatem officia, quidem atque ducimus!
              </p>
              <div class="rating">
                <div class="d-flex align-items-center gap-2">
                  <v-rating
                    readonly
                    v-model="rating"
                    active-color="orange-lighten-1"
                    color="orange-lighten-1"
                    size="mini"
                  ></v-rating>
                  <h5>({{ rating }})</h5>
                </div>
              </div>
            </div>
          </div>

          <div class="review-content d-flex gap-3">
            <div class="img-circle">
              <img src="" alt="" />
            </div>
            <div class="rating-content">
              <p class="mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                perspiciatis. Nesciunt architecto doloribus ipsa perspiciatis
                voluptatem officia, quidem atque ducimus!
              </p>
              <div class="rating">
                <div class="d-flex align-items-center gap-2">
                  <v-rating
                    readonly
                    v-model="rating"
                    active-color="orange-lighten-1"
                    color="orange-lighten-1"
                    size="mini"
                  ></v-rating>
                  <h5>({{ rating }})</h5>
                </div>
              </div>
            </div>
          </div>

          <div class="review-content d-flex gap-3">
            <div class="img-circle">
              <img src="" alt="" />
            </div>
            <div class="rating-content">
              <p class="mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                perspiciatis. Nesciunt architecto doloribus ipsa perspiciatis
                voluptatem officia, quidem atque ducimus!
              </p>
              <div class="rating">
                <div class="d-flex align-items-center gap-2">
                  <v-rating
                    readonly
                    v-model="rating"
                    active-color="orange-lighten-1"
                    color="orange-lighten-1"
                    size="mini"
                  ></v-rating>
                  <h5>({{ rating }})</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="line-break">
      <hr class="p-0 m-0" />
    </div>

    <div class="content-wrapper related-product">
      <div class="related-header text-center">
        <h4>Product Related</h4>
      </div>

      <div class="row">
        <div
          class="col-6 col-md-3 col-xl-3 mb-5"
          v-for="item in randomProduct"
          :key="item.id"
        >
          <ProductCard :data="item"></ProductCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import getSingleProduct from "../composable/getSingleProduct";
import getRandom from "../composable/getRandom";
import ProductCard from "./productcard/ProductCard";
export default {
  components: {
    Swiper,
    SwiperSlide,
    ProductCard,
  },

  setup(props) {
    const rating = ref("3");
    const description = ref(false);
    const delivery = ref(false);
    const shipping = ref(false);
    const specification = ref(false);
    const randomProduct = ref([]);

    const isMagnifierVisible = ref(false);
    const magnifierSize = 200; // Size of magnifier square
    const mainImage = ref([]);

    const zoomLevel = 2; // Zoom level for magnification\
    const isShaking = ref(false);
    const route = useRoute();
    const store = useStore();
    const productSlug = route.params.slug;
    const quantity = ref(1);

    let { singleProduct, error, getProduct } = getSingleProduct();
    let { randomProducts, errors, getRandomProduct } = getRandom();

    const specList = (spec) => {
      return spec.split(", ");
    };

    const changeMainImage = (imgUrl) => {
      mainImage.value = imgUrl;
    };

    let intervalId;

    const showMagnifier = () => {
      isMagnifierVisible.value = true;
    };

    const hideMagnifier = () => {
      isMagnifierVisible.value = false;
    };

    const moveMagnifier = (e) => {
      const img = e.target;
      const magnifier = img.nextElementSibling;
      const imgRect = img.getBoundingClientRect();
      const mouseX = e.clientX - imgRect.left;
      const mouseY = e.clientY - imgRect.top;

      // Prevent magnifier from going out of image bounds
      if (
        mouseX < 0 ||
        mouseY < 0 ||
        mouseX > imgRect.width ||
        mouseY > imgRect.height
      ) {
        hideMagnifier();
        return;
      }

      const backgroundX = (mouseX / imgRect.width) * 100;
      const backgroundY = (mouseY / imgRect.height) * 100;

      magnifier.style.backgroundImage = `url(${mainImage.value})`;
      magnifier.style.backgroundSize = `${imgRect.width * zoomLevel}px ${
        imgRect.height * zoomLevel
      }px`;
      magnifier.style.backgroundPosition = `${backgroundX}% ${backgroundY}%`;

      const magnifierX = mouseX - magnifierSize / 100;
      const magnifierY = mouseY - magnifierSize / 100;

      magnifier.style.left = `${magnifierX}px`;
      magnifier.style.top = `${magnifierY}px`;
    };

    // const addtoCart = () => {
    //   const btn = document.querySelector(".add-to-cart-btn");
    //   console.log(btn);
    //   btn.classList.add("clicked");
    //   setTimeout(() => {
    //     btn.classList.remove("clicked");
    //   }, 3000);
    // };

    const triggerAnimation = () => {
      isShaking.value = true;
      setTimeout(() => {
        isShaking.value = false;
      }, 1000);
    };

    const startRepeatingAnimation = () => {
      intervalId = setInterval(() => {
        triggerAnimation();
      }, 10000);
    };
    const addToCart = (product) => {
      const btn = document.querySelector(".add-to-cart-btn");
      console.log(btn);
      btn.classList.add("clicked");
      setTimeout(() => {
        btn.classList.remove("clicked");
      }, 3000);
      const productToAdd = {
        productId: product.id,
        productName: product.name,
        productSlug: product.slug,
        productBrand: product.brand,
        productCategory: product.category,
        price: product.price,
        images: product.preview_images,
        quantity: quantity.value,
      };

      store.dispatch("addToCart", productToAdd);
    };

    onMounted(async () => {
      window.scroll(0, 0);
      triggerAnimation();
      startRepeatingAnimation();
      await getProduct(productSlug);
      await getRandomProduct();
      randomProduct.value = randomProducts.value;

      if (singleProduct.value.images) {
        mainImage.value = singleProduct.value.images[0]?.image_url;
      }
    });

    onUnmounted(() => {
      clearInterval(intervalId);
    });

    return {
      modules: [Pagination, Navigation],
      rating,
      description,
      delivery,
      shipping,
      isMagnifierVisible,
      showMagnifier,
      hideMagnifier,
      moveMagnifier,
      isShaking,
      triggerAnimation,
      randomProduct,
      singleProduct,
      specification,
      specList,
      changeMainImage,
      mainImage,
      addToCart,
    };
  },
};
</script>

<style scoped>
.content {
  margin-bottom: 50px;
}

.main-img {
  width: 100%;
  height: 500px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 10px;
}

.main-img img {
  object-fit: cover;
  width: 100%;
}

.mini-img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;
}

.magnifier {
  display: none;
  position: absolute;
  /* border: 3px solid #000; */
  width: 200px; /* Same as magnifierSize in script */
  height: 200px; /* Same as magnifierSize in script */
  pointer-events: none;
  border-radius: 50%;
  top: 100%;
}

.magnifier::after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
}

.magnifier {
  display: block;
}

.review-link {
  text-transform: uppercase;
}

.review-link h5 {
  font-family: "Gilory-Bold", sans-serif;
  font-weight: bold;
  transition: 0.3s;
  font-size: 16px;
}

.product-name h3 {
  font-family: "Gilory-Bold", sans-serif;
  font-weight: bold;
}

.review-link:hover h5 {
  color: var(--hover-color);
}

.price h3 {
  font-family: "Gilory-Bold", sans-serif;
  font-weight: bold;
  color: #f1803e;
}

.product-content-detail p {
  font-size: 18px !important;
  opacity: 0.8;
}

.detail-content h6 {
  font-family: "Gilory-Bold", sans-serif;
  font-weight: bold;
  min-width: 130px;
  font-size: 18px;
}

.detail-content p {
  font-size: 15px !important;
  color: #838282;
}

.color-content h6 {
  font-family: "Gilory-Bold", sans-serif;
  font-weight: bold;
  color: #838282;
  font-size: 18px;
}

.add-to-cart-btn {
  position: relative;
  width: 100%;
  height: 45px;
  transition: 0.3s ease;
  overflow: hidden;
  background: var(--background-color);
}

.add-to-cart-btn:hover {
  background: #0a65af;
}

.add-to-cart-btn:active {
  transform: scale(0.9);
}

.add-to-cart-btn .fa-cart-shopping {
  position: absolute;
  top: 50%;
  left: -10%;
  transform: translate(-50%, -50%);
  z-index: 2;
  font-size: 24px;
  color: #fff;
}

.add-to-cart-btn .fa-box {
  position: absolute;
  top: -22%;
  left: 52%;
  transform: translate(-50%, -50%);
  z-index: 3;
  font-size: 16px;
  color: #fff;
}

.add-to-cart-btn .cart,
.add-to-cart-btn .added {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  font-family: "Gilory-bold", sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: #fff;
}

.add-to-cart-btn .added {
  opacity: 0;
}

.add-to-cart-btn.clicked {
  background: #0a65af !important;
}

.add-to-cart-btn.clicked .fa-cart-shopping {
  animation: cart 2s ease-in-out forwards;
}

.add-to-cart-btn.clicked .fa-box {
  animation: box 2s ease-in-out forwards;
}
.add-to-cart-btn.clicked .cart {
  animation: text1 2s ease-in-out forwards;
}
.add-to-cart-btn.clicked .added {
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

.wish-btn {
  width: max-content;
  align-items: center;
  display: flex;
}

.delivery-content p {
  font-size: 14px !important;
}

.delivery-content .material-symbols-outlined {
  font-size: 20px;
}

.delivery-content {
  opacity: 0.8;
}

.description {
  cursor: pointer;
}

.specification-content {
  padding: 20px;
}

.description h4 {
  text-transform: uppercase;
  margin-bottom: 0px;
  font-family: "Gilory-Bold", sans-serif;
  font-weight: bold;
  font-size: 20px;
}

.description-content {
  margin-top: 30px;
  padding: 20px;
}

.description-content p {
  font-size: 16px !important;
  margin-bottom: 20px !important;
}

.description-header {
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 10px;
  padding: 20px;
}

.description.active {
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 10px;
}

.description-header.active {
  box-shadow: none;
  background: #ededed;
  border-radius: 0px;
}

.spec-header h5 {
  font-weight: bold;
  font-family: "Gilory-Bold", sans-serif;
  font-size: 20px;
  text-decoration: underline;
  padding-left: 30px;
}

.spec-list ul li {
  list-style: disc;
}

.spec-list p {
  font-size: 16px !important;
  color: #838282;
}

.line-break {
  padding: 0px !important;
  margin: 50px 0px;
}

.rating-values {
  width: 25px;
}

.review-list {
  width: 100%;
  height: max-content;
}

.review-content {
  margin-bottom: 20px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 10px;
}

.img-circle {
  width: 60px;
  height: 50px;
  border-radius: 50px;
  border: 1px solid #111;
  background: var(--background-color);
}

.rating-content p {
  font-size: 14px !important;
}
.related-header {
  margin-bottom: 40px;
}

.related-header h4 {
  font-family: "Gilory-Bold", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
}

/* --- related product card -- */
.product-card {
  width: 100%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 10px;
  transition: 0.3s linear;
  padding: 10px 20px;
  margin-bottom: 10px;
}

.product-card h4 {
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

.product-card .product-content h4 {
  font-size: 22px;
}

.product-card .product-content p {
  font-size: 16px !important;
  opacity: 0.8;
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
  padding: 5px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background: #23b5de;
}

.product-card .button-group .cart-btn {
  color: #fff;
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

/*--- related product card done -- */

@media (max-width: 600px) {
  .review {
    flex-direction: column;
  }

  .review-content {
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    border-radius: 10px;
  }
}
</style>

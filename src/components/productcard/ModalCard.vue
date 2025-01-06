<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="false"
    data-bs-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <button type="button" class="btn-close" data-bs-dismiss="modal">
          <span class="material-symbols-outlined"> close </span>
        </button>

        <div class="row" v-if="modalItem">
          <div class="col-12 col-md-12 col-xl-6">
            <div class="product-detail-img d-flex justify-content-center">
              <img
                v-if="
                  modalItem.preview_images &&
                  modalItem.preview_images.length > 0
                "
                :src="modalItem.preview_images[0].image_url"
                alt="Preview Image"
              />
              <!-- <img
                v-for="(img, index) in modalItem.preview_images"
                :key="index"
                :src="img.image_url"
                alt=""
                :id="`img${++index}`"
              /> -->
            </div>
            <div
              class="product-detail-mini-img d-flex align-items-center gap-3"
            >
              <img
                v-for="(img, index) in modalItem.images"
                :key="index"
                :src="img.image_url"
                alt=""
                class="img-fluid"
              />
            </div>
          </div>
          <div class="col-12 col-md-12 col-xl-6">
            <div class="detail-header">
              <h4>{{ modalItem.name }}</h4>
            </div>
            <div class="specList mb-3">
              <h5 class="mb-3">Specification</h5>
              <p class="spec" v-html="modalItem.specification"></p>
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
              <button class="btn cart-button" @click="addtoCart()">
                <!-- :class="{ shaking: isShaking }" -->

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
</template>

<script>
import { computed, onMounted, ref, watch, defineProps } from "vue";
import product from "../../store/modules/product";
export default {
  setup(props) {
    const isShaking = ref(false);
    const modalItem = ref({});

    const getSinglespecList = (spec) => {
      // return spec.split(", ");
    };

    const addtoCart = () => {
      const cartBtn = document.querySelector(".cart-button");
      cartBtn.classList.add("clicked");

      setTimeout(() => {
        cartBtn.classList.remove("clicked");
      }, 3000);
    };

    // watch(
    //   () => props.trigger,
    //   (newVal) => {
    //     console.log("in watch");
    //     if (newVal) {
    //       console.log(props.modalItem);
    //       console.log(props.trigger);
    //       showModal();
    //     }
    //   }
    // );

    const triggerAnimation = () => {
      isShaking.value = true;
      setTimeout(() => {
        isShaking.value = false;
      }, 1000);
    };

    const showModal = (product) => {
      const modalElement = document.getElementById("exampleModal");
      const modalInstance = new bootstrap.Modal(modalElement);
      modalItem.value = product;
      modalInstance.show();
      triggerAnimation();
    };

    return {
      addtoCart,
      getSinglespecList,
      showModal,
      modalItem,
    };
  },
};
</script>

<style scoped>
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
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  padding: 10px;
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
  font-size: 18px;
}

.price h4 {
  font-family: "Gilory-bold", sans-serif;
  font-weight: bold;
  color: #f1803e;
  font-size: 20px;
}

.specList p {
  font-weight: 500;
  font-size: 16px !important;
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
